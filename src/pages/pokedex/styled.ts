import { styled } from "@stitches/react";

export const Container = styled("main", {
  backgroundColor: "$background",
  display: "inline-flex",
  "& > div:nth-child(-n+2)": {
    height: "calc(100vh - 60px)",
  },

  "& > div:nth-child(1)": {
    width: "70vw",
  },

  "& > div:nth-child(2)": {
    display: "flex",
    boxSizing: "border-box",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    width: "30vw",
    padding: "16px",
    paddingBottom: "0px",

    input: {
      width: "100%",
      fontSize: "20px",
      lineHeight: "24px",
    },

    "#sidebar-pokemons": {
      width: "100%",
      height: "calc(100vh - 60px - 32px)",
      overflow: "scroll",
      marginTop: "16px",
      display: "grid",
      gap: "16px",
      grid: "wrap",
      justifyContent: "start",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(min(90%/3, max(123px, 90%/3)), calc((100% - 32px) / 3)));",
      gridAutoRows: "min-content",

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
});
