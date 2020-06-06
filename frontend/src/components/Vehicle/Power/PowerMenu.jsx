import React from "react";
import ReactDOM from "react-dom";
import {
  VehicleMenuModal,
  VMModalContainer,
  VMModalBg,
  VMModalTitleContainer,
  VMModalTitle,
  VMModalClose,
  VMModalIconsContainer,
  VMModalIconsTitle,
  VMModalIconsTitleContainer,
} from "../../UI_styled-components/UI";
import PowerOff from "./PowerOff";
import Reset from "./Reset";
import Terminal from "./Teminal";

const PowerModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <>
            <VehicleMenuModal>
              <VMModalContainer
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <VMModalBg>
                  <VMModalTitleContainer>
                    <VMModalTitle>Power Options</VMModalTitle>
                    <VMModalClose
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={hide}
                    >
                      <span>×</span>
                    </VMModalClose>
                  </VMModalTitleContainer>
                  <VMModalIconsContainer>
                    <PowerOff />
                    <Reset />
                    <Terminal />
                  </VMModalIconsContainer>
                  <VMModalIconsTitleContainer>
                    <VMModalIconsTitle>Power</VMModalIconsTitle>
                    <VMModalIconsTitle>Reboot</VMModalIconsTitle>
                    <VMModalIconsTitle>Terminal</VMModalIconsTitle>
                  </VMModalIconsTitleContainer>
                </VMModalBg>
              </VMModalContainer>
            </VehicleMenuModal>
          </>
        </>,
        document.body
      )
    : null;

export default PowerModal;
