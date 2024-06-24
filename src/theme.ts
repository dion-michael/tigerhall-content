import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};
const theme = extendTheme({
  config,
  colors: {
    brand: {
      main: '#FF5900',
      secondary: '#F78104',
      yellow: '#FAAb36',
      teal: '#005f60',
      grey: '#f5f3ee',
      black: '#000000',
      white: '#ffffff'
    },
    success: '#04B100',
    error: '#BE0505',
    tigerOrange: {
      50: '#fff9f6',
      100: '#fff3ed',
      200: '#ffdecc',
      300: '#ffc3a3',
      400: '#FFA97A',
      500: '#FF7429',
      600: '#FF5900',
      700: '#DD3722',
      800: '#AD3D00',
      900: '#842E00'
    },
    soSunny: {
      50: '#FFF8F1',
      100: '#FEECD9',
      200: '#FCE5CC',
      300: '#FCCC9C',
      400: '#FAB269',
      500: '#F99936',
      600: '#F78104',
      700: '#DD7608',
      800: '#BA6103',
      900: '#7D4003'
    },
    kindaYellow: {
      50: '#FFf7EB',
      100: '#FFEDD6',
      200: '#FFE7C1',
      300: '#FCDEB0',
      400: '#FCCC87',
      500: '#FABD5E',
      600: '#FAAB36',
      700: '#D4902B',
      800: '#BA8029',
      900: '#7D571C'
    },
    teal: {
      50: '#EAF6F6',
      100: '#D4EDED',
      200: '#A6D9D9',
      300: '#7DC4C7',
      400: '#249EA0',
      500: '#008083',
      600: '#005F60',
      700: '#004747',
      800: '#003030',
      900: '#001717'
    },
    grey: {
      50: '#FAF9F7',
      100: '#F4F3F0',
      200: '#F5F3EE',
      300: '#EDEAE1',
      400: '#DEDBD4',
      500: '#BBB8B2',
      600: '#A3A099',
      700: '#797670',
      800: '#4D4B46',
      900: '#383733'
    },
    coolGrey: {
      50: '#F7F9FA',
      100: '#ECF1F4',
      200: '#E7ECEE',
      300: '#D4D9DE',
      400: '#B2B8BB',
      500: '#99A0A3',
      600: '#707679',
      700: '#464A4D',
      800: '#333738',
      900: '#151618'
    },
    black: '#000000',
    white: '#ffffff',
    green: {
      50: '#F0FFF4',
      100: '#C6F7C4',
      200: '#9BE899',
      300: '#5AD057',
      400: '#2FC12C',
      500: '#04B100',
      600: '#038E00',
      700: '#026A00',
      800: '#024700',
      900: '#1C4532'
    },
    red: {
      50: '#FFF5F5',
      100: '#FBCDCD',
      200: '#F46A6A',
      300: '#F13838',
      400: '#ED0606',
      500: '#BE0505',
      600: '#8E0404',
      700: '#5F0202',
      800: '#470202',
      900: '#3C080A'
    },
    blue: {
      50: '#EBF8FF',
      100: '#BEE3F8',
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1',
      500: '#3182CE',
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#2A4365',
      900: '#1A365D'
    },
    whiteAlpha: {
      50: 'rgba(255,255,255,0.04)',
      100: 'rgba(255,255,255, 0.06)',
      200: 'rgba(255,255,255, 0.08)',
      300: 'rgba(255,255,255, 0.16)',
      400: 'rgba(255,255,255, 0.24)',
      500: 'rgba(255,255,255, 0.36)',
      600: 'rgba(255,255,255, 0.48)',
      700: 'rgba(255,255,255, 0.64)',
      800: 'rgba(255,255,255, 0.80)',
      900: 'rgba(255,255,255, 0.92)'
    },
    blackAlpha: {
      50: 'rgba(0,0,0,0.04)',
      100: 'rgba(0,0,0, 0.06)',
      200: 'rgba(0,0,0, 0.08)',
      300: 'rgba(0,0,0, 0.16)',
      400: 'rgba(0,0,0, 0.24)',
      500: 'rgba(0,0,0, 0.36)',
      600: 'rgba(0,0,0, 0.48)',
      700: 'rgba(0,0,0, 0.64)',
      800: 'rgba(0,0,0, 0.80)',
      900: 'rgba(0,0,0, 0.92)'
    }
  },
  fonts: {
    body: 'Montreal, sans-serif',
    heading: 'Formula, sans-serif',
    mono: 'Roboto Mono, serif'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
    '10xl': '10rem'
  }
});

export default theme;
