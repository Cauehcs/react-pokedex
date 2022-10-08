import { styled } from "@stitches/react";

export const Container = styled("header", {
  backgroundColor: "$red-500",
  width: "100%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > div": {
    display: "inline-flex",

    "& button:nth-child(2)": {
      margin: "0 16px",
    },
  },
});

export const Button = styled("button", {
  backgroundColor: "$red-100",
  boxShadow: "$sh1",

  aspectRatio: "1",

  width: "40px",
  borderRadius: "10px",
  border: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",

  backgroundImage: `url("../assets/icons/profile.svg")`,

  "&:hover": {
    backgroundColor: "$red-300",
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$white",
        pointerEvents: "none",
      },
    },
  },
});
