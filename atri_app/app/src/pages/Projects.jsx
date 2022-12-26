import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex410Cb, useFlex409Cb, useFlex408Cb, useFlex407Cb, useFlex421Cb, useFlex456Cb, useFlex458Cb, useFlex497Cb, useFlex496Cb, useFlex494Cb, useFlex495Cb, useFlex615Cb, useFlex614Cb, useFlex612Cb, useFlex613Cb, useFlex619Cb, useFlex618Cb, useFlex616Cb, useFlex617Cb, useFlex623Cb, useFlex622Cb, useFlex620Cb, useFlex621Cb, useFlex627Cb, useFlex626Cb, useFlex624Cb, useFlex625Cb, useFlex433Cb, useFlex432Cb, useFlex429Cb, useFlex430Cb, useFlex427Cb, useFlex423Cb, useFlex424Cb, useFlex425Cb, useFlex428Cb, useFlex426Cb, useFlex431Cb, useImage118Cb, useTextBox315Cb, useTextBox316Cb, useTextBox317Cb, useTextBox318Cb, useImage117Cb, useTextBox314Cb, useImage144Cb, useTextBox378Cb, useTextBox379Cb, useTextBox380Cb, useImage143Cb, useImage184Cb, useImage183Cb, useTextBox452Cb, useTextBox453Cb, useTextBox454Cb, useImage186Cb, useImage185Cb, useTextBox455Cb, useTextBox456Cb, useTextBox457Cb, useImage188Cb, useImage187Cb, useTextBox458Cb, useTextBox459Cb, useTextBox460Cb, useImage190Cb, useImage189Cb, useTextBox461Cb, useTextBox462Cb, useTextBox463Cb, useLink170Cb, useLink171Cb, useLink172Cb, useTextBox335Cb, useTextBox336Cb, useTextBox337Cb, useLink173Cb, useTextBox338Cb, useLink174Cb, useTextBox339Cb, useLink175Cb, useTextBox340Cb, useLink161Cb, useLink162Cb, useLink163Cb, useLink164Cb, useLink165Cb, useLink166Cb, useLink167Cb, useLink168Cb, useLink169Cb, useTextBox334Cb, useImage124Cb, useTextBox333Cb, useImage123Cb, useTextBox341Cb, useTextBox342Cb } from "../page-cbs/Projects";
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

  const Flex410Props = useStore((state)=>state["Projects"]["Flex410"]);
