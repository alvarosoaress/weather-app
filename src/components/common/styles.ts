import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT.regularText};
  font-size: ${({ theme }) => theme.SIZES.medium};
  color: ${({ theme }) => theme.COLORS.text};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.boldDisplay};
  font-size: ${({ theme }) => theme.SIZES.large};
  color: ${({ theme }) => theme.COLORS.primary};
`;
