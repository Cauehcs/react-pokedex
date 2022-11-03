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
  justifyContent: "space-between",
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
      electric: {
        backgroundColor:
          getContainerColors("electric").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("electric").textColor.toString(),
        },
      },
      poison: {
        backgroundColor:
          getContainerColors("poison").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("poison").textColor.toString(),
        },
      },
      flying: {
        backgroundColor:
          getContainerColors("flying").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("flying").textColor.toString(),
        },
      },
      dragon: {
        backgroundColor:
          getContainerColors("dragon").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("dragon").textColor.toString(),
        },
      },
      bug: {
        backgroundColor: getContainerColors("bug").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("bug").textColor.toString(),
        },
      },
      normal: {
        backgroundColor:
          getContainerColors("normal").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("normal").textColor.toString(),
        },
      },
      dark: {
        backgroundColor: getContainerColors("dark").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("dark").textColor.toString(),
        },
      },
      psychic: {
        backgroundColor:
          getContainerColors("psychic").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("psychic").textColor.toString(),
        },
      },
      ground: {
        backgroundColor:
          getContainerColors("ground").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("ground").textColor.toString(),
        },
      },
      ice: {
        backgroundColor: getContainerColors("ice").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("ice").textColor.toString(),
        },
      },
      steel: {
        backgroundColor: getContainerColors("steel").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("steel").textColor.toString(),
        },
      },
      fairy: {
        backgroundColor: getContainerColors("fairy").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("fairy").textColor.toString(),
        },
      },
      fighting: {
        backgroundColor:
          getContainerColors("fighting").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("fighting").textColor.toString(),
        },
      },
      rock: {
        backgroundColor: getContainerColors("rock").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("rock").textColor.toString(),
        },
      },
      ghost: {
        backgroundColor: getContainerColors("ghost").backgroundColor.toString(),
        "h1, p": {
          color: getContainerColors("ghost").textColor.toString(),
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
    {
      type: "electric",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "poison",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "flying",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "dragon",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "bug",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "normal",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "dark",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "psychic",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "ground",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "ice",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "steel",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "fairy",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "fighting",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "rock",
      selected: true,
      css: {
        backgroundColor: "transparent",
        "h1, p": {
          color: colors.theme.colors["red-300"].value,
        },
      },
    },
    {
      type: "ghost",
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