const Flex410IoProps = useIoStore((state)=>state["Projects"]["Flex410"]);
const Flex410Cb = useFlex410Cb()
const Flex409Props = useStore((state)=>state["Projects"]["Flex409"]);
const Flex409IoProps = useIoStore((state)=>state["Projects"]["Flex409"]);
const Flex409Cb = useFlex409Cb()
const Flex408Props = useStore((state)=>state["Projects"]["Flex408"]);
const Flex408IoProps = useIoStore((state)=>state["Projects"]["Flex408"]);
const Flex408Cb = useFlex408Cb()
const Flex407Props = useStore((state)=>state["Projects"]["Flex407"]);
const Flex407IoProps = useIoStore((state)=>state["Projects"]["Flex407"]);
const Flex407Cb = useFlex407Cb()
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
const Flex433Props = useStore((state)=>state["Projects"]["Flex433"]);
const Flex433IoProps = useIoStore((state)=>state["Projects"]["Flex433"]);
const Flex433Cb = useFlex433Cb()
const Flex432Props = useStore((state)=>state["Projects"]["Flex432"]);
const Flex432IoProps = useIoStore((state)=>state["Projects"]["Flex432"]);
const Flex432Cb = useFlex432Cb()
const Flex429Props = useStore((state)=>state["Projects"]["Flex429"]);
const Flex429IoProps = useIoStore((state)=>state["Projects"]["Flex429"]);
const Flex429Cb = useFlex429Cb()
const Flex430Props = useStore((state)=>state["Projects"]["Flex430"]);
const Flex430IoProps = useIoStore((state)=>state["Projects"]["Flex430"]);
const Flex430Cb = useFlex430Cb()
const Flex427Props = useStore((state)=>state["Projects"]["Flex427"]);
const Flex427IoProps = useIoStore((state)=>state["Projects"]["Flex427"]);
const Flex427Cb = useFlex427Cb()
const Flex423Props = useStore((state)=>state["Projects"]["Flex423"]);
const Flex423IoProps = useIoStore((state)=>state["Projects"]["Flex423"]);
const Flex423Cb = useFlex423Cb()
const Flex424Props = useStore((state)=>state["Projects"]["Flex424"]);
const Flex424IoProps = useIoStore((state)=>state["Projects"]["Flex424"]);
const Flex424Cb = useFlex424Cb()
const Flex425Props = useStore((state)=>state["Projects"]["Flex425"]);
const Flex425IoProps = useIoStore((state)=>state["Projects"]["Flex425"]);
const Flex425Cb = useFlex425Cb()
const Flex428Props = useStore((state)=>state["Projects"]["Flex428"]);
const Flex428IoProps = useIoStore((state)=>state["Projects"]["Flex428"]);
const Flex428Cb = useFlex428Cb()
const Flex426Props = useStore((state)=>state["Projects"]["Flex426"]);
const Flex426IoProps = useIoStore((state)=>state["Projects"]["Flex426"]);
const Flex426Cb = useFlex426Cb()
const Flex431Props = useStore((state)=>state["Projects"]["Flex431"]);
const Flex431IoProps = useIoStore((state)=>state["Projects"]["Flex431"]);
const Flex431Cb = useFlex431Cb()
const Image118Props = useStore((state)=>state["Projects"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Projects"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox315Props = useStore((state)=>state["Projects"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["Projects"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const TextBox316Props = useStore((state)=>state["Projects"]["TextBox316"]);
const TextBox316IoProps = useIoStore((state)=>state["Projects"]["TextBox316"]);
const TextBox316Cb = useTextBox316Cb()
const TextBox317Props = useStore((state)=>state["Projects"]["TextBox317"]);
const TextBox317IoProps = useIoStore((state)=>state["Projects"]["TextBox317"]);
const TextBox317Cb = useTextBox317Cb()
const TextBox318Props = useStore((state)=>state["Projects"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["Projects"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const Image117Props = useStore((state)=>state["Projects"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Projects"]["Image117"]);
const Image117Cb = useImage117Cb()
const TextBox314Props = useStore((state)=>state["Projects"]["TextBox314"]);
const TextBox314IoProps = useIoStore((state)=>state["Projects"]["TextBox314"]);
const TextBox314Cb = useTextBox314Cb()
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
const Link170Props = useStore((state)=>state["Projects"]["Link170"]);
const Link170IoProps = useIoStore((state)=>state["Projects"]["Link170"]);
const Link170Cb = useLink170Cb()
const Link171Props = useStore((state)=>state["Projects"]["Link171"]);
const Link171IoProps = useIoStore((state)=>state["Projects"]["Link171"]);
const Link171Cb = useLink171Cb()
const Link172Props = useStore((state)=>state["Projects"]["Link172"]);
const Link172IoProps = useIoStore((state)=>state["Projects"]["Link172"]);
const Link172Cb = useLink172Cb()
const TextBox335Props = useStore((state)=>state["Projects"]["TextBox335"]);
const TextBox335IoProps = useIoStore((state)=>state["Projects"]["TextBox335"]);
const TextBox335Cb = useTextBox335Cb()
const TextBox336Props = useStore((state)=>state["Projects"]["TextBox336"]);
const TextBox336IoProps = useIoStore((state)=>state["Projects"]["TextBox336"]);
const TextBox336Cb = useTextBox336Cb()
const TextBox337Props = useStore((state)=>state["Projects"]["TextBox337"]);
const TextBox337IoProps = useIoStore((state)=>state["Projects"]["TextBox337"]);
const TextBox337Cb = useTextBox337Cb()
const Link173Props = useStore((state)=>state["Projects"]["Link173"]);
const Link173IoProps = useIoStore((state)=>state["Projects"]["Link173"]);
const Link173Cb = useLink173Cb()
const TextBox338Props = useStore((state)=>state["Projects"]["TextBox338"]);
const TextBox338IoProps = useIoStore((state)=>state["Projects"]["TextBox338"]);
const TextBox338Cb = useTextBox338Cb()
const Link174Props = useStore((state)=>state["Projects"]["Link174"]);
const Link174IoProps = useIoStore((state)=>state["Projects"]["Link174"]);
const Link174Cb = useLink174Cb()
const TextBox339Props = useStore((state)=>state["Projects"]["TextBox339"]);
const TextBox339IoProps = useIoStore((state)=>state["Projects"]["TextBox339"]);
const TextBox339Cb = useTextBox339Cb()
const Link175Props = useStore((state)=>state["Projects"]["Link175"]);
const Link175IoProps = useIoStore((state)=>state["Projects"]["Link175"]);
const Link175Cb = useLink175Cb()
const TextBox340Props = useStore((state)=>state["Projects"]["TextBox340"]);
const TextBox340IoProps = useIoStore((state)=>state["Projects"]["TextBox340"]);
const TextBox340Cb = useTextBox340Cb()
const Link161Props = useStore((state)=>state["Projects"]["Link161"]);
const Link161IoProps = useIoStore((state)=>state["Projects"]["Link161"]);
const Link161Cb = useLink161Cb()
const Link162Props = useStore((state)=>state["Projects"]["Link162"]);
const Link162IoProps = useIoStore((state)=>state["Projects"]["Link162"]);
const Link162Cb = useLink162Cb()
const Link163Props = useStore((state)=>state["Projects"]["Link163"]);
const Link163IoProps = useIoStore((state)=>state["Projects"]["Link163"]);
const Link163Cb = useLink163Cb()
const Link164Props = useStore((state)=>state["Projects"]["Link164"]);
const Link164IoProps = useIoStore((state)=>state["Projects"]["Link164"]);
const Link164Cb = useLink164Cb()
const Link165Props = useStore((state)=>state["Projects"]["Link165"]);
const Link165IoProps = useIoStore((state)=>state["Projects"]["Link165"]);
const Link165Cb = useLink165Cb()
const Link166Props = useStore((state)=>state["Projects"]["Link166"]);
const Link166IoProps = useIoStore((state)=>state["Projects"]["Link166"]);
const Link166Cb = useLink166Cb()
const Link167Props = useStore((state)=>state["Projects"]["Link167"]);
const Link167IoProps = useIoStore((state)=>state["Projects"]["Link167"]);
const Link167Cb = useLink167Cb()
const Link168Props = useStore((state)=>state["Projects"]["Link168"]);
const Link168IoProps = useIoStore((state)=>state["Projects"]["Link168"]);
const Link168Cb = useLink168Cb()
const Link169Props = useStore((state)=>state["Projects"]["Link169"]);
const Link169IoProps = useIoStore((state)=>state["Projects"]["Link169"]);
const Link169Cb = useLink169Cb()
const TextBox334Props = useStore((state)=>state["Projects"]["TextBox334"]);
const TextBox334IoProps = useIoStore((state)=>state["Projects"]["TextBox334"]);
const TextBox334Cb = useTextBox334Cb()
const Image124Props = useStore((state)=>state["Projects"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Projects"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox333Props = useStore((state)=>state["Projects"]["TextBox333"]);
const TextBox333IoProps = useIoStore((state)=>state["Projects"]["TextBox333"]);
const TextBox333Cb = useTextBox333Cb()
const Image123Props = useStore((state)=>state["Projects"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["Projects"]["Image123"]);
const Image123Cb = useImage123Cb()
const TextBox341Props = useStore((state)=>state["Projects"]["TextBox341"]);
const TextBox341IoProps = useIoStore((state)=>state["Projects"]["TextBox341"]);
const TextBox341Cb = useTextBox341Cb()
const TextBox342Props = useStore((state)=>state["Projects"]["TextBox342"]);
const TextBox342IoProps = useIoStore((state)=>state["Projects"]["TextBox342"]);
const TextBox342Cb = useTextBox342Cb()

  return (<>
  <Flex1 className="p-Projects Flex410 bpt" {...Flex410Props} {...Flex410Cb} {...Flex410IoProps}>
<Flex1 className="p-Projects Flex409 bpt" {...Flex409Props} {...Flex409Cb} {...Flex409IoProps}>
<Image1 className="p-Projects Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
<Flex1 className="p-Projects Flex408 bpt" {...Flex408Props} {...Flex408Cb} {...Flex408IoProps}>
<TextBox1 className="p-Projects TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<TextBox1 className="p-Projects TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
<TextBox1 className="p-Projects TextBox317 bpt" {...TextBox317Props} {...TextBox317Cb} {...TextBox317IoProps}/>
<TextBox1 className="p-Projects TextBox316 bpt" {...TextBox316Props} {...TextBox316Cb} {...TextBox316IoProps}/>
<Flex1 className="p-Projects Flex407 bpt" {...Flex407Props} {...Flex407Cb} {...Flex407IoProps}>
<TextBox1 className="p-Projects TextBox314 bpt" {...TextBox314Props} {...TextBox314Cb} {...TextBox314IoProps}/>
<Image1 className="p-Projects Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex1>
</Flex1>
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
<Flex1 className="p-Projects Flex433 bpt" {...Flex433Props} {...Flex433Cb} {...Flex433IoProps}>
<Flex1 className="p-Projects Flex432 bpt" {...Flex432Props} {...Flex432Cb} {...Flex432IoProps}>
<Flex1 className="p-Projects Flex431 bpt" {...Flex431Props} {...Flex431Cb} {...Flex431IoProps}>
<TextBox1 className="p-Projects TextBox342 bpt" {...TextBox342Props} {...TextBox342Cb} {...TextBox342IoProps}/>
<TextBox1 className="p-Projects TextBox341 bpt" {...TextBox341Props} {...TextBox341Cb} {...TextBox341IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex430 bpt" {...Flex430Props} {...Flex430Cb} {...Flex430IoProps}>
<Flex1 className="p-Projects Flex428 bpt" {...Flex428Props} {...Flex428Cb} {...Flex428IoProps}>
<Image1 className="p-Projects Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<TextBox1 className="p-Projects TextBox334 bpt" {...TextBox334Props} {...TextBox334Cb} {...TextBox334IoProps}/>
<Flex1 className="p-Projects Flex426 bpt" {...Flex426Props} {...Flex426Cb} {...Flex426IoProps}>
<Image1 className="p-Projects Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<TextBox1 className="p-Projects TextBox333 bpt" {...TextBox333Props} {...TextBox333Cb} {...TextBox333IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex427 bpt" {...Flex427Props} {...Flex427Cb} {...Flex427IoProps}>
<Flex1 className="p-Projects Flex423 bpt" {...Flex423Props} {...Flex423Cb} {...Flex423IoProps}>
<Link1 className="p-Projects Link161 bpt" {...Link161Props} {...Link161Cb} {...Link161IoProps}/>
<Link1 className="p-Projects Link162 bpt" {...Link162Props} {...Link162Cb} {...Link162IoProps}/>
<Link1 className="p-Projects Link163 bpt" {...Link163Props} {...Link163Cb} {...Link163IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex425 bpt" {...Flex425Props} {...Flex425Cb} {...Flex425IoProps}>
<Link1 className="p-Projects Link169 bpt" {...Link169Props} {...Link169Cb} {...Link169IoProps}/>
<Link1 className="p-Projects Link167 bpt" {...Link167Props} {...Link167Cb} {...Link167IoProps}/>
<Link1 className="p-Projects Link168 bpt" {...Link168Props} {...Link168Cb} {...Link168IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex424 bpt" {...Flex424Props} {...Flex424Cb} {...Flex424IoProps}>
<Link1 className="p-Projects Link166 bpt" {...Link166Props} {...Link166Cb} {...Link166IoProps}/>
<Link1 className="p-Projects Link165 bpt" {...Link165Props} {...Link165Cb} {...Link165IoProps}/>
<Link1 className="p-Projects Link164 bpt" {...Link164Props} {...Link164Cb} {...Link164IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex429 bpt" {...Flex429Props} {...Flex429Cb} {...Flex429IoProps}>
<TextBox1 className="p-Projects TextBox340 bpt" {...TextBox340Props} {...TextBox340Cb} {...TextBox340IoProps}/>
<Link1 className="p-Projects Link175 bpt" {...Link175Props} {...Link175Cb} {...Link175IoProps}/>
<TextBox1 className="p-Projects TextBox339 bpt" {...TextBox339Props} {...TextBox339Cb} {...TextBox339IoProps}/>
<Link1 className="p-Projects Link174 bpt" {...Link174Props} {...Link174Cb} {...Link174IoProps}/>
<TextBox1 className="p-Projects TextBox338 bpt" {...TextBox338Props} {...TextBox338Cb} {...TextBox338IoProps}/>
<Link1 className="p-Projects Link172 bpt" {...Link172Props} {...Link172Cb} {...Link172IoProps}/>
<TextBox1 className="p-Projects TextBox337 bpt" {...TextBox337Props} {...TextBox337Cb} {...TextBox337IoProps}/>
<Link1 className="p-Projects Link171 bpt" {...Link171Props} {...Link171Cb} {...Link171IoProps}/>
<TextBox1 className="p-Projects TextBox336 bpt" {...TextBox336Props} {...TextBox336Cb} {...TextBox336IoProps}/>
<Link1 className="p-Projects Link173 bpt" {...Link173Props} {...Link173Cb} {...Link173IoProps}/>
<TextBox1 className="p-Projects TextBox335 bpt" {...TextBox335Props} {...TextBox335Cb} {...TextBox335IoProps}/>
<Link1 className="p-Projects Link170 bpt" {...Link170Props} {...Link170Cb} {...Link170IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
