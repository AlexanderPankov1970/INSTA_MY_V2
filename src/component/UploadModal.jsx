import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "src/atom/ModalAtom";
import Modal from "react-modal";

//Modal.setAppElement("#root");

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {/* <h1>UploadModal</h1> */}
      {/* {open && <h1>The Modal is open</h1>} */}
      {open && (
        <Modal
          className=" modal max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] 
          translate-x-[-50%] bg-white shadow-lg rounded-lg border-none"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1 className="">MODAL</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}
