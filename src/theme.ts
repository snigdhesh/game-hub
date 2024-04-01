import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { //We need to define datatype as ThemeConfig, to access it's properties
    initialColorMode: 'dark'
};

const theme = extendTheme({config});

export default theme;