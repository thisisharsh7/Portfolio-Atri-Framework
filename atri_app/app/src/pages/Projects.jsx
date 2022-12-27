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
import { useFlex914Cb, useFlex913Cb, useFlex912Cb, useFlex910Cb, useMenu15Cb, useFlex911Cb, useFlex909Cb, useFlex908Cb, useFlex907Cb, useFlex958Cb, useFlex957Cb, useFlex954Cb, useFlex955Cb, useFlex952Cb, useFlex948Cb, useFlex949Cb, useFlex950Cb, useFlex953Cb, useFlex951Cb, useFlex956Cb, useImage272Cb, useTextBox800Cb, useTextBox801Cb, useTextBox802Cb, useTextBox803Cb, useTextBox799Cb, useImage271Cb, useTextBox795Cb, useTextBox796Cb, useTextBox797Cb, useTextBox798Cb, useImage270Cb, useTextBox794Cb, useLink269Cb, useLink270Cb, useLink271Cb, useTextBox873Cb, useTextBox874Cb, useTextBox875Cb, useLink272Cb, useTextBox876Cb, useLink273Cb, useTextBox877Cb, useLink274Cb, useTextBox878Cb, useTextBox862Cb, useTextBox863Cb, useTextBox864Cb, useTextBox865Cb, useTextBox866Cb, useTextBox867Cb, useTextBox868Cb, useTextBox869Cb, useTextBox870Cb, useTextBox872Cb, useImage280Cb, useTextBox871Cb, useImage279Cb, useTextBox879Cb, useTextBox880Cb } from "../page-cbs/Projects";
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

  const Flex914Props = useStore((state)=>state["Projects"]["Flex914"]);
