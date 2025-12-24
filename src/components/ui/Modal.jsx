import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { XIcon } from "lucide-react";
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  // Returns the trigger button with the click handler injected
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Close({ children }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => close(),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    // reduce screen opacity no blurss!
    <div className="fixed  flex flex-col items-center justify-center inset-0 z-1000 h-screen w-full bg-black/50 backdrop-blur-none transition-all duration-500">
      <div
        ref={ref}
        /* Your Modal Window */
        className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-lg transition-all duration-500"
      >
        <button
          onClick={close}
          className="absolute right-5 top-3 translate-x-3 rounded-sm p-1.5 transition-all duration-200 hover:bg-gray-100"
        >
          <XIcon />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal;
