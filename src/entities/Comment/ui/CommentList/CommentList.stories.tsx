import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Hello world',
                user: { id: '1', username: 'user' },
            },
            {
                id: '2',
                text: 'Hello world2',
                user: { id: '2', username: 'user2' },
            },
        ],
    },
};
Normal.decorators = [StoreDecorator({})];

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
Loading.decorators = [StoreDecorator({})];
