import styled from 'styled-components/native';

type SearchBtnProps = {
  isLoading?: boolean;
};

export const Container = styled.View`
  flex-direction: row;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.bgContrast};
  margin-right: ${({ theme }) => theme.SIZES.xSmall};
  border-radius: ${({ theme }) => theme.SIZES.small};
`;

export const SearchInput = styled.TextInput`
  border-radius: ${({ theme }) => theme.SIZES.small};
  background-color: ${({ theme }) => theme.COLORS.bgContrast};
  font-family: ${({ theme }) => theme.FONT.regularText};
  padding: ${({ theme }) => theme.SIZES.xxSmall};
  padding-left: ${({ theme }) => theme.SIZES.small};
  padding-right: ${({ theme }) => theme.SIZES.small};
`;

export const SearchBtn = styled.TouchableOpacity<SearchBtnProps>`
  height: 100%;
  padding: ${({ theme }) => theme.SIZES.xxSmall};
  background-color: ${(props) =>
    props.isLoading === true
      ? props.theme.COLORS.gray2
      : props.theme.COLORS.primary};
  border-radius: ${({ theme }) => theme.SIZES.small};
`;

SearchBtn.defaultProps = {
  isLoading: false,
};
