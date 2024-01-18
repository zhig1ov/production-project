import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title ipsum lorem',
        text: 'description ipsum lorem',
    },
};

export const Error: Story = {
    args: {
        title: 'Title ipsum lorem',
        text: 'description ipsum lorem',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitlePrimary: Story = {
    args: {
        title: 'Title ipsum lorem',
    },
};

export const OnlyTextPrimary: Story = {
    args: {
        text: 'description ipsum lorem',
    },
};

export const Dark: Story = {
    args: {
        title: 'Title ipsum lorem',
        text: 'description ipsum lorem',
    },
};
Dark.decorators = ThemeDecorator(Theme.DARK);

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title ipsum lorem',
    },
};
OnlyTitleDark.decorators = ThemeDecorator(Theme.DARK);

export const OnlyTextDark: Story = {
    args: {
        text: 'description ipsum lorem',
    },
};
OnlyTextDark.decorators = ThemeDecorator(Theme.DARK);

export const ErrorDark: Story = {
    args: {
        title: 'Title ipsum lorem',
        text: 'description ipsum lorem',
        theme: TextTheme.ERROR,
    },
};
ErrorDark.decorators = ThemeDecorator(Theme.DARK);
