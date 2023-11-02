type SearchReposResponse = {
  data: {
    search: {
      edges: {
        node: {
          name: string;
          description: string | null;
          refs: {
            name: string;
            totalCount: number;
          };
        };
      }[];
    };
  };
};
  
type Repo = {
  name: string;
  description: string | null;
  branchCount: number;
};

type RepoQueryParams = {
  searchTerm: string;
  resultLimit: number;
}

export {SearchReposResponse, Repo, RepoQueryParams}; 