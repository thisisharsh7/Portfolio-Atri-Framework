import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex50Cb, useFlex61Cb, useFlex60Cb, useFlex57Cb, useFlex58Cb, useFlex55Cb, useFlex51Cb, useFlex56Cb, useFlex52Cb, useFlex53Cb, useFlex54Cb, useFlex59Cb, useFlex121Cb, useFlex120Cb, useFlex119Cb, useFlex118Cb, useTextBox37Cb, useTextBox40Cb, useTextBox41Cb, useImage14Cb, useTextBox39Cb, useImage13Cb, useTextBox38Cb, useLink61Cb, useLink62Cb, useLink63Cb, useLink64Cb, useLink65Cb, useLink66Cb, useLink67Cb, useLink68Cb, useLink69Cb, useTextBox42Cb, useLink70Cb, useTextBox43Cb, useLink71Cb, useTextBox44Cb, useLink72Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useLink73Cb, useLink74Cb, useLink75Cb, useImage32Cb, useLink147Cb, useLink148Cb, useLink149Cb, useLink150Cb, useImage31Cb, useLink146Cb } from "../page-cbs/Projects";
import "../page-css/Projects.css";
import "../custom/Projects";

export default function Projects() {
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

  const Flex50Props = useStore((state)=>state["Projects"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Projects"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex61Props = useStore((state)=>state["Projects"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Projects"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex60Props = useStore((state)=>state["Projects"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Projects"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex57Props = useStore((state)=>state["Projects"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Projects"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["Projects"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Projects"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex55Props = useStore((state)=>state["Projects"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Projects"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex51Props = useStore((state)=>state["Projects"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Projects"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex56Props = useStore((state)=>state["Projects"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Projects"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex52Props = useStore((state)=>state["Projects"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Projects"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["Projects"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Projects"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["Projects"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Projects"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex59Props = useStore((state)=>state["Projects"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Projects"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex121Props = useStore((state)=>state["Projects"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Projects"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex120Props = useStore((state)=>state["Projects"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Projects"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex119Props = useStore((state)=>state["Projects"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Projects"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex118Props = useStore((state)=>state["Projects"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Projects"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const TextBox37Props = useStore((state)=>state["Projects"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Projects"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox40Props = useStore((state)=>state["Projects"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Projects"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Projects"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Projects"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image14Props = useStore((state)=>state["Projects"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Projects"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox39Props = useStore((state)=>state["Projects"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Projects"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image13Props = useStore((state)=>state["Projects"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Projects"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox38Props = useStore((state)=>state["Projects"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Projects"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Link61Props = useStore((state)=>state["Projects"]["Link61"]);
const Link61IoProps = useIoStore((state)=>state["Projects"]["Link61"]);
const Link61Cb = useLink61Cb()
const Link62Props = useStore((state)=>state["Projects"]["Link62"]);
const Link62IoProps = useIoStore((state)=>state["Projects"]["Link62"]);
const Link62Cb = useLink62Cb()
const Link63Props = useStore((state)=>state["Projects"]["Link63"]);
const Link63IoProps = useIoStore((state)=>state["Projects"]["Link63"]);
const Link63Cb = useLink63Cb()
const Link64Props = useStore((state)=>state["Projects"]["Link64"]);
const Link64IoProps = useIoStore((state)=>state["Projects"]["Link64"]);
const Link64Cb = useLink64Cb()
const Link65Props = useStore((state)=>state["Projects"]["Link65"]);
const Link65IoProps = useIoStore((state)=>state["Projects"]["Link65"]);
const Link65Cb = useLink65Cb()
const Link66Props = useStore((state)=>state["Projects"]["Link66"]);
const Link66IoProps = useIoStore((state)=>state["Projects"]["Link66"]);
const Link66Cb = useLink66Cb()
const Link67Props = useStore((state)=>state["Projects"]["Link67"]);
const Link67IoProps = useIoStore((state)=>state["Projects"]["Link67"]);
const Link67Cb = useLink67Cb()
const Link68Props = useStore((state)=>state["Projects"]["Link68"]);
const Link68IoProps = useIoStore((state)=>state["Projects"]["Link68"]);
const Link68Cb = useLink68Cb()
const Link69Props = useStore((state)=>state["Projects"]["Link69"]);
const Link69IoProps = useIoStore((state)=>state["Projects"]["Link69"]);
const Link69Cb = useLink69Cb()
const TextBox42Props = useStore((state)=>state["Projects"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Projects"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Link70Props = useStore((state)=>state["Projects"]["Link70"]);
const Link70IoProps = useIoStore((state)=>state["Projects"]["Link70"]);
const Link70Cb = useLink70Cb()
const TextBox43Props = useStore((state)=>state["Projects"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Projects"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Link71Props = useStore((state)=>state["Projects"]["Link71"]);
const Link71IoProps = useIoStore((state)=>state["Projects"]["Link71"]);
const Link71Cb = useLink71Cb()
const TextBox44Props = useStore((state)=>state["Projects"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Projects"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Link72Props = useStore((state)=>state["Projects"]["Link72"]);
const Link72IoProps = useIoStore((state)=>state["Projects"]["Link72"]);
const Link72Cb = useLink72Cb()
const TextBox45Props = useStore((state)=>state["Projects"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Projects"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Projects"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Projects"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Projects"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Projects"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Link73Props = useStore((state)=>state["Projects"]["Link73"]);
const Link73IoProps = useIoStore((state)=>state["Projects"]["Link73"]);
const Link73Cb = useLink73Cb()
const Link74Props = useStore((state)=>state["Projects"]["Link74"]);
const Link74IoProps = useIoStore((state)=>state["Projects"]["Link74"]);
const Link74Cb = useLink74Cb()
const Link75Props = useStore((state)=>state["Projects"]["Link75"]);
const Link75IoProps = useIoStore((state)=>state["Projects"]["Link75"]);
const Link75Cb = useLink75Cb()
const Image32Props = useStore((state)=>state["Projects"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Projects"]["Image32"]);
const Image32Cb = useImage32Cb()
const Link147Props = useStore((state)=>state["Projects"]["Link147"]);
const Link147IoProps = useIoStore((state)=>state["Projects"]["Link147"]);
const Link147Cb = useLink147Cb()
const Link148Props = useStore((state)=>state["Projects"]["Link148"]);
const Link148IoProps = useIoStore((state)=>state["Projects"]["Link148"]);
const Link148Cb = useLink148Cb()
const Link149Props = useStore((state)=>state["Projects"]["Link149"]);
const Link149IoProps = useIoStore((state)=>state["Projects"]["Link149"]);
const Link149Cb = useLink149Cb()
const Link150Props = useStore((state)=>state["Projects"]["Link150"]);
const Link150IoProps = useIoStore((state)=>state["Projects"]["Link150"]);
const Link150Cb = useLink150Cb()
const Image31Props = useStore((state)=>state["Projects"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Projects"]["Image31"]);
const Image31Cb = useImage31Cb()
const Link146Props = useStore((state)=>state["Projects"]["Link146"]);
const Link146IoProps = useIoStore((state)=>state["Projects"]["Link146"]);
const Link146Cb = useLink146Cb()

  return (<>
  <Flex2 className="p-Projects Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Flex2 className="p-Projects Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Image2 className="p-Projects Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Flex2 className="p-Projects Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Link2 className="p-Projects Link150 bpt" {...Link150Props} {...Link150Cb} {...Link150IoProps}/>
<Link2 className="p-Projects Link149 bpt" {...Link149Props} {...Link149Cb} {...Link149IoProps}/>
<Link2 className="p-Projects Link148 bpt" {...Link148Props} {...Link148Cb} {...Link148IoProps}/>
<Link2 className="p-Projects Link147 bpt" {...Link147Props} {...Link147Cb} {...Link147IoProps}/>
<Flex2 className="p-Projects Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Link2 className="p-Projects Link146 bpt" {...Link146Props} {...Link146Cb} {...Link146IoProps}/>
<Image2 className="p-Projects Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Projects Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox2 className="p-Projects TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex2>
<Flex2 className="p-Projects Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex2 className="p-Projects Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex2 className="p-Projects Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox2 className="p-Projects TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox2 className="p-Projects TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex2>
<Flex2 className="p-Projects Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Flex2 className="p-Projects Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image2 className="p-Projects Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox2 className="p-Projects TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<Flex2 className="p-Projects Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Image2 className="p-Projects Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox2 className="p-Projects TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Projects Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Flex2 className="p-Projects Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Link2 className="p-Projects Link69 bpt" {...Link69Props} {...Link69Cb} {...Link69IoProps}/>
<Link2 className="p-Projects Link68 bpt" {...Link68Props} {...Link68Cb} {...Link68IoProps}/>
<Link2 className="p-Projects Link67 bpt" {...Link67Props} {...Link67Cb} {...Link67IoProps}/>
</Flex2>
<Flex2 className="p-Projects Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Link2 className="p-Projects Link61 bpt" {...Link61Props} {...Link61Cb} {...Link61IoProps}/>
<Link2 className="p-Projects Link63 bpt" {...Link63Props} {...Link63Cb} {...Link63IoProps}/>
<Link2 className="p-Projects Link62 bpt" {...Link62Props} {...Link62Cb} {...Link62IoProps}/>
</Flex2>
<Flex2 className="p-Projects Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Link2 className="p-Projects Link64 bpt" {...Link64Props} {...Link64Cb} {...Link64IoProps}/>
<Link2 className="p-Projects Link65 bpt" {...Link65Props} {...Link65Cb} {...Link65IoProps}/>
<Link2 className="p-Projects Link66 bpt" {...Link66Props} {...Link66Cb} {...Link66IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Projects Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox2 className="p-Projects TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Link2 className="p-Projects Link70 bpt" {...Link70Props} {...Link70Cb} {...Link70IoProps}/>
<TextBox2 className="p-Projects TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Link2 className="p-Projects Link71 bpt" {...Link71Props} {...Link71Cb} {...Link71IoProps}/>
<TextBox2 className="p-Projects TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<Link2 className="p-Projects Link73 bpt" {...Link73Props} {...Link73Cb} {...Link73IoProps}/>
<TextBox2 className="p-Projects TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<Link2 className="p-Projects Link74 bpt" {...Link74Props} {...Link74Cb} {...Link74IoProps}/>
<TextBox2 className="p-Projects TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Link2 className="p-Projects Link72 bpt" {...Link72Props} {...Link72Cb} {...Link72IoProps}/>
<TextBox2 className="p-Projects TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<Link2 className="p-Projects Link75 bpt" {...Link75Props} {...Link75Cb} {...Link75IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
