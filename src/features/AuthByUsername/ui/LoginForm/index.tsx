import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('vvedite-username')}
        className={cls.input}
      />
      <Input
        placeholder={t('vvedite-password')}
        className={cls.input}
      />
      <Button className={cls.loginBtn}>
        {t('voiti')}
      </Button>
    </div>
  );
};