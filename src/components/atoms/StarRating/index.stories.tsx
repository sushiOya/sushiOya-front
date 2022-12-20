import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import StarRating from './index';

type Story = ComponentStoryObj<typeof StarRating>;

export default {
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

export const Default: Story = {};

export const Full: Story = {
  args: {
    score: 5,
    inReviewPage: false,
  },
};
