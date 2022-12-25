import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { usefooterCb, useFlex7Cb, useFlex9Cb, useFlex10Cb, useFlex11Cb, useFlex13Cb, useFlex12Cb, useFlex14Cb, useFlex15Cb, useFlex16Cb, useFlex17Cb, usemainCb, useFlex129Cb, useFlex128Cb, useFlex127Cb, useFlex126Cb, useTextBox3Cb, useTextBox4Cb, useImage3Cb, useTextBox5Cb, useImage4Cb, useTextBox6Cb, useLink11Cb, useLink13Cb, useLink14Cb, useLink6Cb, useLink9Cb, useLink10Cb, useLink7Cb, useLink8Cb, useLink12Cb, useTextBox7Cb, useLink15Cb, useTextBox8Cb, useLink16Cb, useTextBox9Cb, useLink17Cb, useTextBox10Cb, useTextBox11Cb, useTextBox13Cb, useLink18Cb, useLink19Cb, useLink20Cb, useTextBox25Cb, useImage36Cb, useLink157Cb, useLink158Cb, useLink159Cb, useLink160Cb, useImage35Cb, useLink156Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
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

  const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const mainProps = useStore((state)=>state["Home"]["main"]);
const mainIoProps = useIoStore((state)=>state["Home"]["main"]);
const mainCb = usemainCb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const Link14Props = useStore((state)=>state["Home"]["Link14"]);
const Link14IoProps = useIoStore((state)=>state["Home"]["Link14"]);
const Link14Cb = useLink14Cb()
const Link6Props = useStore((state)=>state["Home"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["Home"]["Link6"]);
const Link6Cb = useLink6Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Link7Props = useStore((state)=>state["Home"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["Home"]["Link7"]);
const Link7Cb = useLink7Cb()
const Link8Props = useStore((state)=>state["Home"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["Home"]["Link8"]);
const Link8Cb = useLink8Cb()
const Link12Props = useStore((state)=>state["Home"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["Home"]["Link12"]);
const Link12Cb = useLink12Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Link15Props = useStore((state)=>state["Home"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["Home"]["Link15"]);
const Link15Cb = useLink15Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Link16Props = useStore((state)=>state["Home"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["Home"]["Link16"]);
const Link16Cb = useLink16Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Link17Props = useStore((state)=>state["Home"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["Home"]["Link17"]);
const Link17Cb = useLink17Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Link18Props = useStore((state)=>state["Home"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["Home"]["Link18"]);
const Link18Cb = useLink18Cb()
const Link19Props = useStore((state)=>state["Home"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["Home"]["Link19"]);
const Link19Cb = useLink19Cb()
const Link20Props = useStore((state)=>state["Home"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["Home"]["Link20"]);
const Link20Cb = useLink20Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Link157Props = useStore((state)=>state["Home"]["Link157"]);
const Link157IoProps = useIoStore((state)=>state["Home"]["Link157"]);
const Link157Cb = useLink157Cb()
const Link158Props = useStore((state)=>state["Home"]["Link158"]);
const Link158IoProps = useIoStore((state)=>state["Home"]["Link158"]);
const Link158Cb = useLink158Cb()
const Link159Props = useStore((state)=>state["Home"]["Link159"]);
const Link159IoProps = useIoStore((state)=>state["Home"]["Link159"]);
const Link159Cb = useLink159Cb()
const Link160Props = useStore((state)=>state["Home"]["Link160"]);
const Link160IoProps = useIoStore((state)=>state["Home"]["Link160"]);
const Link160Cb = useLink160Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Link156Props = useStore((state)=>state["Home"]["Link156"]);
const Link156IoProps = useIoStore((state)=>state["Home"]["Link156"]);
const Link156Cb = useLink156Cb()

  return (<>
  <Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Link className="p-Home Link160 bpt" {...Link160Props} {...Link160Cb} {...Link160IoProps}/>
<Link className="p-Home Link159 bpt" {...Link159Props} {...Link159Cb} {...Link159IoProps}/>
<Link className="p-Home Link158 bpt" {...Link158Props} {...Link158Cb} {...Link158IoProps}/>
<Link className="p-Home Link157 bpt" {...Link157Props} {...Link157Cb} {...Link157IoProps}/>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Link className="p-Home Link156 bpt" {...Link156Props} {...Link156Cb} {...Link156IoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home main bpt" {...mainProps} {...mainCb} {...mainIoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
<Flex className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Flex>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Link className="p-Home Link12 bpt" {...Link12Props} {...Link12Cb} {...Link12IoProps}/>
<Link className="p-Home Link8 bpt" {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
<Link className="p-Home Link7 bpt" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
</Flex>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Link className="p-Home Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
<Link className="p-Home Link14 bpt" {...Link14Props} {...Link14Cb} {...Link14IoProps}/>
<Link className="p-Home Link13 bpt" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
</Flex>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Link className="p-Home Link6 bpt" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
<Link className="p-Home Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
<Link className="p-Home Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<Link className="p-Home Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<Link className="p-Home Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Link className="p-Home Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Link className="p-Home Link19 bpt" {...Link19Props} {...Link19Cb} {...Link19IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Link className="p-Home Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Link className="p-Home Link20 bpt" {...Link20Props} {...Link20Cb} {...Link20IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
