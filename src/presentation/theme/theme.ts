import { StyleSheet } from "react-native"


export const colors = {
  primary: '#FFD700',
  secondary: '#FF6347',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#808080',
  darkGrey: '#404040',
  lightGrey: '#D3D3D3',
  transparent: 'transparent',
  background: '#F0F0F0',
}

export const fonts = {
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
}

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
}

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
}

export const borderRadii = {
  small: 4,
  medium: 8,
  large: 12,
}

export const shadows = {
  small: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
}

export const theme = {
  colors,
  fonts,
  fontSizes,
  spacing,
  borderRadii,
  shadows,
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: colors.transparent,
  },

  title: {
    color: colors.black,
    fontSize: fontSizes.large,
    fontFamily: fonts.bold,
    marginVertical: spacing.medium,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    marginVertical: spacing.small,
    borderRadius: borderRadii.medium,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.grey,
    fontSize: fontSizes.medium,
    fontFamily: fonts.bold,
  },

  card: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    marginVertical: spacing.small,
    borderRadius: borderRadii.medium,
    ...shadows.medium,
  },

  cardText: {
    color: colors.black,
    fontSize: fontSizes.medium,
    fontFamily: fonts.medium,
  },


})