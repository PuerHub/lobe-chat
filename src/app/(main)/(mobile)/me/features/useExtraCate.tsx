import { Icon } from '@lobehub/ui';
import { Book, HardDriveDownload, HardDriveUpload } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { type MenuProps } from '@/components/Menu';
import { MANUAL_URL } from '@/const/url';
import DataImporter from '@/features/DataImporter';
import { configService } from '@/services/config';

export const useExtraCate = () => {
  const { t } = useTranslation(['common', 'setting']);

  const iconSize = { fontSize: 20 };

  const exports: MenuProps['items'] = [
    {
      icon: <Icon icon={HardDriveUpload} size={iconSize} />,
      key: 'import',
      label: <DataImporter>{t('import')}</DataImporter>,
    },
    {
      icon: <Icon icon={HardDriveDownload} size={iconSize} />,
      key: 'export',
      label: t('export'),
      onClick: configService.exportAll,
    },
    {
      type: 'divider',
    },
  ];

  const helps: MenuProps['items'] = [
    {
      icon: <Icon icon={Book} size={iconSize} />,
      key: 'docs',
      label: t('document'),
      onClick: () => window.open(MANUAL_URL, '__blank'),
    },
    // {
    //   icon: <Icon icon={Feather} size={iconSize} />,
    //   key: 'feedback',
    //   label: t('feedback'),
    //   onClick: () => window.open(FEEDBACK, '__blank'),
    // },
    // {
    //   icon: <Icon icon={DiscordIcon} size={iconSize} />,
    //   key: 'discord',
    //   label: 'Discord',
    //   onClick: () => window.open(DISCORD, '__blank'),
    // },
  ];

  const mainItems = [
    {
      type: 'divider',
    },
    ...exports,
    ...helps,
  ].filter(Boolean) as MenuProps['items'];

  return mainItems;
};
