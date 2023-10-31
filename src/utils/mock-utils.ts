import { SearchReposResponse } from "../types/graphql";

function mockSearchReposResponse(query: string, limit: number): SearchReposResponse {
    return {
        data: {
            search: {
                edges: Array.from({length: limit}).map(
                    (_, i) => (
                        {
                            node: {
                                name: `Imma-${query}-Repo${i}`,
                                description: `ImmaDescription for Repo ${i}`,
                                refs: {
                                    name: 'refs/heads/',
                                    totalCount: Math.floor(Math.random() * 10),
                                },
                            },
                        }

                    )
                )
            },
        },
    };
}

export { mockSearchReposResponse };