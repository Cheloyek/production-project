import { Button } from 'shared/assets/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компнент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    // eslint-disable-next-line i18next/no-literal-string
    return <Button onClick={onThrow}>{t('выбросить ошибку')}</Button>;
};
