import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

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

export const Dark: Story = {
    args: {
    },
};
Dark.decorators = ThemeDecorator(Theme.DARK);
