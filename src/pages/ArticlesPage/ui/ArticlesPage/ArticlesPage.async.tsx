import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕЛЬЗЯ!!!!! ДЕЛАЕЮ ДЛЯ ОБУЧЕНИЯ!
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
