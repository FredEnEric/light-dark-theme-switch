interface IThemeProperties {
  background: string;
  color: string;
  accent: string;
}

const white = '#ffffff';
const black = '#161617';
const darkGray = '#2a2a2a';
const gray = '#f8f8f9';

const lightTheme: IThemeProperties = {
  background: gray,
  color: black,
  accent: white,
};

const darkTheme: IThemeProperties = {
  background: black,
  color: white,
  accent: darkGray,
};

const theme = (mode: string): IThemeProperties => (mode === 'dark' ? darkTheme : lightTheme);

export default theme;
