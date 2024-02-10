import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Hello world',
            user: { id: '1', username: 'user' },
        },
    },
};
Normal.decorators = [StoreDecorator({})];

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Hello world',
            user: { id: '1', username: 'user' },
        },
        isLoading: true,
    },
};
Loading.decorators = [StoreDecorator({})];
