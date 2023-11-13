import { COLORS, FONT, SIZES } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcomeMessage: {
    fontFamily: FONT.mediumDisplay,
    fontSize: SIZES.large,
    color: COLORS.text,
  },
  text: {
    fontFamily: FONT.regularText,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
});

export default styles;
