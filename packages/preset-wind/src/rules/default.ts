import type { Rule } from '@unocss/core'
import {
  alignments,
  appearance,
  appearances,
  aspectRatio,
  bgColors,
  borders,
  boxShadows,
  boxSizing,
  breaks as wordBreaks,
  contents,
  cssVariables as miniCssVariables,
  cursors,
  displays,
  fillColors,
  flex,
  floats,
  fontSmoothings,
  fontStyles,
  fonts,
  gaps,
  grids,
  insets,
  justifies,
  margins,
  opacity,
  orders,
  outline,
  overflows,
  paddings,
  placeholder,
  placements,
  pointerEvents,
  positions,
  questionMark,
  resizes,
  rings,
  sizes,
  tabSizes,
  textAligns,
  textColors,
  textDecorations,
  textIndents,
  textOverflows,
  textShadows,
  textStrokes,
  transforms,
  transitions,
  userSelects,
  verticalAligns,
  whitespaces,
  zIndexes,
} from '@unocss/preset-mini/rules'
import { container } from './container'
import { backgroundStyles } from './background'
import { filters } from './filters'
import { mixBlendModes } from './shadow'
import { spaces } from './spacing'
import { screenReadersAccess, textTransforms, hyphens, writingModes, writingOrientations, isolations, objectPositions } from './static'
import { tables } from './table'
import { listStyle, caretColors, boxDecorationBreaks, caretOpacity, imageRenderings, overscrolls } from './behaviors'
import { animations } from './animation'
import { cssVariables } from './variables'
import { divides } from './divide'
import { lineClamps } from './line-clamp'
import { fontVariantNumeric } from './typography'

export const rules: Rule[] = [
  miniCssVariables,
  cssVariables,
  container,
  screenReadersAccess,
  pointerEvents,
  appearances,
  positions,
  insets,
  lineClamps,
  isolations,
  zIndexes,
  orders,
  grids,
  floats,
  margins,
  boxSizing,
  displays,
  aspectRatio,
  sizes,
  flex,
  tables,
  transforms,
  animations,
  cursors,
  // touchAction, // TODO: implementation
  userSelects,
  resizes,
  // scrolls, // TODO: implementation
  listStyle,
  appearance,
  // columns, // TODO: implementation
  // breaks, // TODO: implementation
  placements,
  alignments,
  justifies,
  gaps,
  spaces,
  divides,
  overflows,
  overscrolls,
  // scrollBehavior, // TODO: implementation
  textOverflows,
  whitespaces,
  wordBreaks,
  borders,
  bgColors,
  boxDecorationBreaks,
  backgroundStyles,
  fillColors,
  // strokes, // TODO: implementation // color, width
  objectPositions,
  paddings,
  textAligns,
  textIndents,
  verticalAligns,
  fonts,
  textTransforms,
  fontStyles,
  fontVariantNumeric,
  textColors,
  textDecorations,
  fontSmoothings,
  tabSizes,
  textStrokes,
  textShadows,
  hyphens,
  writingModes,
  writingOrientations,
  placeholder,
  caretColors,
  caretOpacity,
  // accentColors, // TODO: implementation
  opacity,
  mixBlendModes,
  boxShadows,
  outline,
  // outline-width, // TODO: implementation
  rings,
  imageRenderings,
  filters,
  transitions,
  // willChange, // TODO: implementation
  contents,

  // should be the last
  questionMark,
].flat(1)