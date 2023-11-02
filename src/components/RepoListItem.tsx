import React, { ReactNode } from 'react';
import { ListItem, useStyleConfig } from '@chakra-ui/react';
import colors from '../ds/theme/foundations/colors';
import space from '../ds/theme/foundations/spacing';

// TODO - styling
export default function RepoListItem({ children, backgroundColor, color }: RepoListItemProps) {
    // const style = useStyleConfig('List')
    return (
        <ListItem 
        // sx={style} 
        backgroundColor={backgroundColor}
        color={color}
        >
            {children}
        </ListItem>
    );
}

type RepoListItemProps = {
    children: ReactNode,
    backgroundColor: string,
    color: string | undefined,
}