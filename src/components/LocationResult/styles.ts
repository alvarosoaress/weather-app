import styled from 'styled-components/native';
import { Title } from '@/components/common/styles';
import { MotiView } from 'moti';

export const Container = styled(MotiView)`
  width: 100%;
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.gray};
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.SIZES.medium};
  margin-inline: ${({ theme }) => theme.SIZES.large};
  border-width: 1px;
  border-color: 'rgba(255,255,255,0.5)';
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.SIZES.medium};
  width: 80%;
`;

export const LocalTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.SIZES.xSmall};
`;

export const ContainerBtn = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ theme }) => theme.SIZES.medium};
  border-bottom-right-radius: ${({ theme }) => theme.SIZES.medium};
  background-color: ${({ theme }) => theme.COLORS.gray2};
`;
