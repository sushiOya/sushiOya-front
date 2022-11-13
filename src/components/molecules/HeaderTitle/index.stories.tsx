import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Text, { FONT_WEIGHT, TEXT } from '../../atoms/Text';
import Title, { TITLE } from '../../atoms/Title';
import HeaderTitle from './index';

type Story = ComponentStoryObj<typeof HeaderTitle>;

export default {
  component: HeaderTitle,
} as ComponentMeta<typeof HeaderTitle>;

export const Default: Story = {
  args: {
    children: <Title as={TITLE.H2}>#평점 높은</Title>,
    withIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    children: <Title as={TITLE.H2}>#입문으로 딱인</Title>,
    withIcon: true,
  },
};

export const WithSubTitle: Story = {
  args: {
    children: (
      <>
        <Title as={TITLE.H2}>#입문으로 딱인</Title>
        <Text
          as={TEXT.CAPTION}
          styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
        >
          0개의 후기
        </Text>
      </>
    ),
    withIcon: true,
  },
};
