import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex421Cb, useFlex456Cb, useFlex458Cb, useFlex497Cb, useFlex496Cb, useFlex494Cb, useFlex495Cb, useFlex615Cb, useFlex614Cb, useFlex612Cb, useFlex613Cb, useFlex619Cb, useFlex618Cb, useFlex616Cb, useFlex617Cb, useFlex623Cb, useFlex622Cb, useFlex620Cb, useFlex621Cb, useFlex627Cb, useFlex626Cb, useFlex624Cb, useFlex625Cb, useFlex777Cb, useFlex776Cb, useFlex775Cb, useFlex773Cb, useMenu10Cb, useFlex774Cb, useFlex772Cb, useFlex771Cb, useFlex770Cb, useFlex804Cb, useFlex803Cb, useFlex800Cb, useFlex801Cb, useFlex798Cb, useFlex794Cb, useFlex795Cb, useFlex796Cb, useFlex799Cb, useFlex797Cb, useFlex802Cb, useImage144Cb, useTextBox378Cb, useTextBox379Cb, useTextBox380Cb, useImage143Cb, useImage184Cb, useImage183Cb, useTextBox452Cb, useTextBox453Cb, useTextBox454Cb, useImage186Cb, useImage185Cb, useTextBox455Cb, useTextBox456Cb, useTextBox457Cb, useImage188Cb, useImage187Cb, useTextBox458Cb, useTextBox459Cb, useTextBox460Cb, useImage190Cb, useImage189Cb, useTextBox461Cb, useTextBox462Cb, useTextBox463Cb, useImage231Cb, useTextBox613Cb, useTextBox614Cb, useTextBox615Cb, useTextBox616Cb, useTextBox612Cb, useImage230Cb, useTextBox608Cb, useTextBox609Cb, useTextBox610Cb, useTextBox611Cb, useImage229Cb, useTextBox607Cb, useLink221Cb, useLink222Cb, useLink223Cb, useTextBox648Cb, useTextBox649Cb, useTextBox650Cb, useLink224Cb, useTextBox651Cb, useLink225Cb, useTextBox652Cb, useLink226Cb, useTextBox653Cb, useTextBox637Cb, useTextBox638Cb, useTextBox639Cb, useTextBox640Cb, useTextBox641Cb, useTextBox642Cb, useTextBox643Cb, useTextBox644Cb, useTextBox645Cb, useTextBox647Cb, useImage239Cb, useTextBox646Cb, useImage238Cb, useTextBox654Cb, useTextBox655Cb } from "../page-cbs/Projects";
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

  const Flex421Props = useStore((state)=>state["Projects"]["Flex421"]);
