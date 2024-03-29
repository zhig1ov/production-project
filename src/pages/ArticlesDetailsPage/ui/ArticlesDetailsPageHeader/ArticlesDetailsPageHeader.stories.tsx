import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';

const meta = {
    title: 'shared/ArticlesDetailsPageHeader',
    component: ArticlesDetailsPageHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ArticlesDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
