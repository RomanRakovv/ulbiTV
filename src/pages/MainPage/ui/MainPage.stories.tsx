import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Inverted: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
