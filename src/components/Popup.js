import React from "react";
import { PopupContainer, PopupInner, Button } from "./PopupElements.js";
import { IoMdClose } from "react-icons/io";

function Popup(props) {
  return props.trigger ? (
    <PopupContainer>
      <PopupInner>
        <Button onClick={() => props.setTrigger(false)}>
          <IoMdClose />
        </Button>
        {props.children}
      </PopupInner>
    </PopupContainer>
  ) : (
    ""
  );
}
export default Popup;
