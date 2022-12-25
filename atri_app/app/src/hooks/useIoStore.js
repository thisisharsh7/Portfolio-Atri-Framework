import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "About": {},
  "Projects": {},
  "Blog": {},
  "BookCall": {},
  "Services": {}
}});

export default useIoStore;
