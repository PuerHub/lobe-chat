import { Metadata } from 'next';

import { appEnv } from '@/config/app';
import { OFFICIAL_URL, OG_URL } from '@/const/url';
import { translation } from '@/server/translation';

const BASE_PATH = appEnv.NEXT_PUBLIC_BASE_PATH;

// if there is a base path, then we don't need the manifest
const noManifest = !!BASE_PATH;

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await translation('metadata');

  return {
    alternates: {
      canonical: OFFICIAL_URL,
    },
    appleWebApp: {
      statusBarStyle: 'black-translucent',
      title: 'PuerHub',
    },
    description: t('chat.description', { appName: 'PuerHub' }),
    icons: {
      apple: '/apple-touch-icon.png?v=1',
      icon: '/favicon.ico?v=1',
      shortcut: '/favicon-32x32.ico?v=1',
    },
    manifest: noManifest ? undefined : '/manifest.json',
    metadataBase: new URL(OFFICIAL_URL),
    openGraph: {
      description: t('chat.description', { appName: 'PuerHub' }),
      images: [
        {
          alt: t('chat.title', { appName: 'PuerHub' }),
          height: 640,
          url: OG_URL,
          width: 1200,
        },
      ],
      locale: 'en-US',
      siteName: 'PuerHub',
      title: 'PuerHub',
      type: 'website',
      url: OFFICIAL_URL,
    },
    title: {
      default: t('chat.title', { appName: 'PuerHub' }),
      template: '%s · PuerHub',
    },
    twitter: {
      card: 'summary_large_image',
      description: t('chat.description', { appName: 'PuerHub' }),
      images: [OG_URL],
      site: '@puerhub',
      title: t('chat.title', { appName: 'PuerHub' }),
    },
  };
};
