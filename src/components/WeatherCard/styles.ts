import styled from 'styled-components/native';
import { Title } from '../common/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  gap: ${({ theme }) => theme.SIZES.medium};
  background-color: ${({ theme }) => theme.COLORS.gray};
  padding: ${({ theme }) => theme.SIZES.medium};
  border-radius: ${({ theme }) => theme.SIZES.medium};
  margin-bottom: ${({ theme }) => theme.SIZES.xLarge};
`;

export const ContainerLocation = styled.View`
  flex: 1;
  width: 130%;
  flex-direction: column;
`;

export const ContainerInfo = styled(ContainerLocation)`
  gap: ${({ theme }) => theme.SIZES.large};
`;

export const ContainerTemp = styled(ContainerLocation)`
  align-items: center;
`;

export const ContainerSituation = styled(ContainerLocation)``;

export const TitleTemp = styled(Title)`
  font-size: ${({ theme }) => theme.SIZES.xLarge};
  padding: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.text};
  border-bottom-width: 1px;
`;

export const ConditionImage = styled.Image`
  width: 120px;
  height: 120px;
`;
