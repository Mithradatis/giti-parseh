import { NextResponse } from 'next/server';

const STATIC_ASSET_PATHS = ['/assets/', '/_next/', '/favicon.ico', '/api/'];
const SUPPORTED_LOCALES = ['en', 'fa'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Bypass middleware for static assets
  if (STATIC_ASSET_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if the pathname contains a valid locale
  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect to locale-specific 404 page if locale is missing
  if (!hasLocale && pathname !== '/') {
    const url = new URL('/en/not-found', request.url);
    return NextResponse.rewrite(url);
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    default-src 'self' ${process.env.NEXT_PUBLIC_API_URL};
    script-src 'self' 'unsafe-eval' ${process.env.NEXT_PUBLIC_API_URL} 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' ${process.env.NEXT_PUBLIC_API_URL} blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  return response;
}

export const config = {
  matcher: [
    '/:locale/:path*', '/:path*',
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};