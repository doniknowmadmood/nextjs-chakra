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

const baseStyle = defineStyle({
  background: "#000",
  color: "white",
  size: "md",
  variant: "solid",
});

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

const gradient = defineStyle({
  background: "linear-gradient(180deg, #000000 0%, #ccc 100%)",
  backgroundSize: "400% 400%",
  backgroundPosition: "0% 50%",
  transition: "all 0.6s ease-in-out",
  _hover: {
    backgroundPosition: "20% 50%",
    background: "linear-gradient(180deg, #ccc 0%, #000 100%)",
  },
  _disabled: {
    backgroundPosition: "0% 50%",
  },
});

const solid = defineStyle({
  backgroundColor: "#ccc",
  color: "white",
  transition: "all 0.6s ease-in-out",
  _hover: {
    color: "gray.800",
    backgroundColor: "#ccc",
  },
});

const xl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "16",
  borderRadius: "md",
});

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "20px",
  },
  variants: { outline, gradient, solid },
  defaultProps: { variant: "solid", size: "lg" },
});
