import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

export const BugButton = (props: BugButtonProps) => {
  const { className } = props;
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
      className={classNames('', {}, [className])}
    >
      <p>{t('throw-error')}</p>
    </Button>
  );
};
