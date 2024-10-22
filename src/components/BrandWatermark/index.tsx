'use client';

import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import Logo from '@/components/Logo';
import { UTM_SOURCE } from '@/const/url';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      {/*<span>Powered by</span>*/}
      <Link className={styles.logoLink} href={`https://puerhub.xyz?utm_source=${UTM_SOURCE}&utm_content=brand_watermark`} target={'_blank'}>
        <Logo size={20} type={'text'} />
      </Link>
      <span>base on LobeHub</span>
    </Flexbox>
  );
});

export default BrandWatermark;
