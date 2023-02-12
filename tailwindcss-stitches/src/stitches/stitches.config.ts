import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import _ from 'lodash';
import commonTheme from './common';
import defTheme from './light-theme';
import { Theme, BaseTheme } from './types';

export const getStitchesTheme = (targetTheme: BaseTheme): BaseTheme => {
  return _.merge(targetTheme, commonTheme.theme);
};

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    shadows: {
      ...defTheme.shadows,
    },
    dropShadows: {
      ...defTheme.dropShadows,
    },
    colors: {
      ...commonTheme.theme.colors,
      ...defTheme.colors,
    },
  },
});

export const createThemeBase = stitches.createTheme;
export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;

export const createTheme = ({ type, theme, className }: Theme) => {
  if (!type) {
    throw new Error('Theme type is required');
  }
  return createThemeBase(
    className || `${type}-theme`,
    _.merge(defTheme, theme)
  );
};

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export type VariantProps<T extends { [key: string]: any;[key: symbol]: any; }> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
export type StitchesTheme = typeof theme;
