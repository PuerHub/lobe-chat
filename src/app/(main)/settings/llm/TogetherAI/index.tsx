'use client';

import { Together } from '@lobehub/icons';
import { memo } from 'react';

import ProviderConfig from '../components/ProviderConfig';

const TogetherAIProvider = memo(() => {
  return (
    <ProviderConfig
      checkModel={'deepseek-ai/deepseek-coder-33b-instruct'}
      // modelList={{ showModelFetcher: true }}
      provider={'togetherai'}
      showApiKey={false}
      title={<Together.Combine size={26} type={'color'} />}
    />
  );
});

export default TogetherAIProvider;
