import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Введите username',
        value: 'Test',
    },
};

export const Dark: Story = {
    args: {
        placeholder: 'Введите username',
        value: 'Test',
    },
};
Dark.decorators = ThemeDecorator(Theme.DARK);
