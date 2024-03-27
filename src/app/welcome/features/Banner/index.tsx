'use client';

import { Icon } from '@lobehub/ui';
import { App, Button } from 'antd';
import { SendHorizonal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

// import DataImporter from '@/features/DataImporter';
import { useGlobalStore } from '@/store/global';

// import { useSessionStore } from '@/store/session';
import Hero from './Hero';
import { useStyles } from './style';

const Banner = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('welcome');
  const router = useRouter();
  const { styles } = useStyles();
  // const [switchSession] = useSessionStore((s) => [s.switchSession]);
  const [switchBackToChat, isMobile] = useGlobalStore((s) => [s.switchBackToChat, s.isMobile]);

  const [setModelProviderConfig] = useGlobalStore((s) => [s.setModelProviderConfig]);

  const { modal } = App.useApp();

  const query = useSearchParams();
  const apiKey = useMemo(() => query.get('apiKey'), [query]);

  const goToChat = () => (isMobile ? router.push('/chat') : switchBackToChat());

  useEffect(() => {
    if (apiKey && /^sk-[\dA-Za-z]{48}$/.test(apiKey)) {
      modal.confirm({
        cancelText: t('cancel', { ns: 'common' }),
        centered: true,
        content: t('import.desc', { key: apiKey }),
        okText: t('ok', { ns: 'common' }),
        onOk: () => {
          setModelProviderConfig('openAI', { OPENAI_API_KEY: apiKey }).then(() => {
            setModelProviderConfig('zhipu', { apiKey: apiKey, enabled: true }).then(() => {
              setModelProviderConfig('google', { apiKey: apiKey, enabled: true }).then(() => {
                goToChat();
              });
            });
          });
          // switchSession();
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
        {/*    router.push('/chat');*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Button block={mobile} size={'large'}>*/}
        {/*    {t('button.import')}*/}
        {/*  </Button>*/}
        {/*</DataImporter>*/}
        <Button block={mobile} onClick={goToChat} size={'large'} type={'primary'}>
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
