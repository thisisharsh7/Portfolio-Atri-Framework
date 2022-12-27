import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Overlay } from "@atrilabs/react-component-manifests/src/manifests/Overlay/Overlay.tsx";
import { Image as Image9 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useOverlay6Cb, useImage439Cb } from "../page-cbs/pic";
import "../page-css/pic.css";
import "../custom/pic";

export default function Pic() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Overlay6Props = useStore((state)=>state["pic"]["Overlay6"]);
const Overlay6IoProps = useIoStore((state)=>state["pic"]["Overlay6"]);
const Overlay6Cb = useOverlay6Cb()
const Image439Props = useStore((state)=>state["pic"]["Image439"]);
const Image439IoProps = useIoStore((state)=>state["pic"]["Image439"]);
const Image439Cb = useImage439Cb()

  return (<>
  <Overlay className="p-pic Overlay6 bpt" {...Overlay6Props} {...Overlay6Cb} {...Overlay6IoProps}>
<Image9 className="p-pic Image439 bpt" {...Image439Props} {...Image439Cb} {...Image439IoProps}/>
</Overlay>
  </>);
}
