import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
    padding: SIZES.medium,
    gap: SIZES.medium,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'column',
    gap: SIZES.xLarge,
  },
  containerLocation: {
    flex: 1,
    flexDirection: 'column',
  },
  containerSituation: {
    flex: 1,
    flexDirection: 'column',
    width: '130%',
  },
  containerTemp: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: FONT.boldDisplay,
    fontSize: SIZES.large,
    color: COLORS.tertiary,
  },
  textTitleTemp: {
    fontFamily: FONT.boldDisplay,
    fontSize: SIZES.large,
    color: COLORS.tertiary,
    padding: 4,
    borderBottomColor: COLORS.text,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontFamily: FONT.regularText,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  conditionImage: {
    width: 100,
    height: 100,
  },
});

export default styles;
