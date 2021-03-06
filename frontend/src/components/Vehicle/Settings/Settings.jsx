import React from "react";
import { MenuContainer, VehicleMenuImage } from "../../UI_styled-components/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  return (
    <MenuContainer href="#">
      <VehicleMenuImage>
        <FontAwesomeIcon icon="check-square" />
      </VehicleMenuImage>
    </MenuContainer>
  );
};

export default Settings;
