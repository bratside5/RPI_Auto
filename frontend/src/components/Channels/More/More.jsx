import React from "react";
import { MenuContainer, MoreImage } from "../../UI_styled-components/UI";
import MoreLogo from "../../../assets/square.svg";

const More = () => {
  return (
    <MenuContainer href="#">
      <MoreImage src={MoreLogo} />
    </MenuContainer>
  );
};

export default More;