const Flex421IoProps = useIoStore((state)=>state["Projects"]["Flex421"]);
const Flex421Cb = useFlex421Cb()
const Flex456Props = useStore((state)=>state["Projects"]["Flex456"]);
const Flex456IoProps = useIoStore((state)=>state["Projects"]["Flex456"]);
const Flex456Cb = useFlex456Cb()
const Flex458Props = useStore((state)=>state["Projects"]["Flex458"]);
const Flex458IoProps = useIoStore((state)=>state["Projects"]["Flex458"]);
const Flex458Cb = useFlex458Cb()
const Flex497Props = useStore((state)=>state["Projects"]["Flex497"]);
const Flex497IoProps = useIoStore((state)=>state["Projects"]["Flex497"]);
const Flex497Cb = useFlex497Cb()
const Flex496Props = useStore((state)=>state["Projects"]["Flex496"]);
const Flex496IoProps = useIoStore((state)=>state["Projects"]["Flex496"]);
const Flex496Cb = useFlex496Cb()
const Flex494Props = useStore((state)=>state["Projects"]["Flex494"]);
const Flex494IoProps = useIoStore((state)=>state["Projects"]["Flex494"]);
const Flex494Cb = useFlex494Cb()
const Flex495Props = useStore((state)=>state["Projects"]["Flex495"]);
const Flex495IoProps = useIoStore((state)=>state["Projects"]["Flex495"]);
const Flex495Cb = useFlex495Cb()
const Flex615Props = useStore((state)=>state["Projects"]["Flex615"]);
const Flex615IoProps = useIoStore((state)=>state["Projects"]["Flex615"]);
const Flex615Cb = useFlex615Cb()
const Flex614Props = useStore((state)=>state["Projects"]["Flex614"]);
const Flex614IoProps = useIoStore((state)=>state["Projects"]["Flex614"]);
const Flex614Cb = useFlex614Cb()
const Flex612Props = useStore((state)=>state["Projects"]["Flex612"]);
const Flex612IoProps = useIoStore((state)=>state["Projects"]["Flex612"]);
const Flex612Cb = useFlex612Cb()
const Flex613Props = useStore((state)=>state["Projects"]["Flex613"]);
const Flex613IoProps = useIoStore((state)=>state["Projects"]["Flex613"]);
const Flex613Cb = useFlex613Cb()
const Flex619Props = useStore((state)=>state["Projects"]["Flex619"]);
const Flex619IoProps = useIoStore((state)=>state["Projects"]["Flex619"]);
const Flex619Cb = useFlex619Cb()
const Flex618Props = useStore((state)=>state["Projects"]["Flex618"]);
const Flex618IoProps = useIoStore((state)=>state["Projects"]["Flex618"]);
const Flex618Cb = useFlex618Cb()
const Flex616Props = useStore((state)=>state["Projects"]["Flex616"]);
const Flex616IoProps = useIoStore((state)=>state["Projects"]["Flex616"]);
const Flex616Cb = useFlex616Cb()
const Flex617Props = useStore((state)=>state["Projects"]["Flex617"]);
const Flex617IoProps = useIoStore((state)=>state["Projects"]["Flex617"]);
const Flex617Cb = useFlex617Cb()
const Flex623Props = useStore((state)=>state["Projects"]["Flex623"]);
const Flex623IoProps = useIoStore((state)=>state["Projects"]["Flex623"]);
const Flex623Cb = useFlex623Cb()
const Flex622Props = useStore((state)=>state["Projects"]["Flex622"]);
const Flex622IoProps = useIoStore((state)=>state["Projects"]["Flex622"]);
const Flex622Cb = useFlex622Cb()
const Flex620Props = useStore((state)=>state["Projects"]["Flex620"]);
const Flex620IoProps = useIoStore((state)=>state["Projects"]["Flex620"]);
const Flex620Cb = useFlex620Cb()
const Flex621Props = useStore((state)=>state["Projects"]["Flex621"]);
const Flex621IoProps = useIoStore((state)=>state["Projects"]["Flex621"]);
const Flex621Cb = useFlex621Cb()
const Flex627Props = useStore((state)=>state["Projects"]["Flex627"]);
const Flex627IoProps = useIoStore((state)=>state["Projects"]["Flex627"]);
const Flex627Cb = useFlex627Cb()
const Flex626Props = useStore((state)=>state["Projects"]["Flex626"]);
const Flex626IoProps = useIoStore((state)=>state["Projects"]["Flex626"]);
const Flex626Cb = useFlex626Cb()
const Flex624Props = useStore((state)=>state["Projects"]["Flex624"]);
const Flex624IoProps = useIoStore((state)=>state["Projects"]["Flex624"]);
const Flex624Cb = useFlex624Cb()
const Flex625Props = useStore((state)=>state["Projects"]["Flex625"]);
const Flex625IoProps = useIoStore((state)=>state["Projects"]["Flex625"]);
const Flex625Cb = useFlex625Cb()
const Flex777Props = useStore((state)=>state["Projects"]["Flex777"]);
const Flex777IoProps = useIoStore((state)=>state["Projects"]["Flex777"]);
const Flex777Cb = useFlex777Cb()
const Flex776Props = useStore((state)=>state["Projects"]["Flex776"]);
const Flex776IoProps = useIoStore((state)=>state["Projects"]["Flex776"]);
const Flex776Cb = useFlex776Cb()
const Flex775Props = useStore((state)=>state["Projects"]["Flex775"]);
const Flex775IoProps = useIoStore((state)=>state["Projects"]["Flex775"]);
const Flex775Cb = useFlex775Cb()
const Flex773Props = useStore((state)=>state["Projects"]["Flex773"]);
const Flex773IoProps = useIoStore((state)=>state["Projects"]["Flex773"]);
const Flex773Cb = useFlex773Cb()
const Menu10Props = useStore((state)=>state["Projects"]["Menu10"]);
const Menu10IoProps = useIoStore((state)=>state["Projects"]["Menu10"]);
const Menu10Cb = useMenu10Cb()
const Flex774Props = useStore((state)=>state["Projects"]["Flex774"]);
const Flex774IoProps = useIoStore((state)=>state["Projects"]["Flex774"]);
const Flex774Cb = useFlex774Cb()
const Flex772Props = useStore((state)=>state["Projects"]["Flex772"]);
const Flex772IoProps = useIoStore((state)=>state["Projects"]["Flex772"]);
const Flex772Cb = useFlex772Cb()
const Flex771Props = useStore((state)=>state["Projects"]["Flex771"]);
const Flex771IoProps = useIoStore((state)=>state["Projects"]["Flex771"]);
const Flex771Cb = useFlex771Cb()
const Flex770Props = useStore((state)=>state["Projects"]["Flex770"]);
const Flex770IoProps = useIoStore((state)=>state["Projects"]["Flex770"]);
const Flex770Cb = useFlex770Cb()
const Flex804Props = useStore((state)=>state["Projects"]["Flex804"]);
const Flex804IoProps = useIoStore((state)=>state["Projects"]["Flex804"]);
const Flex804Cb = useFlex804Cb()
const Flex803Props = useStore((state)=>state["Projects"]["Flex803"]);
const Flex803IoProps = useIoStore((state)=>state["Projects"]["Flex803"]);
const Flex803Cb = useFlex803Cb()
const Flex800Props = useStore((state)=>state["Projects"]["Flex800"]);
const Flex800IoProps = useIoStore((state)=>state["Projects"]["Flex800"]);
const Flex800Cb = useFlex800Cb()
const Flex801Props = useStore((state)=>state["Projects"]["Flex801"]);
const Flex801IoProps = useIoStore((state)=>state["Projects"]["Flex801"]);
const Flex801Cb = useFlex801Cb()
const Flex798Props = useStore((state)=>state["Projects"]["Flex798"]);
const Flex798IoProps = useIoStore((state)=>state["Projects"]["Flex798"]);
const Flex798Cb = useFlex798Cb()
const Flex794Props = useStore((state)=>state["Projects"]["Flex794"]);
const Flex794IoProps = useIoStore((state)=>state["Projects"]["Flex794"]);
const Flex794Cb = useFlex794Cb()
const Flex795Props = useStore((state)=>state["Projects"]["Flex795"]);
const Flex795IoProps = useIoStore((state)=>state["Projects"]["Flex795"]);
const Flex795Cb = useFlex795Cb()
const Flex796Props = useStore((state)=>state["Projects"]["Flex796"]);
const Flex796IoProps = useIoStore((state)=>state["Projects"]["Flex796"]);
const Flex796Cb = useFlex796Cb()
const Flex799Props = useStore((state)=>state["Projects"]["Flex799"]);
const Flex799IoProps = useIoStore((state)=>state["Projects"]["Flex799"]);
const Flex799Cb = useFlex799Cb()
const Flex797Props = useStore((state)=>state["Projects"]["Flex797"]);
const Flex797IoProps = useIoStore((state)=>state["Projects"]["Flex797"]);
const Flex797Cb = useFlex797Cb()
const Flex802Props = useStore((state)=>state["Projects"]["Flex802"]);
const Flex802IoProps = useIoStore((state)=>state["Projects"]["Flex802"]);
const Flex802Cb = useFlex802Cb()
const Image144Props = useStore((state)=>state["Projects"]["Image144"]);
const Image144IoProps = useIoStore((state)=>state["Projects"]["Image144"]);
const Image144Cb = useImage144Cb()
const TextBox378Props = useStore((state)=>state["Projects"]["TextBox378"]);
const TextBox378IoProps = useIoStore((state)=>state["Projects"]["TextBox378"]);
const TextBox378Cb = useTextBox378Cb()
const TextBox379Props = useStore((state)=>state["Projects"]["TextBox379"]);
const TextBox379IoProps = useIoStore((state)=>state["Projects"]["TextBox379"]);
const TextBox379Cb = useTextBox379Cb()
const TextBox380Props = useStore((state)=>state["Projects"]["TextBox380"]);
const TextBox380IoProps = useIoStore((state)=>state["Projects"]["TextBox380"]);
const TextBox380Cb = useTextBox380Cb()
const Image143Props = useStore((state)=>state["Projects"]["Image143"]);
const Image143IoProps = useIoStore((state)=>state["Projects"]["Image143"]);
const Image143Cb = useImage143Cb()
const Image184Props = useStore((state)=>state["Projects"]["Image184"]);
const Image184IoProps = useIoStore((state)=>state["Projects"]["Image184"]);
const Image184Cb = useImage184Cb()
const Image183Props = useStore((state)=>state["Projects"]["Image183"]);
const Image183IoProps = useIoStore((state)=>state["Projects"]["Image183"]);
const Image183Cb = useImage183Cb()
const TextBox452Props = useStore((state)=>state["Projects"]["TextBox452"]);
const TextBox452IoProps = useIoStore((state)=>state["Projects"]["TextBox452"]);
const TextBox452Cb = useTextBox452Cb()
const TextBox453Props = useStore((state)=>state["Projects"]["TextBox453"]);
const TextBox453IoProps = useIoStore((state)=>state["Projects"]["TextBox453"]);
const TextBox453Cb = useTextBox453Cb()
const TextBox454Props = useStore((state)=>state["Projects"]["TextBox454"]);
const TextBox454IoProps = useIoStore((state)=>state["Projects"]["TextBox454"]);
const TextBox454Cb = useTextBox454Cb()
const Image186Props = useStore((state)=>state["Projects"]["Image186"]);
const Image186IoProps = useIoStore((state)=>state["Projects"]["Image186"]);
const Image186Cb = useImage186Cb()
const Image185Props = useStore((state)=>state["Projects"]["Image185"]);
const Image185IoProps = useIoStore((state)=>state["Projects"]["Image185"]);
const Image185Cb = useImage185Cb()
const TextBox455Props = useStore((state)=>state["Projects"]["TextBox455"]);
const TextBox455IoProps = useIoStore((state)=>state["Projects"]["TextBox455"]);
const TextBox455Cb = useTextBox455Cb()
const TextBox456Props = useStore((state)=>state["Projects"]["TextBox456"]);
const TextBox456IoProps = useIoStore((state)=>state["Projects"]["TextBox456"]);
const TextBox456Cb = useTextBox456Cb()
const TextBox457Props = useStore((state)=>state["Projects"]["TextBox457"]);
const TextBox457IoProps = useIoStore((state)=>state["Projects"]["TextBox457"]);
const TextBox457Cb = useTextBox457Cb()
const Image188Props = useStore((state)=>state["Projects"]["Image188"]);
const Image188IoProps = useIoStore((state)=>state["Projects"]["Image188"]);
const Image188Cb = useImage188Cb()
const Image187Props = useStore((state)=>state["Projects"]["Image187"]);
const Image187IoProps = useIoStore((state)=>state["Projects"]["Image187"]);
const Image187Cb = useImage187Cb()
const TextBox458Props = useStore((state)=>state["Projects"]["TextBox458"]);
const TextBox458IoProps = useIoStore((state)=>state["Projects"]["TextBox458"]);
const TextBox458Cb = useTextBox458Cb()
const TextBox459Props = useStore((state)=>state["Projects"]["TextBox459"]);
const TextBox459IoProps = useIoStore((state)=>state["Projects"]["TextBox459"]);
const TextBox459Cb = useTextBox459Cb()
const TextBox460Props = useStore((state)=>state["Projects"]["TextBox460"]);
const TextBox460IoProps = useIoStore((state)=>state["Projects"]["TextBox460"]);
const TextBox460Cb = useTextBox460Cb()
const Image190Props = useStore((state)=>state["Projects"]["Image190"]);
const Image190IoProps = useIoStore((state)=>state["Projects"]["Image190"]);
const Image190Cb = useImage190Cb()
const Image189Props = useStore((state)=>state["Projects"]["Image189"]);
const Image189IoProps = useIoStore((state)=>state["Projects"]["Image189"]);
const Image189Cb = useImage189Cb()
const TextBox461Props = useStore((state)=>state["Projects"]["TextBox461"]);
const TextBox461IoProps = useIoStore((state)=>state["Projects"]["TextBox461"]);
const TextBox461Cb = useTextBox461Cb()
const TextBox462Props = useStore((state)=>state["Projects"]["TextBox462"]);
const TextBox462IoProps = useIoStore((state)=>state["Projects"]["TextBox462"]);
const TextBox462Cb = useTextBox462Cb()
const TextBox463Props = useStore((state)=>state["Projects"]["TextBox463"]);
const TextBox463IoProps = useIoStore((state)=>state["Projects"]["TextBox463"]);
const TextBox463Cb = useTextBox463Cb()
const Image231Props = useStore((state)=>state["Projects"]["Image231"]);
const Image231IoProps = useIoStore((state)=>state["Projects"]["Image231"]);
const Image231Cb = useImage231Cb()
const TextBox613Props = useStore((state)=>state["Projects"]["TextBox613"]);
const TextBox613IoProps = useIoStore((state)=>state["Projects"]["TextBox613"]);
const TextBox613Cb = useTextBox613Cb()
const TextBox614Props = useStore((state)=>state["Projects"]["TextBox614"]);
const TextBox614IoProps = useIoStore((state)=>state["Projects"]["TextBox614"]);
const TextBox614Cb = useTextBox614Cb()
const TextBox615Props = useStore((state)=>state["Projects"]["TextBox615"]);
const TextBox615IoProps = useIoStore((state)=>state["Projects"]["TextBox615"]);
const TextBox615Cb = useTextBox615Cb()
const TextBox616Props = useStore((state)=>state["Projects"]["TextBox616"]);
const TextBox616IoProps = useIoStore((state)=>state["Projects"]["TextBox616"]);
const TextBox616Cb = useTextBox616Cb()
const TextBox612Props = useStore((state)=>state["Projects"]["TextBox612"]);
const TextBox612IoProps = useIoStore((state)=>state["Projects"]["TextBox612"]);
const TextBox612Cb = useTextBox612Cb()
const Image230Props = useStore((state)=>state["Projects"]["Image230"]);
const Image230IoProps = useIoStore((state)=>state["Projects"]["Image230"]);
const Image230Cb = useImage230Cb()
const TextBox608Props = useStore((state)=>state["Projects"]["TextBox608"]);
const TextBox608IoProps = useIoStore((state)=>state["Projects"]["TextBox608"]);
const TextBox608Cb = useTextBox608Cb()
const TextBox609Props = useStore((state)=>state["Projects"]["TextBox609"]);
const TextBox609IoProps = useIoStore((state)=>state["Projects"]["TextBox609"]);
const TextBox609Cb = useTextBox609Cb()
const TextBox610Props = useStore((state)=>state["Projects"]["TextBox610"]);
const TextBox610IoProps = useIoStore((state)=>state["Projects"]["TextBox610"]);
const TextBox610Cb = useTextBox610Cb()
const TextBox611Props = useStore((state)=>state["Projects"]["TextBox611"]);
const TextBox611IoProps = useIoStore((state)=>state["Projects"]["TextBox611"]);
const TextBox611Cb = useTextBox611Cb()
const Image229Props = useStore((state)=>state["Projects"]["Image229"]);
const Image229IoProps = useIoStore((state)=>state["Projects"]["Image229"]);
const Image229Cb = useImage229Cb()
const TextBox607Props = useStore((state)=>state["Projects"]["TextBox607"]);
const TextBox607IoProps = useIoStore((state)=>state["Projects"]["TextBox607"]);
const TextBox607Cb = useTextBox607Cb()
const Link221Props = useStore((state)=>state["Projects"]["Link221"]);
const Link221IoProps = useIoStore((state)=>state["Projects"]["Link221"]);
const Link221Cb = useLink221Cb()
const Link222Props = useStore((state)=>state["Projects"]["Link222"]);
const Link222IoProps = useIoStore((state)=>state["Projects"]["Link222"]);
const Link222Cb = useLink222Cb()
const Link223Props = useStore((state)=>state["Projects"]["Link223"]);
const Link223IoProps = useIoStore((state)=>state["Projects"]["Link223"]);
const Link223Cb = useLink223Cb()
const TextBox648Props = useStore((state)=>state["Projects"]["TextBox648"]);
const TextBox648IoProps = useIoStore((state)=>state["Projects"]["TextBox648"]);
const TextBox648Cb = useTextBox648Cb()
const TextBox649Props = useStore((state)=>state["Projects"]["TextBox649"]);
const TextBox649IoProps = useIoStore((state)=>state["Projects"]["TextBox649"]);
const TextBox649Cb = useTextBox649Cb()
const TextBox650Props = useStore((state)=>state["Projects"]["TextBox650"]);
const TextBox650IoProps = useIoStore((state)=>state["Projects"]["TextBox650"]);
const TextBox650Cb = useTextBox650Cb()
const Link224Props = useStore((state)=>state["Projects"]["Link224"]);
const Link224IoProps = useIoStore((state)=>state["Projects"]["Link224"]);
const Link224Cb = useLink224Cb()
const TextBox651Props = useStore((state)=>state["Projects"]["TextBox651"]);
const TextBox651IoProps = useIoStore((state)=>state["Projects"]["TextBox651"]);
const TextBox651Cb = useTextBox651Cb()
const Link225Props = useStore((state)=>state["Projects"]["Link225"]);
const Link225IoProps = useIoStore((state)=>state["Projects"]["Link225"]);
const Link225Cb = useLink225Cb()
const TextBox652Props = useStore((state)=>state["Projects"]["TextBox652"]);
const TextBox652IoProps = useIoStore((state)=>state["Projects"]["TextBox652"]);
const TextBox652Cb = useTextBox652Cb()
const Link226Props = useStore((state)=>state["Projects"]["Link226"]);
const Link226IoProps = useIoStore((state)=>state["Projects"]["Link226"]);
const Link226Cb = useLink226Cb()
const TextBox653Props = useStore((state)=>state["Projects"]["TextBox653"]);
const TextBox653IoProps = useIoStore((state)=>state["Projects"]["TextBox653"]);
const TextBox653Cb = useTextBox653Cb()
const TextBox637Props = useStore((state)=>state["Projects"]["TextBox637"]);
const TextBox637IoProps = useIoStore((state)=>state["Projects"]["TextBox637"]);
const TextBox637Cb = useTextBox637Cb()
const TextBox638Props = useStore((state)=>state["Projects"]["TextBox638"]);
const TextBox638IoProps = useIoStore((state)=>state["Projects"]["TextBox638"]);
const TextBox638Cb = useTextBox638Cb()
const TextBox639Props = useStore((state)=>state["Projects"]["TextBox639"]);
const TextBox639IoProps = useIoStore((state)=>state["Projects"]["TextBox639"]);
const TextBox639Cb = useTextBox639Cb()
const TextBox640Props = useStore((state)=>state["Projects"]["TextBox640"]);
const TextBox640IoProps = useIoStore((state)=>state["Projects"]["TextBox640"]);
const TextBox640Cb = useTextBox640Cb()
const TextBox641Props = useStore((state)=>state["Projects"]["TextBox641"]);
const TextBox641IoProps = useIoStore((state)=>state["Projects"]["TextBox641"]);
const TextBox641Cb = useTextBox641Cb()
const TextBox642Props = useStore((state)=>state["Projects"]["TextBox642"]);
const TextBox642IoProps = useIoStore((state)=>state["Projects"]["TextBox642"]);
const TextBox642Cb = useTextBox642Cb()
const TextBox643Props = useStore((state)=>state["Projects"]["TextBox643"]);
const TextBox643IoProps = useIoStore((state)=>state["Projects"]["TextBox643"]);
const TextBox643Cb = useTextBox643Cb()
const TextBox644Props = useStore((state)=>state["Projects"]["TextBox644"]);
const TextBox644IoProps = useIoStore((state)=>state["Projects"]["TextBox644"]);
const TextBox644Cb = useTextBox644Cb()
const TextBox645Props = useStore((state)=>state["Projects"]["TextBox645"]);
const TextBox645IoProps = useIoStore((state)=>state["Projects"]["TextBox645"]);
const TextBox645Cb = useTextBox645Cb()
const TextBox647Props = useStore((state)=>state["Projects"]["TextBox647"]);
const TextBox647IoProps = useIoStore((state)=>state["Projects"]["TextBox647"]);
const TextBox647Cb = useTextBox647Cb()
const Image239Props = useStore((state)=>state["Projects"]["Image239"]);
const Image239IoProps = useIoStore((state)=>state["Projects"]["Image239"]);
const Image239Cb = useImage239Cb()
const TextBox646Props = useStore((state)=>state["Projects"]["TextBox646"]);
const TextBox646IoProps = useIoStore((state)=>state["Projects"]["TextBox646"]);
const TextBox646Cb = useTextBox646Cb()
const Image238Props = useStore((state)=>state["Projects"]["Image238"]);
const Image238IoProps = useIoStore((state)=>state["Projects"]["Image238"]);
const Image238Cb = useImage238Cb()
const TextBox654Props = useStore((state)=>state["Projects"]["TextBox654"]);
const TextBox654IoProps = useIoStore((state)=>state["Projects"]["TextBox654"]);
const TextBox654Cb = useTextBox654Cb()
const TextBox655Props = useStore((state)=>state["Projects"]["TextBox655"]);
const TextBox655IoProps = useIoStore((state)=>state["Projects"]["TextBox655"]);
const TextBox655Cb = useTextBox655Cb()

  return (<>
  <Flex1 className="p-Projects Flex777 bpt" {...Flex777Props} {...Flex777Cb} {...Flex777IoProps}>
<Flex1 className="p-Projects Flex776 bpt" {...Flex776Props} {...Flex776Cb} {...Flex776IoProps}>
<Image1 className="p-Projects Image231 bpt" {...Image231Props} {...Image231Cb} {...Image231IoProps}/>
<Flex1 className="p-Projects Flex775 bpt" {...Flex775Props} {...Flex775Cb} {...Flex775IoProps}>
<TextBox1 className="p-Projects TextBox616 bpt" {...TextBox616Props} {...TextBox616Cb} {...TextBox616IoProps}/>
<TextBox1 className="p-Projects TextBox613 bpt" {...TextBox613Props} {...TextBox613Cb} {...TextBox613IoProps}/>
<TextBox1 className="p-Projects TextBox614 bpt" {...TextBox614Props} {...TextBox614Cb} {...TextBox614IoProps}/>
<TextBox1 className="p-Projects TextBox615 bpt" {...TextBox615Props} {...TextBox615Cb} {...TextBox615IoProps}/>
<Flex1 className="p-Projects Flex773 bpt" {...Flex773Props} {...Flex773Cb} {...Flex773IoProps}>
<TextBox1 className="p-Projects TextBox612 bpt" {...TextBox612Props} {...TextBox612Cb} {...TextBox612IoProps}/>
<Image1 className="p-Projects Image230 bpt" {...Image230Props} {...Image230Cb} {...Image230IoProps}/>
</Flex1>
</Flex1>
<Menu1 className="p-Projects Menu10 bpt" {...Menu10Props} {...Menu10Cb} {...Menu10IoProps}>
<Flex1 className="p-Projects Flex774 bpt" {...Flex774Props} {...Flex774Cb} {...Flex774IoProps}>
<Flex1 className="p-Projects Flex772 bpt" {...Flex772Props} {...Flex772Cb} {...Flex772IoProps}>
<Flex1 className="p-Projects Flex771 bpt" {...Flex771Props} {...Flex771Cb} {...Flex771IoProps}>
<TextBox1 className="p-Projects TextBox608 bpt" {...TextBox608Props} {...TextBox608Cb} {...TextBox608IoProps}/>
<TextBox1 className="p-Projects TextBox611 bpt" {...TextBox611Props} {...TextBox611Cb} {...TextBox611IoProps}/>
<TextBox1 className="p-Projects TextBox610 bpt" {...TextBox610Props} {...TextBox610Cb} {...TextBox610IoProps}/>
<TextBox1 className="p-Projects TextBox609 bpt" {...TextBox609Props} {...TextBox609Cb} {...TextBox609IoProps}/>
<Flex1 className="p-Projects Flex770 bpt" {...Flex770Props} {...Flex770Cb} {...Flex770IoProps}>
<TextBox1 className="p-Projects TextBox607 bpt" {...TextBox607Props} {...TextBox607Cb} {...TextBox607IoProps}/>
<Image1 className="p-Projects Image229 bpt" {...Image229Props} {...Image229Cb} {...Image229IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex421 bpt" {...Flex421Props} {...Flex421Cb} {...Flex421IoProps}>
<Flex1 className="p-Projects Flex456 bpt" {...Flex456Props} {...Flex456Cb} {...Flex456IoProps}>
<Flex1 className="p-Projects Flex458 bpt" {...Flex458Props} {...Flex458Cb} {...Flex458IoProps}>
<Flex1 className="p-Projects Flex497 bpt" {...Flex497Props} {...Flex497Cb} {...Flex497IoProps}>
<Image1 className="p-Projects Image144 bpt" {...Image144Props} {...Image144Cb} {...Image144IoProps}/>
<Flex1 className="p-Projects Flex496 bpt" {...Flex496Props} {...Flex496Cb} {...Flex496IoProps}>
<Flex1 className="p-Projects Flex494 bpt" {...Flex494Props} {...Flex494Cb} {...Flex494IoProps}>
<TextBox1 className="p-Projects TextBox379 bpt" {...TextBox379Props} {...TextBox379Cb} {...TextBox379IoProps}/>
<TextBox1 className="p-Projects TextBox378 bpt" {...TextBox378Props} {...TextBox378Cb} {...TextBox378IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex495 bpt" {...Flex495Props} {...Flex495Cb} {...Flex495IoProps}>
<TextBox1 className="p-Projects TextBox380 bpt" {...TextBox380Props} {...TextBox380Cb} {...TextBox380IoProps}/>
<Image1 className="p-Projects Image143 bpt" {...Image143Props} {...Image143Cb} {...Image143IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex615 bpt" {...Flex615Props} {...Flex615Cb} {...Flex615IoProps}>
<Image1 className="p-Projects Image184 bpt" {...Image184Props} {...Image184Cb} {...Image184IoProps}/>
<Flex1 className="p-Projects Flex614 bpt" {...Flex614Props} {...Flex614Cb} {...Flex614IoProps}>
<Flex1 className="p-Projects Flex613 bpt" {...Flex613Props} {...Flex613Cb} {...Flex613IoProps}>
<TextBox1 className="p-Projects TextBox453 bpt" {...TextBox453Props} {...TextBox453Cb} {...TextBox453IoProps}/>
<TextBox1 className="p-Projects TextBox454 bpt" {...TextBox454Props} {...TextBox454Cb} {...TextBox454IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex612 bpt" {...Flex612Props} {...Flex612Cb} {...Flex612IoProps}>
<TextBox1 className="p-Projects TextBox452 bpt" {...TextBox452Props} {...TextBox452Cb} {...TextBox452IoProps}/>
<Image1 className="p-Projects Image183 bpt" {...Image183Props} {...Image183Cb} {...Image183IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex619 bpt" {...Flex619Props} {...Flex619Cb} {...Flex619IoProps}>
<Image1 className="p-Projects Image186 bpt" {...Image186Props} {...Image186Cb} {...Image186IoProps}/>
<Flex1 className="p-Projects Flex618 bpt" {...Flex618Props} {...Flex618Cb} {...Flex618IoProps}>
<Flex1 className="p-Projects Flex617 bpt" {...Flex617Props} {...Flex617Cb} {...Flex617IoProps}>
<TextBox1 className="p-Projects TextBox456 bpt" {...TextBox456Props} {...TextBox456Cb} {...TextBox456IoProps}/>
<TextBox1 className="p-Projects TextBox457 bpt" {...TextBox457Props} {...TextBox457Cb} {...TextBox457IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex616 bpt" {...Flex616Props} {...Flex616Cb} {...Flex616IoProps}>
<TextBox1 className="p-Projects TextBox455 bpt" {...TextBox455Props} {...TextBox455Cb} {...TextBox455IoProps}/>
<Image1 className="p-Projects Image185 bpt" {...Image185Props} {...Image185Cb} {...Image185IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex623 bpt" {...Flex623Props} {...Flex623Cb} {...Flex623IoProps}>
<Image1 className="p-Projects Image188 bpt" {...Image188Props} {...Image188Cb} {...Image188IoProps}/>
<Flex1 className="p-Projects Flex622 bpt" {...Flex622Props} {...Flex622Cb} {...Flex622IoProps}>
<Flex1 className="p-Projects Flex621 bpt" {...Flex621Props} {...Flex621Cb} {...Flex621IoProps}>
<TextBox1 className="p-Projects TextBox459 bpt" {...TextBox459Props} {...TextBox459Cb} {...TextBox459IoProps}/>
<TextBox1 className="p-Projects TextBox460 bpt" {...TextBox460Props} {...TextBox460Cb} {...TextBox460IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex620 bpt" {...Flex620Props} {...Flex620Cb} {...Flex620IoProps}>
<TextBox1 className="p-Projects TextBox458 bpt" {...TextBox458Props} {...TextBox458Cb} {...TextBox458IoProps}/>
<Image1 className="p-Projects Image187 bpt" {...Image187Props} {...Image187Cb} {...Image187IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex627 bpt" {...Flex627Props} {...Flex627Cb} {...Flex627IoProps}>
<Image1 className="p-Projects Image190 bpt" {...Image190Props} {...Image190Cb} {...Image190IoProps}/>
<Flex1 className="p-Projects Flex626 bpt" {...Flex626Props} {...Flex626Cb} {...Flex626IoProps}>
<Flex1 className="p-Projects Flex625 bpt" {...Flex625Props} {...Flex625Cb} {...Flex625IoProps}>
<TextBox1 className="p-Projects TextBox462 bpt" {...TextBox462Props} {...TextBox462Cb} {...TextBox462IoProps}/>
<TextBox1 className="p-Projects TextBox463 bpt" {...TextBox463Props} {...TextBox463Cb} {...TextBox463IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex624 bpt" {...Flex624Props} {...Flex624Cb} {...Flex624IoProps}>
<TextBox1 className="p-Projects TextBox461 bpt" {...TextBox461Props} {...TextBox461Cb} {...TextBox461IoProps}/>
<Image1 className="p-Projects Image189 bpt" {...Image189Props} {...Image189Cb} {...Image189IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex804 bpt" {...Flex804Props} {...Flex804Cb} {...Flex804IoProps}>
<Flex1 className="p-Projects Flex803 bpt" {...Flex803Props} {...Flex803Cb} {...Flex803IoProps}>
<Flex1 className="p-Projects Flex802 bpt" {...Flex802Props} {...Flex802Cb} {...Flex802IoProps}>
<TextBox1 className="p-Projects TextBox655 bpt" {...TextBox655Props} {...TextBox655Cb} {...TextBox655IoProps}/>
<TextBox1 className="p-Projects TextBox654 bpt" {...TextBox654Props} {...TextBox654Cb} {...TextBox654IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex801 bpt" {...Flex801Props} {...Flex801Cb} {...Flex801IoProps}>
<Flex1 className="p-Projects Flex799 bpt" {...Flex799Props} {...Flex799Cb} {...Flex799IoProps}>
<Image1 className="p-Projects Image239 bpt" {...Image239Props} {...Image239Cb} {...Image239IoProps}/>
<TextBox1 className="p-Projects TextBox647 bpt" {...TextBox647Props} {...TextBox647Cb} {...TextBox647IoProps}/>
<Flex1 className="p-Projects Flex797 bpt" {...Flex797Props} {...Flex797Cb} {...Flex797IoProps}>
<Image1 className="p-Projects Image238 bpt" {...Image238Props} {...Image238Cb} {...Image238IoProps}/>
<TextBox1 className="p-Projects TextBox646 bpt" {...TextBox646Props} {...TextBox646Cb} {...TextBox646IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex798 bpt" {...Flex798Props} {...Flex798Cb} {...Flex798IoProps}>
<Flex1 className="p-Projects Flex794 bpt" {...Flex794Props} {...Flex794Cb} {...Flex794IoProps}>
<TextBox1 className="p-Projects TextBox639 bpt" {...TextBox639Props} {...TextBox639Cb} {...TextBox639IoProps}/>
<TextBox1 className="p-Projects TextBox637 bpt" {...TextBox637Props} {...TextBox637Cb} {...TextBox637IoProps}/>
<TextBox1 className="p-Projects TextBox638 bpt" {...TextBox638Props} {...TextBox638Cb} {...TextBox638IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex796 bpt" {...Flex796Props} {...Flex796Cb} {...Flex796IoProps}>
<TextBox1 className="p-Projects TextBox645 bpt" {...TextBox645Props} {...TextBox645Cb} {...TextBox645IoProps}/>
<TextBox1 className="p-Projects TextBox644 bpt" {...TextBox644Props} {...TextBox644Cb} {...TextBox644IoProps}/>
<TextBox1 className="p-Projects TextBox643 bpt" {...TextBox643Props} {...TextBox643Cb} {...TextBox643IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex795 bpt" {...Flex795Props} {...Flex795Cb} {...Flex795IoProps}>
<TextBox1 className="p-Projects TextBox642 bpt" {...TextBox642Props} {...TextBox642Cb} {...TextBox642IoProps}/>
<TextBox1 className="p-Projects TextBox641 bpt" {...TextBox641Props} {...TextBox641Cb} {...TextBox641IoProps}/>
<TextBox1 className="p-Projects TextBox640 bpt" {...TextBox640Props} {...TextBox640Cb} {...TextBox640IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex800 bpt" {...Flex800Props} {...Flex800Cb} {...Flex800IoProps}>
<TextBox1 className="p-Projects TextBox653 bpt" {...TextBox653Props} {...TextBox653Cb} {...TextBox653IoProps}/>
<Link1 className="p-Projects Link226 bpt" {...Link226Props} {...Link226Cb} {...Link226IoProps}/>
<TextBox1 className="p-Projects TextBox652 bpt" {...TextBox652Props} {...TextBox652Cb} {...TextBox652IoProps}/>
<Link1 className="p-Projects Link225 bpt" {...Link225Props} {...Link225Cb} {...Link225IoProps}/>
<TextBox1 className="p-Projects TextBox651 bpt" {...TextBox651Props} {...TextBox651Cb} {...TextBox651IoProps}/>
<Link1 className="p-Projects Link223 bpt" {...Link223Props} {...Link223Cb} {...Link223IoProps}/>
<TextBox1 className="p-Projects TextBox650 bpt" {...TextBox650Props} {...TextBox650Cb} {...TextBox650IoProps}/>
<Link1 className="p-Projects Link222 bpt" {...Link222Props} {...Link222Cb} {...Link222IoProps}/>
<TextBox1 className="p-Projects TextBox649 bpt" {...TextBox649Props} {...TextBox649Cb} {...TextBox649IoProps}/>
<Link1 className="p-Projects Link224 bpt" {...Link224Props} {...Link224Cb} {...Link224IoProps}/>
<TextBox1 className="p-Projects TextBox648 bpt" {...TextBox648Props} {...TextBox648Cb} {...TextBox648IoProps}/>
<Link1 className="p-Projects Link221 bpt" {...Link221Props} {...Link221Cb} {...Link221IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
