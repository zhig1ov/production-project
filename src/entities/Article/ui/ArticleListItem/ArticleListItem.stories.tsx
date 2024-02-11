import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from 'entities/Article';
import { articleDataMok } from '../../moks/data';
import { ArticleListItem } from './ArticleListItem';

const meta = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
    args: {
        article: articleDataMok,
        view: ArticleView.LIST,
    },
};

export const Tile: Story = {
    args: {
        article: articleDataMok,
        view: ArticleView.TILE,
    },
};
