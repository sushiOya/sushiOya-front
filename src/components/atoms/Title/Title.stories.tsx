import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Title, { TITLE } from './index';

type Story = ComponentStoryObj<typeof Title>;

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

export const H1: Story = {
  args: {
    as: TITLE.H1,
    children: 'h1 타이틀 테스트',
  },
};

export const H2: Story = {
  args: {
    as: TITLE.H2,
    children: 'h2 타이틀 테스트',
  },
};

export const H3: Story = {
  args: {
    as: TITLE.H3,
    children: 'h3 타이틀 테스트',
  },
};

export const H4: Story = {
  args: {
    as: TITLE.H4,
    children: 'h3 타이틀 테스트',
  },
};
