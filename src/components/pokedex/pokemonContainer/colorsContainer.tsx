import { colors } from "../../../styles/colors";

export function getContainerColors(type: String): {
  textColor: String;
  backgroundColor: String;
} {
  let textColor = "",
    backgroundColor = "";

  switch (type) {
    case "grass":
      textColor = "#fff";
      backgroundColor = "#8CDDCA";
      break;
    case "fire":
      textColor = "#fff";
      backgroundColor = "#F7A1A1";
      break;
    case "water":
      textColor = "#fff";
      backgroundColor = "#A6D0F4";
      break;
    default:
      textColor = "#fff";
      backgroundColor = colors.theme.colors["grey-300"].value;
      break;
  }

  return { textColor: textColor, backgroundColor: backgroundColor };
}
