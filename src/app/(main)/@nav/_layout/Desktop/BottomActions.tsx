import { ActionIcon } from '@lobehub/ui';
import { Book, Users } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { GROUP_QRCODE_URL, MANUAL_URL } from '@/const/url';

const BottomActions = memo(() => {
  const { t } = useTranslation('common');

  return (
    <>
      <Link aria-label={t('group')} href={GROUP_QRCODE_URL} target={'_blank'}>
        <ActionIcon icon={Users} placement={'right'} title={t('group')} />
      </Link>
      <Link aria-label={t('manual')} href={MANUAL_URL} target={'_blank'}>
        <ActionIcon icon={Book} placement={'right'} title={t('manual')} />
      </Link>
    </>
  );
});

export default BottomActions;
