import React from 'react';
import { Repo } from '../types/graphql';

// TODO - styling
const RepoListItem = ({name, description, branchCount }: Repo) => (
    <li className="repo-list-item">
      <h3>{ name }</h3>
      { description && <p>{description}</p> }
      <p> { branchCount } Branches</p>
    </li>
);

export default RepoListItem;