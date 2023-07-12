import styled from 'styled-components/native';

export const BtnContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export default BtnContainer;

// type StylesProps = {
//   btnContainer: ViewStyle;
//   btnImg: ImageStyle;
// };

// type ObjProps = {
//   dimension?: string;
// };

// function styles(props?: ObjProps): StylesProps {
//   return StyleSheet.create<StylesProps>({
//     btnContainer: {
//       width: 40,
//       height: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     btnImg: {
//       width: props?.dimension,
//       height: props?.dimension,
//       resizeMode: 'cover',
//       tintColor: COLORS.tertiary,
//     },
//   });
// }
