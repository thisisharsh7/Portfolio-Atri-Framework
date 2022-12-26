import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "Projects": {},
  "Blog": {},
  "BookCall": {}
}});

export default useIoStore;
