import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Exclude requests for static assets and other paths that don't need locale handling
  const isStaticAsset =
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api/')

  if (isStaticAsset) {
    return NextResponse.next() // Bypass the middleware for static assets
  }

  // List of supported locales
  const supportedLocales = ['en', 'fa'] // Add other locales if needed

  // Check if the pathname matches any of the supported locales
  const hasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If the path does not contain a valid locale and it's not the root, redirect to the 404 page
  if (!hasLocale && pathname !== '/') {
    // Redirect to a locale-specific 404 page
    const url = new URL('/en/not-found', request.url) // Default to 'en' locale
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:locale/:path*', '/:path*'], // Adjust as needed
}
