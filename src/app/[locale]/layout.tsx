import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fetchTranslations } from '@/app/api/translationsFetcher'
import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer'
import './globals.css'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const locale = params?.locale || 'en'
  const translation = await fetchTranslations(locale)

  return (
    <html lang="en">
      <body dir={locale !== 'fa' ? 'ltr' : 'rtl'}>
        <Header locale={locale} trans={translation} />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className={'w-full'}>{children}</div>
        </main>
        <Footer locale={locale} trans={translation} />
      </body>
    </html>
  )
}
