import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// export default defineStyleConfig({
//   // Styles for the base style
//   baseStyle: {},
//   // Styles for the size variations
//   sizes: {},
//   // Styles for the visual style variations
//   variants: {},
//   // The default `size` or `variant` values
//   defaultProps: {},
// });

const outline = defineStyle({
  border: "2px dashed",
  color: "white",
  borderColor: "gray.200",
  borderRadius: 20,
  fontWeight: "semibold",
  _hover: {
    color: "gray.800",
    borderColor: "transparent",
  },
  _disabled: {
    color: "gray.400",
    borderColor: "gray.200",
  },
  transition: "all 0.6s ease-in-out",
});

const xl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "16",
  borderRadius: "md",
});

export const buttonTheme = defineStyleConfig({
  sizes: { xl },
  variants: { outline },
});
