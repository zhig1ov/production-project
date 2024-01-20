import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕЛЬЗЯ!!!!! ДЕЛАЕЮ ДЛЯ ОБУЧЕНИЯ!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
