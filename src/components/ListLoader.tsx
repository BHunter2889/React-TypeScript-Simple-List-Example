import { List, ListItem, Skeleton, Stack } from "@chakra-ui/react"
import { ReactNode } from "react"


export default function ListLoader({isLoading, length, itemRows}: ListLoaderProps) {
    return isLoading 
        ? (
            <List>
                { 
                    Array.from({length: length}).map((e, i) => 
                        (
                            <ListItem>
                                {
                                    Array.from({length: itemRows}).map((e, i) => 
                                        (
                                            <Skeleton fitContent={true} isLoaded={!isLoading}>
                                                <span>You can't see me!</span>
                                            </Skeleton>
                                        )
                                    )

                                }
                            </ListItem>
                        )
                    )
                }
            </List> 
        ) 
        : null
}

type ListLoaderProps = {
    isLoading: boolean,
    length: number,
    itemRows: number,
}