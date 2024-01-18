import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const WithError: Story = {
    args: {
    },
};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'ERROR' },
})];

export const Loading: Story = {
    args: {
    },
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
