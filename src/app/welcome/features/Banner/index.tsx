'use client';

import { Icon } from '@lobehub/ui';
import { App, Button } from 'antd';
import { SendHorizonal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useGlobalStore } from '@/store/global';
import { useSessionStore } from '@/store/session';

import Hero from './Hero';
import { useStyles } from './style';

const Banner = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('welcome');
  const { styles } = useStyles();
  const [switchSession, switchBackToChat, router, isMobile] = useSessionStore((s) => [
    s.switchSession,
    s.switchBackToChat,
    s.router,
    s.isMobile,
  ]);
  const [setConfig] = useGlobalStore((s) => [s.setOpenAIConfig]);

  const { modal } = App.useApp();

  const query = useSearchParams();
  const apiKey = useMemo(() => query.get('apiKey'), [query]);

  useEffect(() => {
    if (apiKey && /^sk-[\dA-Za-z]{48}$/.test(apiKey)) {
      modal.confirm({
        cancelText: t('cancel', { ns: 'common' }),
        centered: true,
        content: t('import.desc', { key: apiKey }),
        okText: t('ok', { ns: 'common' }),
        onOk: () => {
          setConfig({ OPENAI_API_KEY: apiKey });
          switchSession();
        },
        title: t('import.title'),
      });
    }
  }, [apiKey]);

  return (
    <>
      <div className={styles.container}>
        <Hero mobile={mobile} width={mobile ? 640 : 1024} />
      </div>
      <Flexbox
        className={styles.buttonGroup}
        gap={16}
        horizontal={!mobile}
        justify={'center'}
        width={'100%'}
      >
        {/*<DataImporter*/}
        {/*  onFinishImport={() => {*/}
        {/*    switchSession();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Button block={mobile} size={'large'}>*/}
        {/*    {t('button.import')}*/}
        {/*  </Button>*/}
        {/*</DataImporter>*/}
        <Button
          block={mobile}
          onClick={() => (isMobile ? router?.push('/chat') : switchBackToChat())}
          size={'large'}
          type={'primary'}
        >
          <Flexbox align={'center'} gap={4} horizontal justify={'center'}>
            {t('button.start')}
            <Icon icon={SendHorizonal} />
          </Flexbox>
        </Button>
      </Flexbox>
    </>
  );
});

export default Banner;
