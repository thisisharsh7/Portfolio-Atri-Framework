import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex34Cb, useFlex45Cb, useFlex44Cb, useFlex41Cb, useFlex42Cb, useFlex39Cb, useFlex35Cb, useFlex36Cb, useFlex37Cb, useFlex40Cb, useFlex38Cb, useFlex43Cb, useFlex125Cb, useFlex124Cb, useFlex123Cb, useFlex122Cb, useTextBox36Cb, useLink50Cb, useLink51Cb, useLink52Cb, useTextBox28Cb, useTextBox29Cb, useTextBox30Cb, useLink53Cb, useTextBox31Cb, useLink54Cb, useTextBox32Cb, useLink55Cb, useTextBox33Cb, useLink41Cb, useLink42Cb, useLink43Cb, useLink44Cb, useLink45Cb, useLink46Cb, useLink47Cb, useLink48Cb, useLink49Cb, useTextBox27Cb, useImage10Cb, useTextBox26Cb, useImage9Cb, useTextBox34Cb, useTextBox35Cb, useImage34Cb, useLink152Cb, useLink153Cb, useLink154Cb, useLink155Cb, useImage33Cb, useLink151Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
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

  const Flex34Props = useStore((state)=>state["About"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["About"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex45Props = useStore((state)=>state["About"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["About"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex44Props = useStore((state)=>state["About"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["About"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex41Props = useStore((state)=>state["About"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["About"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["About"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["About"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex39Props = useStore((state)=>state["About"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["About"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex35Props = useStore((state)=>state["About"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["About"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["About"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["About"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["About"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["About"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex40Props = useStore((state)=>state["About"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["About"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex38Props = useStore((state)=>state["About"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["About"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex43Props = useStore((state)=>state["About"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["About"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex125Props = useStore((state)=>state["About"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["About"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex124Props = useStore((state)=>state["About"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["About"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex123Props = useStore((state)=>state["About"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["About"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex122Props = useStore((state)=>state["About"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["About"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const TextBox36Props = useStore((state)=>state["About"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["About"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Link50Props = useStore((state)=>state["About"]["Link50"]);
const Link50IoProps = useIoStore((state)=>state["About"]["Link50"]);
const Link50Cb = useLink50Cb()
const Link51Props = useStore((state)=>state["About"]["Link51"]);
const Link51IoProps = useIoStore((state)=>state["About"]["Link51"]);
const Link51Cb = useLink51Cb()
const Link52Props = useStore((state)=>state["About"]["Link52"]);
const Link52IoProps = useIoStore((state)=>state["About"]["Link52"]);
const Link52Cb = useLink52Cb()
const TextBox28Props = useStore((state)=>state["About"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["About"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["About"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["About"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["About"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["About"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Link53Props = useStore((state)=>state["About"]["Link53"]);
const Link53IoProps = useIoStore((state)=>state["About"]["Link53"]);
const Link53Cb = useLink53Cb()
const TextBox31Props = useStore((state)=>state["About"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["About"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Link54Props = useStore((state)=>state["About"]["Link54"]);
const Link54IoProps = useIoStore((state)=>state["About"]["Link54"]);
const Link54Cb = useLink54Cb()
const TextBox32Props = useStore((state)=>state["About"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["About"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Link55Props = useStore((state)=>state["About"]["Link55"]);
const Link55IoProps = useIoStore((state)=>state["About"]["Link55"]);
const Link55Cb = useLink55Cb()
const TextBox33Props = useStore((state)=>state["About"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["About"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Link41Props = useStore((state)=>state["About"]["Link41"]);
const Link41IoProps = useIoStore((state)=>state["About"]["Link41"]);
const Link41Cb = useLink41Cb()
const Link42Props = useStore((state)=>state["About"]["Link42"]);
const Link42IoProps = useIoStore((state)=>state["About"]["Link42"]);
const Link42Cb = useLink42Cb()
const Link43Props = useStore((state)=>state["About"]["Link43"]);
const Link43IoProps = useIoStore((state)=>state["About"]["Link43"]);
const Link43Cb = useLink43Cb()
const Link44Props = useStore((state)=>state["About"]["Link44"]);
const Link44IoProps = useIoStore((state)=>state["About"]["Link44"]);
const Link44Cb = useLink44Cb()
const Link45Props = useStore((state)=>state["About"]["Link45"]);
const Link45IoProps = useIoStore((state)=>state["About"]["Link45"]);
const Link45Cb = useLink45Cb()
const Link46Props = useStore((state)=>state["About"]["Link46"]);
const Link46IoProps = useIoStore((state)=>state["About"]["Link46"]);
const Link46Cb = useLink46Cb()
const Link47Props = useStore((state)=>state["About"]["Link47"]);
const Link47IoProps = useIoStore((state)=>state["About"]["Link47"]);
const Link47Cb = useLink47Cb()
const Link48Props = useStore((state)=>state["About"]["Link48"]);
const Link48IoProps = useIoStore((state)=>state["About"]["Link48"]);
const Link48Cb = useLink48Cb()
const Link49Props = useStore((state)=>state["About"]["Link49"]);
const Link49IoProps = useIoStore((state)=>state["About"]["Link49"]);
const Link49Cb = useLink49Cb()
const TextBox27Props = useStore((state)=>state["About"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["About"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Image10Props = useStore((state)=>state["About"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["About"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox26Props = useStore((state)=>state["About"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["About"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image9Props = useStore((state)=>state["About"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["About"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox34Props = useStore((state)=>state["About"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["About"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["About"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["About"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image34Props = useStore((state)=>state["About"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["About"]["Image34"]);
const Image34Cb = useImage34Cb()
const Link152Props = useStore((state)=>state["About"]["Link152"]);
const Link152IoProps = useIoStore((state)=>state["About"]["Link152"]);
const Link152Cb = useLink152Cb()
const Link153Props = useStore((state)=>state["About"]["Link153"]);
const Link153IoProps = useIoStore((state)=>state["About"]["Link153"]);
const Link153Cb = useLink153Cb()
const Link154Props = useStore((state)=>state["About"]["Link154"]);
const Link154IoProps = useIoStore((state)=>state["About"]["Link154"]);
const Link154Cb = useLink154Cb()
const Link155Props = useStore((state)=>state["About"]["Link155"]);
const Link155IoProps = useIoStore((state)=>state["About"]["Link155"]);
const Link155Cb = useLink155Cb()
const Image33Props = useStore((state)=>state["About"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["About"]["Image33"]);
const Image33Cb = useImage33Cb()
const Link151Props = useStore((state)=>state["About"]["Link151"]);
const Link151IoProps = useIoStore((state)=>state["About"]["Link151"]);
const Link151Cb = useLink151Cb()

  return (<>
  <Flex1 className="p-About Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Flex1 className="p-About Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Image1 className="p-About Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Flex1 className="p-About Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Link1 className="p-About Link155 bpt" {...Link155Props} {...Link155Cb} {...Link155IoProps}/>
<Link1 className="p-About Link154 bpt" {...Link154Props} {...Link154Cb} {...Link154IoProps}/>
<Link1 className="p-About Link153 bpt" {...Link153Props} {...Link153Cb} {...Link153IoProps}/>
<Link1 className="p-About Link152 bpt" {...Link152Props} {...Link152Cb} {...Link152IoProps}/>
<Flex1 className="p-About Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Link1 className="p-About Link151 bpt" {...Link151Props} {...Link151Cb} {...Link151IoProps}/>
<Image1 className="p-About Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox1 className="p-About TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex1>
<Flex1 className="p-About Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex1 className="p-About Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex1 className="p-About Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox1 className="p-About TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox1 className="p-About TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex1>
<Flex1 className="p-About Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Flex1 className="p-About Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image1 className="p-About Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox1 className="p-About TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Flex1 className="p-About Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image1 className="p-About Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox1 className="p-About TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex1 className="p-About Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Link1 className="p-About Link41 bpt" {...Link41Props} {...Link41Cb} {...Link41IoProps}/>
<Link1 className="p-About Link42 bpt" {...Link42Props} {...Link42Cb} {...Link42IoProps}/>
<Link1 className="p-About Link43 bpt" {...Link43Props} {...Link43Cb} {...Link43IoProps}/>
</Flex1>
<Flex1 className="p-About Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Link1 className="p-About Link49 bpt" {...Link49Props} {...Link49Cb} {...Link49IoProps}/>
<Link1 className="p-About Link47 bpt" {...Link47Props} {...Link47Cb} {...Link47IoProps}/>
<Link1 className="p-About Link48 bpt" {...Link48Props} {...Link48Cb} {...Link48IoProps}/>
</Flex1>
<Flex1 className="p-About Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Link1 className="p-About Link46 bpt" {...Link46Props} {...Link46Cb} {...Link46IoProps}/>
<Link1 className="p-About Link45 bpt" {...Link45Props} {...Link45Cb} {...Link45IoProps}/>
<Link1 className="p-About Link44 bpt" {...Link44Props} {...Link44Cb} {...Link44IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox1 className="p-About TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Link1 className="p-About Link55 bpt" {...Link55Props} {...Link55Cb} {...Link55IoProps}/>
<TextBox1 className="p-About TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Link1 className="p-About Link54 bpt" {...Link54Props} {...Link54Cb} {...Link54IoProps}/>
<TextBox1 className="p-About TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Link1 className="p-About Link52 bpt" {...Link52Props} {...Link52Cb} {...Link52IoProps}/>
<TextBox1 className="p-About TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Link1 className="p-About Link51 bpt" {...Link51Props} {...Link51Cb} {...Link51IoProps}/>
<TextBox1 className="p-About TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Link1 className="p-About Link53 bpt" {...Link53Props} {...Link53Cb} {...Link53IoProps}/>
<TextBox1 className="p-About TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<Link1 className="p-About Link50 bpt" {...Link50Props} {...Link50Cb} {...Link50IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
