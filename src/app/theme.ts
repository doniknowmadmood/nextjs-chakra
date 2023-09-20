/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/CustomButton";

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
  },
  colors: {
    brand: {
      900: "#024fc9",
      800: "#146af5",
      700: "#2977f2",
      600: "#337df2",
      500: "#4287f5",
    },
  },
});
