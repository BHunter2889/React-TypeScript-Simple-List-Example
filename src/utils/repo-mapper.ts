import { Repo, SearchReposResponse } from "../types/graphql";

const repoMapper = (response: SearchReposResponse): Repo[] => {
    return response.data.search.edges.map((edge) => (
            {
                name: edge.node.name,
                description: edge.node.description,
                branchCount: edge.node.refs.totalCount,
            }
        )
    )
}

export { repoMapper };