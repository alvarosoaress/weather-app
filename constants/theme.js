const COLORS = {
  background: '#232136',
  primary: '#3e8fb0',
  secondary: '#9ccfd8',
  tertiary: '#ea9a97',
  quadrinary: '#eb6f92',
  accent: '#c4a7e7',

  gray: '#393552',
  gray2: '#6e6a86',

  text: '#e0def4',
  lightWhite: '#FAFAFC',
};

const FONT = {
  regularText: 'SFPROTextRegular',
  mediumText: 'SFPROTextMedium',
  boldText: 'SFPROTextBold',
  regularDisplay: 'SFPRODisplayRegular',
  mediumDisplay: 'SFPRODisplayMedium',
  boldDisplay: 'SFPRODisplayBold',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
