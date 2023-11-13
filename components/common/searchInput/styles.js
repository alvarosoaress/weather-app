import { COLORS, FONT, SIZES } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: COLORS.lightWhite,
    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
  },
  searchInput: {
    fontFamily: FONT.regularText,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: (isLoading) => ({
    width: SIZES.xxLarge,
    height: '100%',
    backgroundColor: isLoading ? COLORS.gray2 : COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.lightWhite,
  },
});

export default styles;
