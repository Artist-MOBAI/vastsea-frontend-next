import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getTranslations } from "next-intl/server";
import "@/src/styles/global.scss";
import { ReactNode } from "react";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t("title"),
    description: t("description"),
  };
}

const theme = createTheme({});

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale=(await params).locale;
  if (!routing.locales.includes(locale as "zh-cn"|"en-us")) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.cn/css2?family=Noto+Sans+SC:wght@400;700&display=swap"/>
      </head>
      <body>
      <NextIntlClientProvider messages={messages}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
