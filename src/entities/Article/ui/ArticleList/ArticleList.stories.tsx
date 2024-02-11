import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { articleDataMok } from '../../moks/data';
import { ArticleList } from './ArticleList';

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingList: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.LIST,
    },
};

export const LoadingTile: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.TILE,
    },
};

export const NormalList: Story = {
    args: {
        articles: new Array(9)
            .fill(0)
            .map((item, index) => ({
                ...articleDataMok,
                id: String(index),
            })),
        isLoading: false,
        view: ArticleView.LIST,
    },
};

export const NormalTile: Story = {
    args: {
        articles: new Array(9)
            .fill(0)
            .map((item, index) => ({
                ...articleDataMok,
                id: String(index),
            })),
        isLoading: false,
        view: ArticleView.TILE,
    },
};
