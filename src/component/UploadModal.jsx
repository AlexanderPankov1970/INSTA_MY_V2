import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "src/atom/ModalAtom";
import Modal from "react-modal";
import { HiOutlineCamera } from "react-icons/hi";
import Image from "next/image";

export default function UploadModal() {
  const filePickerRef = useRef(null);
  const [open, setOpen] = useRecoilState(modalState);
  const [selectFile, setSelectFile] = useState(null);

  function addImageToPost(event) {
    const reader = new FileReader(); //FileReader - читает файлы внутри input
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectFile(readerEvent.target.result);
    };
    //console.log(5555, readerEvent.target.result);
  }

  return (
    <div>
      {/* <h1>UploadModal</h1> */}
      {/* {open && <h1>The Modal is open</h1>} */}
      {open && (
        <Modal
          className=" max-w-lg w-[90%] p-16 absolute top-56 left-[50%] 
          translate-x-[-50%] bg-white border-2 rounded-lg shadow-2xl focus:ring-0"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectFile ? (
              <img
                onClick={() => setSelectFile(null)}
                src={selectFile}
                alt="Image"
                className="w-full max-h-[250px] object-cover cursor-pointer"
              />
            ) : (
              <HiOutlineCamera
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer text-4xl bg-red-200 rounded-full text-red-500 border-2 active:scale-125"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength={150}
              placeholder="Please enter your caption..."
              className="mt-4 border-none text-center w-full focus:ring-0"
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-2xl hover:brightness-125
               disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
