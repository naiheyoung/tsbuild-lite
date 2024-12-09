export type User = {
  name: string;
  age: number;
  sex: number;
}

export type ColorScheme = 'dark' | 'light'

type ThemeMode = {
  editor?: ColorScheme,
  code?: ColorScheme,
  codeBlock?: BundledTheme
}