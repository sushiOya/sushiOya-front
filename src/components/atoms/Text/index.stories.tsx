import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Text, { FONT_WEIGHT, LINE_HEIGHT, TEXT } from './index';

type Story = ComponentStoryObj<typeof Text>;

export default {
  component: Text,
  args: {
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    children: '강동구',
  },
} as ComponentMeta<typeof Text>;

export const Body1: Story = {
  args: {
    as: TEXT.BODY1,
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.REGULAR,
    },
    children: '강동구',
  },
};

export const Body1Bold: Story = {
  args: {
    as: TEXT.BODY1,
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    children: '강동구',
  },
};

export const Body2: Story = {
  args: {
    as: TEXT.BODY2,
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.REGULAR,
    },
    children: '송파구',
  },
};

export const Body2Bold: Story = {
  args: {
    as: TEXT.BODY2,
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    children: '송파구',
  },
};

export const Body3: Story = {
  args: {
    as: TEXT.BODY3,
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.REGULAR,
    },
    children: '광진구',
  },
};

export const Body3Bold: Story = {
  args: {
    as: TEXT.BODY3,
    styleProps: {
      lineHeight: LINE_HEIGHT.HEIGHT140,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    children: '광진구',
  },
};

export const Caption: Story = {
  args: {
    as: TEXT.CAPTION,
    styleProps: {
      fontWeight: FONT_WEIGHT.REGULAR,
    },
    children: '용산구',
  },
};

export const CaptionBold: Story = {
  args: {
    as: TEXT.CAPTION,
    styleProps: {
      fontWeight: FONT_WEIGHT.BOLD,
    },
    children: '용산구',
  },
};
