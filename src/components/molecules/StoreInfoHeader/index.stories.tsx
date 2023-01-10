import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import StoreInfoHeader from './index';

type Story = ComponentStoryObj<typeof StoreInfoHeader>;

export default {
  component: StoreInfoHeader,
} as ComponentMeta<typeof StoreInfoHeader>;

export const Default: Story = {};
