import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImage from './storybookImage.png';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImage,
        alt: 'avatar',
    },
};

export const PrimarySmall: Story = {
    args: {
        size: 50,
        src: AvatarImage,
        alt: 'avatar',
    },
};
