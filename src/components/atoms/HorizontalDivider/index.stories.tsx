import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import HorizontalDivider from './index';

type Story = ComponentStoryObj<typeof HorizontalDivider>;

export default {
  component: HorizontalDivider,
} as ComponentMeta<typeof HorizontalDivider>;

export const Default: Story = {};
