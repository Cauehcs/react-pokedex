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
    case "poison":
      textColor = "#fff";
      backgroundColor = "#B76EA3";
      break;
    case "flying":
      textColor = "#fff";
      backgroundColor = "#9AA6F7";
      break;
    case "dragon":
      textColor = "#fff";
      backgroundColor = "#8B7DEC";
      break;
    case "bug":
      textColor = "#fff";
      backgroundColor = "#B7C446";
      break;
    case "normal":
      textColor = "#fff";
      backgroundColor = "#B6B5A4";
      break;
    case "dark":
      textColor = "#fff";
      backgroundColor = "#896A58";
      break;
    case "electric":
      textColor = "#fff";
      backgroundColor = "#FFD250";
      break;
    case "psychic":
      textColor = "#fff";
      backgroundColor = "#F271A3";
      break;
    case "ground":
      textColor = "#fff";
      backgroundColor = "#E2C46A";
      break;
    case "ice":
      textColor = "#fff";
      backgroundColor = "#7FD3F7";
      break;
    case "steel":
      textColor = "#fff";
      backgroundColor = "#B7B6C0";
      break;
    case "fairy":
      textColor = "#fff";
      backgroundColor = "#ECA4E6";
      break;
    case "fighting":
      textColor = "#fff";
      backgroundColor = "#C56D5B";
      break;
    case "rock":
      textColor = "#fff";
      backgroundColor = "#C5B678";
      break;
    case "ghost":
      textColor = "#fff";
      backgroundColor = "#7D7CC0";
      break;
    default:
      textColor = "#fff";
      backgroundColor = colors.theme.colors["grey-300"].value;
      break;
  }

  return { textColor: textColor, backgroundColor: backgroundColor };
}
