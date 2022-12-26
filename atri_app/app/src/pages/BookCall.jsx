import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu3 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link3 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex419Cb, useFlex587Cb, useFlex585Cb, useFlex594Cb, useFlex588Cb, useFlex598Cb, useFlex603Cb, useFlex604Cb, useFlex596Cb, useFlex606Cb, useFlex597Cb, useFlex601Cb, useFlex605Cb, useFlex828Cb, useFlex586Cb, useFlex607Cb, useFlex608Cb, useFlex611Cb, useFlex610Cb, useFlex793Cb, useFlex792Cb, useFlex791Cb, useFlex789Cb, useMenu12Cb, useFlex790Cb, useFlex788Cb, useFlex787Cb, useFlex786Cb, useFlex826Cb, useFlex825Cb, useFlex822Cb, useFlex823Cb, useFlex820Cb, useFlex816Cb, useFlex817Cb, useFlex818Cb, useFlex821Cb, useFlex819Cb, useFlex824Cb, useInput7Cb, useTextBox448Cb, useInput8Cb, useTextBox449Cb, useTextBox444Cb, useImage179Cb, useInput9Cb, useInput4Cb, useTextBox445Cb, useTextBox446Cb, useInput5Cb, useImage178Cb, useButton1Cb, useTextBox696Cb, useTextBox439Cb, useImage180Cb, useImage182Cb, useTextBox451Cb, useTextBox440Cb, useTextBox441Cb, useImage237Cb, useTextBox633Cb, useTextBox634Cb, useTextBox635Cb, useTextBox636Cb, useTextBox632Cb, useImage236Cb, useTextBox628Cb, useTextBox629Cb, useTextBox630Cb, useTextBox631Cb, useImage235Cb, useTextBox627Cb, useLink233Cb, useLink234Cb, useLink235Cb, useTextBox686Cb, useTextBox687Cb, useTextBox688Cb, useLink236Cb, useTextBox689Cb, useLink237Cb, useTextBox690Cb, useLink238Cb, useTextBox691Cb, useTextBox675Cb, useTextBox676Cb, useTextBox677Cb, useTextBox678Cb, useTextBox679Cb, useTextBox680Cb, useTextBox681Cb, useTextBox682Cb, useTextBox683Cb, useTextBox685Cb, useImage243Cb, useTextBox684Cb, useImage242Cb, useTextBox692Cb, useTextBox693Cb } from "../page-cbs/BookCall";
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

  const Flex419Props = useStore((state)=>state["BookCall"]["Flex419"]);
