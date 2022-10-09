import React, { InputHTMLAttributes } from "react";
import { ProfileIcon } from "../../assets/icons/icon_profile";
import * as styled from "./styled";

type PropsType = React.PropsWithChildren<{
  icon?: JSX.Element;
}>;

export const SearchBar = ({
  icon,
  ...props
}: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <styled.Container>
      {icon && <styled.Icon>{icon}</styled.Icon>}
      <styled.Input
        icon={icon !== undefined}
        {...(props as InputHTMLAttributes<HTMLInputElement>)}
      />
    </styled.Container>
  );
};
