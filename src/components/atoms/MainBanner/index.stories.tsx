import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import MainBanner from './index';

type Story = ComponentStoryObj<typeof MainBanner>;

export default {
  component: MainBanner,
} as ComponentMeta<typeof MainBanner>;

export const Default: Story = {};
