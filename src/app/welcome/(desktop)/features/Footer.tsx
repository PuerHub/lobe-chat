'use client';

import { ActionIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Book, Users } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { GROUP_QRCODE_URL, MANUAL_URL } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} PuerHub based on LobeHub under the MIT license
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={Users}
          onClick={() => window.open(GROUP_QRCODE_URL, '__blank')}
          size={'site'}
          title={t('group')}
        />
        <ActionIcon
          icon={Book}
          onClick={() => window.open(MANUAL_URL, '__blank')}
          size={'site'}
          title={t('manual')}
        />
        {/*<ActionIcon*/}
        {/*  icon={Github}*/}
        {/*  onClick={() => window.open(GITHUB, '__blank')}*/}
        {/*  size={'site'}*/}
        {/*  title={'GitHub'}*/}
        {/*/>*/}
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
