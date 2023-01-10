import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import FilteringBox from './index';

type Story = ComponentStoryObj<typeof FilteringBox>;

export default {
  component: FilteringBox,
} as ComponentMeta<typeof FilteringBox>;

export const Default: Story = {};
