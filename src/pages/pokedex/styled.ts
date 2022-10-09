import { styled } from "@stitches/react";

export const Container = styled("main", {
  backgroundColor: "$background",
  display: "inline-flex",

  "& > div:nth-child(-n+2)": {
    height: "calc(100vh - 60px)",
  },

  "& > div:nth-child(1)": {
    width: "70vw",
    backgroundColor: "$red-100",
  },

  "& > div:nth-child(2)": {
    display: "flex",
    boxSizing: "border-box",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    width: "30vw",
    padding: "16px",
    backgroundColor: "$red-300",

    input: {
      width: "100%",
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
});