const Flex914IoProps = useIoStore((state)=>state["Projects"]["Flex914"]);
const Flex914Cb = useFlex914Cb()
const Flex913Props = useStore((state)=>state["Projects"]["Flex913"]);
const Flex913IoProps = useIoStore((state)=>state["Projects"]["Flex913"]);
const Flex913Cb = useFlex913Cb()
const Flex912Props = useStore((state)=>state["Projects"]["Flex912"]);
const Flex912IoProps = useIoStore((state)=>state["Projects"]["Flex912"]);
const Flex912Cb = useFlex912Cb()
const Flex910Props = useStore((state)=>state["Projects"]["Flex910"]);
const Flex910IoProps = useIoStore((state)=>state["Projects"]["Flex910"]);
const Flex910Cb = useFlex910Cb()
const Menu15Props = useStore((state)=>state["Projects"]["Menu15"]);
const Menu15IoProps = useIoStore((state)=>state["Projects"]["Menu15"]);
const Menu15Cb = useMenu15Cb()
const Flex911Props = useStore((state)=>state["Projects"]["Flex911"]);
const Flex911IoProps = useIoStore((state)=>state["Projects"]["Flex911"]);
const Flex911Cb = useFlex911Cb()
const Flex909Props = useStore((state)=>state["Projects"]["Flex909"]);
const Flex909IoProps = useIoStore((state)=>state["Projects"]["Flex909"]);
const Flex909Cb = useFlex909Cb()
const Flex908Props = useStore((state)=>state["Projects"]["Flex908"]);
const Flex908IoProps = useIoStore((state)=>state["Projects"]["Flex908"]);
const Flex908Cb = useFlex908Cb()
const Flex907Props = useStore((state)=>state["Projects"]["Flex907"]);
const Flex907IoProps = useIoStore((state)=>state["Projects"]["Flex907"]);
const Flex907Cb = useFlex907Cb()
const Flex958Props = useStore((state)=>state["Projects"]["Flex958"]);
const Flex958IoProps = useIoStore((state)=>state["Projects"]["Flex958"]);
const Flex958Cb = useFlex958Cb()
const Flex957Props = useStore((state)=>state["Projects"]["Flex957"]);
const Flex957IoProps = useIoStore((state)=>state["Projects"]["Flex957"]);
const Flex957Cb = useFlex957Cb()
const Flex954Props = useStore((state)=>state["Projects"]["Flex954"]);
const Flex954IoProps = useIoStore((state)=>state["Projects"]["Flex954"]);
const Flex954Cb = useFlex954Cb()
const Flex955Props = useStore((state)=>state["Projects"]["Flex955"]);
const Flex955IoProps = useIoStore((state)=>state["Projects"]["Flex955"]);
const Flex955Cb = useFlex955Cb()
const Flex952Props = useStore((state)=>state["Projects"]["Flex952"]);
const Flex952IoProps = useIoStore((state)=>state["Projects"]["Flex952"]);
const Flex952Cb = useFlex952Cb()
const Flex948Props = useStore((state)=>state["Projects"]["Flex948"]);
const Flex948IoProps = useIoStore((state)=>state["Projects"]["Flex948"]);
const Flex948Cb = useFlex948Cb()
const Flex949Props = useStore((state)=>state["Projects"]["Flex949"]);
const Flex949IoProps = useIoStore((state)=>state["Projects"]["Flex949"]);
const Flex949Cb = useFlex949Cb()
const Flex950Props = useStore((state)=>state["Projects"]["Flex950"]);
const Flex950IoProps = useIoStore((state)=>state["Projects"]["Flex950"]);
const Flex950Cb = useFlex950Cb()
const Flex953Props = useStore((state)=>state["Projects"]["Flex953"]);
const Flex953IoProps = useIoStore((state)=>state["Projects"]["Flex953"]);
const Flex953Cb = useFlex953Cb()
const Flex951Props = useStore((state)=>state["Projects"]["Flex951"]);
const Flex951IoProps = useIoStore((state)=>state["Projects"]["Flex951"]);
const Flex951Cb = useFlex951Cb()
const Flex956Props = useStore((state)=>state["Projects"]["Flex956"]);
const Flex956IoProps = useIoStore((state)=>state["Projects"]["Flex956"]);
const Flex956Cb = useFlex956Cb()
const Image272Props = useStore((state)=>state["Projects"]["Image272"]);
const Image272IoProps = useIoStore((state)=>state["Projects"]["Image272"]);
const Image272Cb = useImage272Cb()
const TextBox800Props = useStore((state)=>state["Projects"]["TextBox800"]);
const TextBox800IoProps = useIoStore((state)=>state["Projects"]["TextBox800"]);
const TextBox800Cb = useTextBox800Cb()
const TextBox801Props = useStore((state)=>state["Projects"]["TextBox801"]);
const TextBox801IoProps = useIoStore((state)=>state["Projects"]["TextBox801"]);
const TextBox801Cb = useTextBox801Cb()
const TextBox802Props = useStore((state)=>state["Projects"]["TextBox802"]);
const TextBox802IoProps = useIoStore((state)=>state["Projects"]["TextBox802"]);
const TextBox802Cb = useTextBox802Cb()
const TextBox803Props = useStore((state)=>state["Projects"]["TextBox803"]);
const TextBox803IoProps = useIoStore((state)=>state["Projects"]["TextBox803"]);
const TextBox803Cb = useTextBox803Cb()
const TextBox799Props = useStore((state)=>state["Projects"]["TextBox799"]);
const TextBox799IoProps = useIoStore((state)=>state["Projects"]["TextBox799"]);
const TextBox799Cb = useTextBox799Cb()
const Image271Props = useStore((state)=>state["Projects"]["Image271"]);
const Image271IoProps = useIoStore((state)=>state["Projects"]["Image271"]);
const Image271Cb = useImage271Cb()
const TextBox795Props = useStore((state)=>state["Projects"]["TextBox795"]);
const TextBox795IoProps = useIoStore((state)=>state["Projects"]["TextBox795"]);
const TextBox795Cb = useTextBox795Cb()
const TextBox796Props = useStore((state)=>state["Projects"]["TextBox796"]);
const TextBox796IoProps = useIoStore((state)=>state["Projects"]["TextBox796"]);
const TextBox796Cb = useTextBox796Cb()
const TextBox797Props = useStore((state)=>state["Projects"]["TextBox797"]);
const TextBox797IoProps = useIoStore((state)=>state["Projects"]["TextBox797"]);
const TextBox797Cb = useTextBox797Cb()
const TextBox798Props = useStore((state)=>state["Projects"]["TextBox798"]);
const TextBox798IoProps = useIoStore((state)=>state["Projects"]["TextBox798"]);
const TextBox798Cb = useTextBox798Cb()
const Image270Props = useStore((state)=>state["Projects"]["Image270"]);
const Image270IoProps = useIoStore((state)=>state["Projects"]["Image270"]);
const Image270Cb = useImage270Cb()
const TextBox794Props = useStore((state)=>state["Projects"]["TextBox794"]);
const TextBox794IoProps = useIoStore((state)=>state["Projects"]["TextBox794"]);
const TextBox794Cb = useTextBox794Cb()
const Link269Props = useStore((state)=>state["Projects"]["Link269"]);
const Link269IoProps = useIoStore((state)=>state["Projects"]["Link269"]);
const Link269Cb = useLink269Cb()
const Link270Props = useStore((state)=>state["Projects"]["Link270"]);
const Link270IoProps = useIoStore((state)=>state["Projects"]["Link270"]);
const Link270Cb = useLink270Cb()
const Link271Props = useStore((state)=>state["Projects"]["Link271"]);
const Link271IoProps = useIoStore((state)=>state["Projects"]["Link271"]);
const Link271Cb = useLink271Cb()
const TextBox873Props = useStore((state)=>state["Projects"]["TextBox873"]);
const TextBox873IoProps = useIoStore((state)=>state["Projects"]["TextBox873"]);
const TextBox873Cb = useTextBox873Cb()
const TextBox874Props = useStore((state)=>state["Projects"]["TextBox874"]);
const TextBox874IoProps = useIoStore((state)=>state["Projects"]["TextBox874"]);
const TextBox874Cb = useTextBox874Cb()
const TextBox875Props = useStore((state)=>state["Projects"]["TextBox875"]);
const TextBox875IoProps = useIoStore((state)=>state["Projects"]["TextBox875"]);
const TextBox875Cb = useTextBox875Cb()
const Link272Props = useStore((state)=>state["Projects"]["Link272"]);
const Link272IoProps = useIoStore((state)=>state["Projects"]["Link272"]);
const Link272Cb = useLink272Cb()
const TextBox876Props = useStore((state)=>state["Projects"]["TextBox876"]);
const TextBox876IoProps = useIoStore((state)=>state["Projects"]["TextBox876"]);
const TextBox876Cb = useTextBox876Cb()
const Link273Props = useStore((state)=>state["Projects"]["Link273"]);
const Link273IoProps = useIoStore((state)=>state["Projects"]["Link273"]);
const Link273Cb = useLink273Cb()
const TextBox877Props = useStore((state)=>state["Projects"]["TextBox877"]);
const TextBox877IoProps = useIoStore((state)=>state["Projects"]["TextBox877"]);
const TextBox877Cb = useTextBox877Cb()
const Link274Props = useStore((state)=>state["Projects"]["Link274"]);
const Link274IoProps = useIoStore((state)=>state["Projects"]["Link274"]);
const Link274Cb = useLink274Cb()
const TextBox878Props = useStore((state)=>state["Projects"]["TextBox878"]);
const TextBox878IoProps = useIoStore((state)=>state["Projects"]["TextBox878"]);
const TextBox878Cb = useTextBox878Cb()
const TextBox862Props = useStore((state)=>state["Projects"]["TextBox862"]);
const TextBox862IoProps = useIoStore((state)=>state["Projects"]["TextBox862"]);
const TextBox862Cb = useTextBox862Cb()
const TextBox863Props = useStore((state)=>state["Projects"]["TextBox863"]);
const TextBox863IoProps = useIoStore((state)=>state["Projects"]["TextBox863"]);
const TextBox863Cb = useTextBox863Cb()
const TextBox864Props = useStore((state)=>state["Projects"]["TextBox864"]);
const TextBox864IoProps = useIoStore((state)=>state["Projects"]["TextBox864"]);
const TextBox864Cb = useTextBox864Cb()
const TextBox865Props = useStore((state)=>state["Projects"]["TextBox865"]);
const TextBox865IoProps = useIoStore((state)=>state["Projects"]["TextBox865"]);
const TextBox865Cb = useTextBox865Cb()
const TextBox866Props = useStore((state)=>state["Projects"]["TextBox866"]);
const TextBox866IoProps = useIoStore((state)=>state["Projects"]["TextBox866"]);
const TextBox866Cb = useTextBox866Cb()
const TextBox867Props = useStore((state)=>state["Projects"]["TextBox867"]);
const TextBox867IoProps = useIoStore((state)=>state["Projects"]["TextBox867"]);
const TextBox867Cb = useTextBox867Cb()
const TextBox868Props = useStore((state)=>state["Projects"]["TextBox868"]);
const TextBox868IoProps = useIoStore((state)=>state["Projects"]["TextBox868"]);
const TextBox868Cb = useTextBox868Cb()
const TextBox869Props = useStore((state)=>state["Projects"]["TextBox869"]);
const TextBox869IoProps = useIoStore((state)=>state["Projects"]["TextBox869"]);
const TextBox869Cb = useTextBox869Cb()
const TextBox870Props = useStore((state)=>state["Projects"]["TextBox870"]);
const TextBox870IoProps = useIoStore((state)=>state["Projects"]["TextBox870"]);
const TextBox870Cb = useTextBox870Cb()
const TextBox872Props = useStore((state)=>state["Projects"]["TextBox872"]);
const TextBox872IoProps = useIoStore((state)=>state["Projects"]["TextBox872"]);
const TextBox872Cb = useTextBox872Cb()
const Image280Props = useStore((state)=>state["Projects"]["Image280"]);
const Image280IoProps = useIoStore((state)=>state["Projects"]["Image280"]);
const Image280Cb = useImage280Cb()
const TextBox871Props = useStore((state)=>state["Projects"]["TextBox871"]);
const TextBox871IoProps = useIoStore((state)=>state["Projects"]["TextBox871"]);
const TextBox871Cb = useTextBox871Cb()
const Image279Props = useStore((state)=>state["Projects"]["Image279"]);
const Image279IoProps = useIoStore((state)=>state["Projects"]["Image279"]);
const Image279Cb = useImage279Cb()
const TextBox879Props = useStore((state)=>state["Projects"]["TextBox879"]);
const TextBox879IoProps = useIoStore((state)=>state["Projects"]["TextBox879"]);
const TextBox879Cb = useTextBox879Cb()
const TextBox880Props = useStore((state)=>state["Projects"]["TextBox880"]);
const TextBox880IoProps = useIoStore((state)=>state["Projects"]["TextBox880"]);
const TextBox880Cb = useTextBox880Cb()

  return (<>
  <Flex1 className="p-Projects Flex914 bpt" {...Flex914Props} {...Flex914Cb} {...Flex914IoProps}>
<Flex1 className="p-Projects Flex913 bpt" {...Flex913Props} {...Flex913Cb} {...Flex913IoProps}>
<Image1 className="p-Projects Image272 bpt" {...Image272Props} {...Image272Cb} {...Image272IoProps}/>
<Flex1 className="p-Projects Flex912 bpt" {...Flex912Props} {...Flex912Cb} {...Flex912IoProps}>
<TextBox1 className="p-Projects TextBox803 bpt" {...TextBox803Props} {...TextBox803Cb} {...TextBox803IoProps}/>
<TextBox1 className="p-Projects TextBox800 bpt" {...TextBox800Props} {...TextBox800Cb} {...TextBox800IoProps}/>
<TextBox1 className="p-Projects TextBox801 bpt" {...TextBox801Props} {...TextBox801Cb} {...TextBox801IoProps}/>
<TextBox1 className="p-Projects TextBox802 bpt" {...TextBox802Props} {...TextBox802Cb} {...TextBox802IoProps}/>
<Flex1 className="p-Projects Flex910 bpt" {...Flex910Props} {...Flex910Cb} {...Flex910IoProps}>
<TextBox1 className="p-Projects TextBox799 bpt" {...TextBox799Props} {...TextBox799Cb} {...TextBox799IoProps}/>
<Image1 className="p-Projects Image271 bpt" {...Image271Props} {...Image271Cb} {...Image271IoProps}/>
</Flex1>
</Flex1>
<Menu1 className="p-Projects Menu15 bpt" {...Menu15Props} {...Menu15Cb} {...Menu15IoProps}>
<Flex1 className="p-Projects Flex911 bpt" {...Flex911Props} {...Flex911Cb} {...Flex911IoProps}>
<Flex1 className="p-Projects Flex909 bpt" {...Flex909Props} {...Flex909Cb} {...Flex909IoProps}>
<Flex1 className="p-Projects Flex908 bpt" {...Flex908Props} {...Flex908Cb} {...Flex908IoProps}>
<TextBox1 className="p-Projects TextBox795 bpt" {...TextBox795Props} {...TextBox795Cb} {...TextBox795IoProps}/>
<TextBox1 className="p-Projects TextBox798 bpt" {...TextBox798Props} {...TextBox798Cb} {...TextBox798IoProps}/>
<TextBox1 className="p-Projects TextBox797 bpt" {...TextBox797Props} {...TextBox797Cb} {...TextBox797IoProps}/>
<TextBox1 className="p-Projects TextBox796 bpt" {...TextBox796Props} {...TextBox796Cb} {...TextBox796IoProps}/>
<Flex1 className="p-Projects Flex907 bpt" {...Flex907Props} {...Flex907Cb} {...Flex907IoProps}>
<TextBox1 className="p-Projects TextBox794 bpt" {...TextBox794Props} {...TextBox794Cb} {...TextBox794IoProps}/>
<Image1 className="p-Projects Image270 bpt" {...Image270Props} {...Image270Cb} {...Image270IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex958 bpt" {...Flex958Props} {...Flex958Cb} {...Flex958IoProps}>
<Flex1 className="p-Projects Flex957 bpt" {...Flex957Props} {...Flex957Cb} {...Flex957IoProps}>
<Flex1 className="p-Projects Flex956 bpt" {...Flex956Props} {...Flex956Cb} {...Flex956IoProps}>
<TextBox1 className="p-Projects TextBox880 bpt" {...TextBox880Props} {...TextBox880Cb} {...TextBox880IoProps}/>
<TextBox1 className="p-Projects TextBox879 bpt" {...TextBox879Props} {...TextBox879Cb} {...TextBox879IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex955 bpt" {...Flex955Props} {...Flex955Cb} {...Flex955IoProps}>
<Flex1 className="p-Projects Flex953 bpt" {...Flex953Props} {...Flex953Cb} {...Flex953IoProps}>
<Image1 className="p-Projects Image280 bpt" {...Image280Props} {...Image280Cb} {...Image280IoProps}/>
<TextBox1 className="p-Projects TextBox872 bpt" {...TextBox872Props} {...TextBox872Cb} {...TextBox872IoProps}/>
<Flex1 className="p-Projects Flex951 bpt" {...Flex951Props} {...Flex951Cb} {...Flex951IoProps}>
<Image1 className="p-Projects Image279 bpt" {...Image279Props} {...Image279Cb} {...Image279IoProps}/>
<TextBox1 className="p-Projects TextBox871 bpt" {...TextBox871Props} {...TextBox871Cb} {...TextBox871IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex952 bpt" {...Flex952Props} {...Flex952Cb} {...Flex952IoProps}>
<Flex1 className="p-Projects Flex948 bpt" {...Flex948Props} {...Flex948Cb} {...Flex948IoProps}>
<TextBox1 className="p-Projects TextBox864 bpt" {...TextBox864Props} {...TextBox864Cb} {...TextBox864IoProps}/>
<TextBox1 className="p-Projects TextBox862 bpt" {...TextBox862Props} {...TextBox862Cb} {...TextBox862IoProps}/>
<TextBox1 className="p-Projects TextBox863 bpt" {...TextBox863Props} {...TextBox863Cb} {...TextBox863IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex950 bpt" {...Flex950Props} {...Flex950Cb} {...Flex950IoProps}>
<TextBox1 className="p-Projects TextBox870 bpt" {...TextBox870Props} {...TextBox870Cb} {...TextBox870IoProps}/>
<TextBox1 className="p-Projects TextBox869 bpt" {...TextBox869Props} {...TextBox869Cb} {...TextBox869IoProps}/>
<TextBox1 className="p-Projects TextBox868 bpt" {...TextBox868Props} {...TextBox868Cb} {...TextBox868IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex949 bpt" {...Flex949Props} {...Flex949Cb} {...Flex949IoProps}>
<TextBox1 className="p-Projects TextBox867 bpt" {...TextBox867Props} {...TextBox867Cb} {...TextBox867IoProps}/>
<TextBox1 className="p-Projects TextBox866 bpt" {...TextBox866Props} {...TextBox866Cb} {...TextBox866IoProps}/>
<TextBox1 className="p-Projects TextBox865 bpt" {...TextBox865Props} {...TextBox865Cb} {...TextBox865IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex954 bpt" {...Flex954Props} {...Flex954Cb} {...Flex954IoProps}>
<TextBox1 className="p-Projects TextBox878 bpt" {...TextBox878Props} {...TextBox878Cb} {...TextBox878IoProps}/>
<Link1 className="p-Projects Link274 bpt" {...Link274Props} {...Link274Cb} {...Link274IoProps}/>
<TextBox1 className="p-Projects TextBox877 bpt" {...TextBox877Props} {...TextBox877Cb} {...TextBox877IoProps}/>
<Link1 className="p-Projects Link273 bpt" {...Link273Props} {...Link273Cb} {...Link273IoProps}/>
<TextBox1 className="p-Projects TextBox876 bpt" {...TextBox876Props} {...TextBox876Cb} {...TextBox876IoProps}/>
<Link1 className="p-Projects Link271 bpt" {...Link271Props} {...Link271Cb} {...Link271IoProps}/>
<TextBox1 className="p-Projects TextBox875 bpt" {...TextBox875Props} {...TextBox875Cb} {...TextBox875IoProps}/>
<Link1 className="p-Projects Link270 bpt" {...Link270Props} {...Link270Cb} {...Link270IoProps}/>
<TextBox1 className="p-Projects TextBox874 bpt" {...TextBox874Props} {...TextBox874Cb} {...TextBox874IoProps}/>
<Link1 className="p-Projects Link272 bpt" {...Link272Props} {...Link272Cb} {...Link272IoProps}/>
<TextBox1 className="p-Projects TextBox873 bpt" {...TextBox873Props} {...TextBox873Cb} {...TextBox873IoProps}/>
<Link1 className="p-Projects Link269 bpt" {...Link269Props} {...Link269Cb} {...Link269IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
