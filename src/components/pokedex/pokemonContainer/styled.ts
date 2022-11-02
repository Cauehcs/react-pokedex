import { styled } from "@stitches/react";
import { colors } from "../../../styles/colors";
import { getContainerColors } from "./colorsContainer";

export const Container = styled("div", {
  position: "relative",
  height: "175px",
  padding: "16px",
  paddingBottom: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  borderRadius: "10px",
  overflow: "hidden",
  userSelect: "none",

  ".detail-background": {
    position: "absolute",
    width: "100%",
    aspectRatio: "1",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  ".db-1": {
    top: "-33%",
    left: "-18%",
  },

  ".db-2": {
    bottom: "-35%",
    right: "-40%",
  },

  img: {
    zIndex: 1,
    width: "100%",
  },

  ".info": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "8px",
    zIndex: 1,

    h1: {
      fontSize: "18px",
      fontWeight: "800",
    },

    p: {
      fontSize: "14px",
      fontWeight: "500",
    },
  },

  variants: {
    selected: {
      true: {
        "&::before": {
          content: "",
          backgroundImage:
            "url(http://www.pokemongobrasil.com/wp-content/uploads/2016/08/pokebola-go-1.png)",
          backgroundSize: "175%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          opacity: 0.5,
        },

        ".detail-background": {
          display: "none",
        },
      },
      false: {
        cursor: "pointer",

        "&:hover": {
          filter: "brightness(0.9)",
        },
      },
    },
    type: {
      fire: {
        backgroundColor: getContainerColors("fire").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("fire").textColor.toString(),
        },
      },
      water: {
        backgroundColor: getContainerColors("water").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("water").textColor.toString(),
        },
      },
      grass: {
        backgroundColor: getContainerColors("grass").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("grass").textColor.toString(),
        },
      },
    },
  },

  compoundVariants: [
    {
      type: "water",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "fire",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "grass",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
  ],
});
