import {classNames} from "shared";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/assets/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggle}
                className={classNames(cls.langSwitcher, {}, [className])}
            >
                {t('Язык')}
            </Button>
    );
};