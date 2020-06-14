import { reversePalette } from 'styled-theme/composer';
import { mediaSize, device } from './media';
import { homepage } from './palette';
import { padding, margin } from './layout';
import { transition, transform } from './ux';
import myFonts from './typography';

const theme = {
  mediaSize,
  device,
  palette: homepage,
  padding,
  margin,
  transition,
  transform,
  fonts: myFonts,
};

theme.reversePalette = reversePalette(theme.palette);

export default theme;
