import { Input } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/components/Logo';
import { ModelProvider } from '@/libs/agent-runtime';

import Checker from '../components/Checker';
import ProviderConfig from '../components/ProviderConfig';
import { LLMProviderApiTokenKey, LLMProviderConfigKey } from '../const';

const providerKey = 'reverse';

const ReverseProvider = memo(() => {
  const { t } = useTranslation('setting');

  return (
    <ProviderConfig
      configItems={[
        {
          children: (
            <Input.Password
              autoComplete={'new-password'}
              placeholder={t('llm.Reverse.token.placeholder')}
            />
          ),
          desc: t('llm.Reverse.token.desc'),
          label: t('llm.Reverse.token.title'),
          name: [LLMProviderConfigKey, providerKey, LLMProviderApiTokenKey],
        },
        {
          children: (
            <Input.TextArea
              allowClear
              placeholder={t('llm.Reverse.customModelName.placeholder')}
              style={{ height: 100 }}
            />
          ),
          desc: t('llm.Reverse.customModelName.desc'),
          label: t('llm.Reverse.customModelName.title'),
          name: [LLMProviderConfigKey, providerKey, 'customModelName'],
        },
        {
          children: <Checker model={'gpt-4-all'} provider={ModelProvider.Reverse} />,
          desc: t('llm.checker.desc'),
          label: t('llm.checker.title'),
          minWidth: '100%',
        },
      ]}
      provider={providerKey}
      title={<Logo extra={t('llm.Reverse.title')} type={'combine'} />}
    />
  );
});

export default ReverseProvider;
