/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import 'styled-components';
import dark from '../theme/dark';

type Theme = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
