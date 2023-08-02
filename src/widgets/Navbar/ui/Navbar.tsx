import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">{t('glavnaya')}</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">{t('o-saite')}</AppLink>
      </div>
    </div>
  );
};
