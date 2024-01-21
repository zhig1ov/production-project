import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕЛЬЗЯ!!!!! ДЕЛАЕЮ ДЛЯ ОБУЧЕНИЯ!
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
