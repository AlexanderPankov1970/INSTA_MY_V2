import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "src/atom/ModalAtom";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>UploadModal</h1>
      {open && <h1>The Modal is open</h1>}
    </div>
  );
}
