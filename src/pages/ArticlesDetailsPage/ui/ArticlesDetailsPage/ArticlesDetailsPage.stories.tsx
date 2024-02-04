import type { Meta, StoryObj } from '@storybook/react';
import ArticlesDetailsPage from './ArticlesDetailsPage';

const meta = {
    title: 'shared/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ArticlesDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
