import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link4 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex82Cb, useFlex93Cb, useFlex92Cb, useFlex89Cb, useFlex90Cb, useFlex87Cb, useFlex83Cb, useFlex88Cb, useFlex84Cb, useFlex85Cb, useFlex86Cb, useFlex91Cb, useFlex113Cb, useFlex112Cb, useFlex111Cb, useFlex110Cb, useTextBox59Cb, useTextBox62Cb, useTextBox63Cb, useImage22Cb, useTextBox61Cb, useImage21Cb, useTextBox60Cb, useLink101Cb, useLink102Cb, useLink103Cb, useLink104Cb, useLink105Cb, useLink106Cb, useLink107Cb, useLink108Cb, useLink109Cb, useTextBox64Cb, useLink110Cb, useTextBox65Cb, useLink111Cb, useTextBox66Cb, useLink112Cb, useTextBox67Cb, useTextBox68Cb, useTextBox69Cb, useLink113Cb, useLink114Cb, useLink115Cb, useImage28Cb, useLink137Cb, useLink138Cb, useLink139Cb, useLink140Cb, useLink136Cb, useImage27Cb } from "../page-cbs/BookCall";
import "../page-css/BookCall.css";
import "../custom/BookCall";

export default function BookCall() {
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

  const Flex82Props = useStore((state)=>state["BookCall"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["BookCall"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex93Props = useStore((state)=>state["BookCall"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["BookCall"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex92Props = useStore((state)=>state["BookCall"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["BookCall"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex89Props = useStore((state)=>state["BookCall"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["BookCall"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex90Props = useStore((state)=>state["BookCall"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["BookCall"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex87Props = useStore((state)=>state["BookCall"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["BookCall"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex83Props = useStore((state)=>state["BookCall"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["BookCall"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex88Props = useStore((state)=>state["BookCall"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["BookCall"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex84Props = useStore((state)=>state["BookCall"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["BookCall"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex85Props = useStore((state)=>state["BookCall"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["BookCall"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["BookCall"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["BookCall"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex91Props = useStore((state)=>state["BookCall"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["BookCall"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex113Props = useStore((state)=>state["BookCall"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["BookCall"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex112Props = useStore((state)=>state["BookCall"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["BookCall"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex111Props = useStore((state)=>state["BookCall"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["BookCall"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex110Props = useStore((state)=>state["BookCall"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["BookCall"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const TextBox59Props = useStore((state)=>state["BookCall"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["BookCall"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox62Props = useStore((state)=>state["BookCall"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["BookCall"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["BookCall"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["BookCall"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image22Props = useStore((state)=>state["BookCall"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["BookCall"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox61Props = useStore((state)=>state["BookCall"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["BookCall"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Image21Props = useStore((state)=>state["BookCall"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["BookCall"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox60Props = useStore((state)=>state["BookCall"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["BookCall"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Link101Props = useStore((state)=>state["BookCall"]["Link101"]);
const Link101IoProps = useIoStore((state)=>state["BookCall"]["Link101"]);
const Link101Cb = useLink101Cb()
const Link102Props = useStore((state)=>state["BookCall"]["Link102"]);
const Link102IoProps = useIoStore((state)=>state["BookCall"]["Link102"]);
const Link102Cb = useLink102Cb()
const Link103Props = useStore((state)=>state["BookCall"]["Link103"]);
const Link103IoProps = useIoStore((state)=>state["BookCall"]["Link103"]);
const Link103Cb = useLink103Cb()
const Link104Props = useStore((state)=>state["BookCall"]["Link104"]);
const Link104IoProps = useIoStore((state)=>state["BookCall"]["Link104"]);
const Link104Cb = useLink104Cb()
const Link105Props = useStore((state)=>state["BookCall"]["Link105"]);
const Link105IoProps = useIoStore((state)=>state["BookCall"]["Link105"]);
const Link105Cb = useLink105Cb()
const Link106Props = useStore((state)=>state["BookCall"]["Link106"]);
const Link106IoProps = useIoStore((state)=>state["BookCall"]["Link106"]);
const Link106Cb = useLink106Cb()
const Link107Props = useStore((state)=>state["BookCall"]["Link107"]);
const Link107IoProps = useIoStore((state)=>state["BookCall"]["Link107"]);
const Link107Cb = useLink107Cb()
const Link108Props = useStore((state)=>state["BookCall"]["Link108"]);
const Link108IoProps = useIoStore((state)=>state["BookCall"]["Link108"]);
const Link108Cb = useLink108Cb()
const Link109Props = useStore((state)=>state["BookCall"]["Link109"]);
const Link109IoProps = useIoStore((state)=>state["BookCall"]["Link109"]);
const Link109Cb = useLink109Cb()
const TextBox64Props = useStore((state)=>state["BookCall"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["BookCall"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Link110Props = useStore((state)=>state["BookCall"]["Link110"]);
const Link110IoProps = useIoStore((state)=>state["BookCall"]["Link110"]);
const Link110Cb = useLink110Cb()
const TextBox65Props = useStore((state)=>state["BookCall"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["BookCall"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Link111Props = useStore((state)=>state["BookCall"]["Link111"]);
const Link111IoProps = useIoStore((state)=>state["BookCall"]["Link111"]);
const Link111Cb = useLink111Cb()
const TextBox66Props = useStore((state)=>state["BookCall"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["BookCall"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Link112Props = useStore((state)=>state["BookCall"]["Link112"]);
const Link112IoProps = useIoStore((state)=>state["BookCall"]["Link112"]);
const Link112Cb = useLink112Cb()
const TextBox67Props = useStore((state)=>state["BookCall"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["BookCall"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["BookCall"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["BookCall"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["BookCall"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["BookCall"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Link113Props = useStore((state)=>state["BookCall"]["Link113"]);
const Link113IoProps = useIoStore((state)=>state["BookCall"]["Link113"]);
const Link113Cb = useLink113Cb()
const Link114Props = useStore((state)=>state["BookCall"]["Link114"]);
const Link114IoProps = useIoStore((state)=>state["BookCall"]["Link114"]);
const Link114Cb = useLink114Cb()
const Link115Props = useStore((state)=>state["BookCall"]["Link115"]);
const Link115IoProps = useIoStore((state)=>state["BookCall"]["Link115"]);
const Link115Cb = useLink115Cb()
const Image28Props = useStore((state)=>state["BookCall"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["BookCall"]["Image28"]);
const Image28Cb = useImage28Cb()
const Link137Props = useStore((state)=>state["BookCall"]["Link137"]);
const Link137IoProps = useIoStore((state)=>state["BookCall"]["Link137"]);
const Link137Cb = useLink137Cb()
const Link138Props = useStore((state)=>state["BookCall"]["Link138"]);
const Link138IoProps = useIoStore((state)=>state["BookCall"]["Link138"]);
const Link138Cb = useLink138Cb()
const Link139Props = useStore((state)=>state["BookCall"]["Link139"]);
const Link139IoProps = useIoStore((state)=>state["BookCall"]["Link139"]);
const Link139Cb = useLink139Cb()
const Link140Props = useStore((state)=>state["BookCall"]["Link140"]);
const Link140IoProps = useIoStore((state)=>state["BookCall"]["Link140"]);
const Link140Cb = useLink140Cb()
const Link136Props = useStore((state)=>state["BookCall"]["Link136"]);
const Link136IoProps = useIoStore((state)=>state["BookCall"]["Link136"]);
const Link136Cb = useLink136Cb()
const Image27Props = useStore((state)=>state["BookCall"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["BookCall"]["Image27"]);
const Image27Cb = useImage27Cb()

  return (<>
  <Flex4 className="p-BookCall Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Flex4 className="p-BookCall Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Image4 className="p-BookCall Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Flex4 className="p-BookCall Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Link4 className="p-BookCall Link137 bpt" {...Link137Props} {...Link137Cb} {...Link137IoProps}/>
<Link4 className="p-BookCall Link138 bpt" {...Link138Props} {...Link138Cb} {...Link138IoProps}/>
<Link4 className="p-BookCall Link139 bpt" {...Link139Props} {...Link139Cb} {...Link139IoProps}/>
<Link4 className="p-BookCall Link140 bpt" {...Link140Props} {...Link140Cb} {...Link140IoProps}/>
<Flex4 className="p-BookCall Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Link4 className="p-BookCall Link136 bpt" {...Link136Props} {...Link136Cb} {...Link136IoProps}/>
<Image4 className="p-BookCall Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-BookCall Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox4 className="p-BookCall TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Flex4>
<Flex4 className="p-BookCall Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Flex4 className="p-BookCall Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex4 className="p-BookCall Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<TextBox4 className="p-BookCall TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox4 className="p-BookCall TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex4>
<Flex4 className="p-BookCall Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex4 className="p-BookCall Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Image4 className="p-BookCall Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox4 className="p-BookCall TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Flex4 className="p-BookCall Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Image4 className="p-BookCall Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox4 className="p-BookCall TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-BookCall Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Flex4 className="p-BookCall Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Link4 className="p-BookCall Link109 bpt" {...Link109Props} {...Link109Cb} {...Link109IoProps}/>
<Link4 className="p-BookCall Link108 bpt" {...Link108Props} {...Link108Cb} {...Link108IoProps}/>
<Link4 className="p-BookCall Link107 bpt" {...Link107Props} {...Link107Cb} {...Link107IoProps}/>
</Flex4>
<Flex4 className="p-BookCall Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Link4 className="p-BookCall Link101 bpt" {...Link101Props} {...Link101Cb} {...Link101IoProps}/>
<Link4 className="p-BookCall Link103 bpt" {...Link103Props} {...Link103Cb} {...Link103IoProps}/>
<Link4 className="p-BookCall Link102 bpt" {...Link102Props} {...Link102Cb} {...Link102IoProps}/>
</Flex4>
<Flex4 className="p-BookCall Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Link4 className="p-BookCall Link104 bpt" {...Link104Props} {...Link104Cb} {...Link104IoProps}/>
<Link4 className="p-BookCall Link105 bpt" {...Link105Props} {...Link105Cb} {...Link105IoProps}/>
<Link4 className="p-BookCall Link106 bpt" {...Link106Props} {...Link106Cb} {...Link106IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-BookCall Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox4 className="p-BookCall TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Link4 className="p-BookCall Link110 bpt" {...Link110Props} {...Link110Cb} {...Link110IoProps}/>
<TextBox4 className="p-BookCall TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Link4 className="p-BookCall Link111 bpt" {...Link111Props} {...Link111Cb} {...Link111IoProps}/>
<TextBox4 className="p-BookCall TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Link4 className="p-BookCall Link113 bpt" {...Link113Props} {...Link113Cb} {...Link113IoProps}/>
<TextBox4 className="p-BookCall TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<Link4 className="p-BookCall Link114 bpt" {...Link114Props} {...Link114Cb} {...Link114IoProps}/>
<TextBox4 className="p-BookCall TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Link4 className="p-BookCall Link112 bpt" {...Link112Props} {...Link112Cb} {...Link112IoProps}/>
<TextBox4 className="p-BookCall TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<Link4 className="p-BookCall Link115 bpt" {...Link115Props} {...Link115Cb} {...Link115IoProps}/>
</Flex4>
</Flex4>
</Flex4>
  </>);
}
