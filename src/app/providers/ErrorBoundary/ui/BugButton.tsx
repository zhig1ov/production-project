import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { t } from 'i18next';

// Тестовый компонент
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(!error);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};
