type AppColorsRecord = Record<keyof typeof DARK, string>;

const DARK = {
  brand: '#FF0022',
  white: '#FFFFFF',
  primaryBg: '#121212',
  secondaryBg: '#262626',
  modalBg: '#121212',
  primaryTxt: '#FFFFFF',
  secondaryTxt: '#808080',
  system: '#808080',
  outline: '#404040',
  success: '#72C99A',
};
const LIGHT: AppColorsRecord = {
  brand: '#FF0022',
  white: '#FFFFFF',
  primaryBg: '#FFFFFF',
  secondaryBg: '#F5F5F5',
  modalBg: 'rgba(255, 255, 255, 0.8)',
  primaryTxt: '#121212',
  secondaryTxt: '#808080',
  system: '#000000',
  outline: '#DEDEDE',
  success: '#46B278',
};

export const appColors = {
  light: LIGHT,
  dark: DARK,
};

// const btnHeight = {
//   btnHeightBig: '50',
//   btnHeightSmall: '22',
// };
