import React from "react";
import { MenuContainer, VehicleMenuImage } from "../../UI_styled-components/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashCam = () => {
  return (
    <MenuContainer href="#">
      <VehicleMenuImage>
        <FontAwesomeIcon icon="check-square" />
      </VehicleMenuImage>
    </MenuContainer>
  );
};

export default DashCam;
