import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assests/tests/storybookImage.png';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            country: Country.Russia,
            age: 25,
            lastname: 'admin',
            first: 'admin',
            city: 'Moskow',
            currency: Currency.RUB,
            avatar,
        },
    },
})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            country: Country.Russia,
            age: 25,
            lastname: 'admin',
            first: 'admin',
            city: 'Moskow',
            currency: Currency.RUB,
            avatar,
        },
    },
})];
