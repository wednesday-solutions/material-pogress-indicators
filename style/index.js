import { Dimensions, PixelRatio, Platform } from 'react-native';
// Precalculate Device Dimensions for better performance
const y = Dimensions.get('window').height;
const x = Dimensions.get('window').width;
const platform = Platform.OS;

// Calculating ratio from breakpoints
const ratioX = PixelRatio.get();
const ratioY = PixelRatio.get();

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = normalize();

function normalize(size = baseUnit) {
  return Math.round(PixelRatio.roundToNearestPixel(size));
}
// We add an em() shortcut function
function em(value) {
  return moderateScale(unit * value);
}

function gridItemWidth(itemsPerRow, padding = em(1)) {
  const totalGutters = itemsPerRow + 1;
  const totalSpacing = totalGutters * padding;
  const itemWidth = (x - totalSpacing) / itemsPerRow;
  return itemWidth;
}

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (x / guidelineBaseWidth) * size;
const verticalScale = size => (y / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Then we set our styles with the help of the em() function
export default {
  platform,
  em,
  scale,
  verticalScale,
  moderateScale,
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1),
  PADDING_GRID: em(0.5),

  // COLORS
  AZURE_RADIANCE: '#1088EB',
  NEON_CARROT: '#FF9233',
  RAZZMATAZZ: '#D3005B',
  GRAY: '#848484',
  PRIMARY_COLOR: '#7119f1',
  SECONDARY_COLOR: '#FFFFFF',
  ACCENT_COLOR: '#112872',
  ACTION_COLOR: '#FF0000',
  DOVE_GRAY: '#707070',
  BUTTON_BORDER_COLOR: '#8D8D8D',
  CORNFLOWER_BLUE: '#2E81C6',
  RED_COLOR: '#FF3B58',

  TEXT_PRIMARY_COLOR: '#1F2C41',
  TEXT_SECONDARY_COLOR: '#333333',
  TEXT_LIGHT_GRAY_COLOR: '#919191',
  BLACK: '#000000',
  WHITE: '#FFFFFF',

  WINDOW_COLOR: '#F4F4F4',

  SUCCESS_COLOR: '#40A40B',
  WARNING_COLOR: '#F7CA18',
  DANGER_COLOR: '#FF0000',
  DISABLED_COLOR: '#8390A0',

  ERROR_BG_COLOR: '#FF7700',

  EMPTY_STAR_COLOR: '#cccccc',

  OVERLAY_COLOR: 'rgba(0, 0, 0, 0.5)',

  INDICATOR:'#7119f1',
  TRACK: '#DEC6FC',

  // FONT
  FONT_SIZE: em(1), // 16
  FONT_SIZE_14: em(0.875), // 14
  FONT_SIZE_MD: em(0.85),
  FONT_SIZE_SM: em(0.75),
  FONT_SIZE_XS: em(0.5),
  FONT_SIZE_18: em(1.125), // 18
  FONT_SIZE_LG: em(1.25),
  FONT_SIZE_XL: em(1.37),
  FONT_SIZE_XXL: em(1.5),

  // ICONS
  ICON_SIZE: em(1),
  ICON_SIZE_MD: em(0.85),
  ICON_SIZE_SM: em(0.75),
  ICON_SIZE_XS: em(0.5),
  ICON_SIZE_LG: em(1.25),
  ICON_SIZE_XL: em(1.37),

  // COMPONENTS
  RADIUS: em(0.5),
  RADIUS_SM: em(0.25),
  RADIUS_XS: em(0.15),
  RADIUS_LG: em(1),
  RADIUS_XL: em(1.25),

  ITEM_BACKGROUND: '#FFFFFF',
  ITEM_BACKGROUND_SELECTED: '#CCCCCC',

  // Grid
  GRID_ITEM_WIDTH: gridItemWidth,

  // Border
  BORDER_COLOR: '#CCCCCC',
  BORDER_WIDTH: 1,
  BORDER_WIDTH_SM: 0.5,
  BORDER_WIDTH_LG: 1.5,
  BORDER_WIDTH_XL: 2,
  BORDER_WIDTH_XS: 0.25,

  BOX_SHADOW: Platform.select({
    ios: {
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 4
    },
    android: {
      elevation: 2
    }
  }),
  FONT_BOLD: Platform.select({
    ios: {
      fontFamily: 'Riposte',
      fontWeight: '700'
    },
    android: {
      fontFamily: 'Riposte-Bold'
    }
  }),
  FONT_SEMI_BOLD: Platform.select({
    ios: {
      fontFamily: 'Riposte',
      fontWeight: '600'
    },
    android: {
      fontFamily: 'Riposte-SemiBold'
    }
  }),
  FONT_REGULAR: Platform.select({
    ios: {
      fontFamily: 'Riposte',
      fontWeight: '400'
    },
    android: {
      fontFamily: 'Riposte-Regular'
    }
  }),
  FONT_LIGHT: Platform.select({
    ios: {
      fontFamily: 'Riposte',
      fontWeight: '300'
    },
    android: {
      fontFamily: 'Riposte-Light'
    }
  }),
  FONT_LAZER: Platform.select({
    ios: {
      fontFamily: 'Riposte',
      fontWeight: '250'
    },
    android: {
      fontFamily: 'Riposte-Lazer'
    }
  })
};
