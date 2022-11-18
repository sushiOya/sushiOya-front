import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import HeaderIcons from './index';

type Story = ComponentStoryObj<typeof HeaderIcons>;

export default {
  component: HeaderIcons,
} as ComponentMeta<typeof HeaderIcons>;

export const Default: Story = {};
