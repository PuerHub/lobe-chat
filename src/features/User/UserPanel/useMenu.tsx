import { Icon } from '@lobehub/ui';
import { Badge } from 'antd';
import { Book, HardDriveDownload, HardDriveUpload, LifeBuoy, Settings2, Users } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { type MenuProps } from '@/components/Menu';
import { GROUP_QRCODE_URL, MANUAL_URL } from '@/const/url';
import DataImporter from '@/features/DataImporter';
import { configService } from '@/services/config';

import { useNewVersion } from './useNewVersion';

export const useMenu = () => {
  const hasNewVersion = useNewVersion();
  const { t } = useTranslation(['common', 'setting']);

  const NewVersionBadge = useCallback(
    ({ children, showBadge }: PropsWithChildren & { showBadge?: boolean }) => {
      if (!showBadge) return children;
      return (
        <Flexbox align={'center'} distribution={'space-between'} gap={8} horizontal width={'100%'}>
          <span>{children}</span>
          <Badge count={t('upgradeVersion.hasNew')} />
        </Flexbox>
      );
    },
    [t],
  );

  const exports: MenuProps['items'] = [
    {
      icon: <Icon icon={HardDriveUpload} />,
      key: 'import',
      label: <DataImporter>{t('import')}</DataImporter>,
    },
    {
      children: [
        {
          key: 'allAgent',
          label: t('exportType.allAgent'),
          onClick: configService.exportAgents,
        },
        {
          key: 'allAgentWithMessage',
          label: t('exportType.allAgentWithMessage'),
          onClick: configService.exportSessions,
        },
        {
          key: 'globalSetting',
          label: t('exportType.globalSetting'),
          onClick: configService.exportSettings,
        },
        {
          type: 'divider',
        },
        {
          key: 'all',
          label: t('exportType.all'),
          onClick: configService.exportAll,
        },
      ],
      icon: <Icon icon={HardDriveDownload} />,
      key: 'export',
      label: t('export'),
    },
    {
      type: 'divider',
    },
  ];

  const settings: MenuProps['items'] = [
    {
      icon: <Icon icon={Settings2} />,
      key: 'setting',
      label: (
        <Link href={'/settings'}>
          <NewVersionBadge showBadge={hasNewVersion}>{t('userPanel.setting')}</NewVersionBadge>
        </Link>
      ),
    },
    {
      type: 'divider',
    },
  ];

  const helps: MenuProps['items'] = [
    {
      icon: <Icon icon={Users} />,
      key: 'group',
      label: (
        <Link href={GROUP_QRCODE_URL} target={'_blank'}>
          {t('joinGroup')}
        </Link>
      ),
    },
    {
      children: [
        {
          icon: <Icon icon={Book} />,
          key: 'docs',
          label: (
            <Link href={MANUAL_URL} target={'_blank'}>
              {t('userPanel.docs')}
            </Link>
          ),
        },
        // {
        //   icon: <Icon icon={Feather} />,
        //   key: 'feedback',
        //   label: (
        //     <Link href={GITHUB_ISSUES} target={'_blank'}>
        //       {t('userPanel.feedback')}
        //     </Link>
        //   ),
        // },
        // {
        //   icon: <Icon icon={Mail} />,
        //   key: 'email',
        //   label: (
        //     <Link href={`mailto:${EMAIL_SUPPORT}`} target={'_blank'}>
        //       {t('userPanel.email')}
        //     </Link>
        //   ),
        // },
      ],
      icon: <Icon icon={LifeBuoy} />,
      key: 'help',
      label: t('userPanel.help'),
    },
  ];

  const mainItems = [
    {
      type: 'divider',
    },
    ...settings,
    ...exports,
    ...helps,
    {
      type: 'divider',
    },
  ].filter(Boolean) as MenuProps['items'];

  return {
    mainItems,
  };
};
