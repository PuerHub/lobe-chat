'use client';

import { Icon } from '@lobehub/ui';
import { App, Button } from 'antd';
import { SendHorizonal } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useUserStore } from '@/store/user';
import { GlobalLLMProviderKey } from '@/types/user/settings';

const Actions = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('welcome');
  const router = useRouter();

  const query = useSearchParams();
  const apiKey = useMemo(() => query.get('apiKey'), [query]);

  const [setModelProviderConfig, updateKeyVaultConfig] = useUserStore((s) => [
    s.setModelProviderConfig,
    s.updateKeyVaultConfig,
  ]);

  const { modal } = App.useApp();

  useEffect(() => {
    if (apiKey && /^sk-[\dA-Za-z]{48}$/.test(apiKey)) {
      modal.confirm({
        cancelText: t('cancel', { ns: 'common' }),
        centered: true,
        content: t('import.desc', { key: apiKey, ns: 'welcome' }),
        okText: t('ok', { ns: 'common' }),
        onOk: async () => {
          const providers: GlobalLLMProviderKey[] = [
            'openai',
            'zhipu',
            'deepseek',
            'google',
            'anthropic',
            'moonshot',
            'groq',
            'zeroone',
            'openrouter',
            'qwen',
            'togetherai',
            'minimax',
            'stepfun',
            'reverse',
          ];

          for (const provider of providers) {
            await setModelProviderConfig(provider, {
              enabled: true,
              fetchOnClient: true,
            });

            await updateKeyVaultConfig(provider, {
              apiKey: apiKey,
              baseURL: 'https://api.puerhub.net/v1',
            });
          }

          router.push('/chat');
        },
        title: t('import.title', { ns: 'welcome' }),
      });
    }
  }, [apiKey]);

  return (
    <Flexbox gap={16} horizontal={!mobile} justify={'center'} width={'100%'} wrap={'wrap'}>
      <Link href={'/market'}>
        <Button block={mobile} size={'large'} style={{ minWidth: 160 }} type={'default'}>
          {t('button.market')}
        </Button>
      </Link>
      <Button
        block={mobile}
        onClick={() => router.push('/chat')}
        size={'large'}
        style={{ minWidth: 160 }}
        type={'primary'}
      >
        <Flexbox align={'center'} gap={4} horizontal justify={'center'}>
          {t('button.start')}
          <Icon icon={SendHorizonal} />
        </Flexbox>
      </Button>
    </Flexbox>
  );
});

export default Actions;
