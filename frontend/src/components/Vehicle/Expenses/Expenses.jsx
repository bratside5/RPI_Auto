import React from "react";
import { MenuContainer, VehicleMenuImage } from "../../UI_styled-components/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Expenses = () => {
  return (
    <MenuContainer href="#">
      <VehicleMenuImage>
        <FontAwesomeIcon icon="check-square" />
      </VehicleMenuImage>
    </MenuContainer>
  );
};

export default Expenses;
