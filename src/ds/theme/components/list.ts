import {
    defineStyle,
    createMultiStyleConfigHelpers,
  } from '@chakra-ui/styled-system'
  import { listAnatomy as parts } from '@chakra-ui/anatomy'
  import { mode } from '@chakra-ui/theme-tools'
  
  const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)
  
  const baseStyle = definePartsStyle((props) => ({
    // define the part you're going to style
    container: {
      listStylePos: 'inside', // change listStylePos to inside
      boxShadow: 'md', // change boxShadow to md
    },
    item: {
      p: 2, // set padding to 2
      color: 'primary.700',
      '&::marker': {
        // change color for marker
        color: mode('green.500', 'green.200')(props),
      },
    },
    icon: {
      //change color for icon
      color: mode('blue.500', 'blue.200'),
    },
  }))
  
  export const listTheme = defineMultiStyleConfig({ baseStyle })

  export default {
    listTheme
  }