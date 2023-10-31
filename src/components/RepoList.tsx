import useGitHubRepos from '../hooks/useGitHubRepos';
import { repoMapper } from '../utils/repo-mapper';
import RepoListItem from './RepoListItem';

// TODO - styling
const RepoList = () => {
  const response = useGitHubRepos('react', 10);

  return (
    <div className="repo-list">
        {/* TODO - reformat or remove this when styling */}
        <h1>GitHub Repository List</h1>
        <ul>
            {
                repoMapper(response)
                .map((repoData, index) => 
                    <RepoListItem key={index} {...repoData} />
                )
            }
        </ul>
    </div>
  );
}

export default RepoList;