import { atom } from "recoil";

export const modalState = atom({
  //заменили text на modal
  key: "modalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
