import { COLORS, FONT, SIZES } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flex: 1,
    height: 100,
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    marginVertical: SIZES.large,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  containerInfo: {
    padding: SIZES.large,
    paddingRight: 0,
  },
  containerBtn: {
    flex: 1,
    width: 50,
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
    marginRight: SIZES.small,
    marginBottom: SIZES.xSmall,
    maxWidth: '95%',
  },
  text: {
    fontFamily: FONT.regularText,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
});

export default styles;
