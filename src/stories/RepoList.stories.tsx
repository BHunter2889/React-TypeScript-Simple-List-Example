import type { Meta, StoryObj } from '@storybook/react';
import RepoList from '../components/RepoList';

const meta: Meta<typeof RepoList> = {
    title: 'Exhibits/Lists/RepoList',
    component: RepoList,
    parameters: {
        layout: 'centered',
    },
    // Automatically generate Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'], 
};

export default meta;

type Story = StoryObj<typeof RepoList>;

export const RepoListStory: Story = {
  args: {
    queryParams: {
      searchTerm: "react",
      resultLimit: 10,
    },
    renderRepoListItem: undefined
  },
};

