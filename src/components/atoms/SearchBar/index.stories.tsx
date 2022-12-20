import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import SearchBar from './index';

type Story = ComponentStoryObj<typeof SearchBar>;

export default {
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Default: Story = {};
