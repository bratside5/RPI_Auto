import React from "react";
import { MenuContainer, VehicleMenuImage } from "../../UI_styled-components/UI";
import PowerModal from "./PowerMenu";
import useModal from "../../../hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PowerSettings = () => {
  const { isShowing, toggle } = useModal();
  return (
    <MenuContainer>
      <VehicleMenuImage>
        <button className="button-default" onClick={toggle}>
          <FontAwesomeIcon icon="power-off" size="6x" />
        </button>
        <PowerModal isShowing={isShowing} hide={toggle} />
      </VehicleMenuImage>
    </MenuContainer>
  );
};

export default PowerSettings;
