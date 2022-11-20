import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Sushi from '../../../assets/sushi_test.jpeg';
import ImageView from './index';

type Story = ComponentStoryObj<typeof ImageView>;

export default {
  component: ImageView,
} as ComponentMeta<typeof ImageView>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    imagePath: Sushi,
    alt: 'sushi',
  },
};
