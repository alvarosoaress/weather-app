import { COLORS } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    resizeMode: 'cover',
    tintColor: COLORS.tertiary,
  }),
});

export default styles;
