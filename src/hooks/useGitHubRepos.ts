import { useEffect, useState } from "react";
import { SearchReposResponse } from "../types/graphql";
import { mockSearchReposResponse } from "../utils/mock-utils";

function useGitHubRepos(query: string, limit: number): SearchReposResponse | undefined {
    const [reposData, setReposData] = useState<SearchReposResponse>(); 
    useEffect(() => {
        if (query) {
            // hypothetical Apollo Query execution
            // ...
            setReposData(mockSearchReposResponse(query, limit));
        }
    }, [query, limit]);
    
    return reposData;
}

export default useGitHubRepos;
