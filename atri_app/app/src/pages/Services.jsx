import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link5 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex97Cb, useFlex96Cb, useFlex95Cb, useFlex94Cb, useFlex98Cb, useFlex109Cb, useFlex108Cb, useFlex105Cb, useFlex106Cb, useFlex103Cb, useFlex99Cb, useFlex100Cb, useFlex101Cb, useFlex104Cb, useFlex102Cb, useFlex107Cb, useImage24Cb, useLink117Cb, useLink118Cb, useLink119Cb, useLink120Cb, useImage23Cb, useLink116Cb, useTextBox70Cb, useLink130Cb, useLink131Cb, useLink132Cb, useTextBox73Cb, useTextBox74Cb, useTextBox75Cb, useLink133Cb, useTextBox76Cb, useLink134Cb, useTextBox77Cb, useLink135Cb, useTextBox78Cb, useLink121Cb, useLink122Cb, useLink123Cb, useLink124Cb, useLink125Cb, useLink126Cb, useLink127Cb, useLink128Cb, useLink129Cb, useTextBox72Cb, useImage26Cb, useTextBox71Cb, useImage25Cb, useTextBox79Cb, useTextBox80Cb } from "../page-cbs/Services";
import "../page-css/Services.css";
import "../custom/Services";

export default function Services() {
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

  const Flex97Props = useStore((state)=>state["Services"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Services"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex96Props = useStore((state)=>state["Services"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Services"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex95Props = useStore((state)=>state["Services"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Services"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex94Props = useStore((state)=>state["Services"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Services"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex98Props = useStore((state)=>state["Services"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Services"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex109Props = useStore((state)=>state["Services"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Services"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex108Props = useStore((state)=>state["Services"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Services"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex105Props = useStore((state)=>state["Services"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Services"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex106Props = useStore((state)=>state["Services"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Services"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex103Props = useStore((state)=>state["Services"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Services"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex99Props = useStore((state)=>state["Services"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Services"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["Services"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Services"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["Services"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Services"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex104Props = useStore((state)=>state["Services"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Services"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex102Props = useStore((state)=>state["Services"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Services"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex107Props = useStore((state)=>state["Services"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Services"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Image24Props = useStore((state)=>state["Services"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Services"]["Image24"]);
const Image24Cb = useImage24Cb()
const Link117Props = useStore((state)=>state["Services"]["Link117"]);
const Link117IoProps = useIoStore((state)=>state["Services"]["Link117"]);
const Link117Cb = useLink117Cb()
const Link118Props = useStore((state)=>state["Services"]["Link118"]);
const Link118IoProps = useIoStore((state)=>state["Services"]["Link118"]);
const Link118Cb = useLink118Cb()
const Link119Props = useStore((state)=>state["Services"]["Link119"]);
const Link119IoProps = useIoStore((state)=>state["Services"]["Link119"]);
const Link119Cb = useLink119Cb()
const Link120Props = useStore((state)=>state["Services"]["Link120"]);
const Link120IoProps = useIoStore((state)=>state["Services"]["Link120"]);
const Link120Cb = useLink120Cb()
const Image23Props = useStore((state)=>state["Services"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Services"]["Image23"]);
const Image23Cb = useImage23Cb()
const Link116Props = useStore((state)=>state["Services"]["Link116"]);
const Link116IoProps = useIoStore((state)=>state["Services"]["Link116"]);
const Link116Cb = useLink116Cb()
const TextBox70Props = useStore((state)=>state["Services"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Services"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Link130Props = useStore((state)=>state["Services"]["Link130"]);
const Link130IoProps = useIoStore((state)=>state["Services"]["Link130"]);
const Link130Cb = useLink130Cb()
const Link131Props = useStore((state)=>state["Services"]["Link131"]);
const Link131IoProps = useIoStore((state)=>state["Services"]["Link131"]);
const Link131Cb = useLink131Cb()
const Link132Props = useStore((state)=>state["Services"]["Link132"]);
const Link132IoProps = useIoStore((state)=>state["Services"]["Link132"]);
const Link132Cb = useLink132Cb()
const TextBox73Props = useStore((state)=>state["Services"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Services"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Services"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Services"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Services"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Services"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Link133Props = useStore((state)=>state["Services"]["Link133"]);
const Link133IoProps = useIoStore((state)=>state["Services"]["Link133"]);
const Link133Cb = useLink133Cb()
const TextBox76Props = useStore((state)=>state["Services"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Services"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Link134Props = useStore((state)=>state["Services"]["Link134"]);
const Link134IoProps = useIoStore((state)=>state["Services"]["Link134"]);
const Link134Cb = useLink134Cb()
const TextBox77Props = useStore((state)=>state["Services"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Services"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const Link135Props = useStore((state)=>state["Services"]["Link135"]);
const Link135IoProps = useIoStore((state)=>state["Services"]["Link135"]);
const Link135Cb = useLink135Cb()
const TextBox78Props = useStore((state)=>state["Services"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Services"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Link121Props = useStore((state)=>state["Services"]["Link121"]);
const Link121IoProps = useIoStore((state)=>state["Services"]["Link121"]);
const Link121Cb = useLink121Cb()
const Link122Props = useStore((state)=>state["Services"]["Link122"]);
const Link122IoProps = useIoStore((state)=>state["Services"]["Link122"]);
const Link122Cb = useLink122Cb()
const Link123Props = useStore((state)=>state["Services"]["Link123"]);
const Link123IoProps = useIoStore((state)=>state["Services"]["Link123"]);
const Link123Cb = useLink123Cb()
const Link124Props = useStore((state)=>state["Services"]["Link124"]);
const Link124IoProps = useIoStore((state)=>state["Services"]["Link124"]);
const Link124Cb = useLink124Cb()
const Link125Props = useStore((state)=>state["Services"]["Link125"]);
const Link125IoProps = useIoStore((state)=>state["Services"]["Link125"]);
const Link125Cb = useLink125Cb()
const Link126Props = useStore((state)=>state["Services"]["Link126"]);
const Link126IoProps = useIoStore((state)=>state["Services"]["Link126"]);
const Link126Cb = useLink126Cb()
const Link127Props = useStore((state)=>state["Services"]["Link127"]);
const Link127IoProps = useIoStore((state)=>state["Services"]["Link127"]);
const Link127Cb = useLink127Cb()
const Link128Props = useStore((state)=>state["Services"]["Link128"]);
const Link128IoProps = useIoStore((state)=>state["Services"]["Link128"]);
const Link128Cb = useLink128Cb()
const Link129Props = useStore((state)=>state["Services"]["Link129"]);
const Link129IoProps = useIoStore((state)=>state["Services"]["Link129"]);
const Link129Cb = useLink129Cb()
const TextBox72Props = useStore((state)=>state["Services"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Services"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image26Props = useStore((state)=>state["Services"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Services"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox71Props = useStore((state)=>state["Services"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Services"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image25Props = useStore((state)=>state["Services"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Services"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox79Props = useStore((state)=>state["Services"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Services"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Services"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Services"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()

  return (<>
  <Flex5 className="p-Services Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Flex5 className="p-Services Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image5 className="p-Services Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Flex5 className="p-Services Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Link5 className="p-Services Link120 bpt" {...Link120Props} {...Link120Cb} {...Link120IoProps}/>
<Link5 className="p-Services Link119 bpt" {...Link119Props} {...Link119Cb} {...Link119IoProps}/>
<Link5 className="p-Services Link118 bpt" {...Link118Props} {...Link118Cb} {...Link118IoProps}/>
<Link5 className="p-Services Link117 bpt" {...Link117Props} {...Link117Cb} {...Link117IoProps}/>
<Flex5 className="p-Services Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Link5 className="p-Services Link116 bpt" {...Link116Props} {...Link116Cb} {...Link116IoProps}/>
<Image5 className="p-Services Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-Services Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox5 className="p-Services TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex5>
<Flex5 className="p-Services Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Flex5 className="p-Services Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Flex5 className="p-Services Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<TextBox5 className="p-Services TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox5 className="p-Services TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex5>
<Flex5 className="p-Services Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Flex5 className="p-Services Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Image5 className="p-Services Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox5 className="p-Services TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<Flex5 className="p-Services Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Image5 className="p-Services Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox5 className="p-Services TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-Services Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Flex5 className="p-Services Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Link5 className="p-Services Link121 bpt" {...Link121Props} {...Link121Cb} {...Link121IoProps}/>
<Link5 className="p-Services Link122 bpt" {...Link122Props} {...Link122Cb} {...Link122IoProps}/>
<Link5 className="p-Services Link123 bpt" {...Link123Props} {...Link123Cb} {...Link123IoProps}/>
</Flex5>
<Flex5 className="p-Services Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Link5 className="p-Services Link129 bpt" {...Link129Props} {...Link129Cb} {...Link129IoProps}/>
<Link5 className="p-Services Link127 bpt" {...Link127Props} {...Link127Cb} {...Link127IoProps}/>
<Link5 className="p-Services Link128 bpt" {...Link128Props} {...Link128Cb} {...Link128IoProps}/>
</Flex5>
<Flex5 className="p-Services Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Link5 className="p-Services Link126 bpt" {...Link126Props} {...Link126Cb} {...Link126IoProps}/>
<Link5 className="p-Services Link125 bpt" {...Link125Props} {...Link125Cb} {...Link125IoProps}/>
<Link5 className="p-Services Link124 bpt" {...Link124Props} {...Link124Cb} {...Link124IoProps}/>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-Services Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox5 className="p-Services TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<Link5 className="p-Services Link135 bpt" {...Link135Props} {...Link135Cb} {...Link135IoProps}/>
<TextBox5 className="p-Services TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<Link5 className="p-Services Link134 bpt" {...Link134Props} {...Link134Cb} {...Link134IoProps}/>
<TextBox5 className="p-Services TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<Link5 className="p-Services Link132 bpt" {...Link132Props} {...Link132Cb} {...Link132IoProps}/>
<TextBox5 className="p-Services TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<Link5 className="p-Services Link131 bpt" {...Link131Props} {...Link131Cb} {...Link131IoProps}/>
<TextBox5 className="p-Services TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<Link5 className="p-Services Link133 bpt" {...Link133Props} {...Link133Cb} {...Link133IoProps}/>
<TextBox5 className="p-Services TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<Link5 className="p-Services Link130 bpt" {...Link130Props} {...Link130Cb} {...Link130IoProps}/>
</Flex5>
</Flex5>
</Flex5>
  </>);
}
