import { SearchReposResponse } from "../types/graphql";
import { mockSearchReposResponse } from "../utils/mock-utils";

function useGitHubRepos(query: string, limit: number): SearchReposResponse {
    // TODO: Replace demo mock with graphql exec
    return mockSearchReposResponse(query, limit);
}

export default useGitHubRepos;
