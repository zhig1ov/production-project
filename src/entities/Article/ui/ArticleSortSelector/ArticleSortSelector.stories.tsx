import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        order: 'asc',
        sort: ArticleSortField.CREATED,
        onChangeOrder: action('onChangeOrder'),
        onChangeSort: action('onChangeSort'),
    },
};
