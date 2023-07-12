import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.SIZES.medium};
`;
