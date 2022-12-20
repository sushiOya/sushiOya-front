import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Logo from './index';

type Story = ComponentStoryObj<typeof Logo>;

export default {
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Default: Story = {};
