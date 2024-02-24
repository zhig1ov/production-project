import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕЛЬЗЯ!!!!! ДЕЛАЕЮ ДЛЯ ОБУЧЕНИЯ!
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
