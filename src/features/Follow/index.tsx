'use client';

import { SiDocusaurus, SiUptimekuma, SiWechat } from '@icons-pack/react-simple-icons';
import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { GROUP_QRCODE_URL, MANUAL_URL, UPTIME_URL } from '@/const/url';

const useStyles = createStyles(({ css, token }) => {
  return {
    icon: css`
      svg {
        fill: ${token.colorTextDescription};
      }

      &:hover {
        svg {
          fill: ${token.colorText};
        }
      }
    `,
  };
});

const Follow = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('welcome');
  return (
    <Flexbox gap={8} horizontal>
      <Link href={GROUP_QRCODE_URL} rel="noreferrer" target={'_blank'}>
        <ActionIcon
          className={styles.icon}
          icon={SiWechat as any}
          title={t('footer.wechatGroup')}
        />
      </Link>
      <Link href={MANUAL_URL} rel="noreferrer" target={'_blank'}>
        <ActionIcon className={styles.icon} icon={SiDocusaurus as any} title={t('footer.manual')} />
      </Link>
      <Link href={UPTIME_URL} rel="noreferrer" target={'_blank'}>
        <ActionIcon className={styles.icon} icon={SiUptimekuma as any} title={t('footer.uptime')} />
      </Link>
    </Flexbox>
  );
});

Follow.displayName = 'Follow';

export default Follow;