const Flex419IoProps = useIoStore((state)=>state["BookCall"]["Flex419"]);
const Flex419Cb = useFlex419Cb()
const Flex587Props = useStore((state)=>state["BookCall"]["Flex587"]);
const Flex587IoProps = useIoStore((state)=>state["BookCall"]["Flex587"]);
const Flex587Cb = useFlex587Cb()
const Flex585Props = useStore((state)=>state["BookCall"]["Flex585"]);
const Flex585IoProps = useIoStore((state)=>state["BookCall"]["Flex585"]);
const Flex585Cb = useFlex585Cb()
const Flex594Props = useStore((state)=>state["BookCall"]["Flex594"]);
const Flex594IoProps = useIoStore((state)=>state["BookCall"]["Flex594"]);
const Flex594Cb = useFlex594Cb()
const Flex588Props = useStore((state)=>state["BookCall"]["Flex588"]);
const Flex588IoProps = useIoStore((state)=>state["BookCall"]["Flex588"]);
const Flex588Cb = useFlex588Cb()
const Flex598Props = useStore((state)=>state["BookCall"]["Flex598"]);
const Flex598IoProps = useIoStore((state)=>state["BookCall"]["Flex598"]);
const Flex598Cb = useFlex598Cb()
const Flex603Props = useStore((state)=>state["BookCall"]["Flex603"]);
const Flex603IoProps = useIoStore((state)=>state["BookCall"]["Flex603"]);
const Flex603Cb = useFlex603Cb()
const Flex604Props = useStore((state)=>state["BookCall"]["Flex604"]);
const Flex604IoProps = useIoStore((state)=>state["BookCall"]["Flex604"]);
const Flex604Cb = useFlex604Cb()
const Flex596Props = useStore((state)=>state["BookCall"]["Flex596"]);
const Flex596IoProps = useIoStore((state)=>state["BookCall"]["Flex596"]);
const Flex596Cb = useFlex596Cb()
const Flex606Props = useStore((state)=>state["BookCall"]["Flex606"]);
const Flex606IoProps = useIoStore((state)=>state["BookCall"]["Flex606"]);
const Flex606Cb = useFlex606Cb()
const Flex597Props = useStore((state)=>state["BookCall"]["Flex597"]);
const Flex597IoProps = useIoStore((state)=>state["BookCall"]["Flex597"]);
const Flex597Cb = useFlex597Cb()
const Flex601Props = useStore((state)=>state["BookCall"]["Flex601"]);
const Flex601IoProps = useIoStore((state)=>state["BookCall"]["Flex601"]);
const Flex601Cb = useFlex601Cb()
const Flex605Props = useStore((state)=>state["BookCall"]["Flex605"]);
const Flex605IoProps = useIoStore((state)=>state["BookCall"]["Flex605"]);
const Flex605Cb = useFlex605Cb()
const Flex828Props = useStore((state)=>state["BookCall"]["Flex828"]);
const Flex828IoProps = useIoStore((state)=>state["BookCall"]["Flex828"]);
const Flex828Cb = useFlex828Cb()
const Flex586Props = useStore((state)=>state["BookCall"]["Flex586"]);
const Flex586IoProps = useIoStore((state)=>state["BookCall"]["Flex586"]);
const Flex586Cb = useFlex586Cb()
const Flex607Props = useStore((state)=>state["BookCall"]["Flex607"]);
const Flex607IoProps = useIoStore((state)=>state["BookCall"]["Flex607"]);
const Flex607Cb = useFlex607Cb()
const Flex608Props = useStore((state)=>state["BookCall"]["Flex608"]);
const Flex608IoProps = useIoStore((state)=>state["BookCall"]["Flex608"]);
const Flex608Cb = useFlex608Cb()
const Flex611Props = useStore((state)=>state["BookCall"]["Flex611"]);
const Flex611IoProps = useIoStore((state)=>state["BookCall"]["Flex611"]);
const Flex611Cb = useFlex611Cb()
const Flex610Props = useStore((state)=>state["BookCall"]["Flex610"]);
const Flex610IoProps = useIoStore((state)=>state["BookCall"]["Flex610"]);
const Flex610Cb = useFlex610Cb()
const Flex793Props = useStore((state)=>state["BookCall"]["Flex793"]);
const Flex793IoProps = useIoStore((state)=>state["BookCall"]["Flex793"]);
const Flex793Cb = useFlex793Cb()
const Flex792Props = useStore((state)=>state["BookCall"]["Flex792"]);
const Flex792IoProps = useIoStore((state)=>state["BookCall"]["Flex792"]);
const Flex792Cb = useFlex792Cb()
const Flex791Props = useStore((state)=>state["BookCall"]["Flex791"]);
const Flex791IoProps = useIoStore((state)=>state["BookCall"]["Flex791"]);
const Flex791Cb = useFlex791Cb()
const Flex789Props = useStore((state)=>state["BookCall"]["Flex789"]);
const Flex789IoProps = useIoStore((state)=>state["BookCall"]["Flex789"]);
const Flex789Cb = useFlex789Cb()
const Menu12Props = useStore((state)=>state["BookCall"]["Menu12"]);
const Menu12IoProps = useIoStore((state)=>state["BookCall"]["Menu12"]);
const Menu12Cb = useMenu12Cb()
const Flex790Props = useStore((state)=>state["BookCall"]["Flex790"]);
const Flex790IoProps = useIoStore((state)=>state["BookCall"]["Flex790"]);
const Flex790Cb = useFlex790Cb()
const Flex788Props = useStore((state)=>state["BookCall"]["Flex788"]);
const Flex788IoProps = useIoStore((state)=>state["BookCall"]["Flex788"]);
const Flex788Cb = useFlex788Cb()
const Flex787Props = useStore((state)=>state["BookCall"]["Flex787"]);
const Flex787IoProps = useIoStore((state)=>state["BookCall"]["Flex787"]);
const Flex787Cb = useFlex787Cb()
const Flex786Props = useStore((state)=>state["BookCall"]["Flex786"]);
const Flex786IoProps = useIoStore((state)=>state["BookCall"]["Flex786"]);
const Flex786Cb = useFlex786Cb()
const Flex826Props = useStore((state)=>state["BookCall"]["Flex826"]);
const Flex826IoProps = useIoStore((state)=>state["BookCall"]["Flex826"]);
const Flex826Cb = useFlex826Cb()
const Flex825Props = useStore((state)=>state["BookCall"]["Flex825"]);
const Flex825IoProps = useIoStore((state)=>state["BookCall"]["Flex825"]);
const Flex825Cb = useFlex825Cb()
const Flex822Props = useStore((state)=>state["BookCall"]["Flex822"]);
const Flex822IoProps = useIoStore((state)=>state["BookCall"]["Flex822"]);
const Flex822Cb = useFlex822Cb()
const Flex823Props = useStore((state)=>state["BookCall"]["Flex823"]);
const Flex823IoProps = useIoStore((state)=>state["BookCall"]["Flex823"]);
const Flex823Cb = useFlex823Cb()
const Flex820Props = useStore((state)=>state["BookCall"]["Flex820"]);
const Flex820IoProps = useIoStore((state)=>state["BookCall"]["Flex820"]);
const Flex820Cb = useFlex820Cb()
const Flex816Props = useStore((state)=>state["BookCall"]["Flex816"]);
const Flex816IoProps = useIoStore((state)=>state["BookCall"]["Flex816"]);
const Flex816Cb = useFlex816Cb()
const Flex817Props = useStore((state)=>state["BookCall"]["Flex817"]);
const Flex817IoProps = useIoStore((state)=>state["BookCall"]["Flex817"]);
const Flex817Cb = useFlex817Cb()
const Flex818Props = useStore((state)=>state["BookCall"]["Flex818"]);
const Flex818IoProps = useIoStore((state)=>state["BookCall"]["Flex818"]);
const Flex818Cb = useFlex818Cb()
const Flex821Props = useStore((state)=>state["BookCall"]["Flex821"]);
const Flex821IoProps = useIoStore((state)=>state["BookCall"]["Flex821"]);
const Flex821Cb = useFlex821Cb()
const Flex819Props = useStore((state)=>state["BookCall"]["Flex819"]);
const Flex819IoProps = useIoStore((state)=>state["BookCall"]["Flex819"]);
const Flex819Cb = useFlex819Cb()
const Flex824Props = useStore((state)=>state["BookCall"]["Flex824"]);
const Flex824IoProps = useIoStore((state)=>state["BookCall"]["Flex824"]);
const Flex824Cb = useFlex824Cb()
const Input7Props = useStore((state)=>state["BookCall"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["BookCall"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox448Props = useStore((state)=>state["BookCall"]["TextBox448"]);
const TextBox448IoProps = useIoStore((state)=>state["BookCall"]["TextBox448"]);
const TextBox448Cb = useTextBox448Cb()
const Input8Props = useStore((state)=>state["BookCall"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["BookCall"]["Input8"]);
const Input8Cb = useInput8Cb()
const TextBox449Props = useStore((state)=>state["BookCall"]["TextBox449"]);
const TextBox449IoProps = useIoStore((state)=>state["BookCall"]["TextBox449"]);
const TextBox449Cb = useTextBox449Cb()
const TextBox444Props = useStore((state)=>state["BookCall"]["TextBox444"]);
const TextBox444IoProps = useIoStore((state)=>state["BookCall"]["TextBox444"]);
const TextBox444Cb = useTextBox444Cb()
const Image179Props = useStore((state)=>state["BookCall"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["BookCall"]["Image179"]);
const Image179Cb = useImage179Cb()
const Input9Props = useStore((state)=>state["BookCall"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["BookCall"]["Input9"]);
const Input9Cb = useInput9Cb()
const Input4Props = useStore((state)=>state["BookCall"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["BookCall"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox445Props = useStore((state)=>state["BookCall"]["TextBox445"]);
const TextBox445IoProps = useIoStore((state)=>state["BookCall"]["TextBox445"]);
const TextBox445Cb = useTextBox445Cb()
const TextBox446Props = useStore((state)=>state["BookCall"]["TextBox446"]);
const TextBox446IoProps = useIoStore((state)=>state["BookCall"]["TextBox446"]);
const TextBox446Cb = useTextBox446Cb()
const Input5Props = useStore((state)=>state["BookCall"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["BookCall"]["Input5"]);
const Input5Cb = useInput5Cb()
const Image178Props = useStore((state)=>state["BookCall"]["Image178"]);
const Image178IoProps = useIoStore((state)=>state["BookCall"]["Image178"]);
const Image178Cb = useImage178Cb()
const Button1Props = useStore((state)=>state["BookCall"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["BookCall"]["Button1"]);
const Button1Cb = useButton1Cb()
const TextBox696Props = useStore((state)=>state["BookCall"]["TextBox696"]);
const TextBox696IoProps = useIoStore((state)=>state["BookCall"]["TextBox696"]);
const TextBox696Cb = useTextBox696Cb()
const TextBox439Props = useStore((state)=>state["BookCall"]["TextBox439"]);
const TextBox439IoProps = useIoStore((state)=>state["BookCall"]["TextBox439"]);
const TextBox439Cb = useTextBox439Cb()
const Image180Props = useStore((state)=>state["BookCall"]["Image180"]);
const Image180IoProps = useIoStore((state)=>state["BookCall"]["Image180"]);
const Image180Cb = useImage180Cb()
const Image182Props = useStore((state)=>state["BookCall"]["Image182"]);
const Image182IoProps = useIoStore((state)=>state["BookCall"]["Image182"]);
const Image182Cb = useImage182Cb()
const TextBox451Props = useStore((state)=>state["BookCall"]["TextBox451"]);
const TextBox451IoProps = useIoStore((state)=>state["BookCall"]["TextBox451"]);
const TextBox451Cb = useTextBox451Cb()
const TextBox440Props = useStore((state)=>state["BookCall"]["TextBox440"]);
const TextBox440IoProps = useIoStore((state)=>state["BookCall"]["TextBox440"]);
const TextBox440Cb = useTextBox440Cb()
const TextBox441Props = useStore((state)=>state["BookCall"]["TextBox441"]);
const TextBox441IoProps = useIoStore((state)=>state["BookCall"]["TextBox441"]);
const TextBox441Cb = useTextBox441Cb()
const Image237Props = useStore((state)=>state["BookCall"]["Image237"]);
const Image237IoProps = useIoStore((state)=>state["BookCall"]["Image237"]);
const Image237Cb = useImage237Cb()
const TextBox633Props = useStore((state)=>state["BookCall"]["TextBox633"]);
const TextBox633IoProps = useIoStore((state)=>state["BookCall"]["TextBox633"]);
const TextBox633Cb = useTextBox633Cb()
const TextBox634Props = useStore((state)=>state["BookCall"]["TextBox634"]);
const TextBox634IoProps = useIoStore((state)=>state["BookCall"]["TextBox634"]);
const TextBox634Cb = useTextBox634Cb()
const TextBox635Props = useStore((state)=>state["BookCall"]["TextBox635"]);
const TextBox635IoProps = useIoStore((state)=>state["BookCall"]["TextBox635"]);
const TextBox635Cb = useTextBox635Cb()
const TextBox636Props = useStore((state)=>state["BookCall"]["TextBox636"]);
const TextBox636IoProps = useIoStore((state)=>state["BookCall"]["TextBox636"]);
const TextBox636Cb = useTextBox636Cb()
const TextBox632Props = useStore((state)=>state["BookCall"]["TextBox632"]);
const TextBox632IoProps = useIoStore((state)=>state["BookCall"]["TextBox632"]);
const TextBox632Cb = useTextBox632Cb()
const Image236Props = useStore((state)=>state["BookCall"]["Image236"]);
const Image236IoProps = useIoStore((state)=>state["BookCall"]["Image236"]);
const Image236Cb = useImage236Cb()
const TextBox628Props = useStore((state)=>state["BookCall"]["TextBox628"]);
const TextBox628IoProps = useIoStore((state)=>state["BookCall"]["TextBox628"]);
const TextBox628Cb = useTextBox628Cb()
const TextBox629Props = useStore((state)=>state["BookCall"]["TextBox629"]);
const TextBox629IoProps = useIoStore((state)=>state["BookCall"]["TextBox629"]);
const TextBox629Cb = useTextBox629Cb()
const TextBox630Props = useStore((state)=>state["BookCall"]["TextBox630"]);
const TextBox630IoProps = useIoStore((state)=>state["BookCall"]["TextBox630"]);
const TextBox630Cb = useTextBox630Cb()
const TextBox631Props = useStore((state)=>state["BookCall"]["TextBox631"]);
const TextBox631IoProps = useIoStore((state)=>state["BookCall"]["TextBox631"]);
const TextBox631Cb = useTextBox631Cb()
const Image235Props = useStore((state)=>state["BookCall"]["Image235"]);
const Image235IoProps = useIoStore((state)=>state["BookCall"]["Image235"]);
const Image235Cb = useImage235Cb()
const TextBox627Props = useStore((state)=>state["BookCall"]["TextBox627"]);
const TextBox627IoProps = useIoStore((state)=>state["BookCall"]["TextBox627"]);
const TextBox627Cb = useTextBox627Cb()
const Link233Props = useStore((state)=>state["BookCall"]["Link233"]);
const Link233IoProps = useIoStore((state)=>state["BookCall"]["Link233"]);
const Link233Cb = useLink233Cb()
const Link234Props = useStore((state)=>state["BookCall"]["Link234"]);
const Link234IoProps = useIoStore((state)=>state["BookCall"]["Link234"]);
const Link234Cb = useLink234Cb()
const Link235Props = useStore((state)=>state["BookCall"]["Link235"]);
const Link235IoProps = useIoStore((state)=>state["BookCall"]["Link235"]);
const Link235Cb = useLink235Cb()
const TextBox686Props = useStore((state)=>state["BookCall"]["TextBox686"]);
const TextBox686IoProps = useIoStore((state)=>state["BookCall"]["TextBox686"]);
const TextBox686Cb = useTextBox686Cb()
const TextBox687Props = useStore((state)=>state["BookCall"]["TextBox687"]);
const TextBox687IoProps = useIoStore((state)=>state["BookCall"]["TextBox687"]);
const TextBox687Cb = useTextBox687Cb()
const TextBox688Props = useStore((state)=>state["BookCall"]["TextBox688"]);
const TextBox688IoProps = useIoStore((state)=>state["BookCall"]["TextBox688"]);
const TextBox688Cb = useTextBox688Cb()
const Link236Props = useStore((state)=>state["BookCall"]["Link236"]);
const Link236IoProps = useIoStore((state)=>state["BookCall"]["Link236"]);
const Link236Cb = useLink236Cb()
const TextBox689Props = useStore((state)=>state["BookCall"]["TextBox689"]);
const TextBox689IoProps = useIoStore((state)=>state["BookCall"]["TextBox689"]);
const TextBox689Cb = useTextBox689Cb()
const Link237Props = useStore((state)=>state["BookCall"]["Link237"]);
const Link237IoProps = useIoStore((state)=>state["BookCall"]["Link237"]);
const Link237Cb = useLink237Cb()
const TextBox690Props = useStore((state)=>state["BookCall"]["TextBox690"]);
const TextBox690IoProps = useIoStore((state)=>state["BookCall"]["TextBox690"]);
const TextBox690Cb = useTextBox690Cb()
const Link238Props = useStore((state)=>state["BookCall"]["Link238"]);
const Link238IoProps = useIoStore((state)=>state["BookCall"]["Link238"]);
const Link238Cb = useLink238Cb()
const TextBox691Props = useStore((state)=>state["BookCall"]["TextBox691"]);
const TextBox691IoProps = useIoStore((state)=>state["BookCall"]["TextBox691"]);
const TextBox691Cb = useTextBox691Cb()
const TextBox675Props = useStore((state)=>state["BookCall"]["TextBox675"]);
const TextBox675IoProps = useIoStore((state)=>state["BookCall"]["TextBox675"]);
const TextBox675Cb = useTextBox675Cb()
const TextBox676Props = useStore((state)=>state["BookCall"]["TextBox676"]);
const TextBox676IoProps = useIoStore((state)=>state["BookCall"]["TextBox676"]);
const TextBox676Cb = useTextBox676Cb()
const TextBox677Props = useStore((state)=>state["BookCall"]["TextBox677"]);
const TextBox677IoProps = useIoStore((state)=>state["BookCall"]["TextBox677"]);
const TextBox677Cb = useTextBox677Cb()
const TextBox678Props = useStore((state)=>state["BookCall"]["TextBox678"]);
const TextBox678IoProps = useIoStore((state)=>state["BookCall"]["TextBox678"]);
const TextBox678Cb = useTextBox678Cb()
const TextBox679Props = useStore((state)=>state["BookCall"]["TextBox679"]);
const TextBox679IoProps = useIoStore((state)=>state["BookCall"]["TextBox679"]);
const TextBox679Cb = useTextBox679Cb()
const TextBox680Props = useStore((state)=>state["BookCall"]["TextBox680"]);
const TextBox680IoProps = useIoStore((state)=>state["BookCall"]["TextBox680"]);
const TextBox680Cb = useTextBox680Cb()
const TextBox681Props = useStore((state)=>state["BookCall"]["TextBox681"]);
const TextBox681IoProps = useIoStore((state)=>state["BookCall"]["TextBox681"]);
const TextBox681Cb = useTextBox681Cb()
const TextBox682Props = useStore((state)=>state["BookCall"]["TextBox682"]);
const TextBox682IoProps = useIoStore((state)=>state["BookCall"]["TextBox682"]);
const TextBox682Cb = useTextBox682Cb()
const TextBox683Props = useStore((state)=>state["BookCall"]["TextBox683"]);
const TextBox683IoProps = useIoStore((state)=>state["BookCall"]["TextBox683"]);
const TextBox683Cb = useTextBox683Cb()
const TextBox685Props = useStore((state)=>state["BookCall"]["TextBox685"]);
const TextBox685IoProps = useIoStore((state)=>state["BookCall"]["TextBox685"]);
const TextBox685Cb = useTextBox685Cb()
const Image243Props = useStore((state)=>state["BookCall"]["Image243"]);
const Image243IoProps = useIoStore((state)=>state["BookCall"]["Image243"]);
const Image243Cb = useImage243Cb()
const TextBox684Props = useStore((state)=>state["BookCall"]["TextBox684"]);
const TextBox684IoProps = useIoStore((state)=>state["BookCall"]["TextBox684"]);
const TextBox684Cb = useTextBox684Cb()
const Image242Props = useStore((state)=>state["BookCall"]["Image242"]);
const Image242IoProps = useIoStore((state)=>state["BookCall"]["Image242"]);
const Image242Cb = useImage242Cb()
const TextBox692Props = useStore((state)=>state["BookCall"]["TextBox692"]);
const TextBox692IoProps = useIoStore((state)=>state["BookCall"]["TextBox692"]);
const TextBox692Cb = useTextBox692Cb()
const TextBox693Props = useStore((state)=>state["BookCall"]["TextBox693"]);
const TextBox693IoProps = useIoStore((state)=>state["BookCall"]["TextBox693"]);
const TextBox693Cb = useTextBox693Cb()

  return (<>
  <Flex3 className="p-BookCall Flex793 bpt" {...Flex793Props} {...Flex793Cb} {...Flex793IoProps}>
<Flex3 className="p-BookCall Flex792 bpt" {...Flex792Props} {...Flex792Cb} {...Flex792IoProps}>
<Image3 className="p-BookCall Image237 bpt" {...Image237Props} {...Image237Cb} {...Image237IoProps}/>
<Flex3 className="p-BookCall Flex791 bpt" {...Flex791Props} {...Flex791Cb} {...Flex791IoProps}>
<TextBox3 className="p-BookCall TextBox636 bpt" {...TextBox636Props} {...TextBox636Cb} {...TextBox636IoProps}/>
<TextBox3 className="p-BookCall TextBox633 bpt" {...TextBox633Props} {...TextBox633Cb} {...TextBox633IoProps}/>
<TextBox3 className="p-BookCall TextBox634 bpt" {...TextBox634Props} {...TextBox634Cb} {...TextBox634IoProps}/>
<TextBox3 className="p-BookCall TextBox635 bpt" {...TextBox635Props} {...TextBox635Cb} {...TextBox635IoProps}/>
<Flex3 className="p-BookCall Flex789 bpt" {...Flex789Props} {...Flex789Cb} {...Flex789IoProps}>
<TextBox3 className="p-BookCall TextBox632 bpt" {...TextBox632Props} {...TextBox632Cb} {...TextBox632IoProps}/>
<Image3 className="p-BookCall Image236 bpt" {...Image236Props} {...Image236Cb} {...Image236IoProps}/>
</Flex3>
</Flex3>
<Menu3 className="p-BookCall Menu12 bpt" {...Menu12Props} {...Menu12Cb} {...Menu12IoProps}>
<Flex3 className="p-BookCall Flex790 bpt" {...Flex790Props} {...Flex790Cb} {...Flex790IoProps}>
<Flex3 className="p-BookCall Flex788 bpt" {...Flex788Props} {...Flex788Cb} {...Flex788IoProps}>
<Flex3 className="p-BookCall Flex787 bpt" {...Flex787Props} {...Flex787Cb} {...Flex787IoProps}>
<TextBox3 className="p-BookCall TextBox628 bpt" {...TextBox628Props} {...TextBox628Cb} {...TextBox628IoProps}/>
<TextBox3 className="p-BookCall TextBox631 bpt" {...TextBox631Props} {...TextBox631Cb} {...TextBox631IoProps}/>
<TextBox3 className="p-BookCall TextBox630 bpt" {...TextBox630Props} {...TextBox630Cb} {...TextBox630IoProps}/>
<TextBox3 className="p-BookCall TextBox629 bpt" {...TextBox629Props} {...TextBox629Cb} {...TextBox629IoProps}/>
<Flex3 className="p-BookCall Flex786 bpt" {...Flex786Props} {...Flex786Cb} {...Flex786IoProps}>
<TextBox3 className="p-BookCall TextBox627 bpt" {...TextBox627Props} {...TextBox627Cb} {...TextBox627IoProps}/>
<Image3 className="p-BookCall Image235 bpt" {...Image235Props} {...Image235Cb} {...Image235IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
</Menu3>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex419 bpt" {...Flex419Props} {...Flex419Cb} {...Flex419IoProps}>
<Flex3 className="p-BookCall Flex587 bpt" {...Flex587Props} {...Flex587Cb} {...Flex587IoProps}>
<Flex3 className="p-BookCall Flex586 bpt" {...Flex586Props} {...Flex586Cb} {...Flex586IoProps}>
<Flex3 className="p-BookCall Flex610 bpt" {...Flex610Props} {...Flex610Cb} {...Flex610IoProps}>
<TextBox3 className="p-BookCall TextBox440 bpt" {...TextBox440Props} {...TextBox440Cb} {...TextBox440IoProps}/>
<TextBox3 className="p-BookCall TextBox441 bpt" {...TextBox441Props} {...TextBox441Cb} {...TextBox441IoProps}/>
</Flex3>
<Flex3 className="p-BookCall Flex607 bpt" {...Flex607Props} {...Flex607Cb} {...Flex607IoProps}>
<Flex3 className="p-BookCall Flex608 bpt" {...Flex608Props} {...Flex608Cb} {...Flex608IoProps}>
<Image3 className="p-BookCall Image180 bpt" {...Image180Props} {...Image180Cb} {...Image180IoProps}/>
<TextBox3 className="p-BookCall TextBox439 bpt" {...TextBox439Props} {...TextBox439Cb} {...TextBox439IoProps}/>
</Flex3>
<Flex3 className="p-BookCall Flex611 bpt" {...Flex611Props} {...Flex611Cb} {...Flex611IoProps}>
<Image3 className="p-BookCall Image182 bpt" {...Image182Props} {...Image182Cb} {...Image182IoProps}/>
<TextBox3 className="p-BookCall TextBox451 bpt" {...TextBox451Props} {...TextBox451Cb} {...TextBox451IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex585 bpt" {...Flex585Props} {...Flex585Cb} {...Flex585IoProps}>
<Flex3 className="p-BookCall Flex594 bpt" {...Flex594Props} {...Flex594Cb} {...Flex594IoProps}>
<Flex3 className="p-BookCall Flex588 bpt" {...Flex588Props} {...Flex588Cb} {...Flex588IoProps}>
<Flex3 className="p-BookCall Flex598 bpt" {...Flex598Props} {...Flex598Cb} {...Flex598IoProps}>
<Flex3 className="p-BookCall Flex603 bpt" {...Flex603Props} {...Flex603Cb} {...Flex603IoProps}>
<TextBox3 className="p-BookCall TextBox448 bpt" {...TextBox448Props} {...TextBox448Cb} {...TextBox448IoProps}/>
<Input className="p-BookCall Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex3>
<Flex3 className="p-BookCall Flex604 bpt" {...Flex604Props} {...Flex604Cb} {...Flex604IoProps}>
<TextBox3 className="p-BookCall TextBox449 bpt" {...TextBox449Props} {...TextBox449Cb} {...TextBox449IoProps}/>
<Input className="p-BookCall Input8 bpt" {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex601 bpt" {...Flex601Props} {...Flex601Cb} {...Flex601IoProps}>
<TextBox3 className="p-BookCall TextBox446 bpt" {...TextBox446Props} {...TextBox446Cb} {...TextBox446IoProps}/>
<Flex3 className="p-BookCall Flex605 bpt" {...Flex605Props} {...Flex605Cb} {...Flex605IoProps}>
<Image3 className="p-BookCall Image178 bpt" {...Image178Props} {...Image178Cb} {...Image178IoProps}/>
<Input className="p-BookCall Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex596 bpt" {...Flex596Props} {...Flex596Cb} {...Flex596IoProps}>
<TextBox3 className="p-BookCall TextBox444 bpt" {...TextBox444Props} {...TextBox444Cb} {...TextBox444IoProps}/>
<Flex3 className="p-BookCall Flex606 bpt" {...Flex606Props} {...Flex606Cb} {...Flex606IoProps}>
<Image3 className="p-BookCall Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
<Input className="p-BookCall Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex597 bpt" {...Flex597Props} {...Flex597Cb} {...Flex597IoProps}>
<TextBox3 className="p-BookCall TextBox445 bpt" {...TextBox445Props} {...TextBox445Cb} {...TextBox445IoProps}/>
<Input className="p-BookCall Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex828 bpt" {...Flex828Props} {...Flex828Cb} {...Flex828IoProps}>
<Button className="p-BookCall Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<TextBox3 className="p-BookCall TextBox696 bpt" {...TextBox696Props} {...TextBox696Cb} {...TextBox696IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex826 bpt" {...Flex826Props} {...Flex826Cb} {...Flex826IoProps}>
<Flex3 className="p-BookCall Flex825 bpt" {...Flex825Props} {...Flex825Cb} {...Flex825IoProps}>
<Flex3 className="p-BookCall Flex824 bpt" {...Flex824Props} {...Flex824Cb} {...Flex824IoProps}>
<TextBox3 className="p-BookCall TextBox693 bpt" {...TextBox693Props} {...TextBox693Cb} {...TextBox693IoProps}/>
<TextBox3 className="p-BookCall TextBox692 bpt" {...TextBox692Props} {...TextBox692Cb} {...TextBox692IoProps}/>
</Flex3>
<Flex3 className="p-BookCall Flex823 bpt" {...Flex823Props} {...Flex823Cb} {...Flex823IoProps}>
<Flex3 className="p-BookCall Flex821 bpt" {...Flex821Props} {...Flex821Cb} {...Flex821IoProps}>
<Image3 className="p-BookCall Image243 bpt" {...Image243Props} {...Image243Cb} {...Image243IoProps}/>
<TextBox3 className="p-BookCall TextBox685 bpt" {...TextBox685Props} {...TextBox685Cb} {...TextBox685IoProps}/>
<Flex3 className="p-BookCall Flex819 bpt" {...Flex819Props} {...Flex819Cb} {...Flex819IoProps}>
<Image3 className="p-BookCall Image242 bpt" {...Image242Props} {...Image242Cb} {...Image242IoProps}/>
<TextBox3 className="p-BookCall TextBox684 bpt" {...TextBox684Props} {...TextBox684Cb} {...TextBox684IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex820 bpt" {...Flex820Props} {...Flex820Cb} {...Flex820IoProps}>
<Flex3 className="p-BookCall Flex816 bpt" {...Flex816Props} {...Flex816Cb} {...Flex816IoProps}>
<TextBox3 className="p-BookCall TextBox677 bpt" {...TextBox677Props} {...TextBox677Cb} {...TextBox677IoProps}/>
<TextBox3 className="p-BookCall TextBox675 bpt" {...TextBox675Props} {...TextBox675Cb} {...TextBox675IoProps}/>
<TextBox3 className="p-BookCall TextBox676 bpt" {...TextBox676Props} {...TextBox676Cb} {...TextBox676IoProps}/>
</Flex3>
<Flex3 className="p-BookCall Flex818 bpt" {...Flex818Props} {...Flex818Cb} {...Flex818IoProps}>
<TextBox3 className="p-BookCall TextBox683 bpt" {...TextBox683Props} {...TextBox683Cb} {...TextBox683IoProps}/>
<TextBox3 className="p-BookCall TextBox682 bpt" {...TextBox682Props} {...TextBox682Cb} {...TextBox682IoProps}/>
<TextBox3 className="p-BookCall TextBox681 bpt" {...TextBox681Props} {...TextBox681Cb} {...TextBox681IoProps}/>
</Flex3>
<Flex3 className="p-BookCall Flex817 bpt" {...Flex817Props} {...Flex817Cb} {...Flex817IoProps}>
<TextBox3 className="p-BookCall TextBox680 bpt" {...TextBox680Props} {...TextBox680Cb} {...TextBox680IoProps}/>
<TextBox3 className="p-BookCall TextBox679 bpt" {...TextBox679Props} {...TextBox679Cb} {...TextBox679IoProps}/>
<TextBox3 className="p-BookCall TextBox678 bpt" {...TextBox678Props} {...TextBox678Cb} {...TextBox678IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-BookCall Flex822 bpt" {...Flex822Props} {...Flex822Cb} {...Flex822IoProps}>
<TextBox3 className="p-BookCall TextBox691 bpt" {...TextBox691Props} {...TextBox691Cb} {...TextBox691IoProps}/>
<Link3 className="p-BookCall Link238 bpt" {...Link238Props} {...Link238Cb} {...Link238IoProps}/>
<TextBox3 className="p-BookCall TextBox690 bpt" {...TextBox690Props} {...TextBox690Cb} {...TextBox690IoProps}/>
<Link3 className="p-BookCall Link237 bpt" {...Link237Props} {...Link237Cb} {...Link237IoProps}/>
<TextBox3 className="p-BookCall TextBox689 bpt" {...TextBox689Props} {...TextBox689Cb} {...TextBox689IoProps}/>
<Link3 className="p-BookCall Link235 bpt" {...Link235Props} {...Link235Cb} {...Link235IoProps}/>
<TextBox3 className="p-BookCall TextBox688 bpt" {...TextBox688Props} {...TextBox688Cb} {...TextBox688IoProps}/>
<Link3 className="p-BookCall Link234 bpt" {...Link234Props} {...Link234Cb} {...Link234IoProps}/>
<TextBox3 className="p-BookCall TextBox687 bpt" {...TextBox687Props} {...TextBox687Cb} {...TextBox687IoProps}/>
<Link3 className="p-BookCall Link236 bpt" {...Link236Props} {...Link236Cb} {...Link236IoProps}/>
<TextBox3 className="p-BookCall TextBox686 bpt" {...TextBox686Props} {...TextBox686Cb} {...TextBox686IoProps}/>
<Link3 className="p-BookCall Link233 bpt" {...Link233Props} {...Link233Cb} {...Link233IoProps}/>
</Flex3>
</Flex3>
</Flex3>
  </>);
}
