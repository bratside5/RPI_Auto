import React from "react";
import { MoreMenuContainer, MoreImage } from "../../UI_styled-components/UI";
import MoreLogo from "../../../assets/square.svg";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <MoreMenuContainer>
      <Link to="/vehicle">
        <MoreImage src={MoreLogo} />
      </Link>
    </MoreMenuContainer>
  );
};

export default More;
