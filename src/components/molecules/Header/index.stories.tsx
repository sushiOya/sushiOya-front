import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Header from './index';

type Story = ComponentStoryObj<typeof Header>;

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: Story = {};
