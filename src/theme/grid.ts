
interface ThemeGridContainer {
  maxWidth: number
  padding: number | any[]
  paddingSmall: number
}

interface ThemeGridNavBarWidth {
  tablet: number
  desktop: number
}

export interface ThemeGrid {
  gutter: number | any[]
  container: ThemeGridContainer
  navBarWidth: ThemeGridNavBarWidth
}

export const grid = {
  gutter: [16, 24, 40],
  container: {
    maxWidth: 1400,
    padding: [16, 40, 40, 128],
    paddingSmall: 16,
  },
  navBarWidth: {
    tablet: 80,
    desktop: 240,
  },
}
