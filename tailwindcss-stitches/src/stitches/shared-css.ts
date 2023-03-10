import { css } from './stitches.config';

const sharedFocus = css({
  WebkitTapHighlightColor: 'transparent',
  '&:focus:not(&:focus-visible)': {
    boxShadow: 'none',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary',
  },
  '@safari': {
    WebkitTapHighlightColor: 'transparent',
    outline: 'none',
  },
});

const cssFocusVisible = css({
  variants: {
    isFocusVisible: {
      true: {
        outline: 'transparent solid 2px',
        outlineOffset: '2px',
        boxShadow: '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary',
      },
      false: {
        outline: 'none',
      },
    },
  },
});

const cssNoBlurriness = css({
  /* Avoid blurriness */
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
});

const sharedVisuallyHidden = css({
  border: '0px',
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
});

const sharedDialogPopup = css({
  // for dropdown triggers
  '&[aria-haspopup="true"]&[aria-expanded="true"]': {
    opacity: 0.7,
    transform: 'scale(0.97)',
  },
});

export const sharedCss = {
  sharedFocus,
  cssFocusVisible,
  cssNoBlurriness,
  sharedVisuallyHidden,
  sharedDialogPopup,
};
