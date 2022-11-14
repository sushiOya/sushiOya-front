import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import ImageView from '../../atoms/ImageView';
import Text, { FONT_WEIGHT, TEXT } from '../../atoms/Text';
import Title, { TITLE } from '../../atoms/Title';
import Card from './index';

type Story = ComponentStoryObj<typeof Card>;

export default {
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ImageView marked={true} alt={'sushi'} />
        <Title as={TITLE.H4}>업장 이름</Title>
        <Text as={TEXT.BODY1} styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}>
          서울시
        </Text>
      </>
    ),
  },
};
