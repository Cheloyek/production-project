import {AppRoutes, RoutePath} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={RoutePath[AppRoutes.MAIN]} theme={AppLinkTheme.SECONDARY}>Link to main page</AppLink>
                <AppLink to={RoutePath[AppRoutes.ABOUT]}>Link to about page</AppLink>
            </div>

        </div>
    );
};

