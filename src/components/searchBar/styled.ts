import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  alignItems: "center",

  svg: {
    position: "absolute",
    marginLeft: "20px",
    width: "32px",
    height: "32px",
  },
});

export const Input = styled("input", {
  height: "56px",
  boxSizing: "border-box",
  border: "none",
  padding: "16px 64px",
  borderRadius: "10px",
  outline: "none",
  boxShadow: "$sh1",
  textOverflow: "ellipsis",
  color: "$grey-300",

  "&::placeholder": {
    color: "$grey-300",
  },

  "&:focus": {
    color: "$grey-400",
  },

  variants: {
    icon: {
      false: {
        padding: "16px 32px",
      },
    },
  },
});

export const Icon = styled("svg", {});
