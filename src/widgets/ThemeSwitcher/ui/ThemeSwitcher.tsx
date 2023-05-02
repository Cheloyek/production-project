import {classNames} from "shared";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/assets/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    console.log(theme)
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
        </Button>
    );
};