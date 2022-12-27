import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "Projects": {},
  "Blog": {},
  "BookCall": {},
  "design-tips-for-designers": {},
  "how-to-build-rapport": {},
  "free-website-tools": {},
  "logo-design-trends-to-avoid": {},
  "best-UI-design-tools": {}
}});

export default useIoStore;
