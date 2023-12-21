import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    classname?: string;
}

export const Navbar = ({classname}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {},  [])}>
            <ThemeSwitcher  />
            <div className={cls.links}>
                <AppLink  to={'./'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'./about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
            </div>
        </div>
    );
};