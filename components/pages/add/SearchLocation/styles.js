import { COLORS, FONT, SIZES } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    marginVertical: SIZES.xLarge,

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  containerInfo: {
    padding: SIZES.large,
    gap: SIZES.xSmall,
  },
  containerBtn: {
    flex: 1,
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: SIZES.medium,
    borderBottomRightRadius: SIZES.medium,
    // borderRadius: SIZES.medium,
    backgroundColor: '#494A62',
    // opacity: 0.5,
    // borderWidth: 2,
    // borderColor: 'rgba(255,255,255,0.5)',
  },
  btnImg: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    tintColor: COLORS.tertiary,
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
