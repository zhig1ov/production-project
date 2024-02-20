import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
