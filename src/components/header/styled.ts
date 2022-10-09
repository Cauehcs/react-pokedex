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
      margin: "0 32px",
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

export const Profile = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  position: "absolute",
  right: "40px",

  p: {
    textAlign: "right",
    color: "$white",
  },

  "& p:nth-child(1)": {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "800",
  },

  "& p:nth-child(2)": {
    fontSize: "10px",
    lineHeight: "16px",
    fontWeight: "600",
  },

  "& #header-profile-picture": {
    width: "40px",
    aspectRatio: "1",
    backgroundColor: "$white",
    borderRadius: "100%",
    boxShadow: "$sh1",
    marginLeft: "16px",
  },
});
