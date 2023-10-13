import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/assets/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor doloremque ducimus eius enim, fugit iure iusto necessitatibus repellendus sed sequi sint sit temporibus! Consectetur nobis nulla officiis totam vero!
            </Modal>
        </div>
    );
};
