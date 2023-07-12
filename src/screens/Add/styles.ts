import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.SIZES.xxLarge};
  padding-top: 20px;
  gap: ${({ theme }) => theme.SIZES.medium};
`;
