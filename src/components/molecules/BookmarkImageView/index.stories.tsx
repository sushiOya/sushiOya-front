import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Sushi from '../../../assets/sushi_test.jpeg';
import BookMarkImageView from './index';

type Story = ComponentStoryObj<typeof BookMarkImageView>;

export default {
  component: BookMarkImageView,
  args: {
    alt: 'sushi',
    marked: false,
    onBookmarkClicked: (): void => undefined,
    imagePath: Sushi,
  },
} as ComponentMeta<typeof BookMarkImageView>;

export const Default: Story = {};

export const Marked: Story = {
  args: {
    alt: 'sushi',
    marked: true,
    onBookmarkClicked: (): void => undefined,
    imagePath: Sushi,
  },
};
