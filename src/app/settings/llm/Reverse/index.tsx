import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/components/Logo';
import { ModelProvider } from '@/libs/agent-runtime';

import ProviderConfig from '../components/ProviderConfig';

const ReverseProvider = memo(() => {
  const { t } = useTranslation('setting');

  return (
    <ProviderConfig
      checkModel={'gpt-4-all'}
      // modelList={{ showModelFetcher: true }}
      provider={ModelProvider.Reverse}
      title={<Logo extra={t('llm.reverse')} type={'combine'} />}
    />
  );
});

export default ReverseProvider;
