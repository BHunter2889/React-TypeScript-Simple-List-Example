const space = {
    px: '0.1rem',
    0: '0',
    0.5: '0.2rem',
    1: '0.4rem',
    2: '0.8rem',
    3: '1.2rem',
    4: '1.6rem',
    5: '2rem',
    6: '2.4rem',
    8: '3.2rem',
    10: '4rem',
    12: '4.8rem',
    14: '5.6rem',
    16: '6.4rem',
    20: '8rem',
} as const;
  
export type space = typeof space;
export default space;