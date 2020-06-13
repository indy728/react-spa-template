export const mediaSize = {
  xs: '575px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const device = {
  sm: `(min-width: ${mediaSize.sm})`,
  md: `(min-width: ${mediaSize.md})`,
  lg: `(min-width: ${mediaSize.lg})`,
  xl: `(min-width: ${mediaSize.xl})`,
  maxSm: `(max-width: ${mediaSize.sm - 1})`,
  maxMd: `(max-width: ${mediaSize.md - 1})`,
  maxLg: `(max-width: ${mediaSize.lg - 1})`,
  maxXL: `(max-width: ${mediaSize.xl - 1})`,
};
