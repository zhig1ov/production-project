import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nFortests from 'shared/config/i18n/i18nFortests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nFortests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
