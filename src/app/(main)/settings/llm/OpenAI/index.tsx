'use client';

import { OpenAI } from '@lobehub/icons';
import { memo } from 'react';

import ProviderConfig from '../components/ProviderConfig';

const OpenAIProvider = memo(() => {
  return (
    <ProviderConfig
      modelList={{ showModelFetcher: true }}
      provider={'openai'}
      showBrowserRequest
      title={<OpenAI.Combine size={24} />}
    />
  );
});

export default OpenAIProvider;
