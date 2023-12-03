'use client';

import { ActionIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Book, Users } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { GROUP_QRCODE_URL, MANUAL_URL } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} LobeHub
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={Users}
          onClick={() => window.open(GROUP_QRCODE_URL, '__blank')}
          size={'site'}
          title={'Group'}
        />
        <ActionIcon
          icon={Book}
          onClick={() => window.open(MANUAL_URL, '__blank')}
          size={'site'}
          title={'Manual'}
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
