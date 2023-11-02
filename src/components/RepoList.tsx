import { Fragment, ReactNode } from 'react';
import useGitHubRepos from '../hooks/useGitHubRepos';
import { Repo, RepoQueryParams } from '../types/graphql';
import { repoMapper } from '../utils/repo-mapper';
import RepoListItem from './RepoListItem';
import {
    List,
    // useStyleConfig,
  } from '@chakra-ui/react'
import ListLoader from './ListLoader';
import colors from '../ds/theme/foundations/colors';

// TODO - styling
export default function RepoList({
                                    queryParams =  {searchTerm:'react', resultLimit: 10}, 
                                    renderRepoListItem = defaultRenderRepoListItem
                                }: RepoListProps) {  

  const response = useGitHubRepos(queryParams.searchTerm, queryParams.resultLimit);
//   const style = useStyleConfig('List')
  return response 
    ? ( 
        <List >
            {
                repoMapper(response)
                .map((repoData, index) => {
                    return (
                    <Fragment key={index}>
                        { renderRepoListItem(repoData, colors.primary[700]) }
                    </Fragment>
                    )
                }
                )
            }
        </List>

    )
    : (
        <ListLoader isLoading={response ?? true} length={queryParams.resultLimit} itemRows={3} />
    )
}

type RepoListProps = {
    queryParams: RepoQueryParams | undefined;
    renderRepoListItem: RepoRenderFunc | undefined;
}

interface RepoRenderFunc {
    (repo: Repo, color?: string): ReactNode;
}

const defaultRenderRepoListItem: RepoRenderFunc = (repo: Repo, color?: string) => {
    return (<RepoListItem backgroundColor={color ?? colors.white} color={colors.white && color} >
        <h3>{ repo.name }</h3>
            { 
                repo.description && 
                <p>{ repo.description }</p> 
            }
        <p> Branch Count: { repo.branchCount } </p>
    </RepoListItem>)
        };

export { RepoListProps, RepoRenderFunc };