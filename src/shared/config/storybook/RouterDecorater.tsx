import { BrowserRouter } from 'react-router-dom';

export const RouterDecorater = (Story: any) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
