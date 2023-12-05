import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · PuerHub` : 'PuerHub';
  }, [title]);

  return null;
});

export default PageTitle;
