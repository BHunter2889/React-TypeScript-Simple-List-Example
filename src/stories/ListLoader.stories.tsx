import type { Meta, StoryObj } from '@storybook/react';
import ListLoader from '../components/ListLoader';

const meta: Meta<typeof ListLoader> = {
    title: 'Exhibits/Lists/ListLoader',
    component: ListLoader,
    parameters: {
        layout: 'centered',
    },
    // Automatically generate Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'], 
};

export default meta;

type Story = StoryObj<typeof ListLoader>;

export const ListLoaderStory: Story = {
  args: {
    isLoading: true,
    length: 3,
    itemRows: 3,
  },
};

