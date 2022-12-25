import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link3 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex66Cb, useFlex77Cb, useFlex76Cb, useFlex73Cb, useFlex74Cb, useFlex71Cb, useFlex67Cb, useFlex68Cb, useFlex69Cb, useFlex72Cb, useFlex70Cb, useFlex75Cb, useFlex117Cb, useFlex116Cb, useFlex115Cb, useFlex114Cb, useTextBox48Cb, useLink90Cb, useLink91Cb, useLink92Cb, useTextBox51Cb, useTextBox52Cb, useTextBox53Cb, useLink93Cb, useTextBox54Cb, useLink94Cb, useTextBox55Cb, useLink95Cb, useTextBox56Cb, useLink81Cb, useLink82Cb, useLink83Cb, useLink84Cb, useLink85Cb, useLink86Cb, useLink87Cb, useLink88Cb, useLink89Cb, useTextBox50Cb, useImage18Cb, useTextBox49Cb, useImage17Cb, useTextBox57Cb, useTextBox58Cb, useImage30Cb, useLink142Cb, useLink143Cb, useLink144Cb, useLink145Cb, useImage29Cb, useLink141Cb } from "../page-cbs/Blog";
import "../page-css/Blog.css";
import "../custom/Blog";

export default function Blog() {
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

  const Flex66Props = useStore((state)=>state["Blog"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Blog"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex77Props = useStore((state)=>state["Blog"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Blog"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex76Props = useStore((state)=>state["Blog"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Blog"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex73Props = useStore((state)=>state["Blog"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Blog"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["Blog"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Blog"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex71Props = useStore((state)=>state["Blog"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Blog"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex67Props = useStore((state)=>state["Blog"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Blog"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Blog"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Blog"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Blog"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Blog"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex72Props = useStore((state)=>state["Blog"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Blog"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex70Props = useStore((state)=>state["Blog"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Blog"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex75Props = useStore((state)=>state["Blog"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Blog"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex117Props = useStore((state)=>state["Blog"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Blog"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex116Props = useStore((state)=>state["Blog"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Blog"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex115Props = useStore((state)=>state["Blog"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Blog"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex114Props = useStore((state)=>state["Blog"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Blog"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const TextBox48Props = useStore((state)=>state["Blog"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Blog"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Link90Props = useStore((state)=>state["Blog"]["Link90"]);
const Link90IoProps = useIoStore((state)=>state["Blog"]["Link90"]);
const Link90Cb = useLink90Cb()
const Link91Props = useStore((state)=>state["Blog"]["Link91"]);
const Link91IoProps = useIoStore((state)=>state["Blog"]["Link91"]);
const Link91Cb = useLink91Cb()
const Link92Props = useStore((state)=>state["Blog"]["Link92"]);
const Link92IoProps = useIoStore((state)=>state["Blog"]["Link92"]);
const Link92Cb = useLink92Cb()
const TextBox51Props = useStore((state)=>state["Blog"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Blog"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Blog"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Blog"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Blog"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Blog"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Link93Props = useStore((state)=>state["Blog"]["Link93"]);
const Link93IoProps = useIoStore((state)=>state["Blog"]["Link93"]);
const Link93Cb = useLink93Cb()
const TextBox54Props = useStore((state)=>state["Blog"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Blog"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Link94Props = useStore((state)=>state["Blog"]["Link94"]);
const Link94IoProps = useIoStore((state)=>state["Blog"]["Link94"]);
const Link94Cb = useLink94Cb()
const TextBox55Props = useStore((state)=>state["Blog"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Blog"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Link95Props = useStore((state)=>state["Blog"]["Link95"]);
const Link95IoProps = useIoStore((state)=>state["Blog"]["Link95"]);
const Link95Cb = useLink95Cb()
const TextBox56Props = useStore((state)=>state["Blog"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Blog"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Link81Props = useStore((state)=>state["Blog"]["Link81"]);
const Link81IoProps = useIoStore((state)=>state["Blog"]["Link81"]);
const Link81Cb = useLink81Cb()
const Link82Props = useStore((state)=>state["Blog"]["Link82"]);
const Link82IoProps = useIoStore((state)=>state["Blog"]["Link82"]);
const Link82Cb = useLink82Cb()
const Link83Props = useStore((state)=>state["Blog"]["Link83"]);
const Link83IoProps = useIoStore((state)=>state["Blog"]["Link83"]);
const Link83Cb = useLink83Cb()
const Link84Props = useStore((state)=>state["Blog"]["Link84"]);
const Link84IoProps = useIoStore((state)=>state["Blog"]["Link84"]);
const Link84Cb = useLink84Cb()
const Link85Props = useStore((state)=>state["Blog"]["Link85"]);
const Link85IoProps = useIoStore((state)=>state["Blog"]["Link85"]);
const Link85Cb = useLink85Cb()
const Link86Props = useStore((state)=>state["Blog"]["Link86"]);
const Link86IoProps = useIoStore((state)=>state["Blog"]["Link86"]);
const Link86Cb = useLink86Cb()
const Link87Props = useStore((state)=>state["Blog"]["Link87"]);
const Link87IoProps = useIoStore((state)=>state["Blog"]["Link87"]);
const Link87Cb = useLink87Cb()
const Link88Props = useStore((state)=>state["Blog"]["Link88"]);
const Link88IoProps = useIoStore((state)=>state["Blog"]["Link88"]);
const Link88Cb = useLink88Cb()
const Link89Props = useStore((state)=>state["Blog"]["Link89"]);
const Link89IoProps = useIoStore((state)=>state["Blog"]["Link89"]);
const Link89Cb = useLink89Cb()
const TextBox50Props = useStore((state)=>state["Blog"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Blog"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image18Props = useStore((state)=>state["Blog"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Blog"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox49Props = useStore((state)=>state["Blog"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Blog"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image17Props = useStore((state)=>state["Blog"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Blog"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox57Props = useStore((state)=>state["Blog"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Blog"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Blog"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Blog"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image30Props = useStore((state)=>state["Blog"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Blog"]["Image30"]);
const Image30Cb = useImage30Cb()
const Link142Props = useStore((state)=>state["Blog"]["Link142"]);
const Link142IoProps = useIoStore((state)=>state["Blog"]["Link142"]);
const Link142Cb = useLink142Cb()
const Link143Props = useStore((state)=>state["Blog"]["Link143"]);
const Link143IoProps = useIoStore((state)=>state["Blog"]["Link143"]);
const Link143Cb = useLink143Cb()
const Link144Props = useStore((state)=>state["Blog"]["Link144"]);
const Link144IoProps = useIoStore((state)=>state["Blog"]["Link144"]);
const Link144Cb = useLink144Cb()
const Link145Props = useStore((state)=>state["Blog"]["Link145"]);
const Link145IoProps = useIoStore((state)=>state["Blog"]["Link145"]);
const Link145Cb = useLink145Cb()
const Image29Props = useStore((state)=>state["Blog"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Blog"]["Image29"]);
const Image29Cb = useImage29Cb()
const Link141Props = useStore((state)=>state["Blog"]["Link141"]);
const Link141IoProps = useIoStore((state)=>state["Blog"]["Link141"]);
const Link141Cb = useLink141Cb()

  return (<>
  <Flex3 className="p-Blog Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Flex3 className="p-Blog Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Image3 className="p-Blog Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<Flex3 className="p-Blog Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Link3 className="p-Blog Link145 bpt" {...Link145Props} {...Link145Cb} {...Link145IoProps}/>
<Link3 className="p-Blog Link144 bpt" {...Link144Props} {...Link144Cb} {...Link144IoProps}/>
<Link3 className="p-Blog Link143 bpt" {...Link143Props} {...Link143Cb} {...Link143IoProps}/>
<Link3 className="p-Blog Link142 bpt" {...Link142Props} {...Link142Cb} {...Link142IoProps}/>
<Flex3 className="p-Blog Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Link3 className="p-Blog Link141 bpt" {...Link141Props} {...Link141Cb} {...Link141IoProps}/>
<Image3 className="p-Blog Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-Blog Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<TextBox3 className="p-Blog TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex3>
<Flex3 className="p-Blog Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Flex3 className="p-Blog Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Flex3 className="p-Blog Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox3 className="p-Blog TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox3 className="p-Blog TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex3>
<Flex3 className="p-Blog Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex3 className="p-Blog Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image3 className="p-Blog Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox3 className="p-Blog TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Flex3 className="p-Blog Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Image3 className="p-Blog Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox3 className="p-Blog TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-Blog Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex3 className="p-Blog Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Link3 className="p-Blog Link81 bpt" {...Link81Props} {...Link81Cb} {...Link81IoProps}/>
<Link3 className="p-Blog Link82 bpt" {...Link82Props} {...Link82Cb} {...Link82IoProps}/>
<Link3 className="p-Blog Link83 bpt" {...Link83Props} {...Link83Cb} {...Link83IoProps}/>
</Flex3>
<Flex3 className="p-Blog Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Link3 className="p-Blog Link89 bpt" {...Link89Props} {...Link89Cb} {...Link89IoProps}/>
<Link3 className="p-Blog Link87 bpt" {...Link87Props} {...Link87Cb} {...Link87IoProps}/>
<Link3 className="p-Blog Link88 bpt" {...Link88Props} {...Link88Cb} {...Link88IoProps}/>
</Flex3>
<Flex3 className="p-Blog Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Link3 className="p-Blog Link86 bpt" {...Link86Props} {...Link86Cb} {...Link86IoProps}/>
<Link3 className="p-Blog Link85 bpt" {...Link85Props} {...Link85Cb} {...Link85IoProps}/>
<Link3 className="p-Blog Link84 bpt" {...Link84Props} {...Link84Cb} {...Link84IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-Blog Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox3 className="p-Blog TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Link3 className="p-Blog Link95 bpt" {...Link95Props} {...Link95Cb} {...Link95IoProps}/>
<TextBox3 className="p-Blog TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Link3 className="p-Blog Link94 bpt" {...Link94Props} {...Link94Cb} {...Link94IoProps}/>
<TextBox3 className="p-Blog TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Link3 className="p-Blog Link92 bpt" {...Link92Props} {...Link92Cb} {...Link92IoProps}/>
<TextBox3 className="p-Blog TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Link3 className="p-Blog Link91 bpt" {...Link91Props} {...Link91Cb} {...Link91IoProps}/>
<TextBox3 className="p-Blog TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Link3 className="p-Blog Link93 bpt" {...Link93Props} {...Link93Cb} {...Link93IoProps}/>
<TextBox3 className="p-Blog TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<Link3 className="p-Blog Link90 bpt" {...Link90Props} {...Link90Cb} {...Link90IoProps}/>
</Flex3>
</Flex3>
</Flex3>
  </>);
}
