import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu2 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex532Cb, useFlex531Cb, useFlex530Cb, useFlex528Cb, useFlex523Cb, useFlex516Cb, useFlex517Cb, useFlex546Cb, useFlex551Cb, useFlex549Cb, useFlex550Cb, useFlex547Cb, useFlex548Cb, useFlex574Cb, useFlex572Cb, useFlex570Cb, useFlex571Cb, useFlex573Cb, useFlex579Cb, useFlex577Cb, useFlex575Cb, useFlex576Cb, useFlex578Cb, useFlex584Cb, useFlex582Cb, useFlex580Cb, useFlex581Cb, useFlex583Cb, useFlex969Cb, useFlex968Cb, useFlex965Cb, useFlex966Cb, useFlex963Cb, useFlex959Cb, useFlex960Cb, useFlex961Cb, useFlex964Cb, useFlex962Cb, useFlex967Cb, useFlex977Cb, useFlex976Cb, useFlex975Cb, useFlex973Cb, useMenu16Cb, useFlex974Cb, useFlex972Cb, useFlex971Cb, useFlex970Cb, useImage154Cb, useTextBox399Cb, useTextBox400Cb, useTextBox401Cb, useImage159Cb, useImage164Cb, useTextBox415Cb, useTextBox949Cb, useTextBox417Cb, useImage163Cb, useImage172Cb, useTextBox430Cb, useTextBox432Cb, useTextBox950Cb, useImage173Cb, useImage174Cb, useTextBox433Cb, useTextBox435Cb, useTextBox951Cb, useImage175Cb, useImage176Cb, useTextBox436Cb, useTextBox438Cb, useTextBox952Cb, useImage177Cb, useLink275Cb, useLink276Cb, useLink277Cb, useTextBox892Cb, useTextBox893Cb, useTextBox894Cb, useLink278Cb, useTextBox895Cb, useLink279Cb, useTextBox896Cb, useLink280Cb, useTextBox897Cb, useTextBox881Cb, useTextBox882Cb, useTextBox883Cb, useTextBox884Cb, useTextBox885Cb, useTextBox886Cb, useTextBox887Cb, useTextBox888Cb, useTextBox889Cb, useTextBox891Cb, useImage282Cb, useTextBox890Cb, useImage281Cb, useTextBox898Cb, useTextBox899Cb, useImage285Cb, useTextBox906Cb, useTextBox907Cb, useTextBox908Cb, useTextBox909Cb, useTextBox905Cb, useImage284Cb, useTextBox901Cb, useTextBox902Cb, useTextBox903Cb, useTextBox904Cb, useImage283Cb, useTextBox900Cb } from "../page-cbs/Blog";
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

  const Flex532Props = useStore((state)=>state["Blog"]["Flex532"]);
const Flex532IoProps = useIoStore((state)=>state["Blog"]["Flex532"]);
const Flex532Cb = useFlex532Cb()
const Flex531Props = useStore((state)=>state["Blog"]["Flex531"]);
const Flex531IoProps = useIoStore((state)=>state["Blog"]["Flex531"]);
const Flex531Cb = useFlex531Cb()
const Flex530Props = useStore((state)=>state["Blog"]["Flex530"]);
const Flex530IoProps = useIoStore((state)=>state["Blog"]["Flex530"]);
const Flex530Cb = useFlex530Cb()
const Flex528Props = useStore((state)=>state["Blog"]["Flex528"]);
const Flex528IoProps = useIoStore((state)=>state["Blog"]["Flex528"]);
const Flex528Cb = useFlex528Cb()
const Flex523Props = useStore((state)=>state["Blog"]["Flex523"]);
const Flex523IoProps = useIoStore((state)=>state["Blog"]["Flex523"]);
const Flex523Cb = useFlex523Cb()
const Flex516Props = useStore((state)=>state["Blog"]["Flex516"]);
const Flex516IoProps = useIoStore((state)=>state["Blog"]["Flex516"]);
const Flex516Cb = useFlex516Cb()
const Flex517Props = useStore((state)=>state["Blog"]["Flex517"]);
const Flex517IoProps = useIoStore((state)=>state["Blog"]["Flex517"]);
const Flex517Cb = useFlex517Cb()
const Flex546Props = useStore((state)=>state["Blog"]["Flex546"]);
const Flex546IoProps = useIoStore((state)=>state["Blog"]["Flex546"]);
const Flex546Cb = useFlex546Cb()
const Flex551Props = useStore((state)=>state["Blog"]["Flex551"]);
const Flex551IoProps = useIoStore((state)=>state["Blog"]["Flex551"]);
const Flex551Cb = useFlex551Cb()
const Flex549Props = useStore((state)=>state["Blog"]["Flex549"]);
const Flex549IoProps = useIoStore((state)=>state["Blog"]["Flex549"]);
const Flex549Cb = useFlex549Cb()
const Flex550Props = useStore((state)=>state["Blog"]["Flex550"]);
const Flex550IoProps = useIoStore((state)=>state["Blog"]["Flex550"]);
const Flex550Cb = useFlex550Cb()
const Flex547Props = useStore((state)=>state["Blog"]["Flex547"]);
const Flex547IoProps = useIoStore((state)=>state["Blog"]["Flex547"]);
const Flex547Cb = useFlex547Cb()
const Flex548Props = useStore((state)=>state["Blog"]["Flex548"]);
const Flex548IoProps = useIoStore((state)=>state["Blog"]["Flex548"]);
const Flex548Cb = useFlex548Cb()
const Flex574Props = useStore((state)=>state["Blog"]["Flex574"]);
const Flex574IoProps = useIoStore((state)=>state["Blog"]["Flex574"]);
const Flex574Cb = useFlex574Cb()
const Flex572Props = useStore((state)=>state["Blog"]["Flex572"]);
const Flex572IoProps = useIoStore((state)=>state["Blog"]["Flex572"]);
const Flex572Cb = useFlex572Cb()
const Flex570Props = useStore((state)=>state["Blog"]["Flex570"]);
const Flex570IoProps = useIoStore((state)=>state["Blog"]["Flex570"]);
const Flex570Cb = useFlex570Cb()
const Flex571Props = useStore((state)=>state["Blog"]["Flex571"]);
const Flex571IoProps = useIoStore((state)=>state["Blog"]["Flex571"]);
const Flex571Cb = useFlex571Cb()
const Flex573Props = useStore((state)=>state["Blog"]["Flex573"]);
const Flex573IoProps = useIoStore((state)=>state["Blog"]["Flex573"]);
const Flex573Cb = useFlex573Cb()
const Flex579Props = useStore((state)=>state["Blog"]["Flex579"]);
const Flex579IoProps = useIoStore((state)=>state["Blog"]["Flex579"]);
const Flex579Cb = useFlex579Cb()
const Flex577Props = useStore((state)=>state["Blog"]["Flex577"]);
const Flex577IoProps = useIoStore((state)=>state["Blog"]["Flex577"]);
const Flex577Cb = useFlex577Cb()
const Flex575Props = useStore((state)=>state["Blog"]["Flex575"]);
const Flex575IoProps = useIoStore((state)=>state["Blog"]["Flex575"]);
const Flex575Cb = useFlex575Cb()
const Flex576Props = useStore((state)=>state["Blog"]["Flex576"]);
const Flex576IoProps = useIoStore((state)=>state["Blog"]["Flex576"]);
const Flex576Cb = useFlex576Cb()
const Flex578Props = useStore((state)=>state["Blog"]["Flex578"]);
const Flex578IoProps = useIoStore((state)=>state["Blog"]["Flex578"]);
const Flex578Cb = useFlex578Cb()
const Flex584Props = useStore((state)=>state["Blog"]["Flex584"]);
const Flex584IoProps = useIoStore((state)=>state["Blog"]["Flex584"]);
const Flex584Cb = useFlex584Cb()
const Flex582Props = useStore((state)=>state["Blog"]["Flex582"]);
const Flex582IoProps = useIoStore((state)=>state["Blog"]["Flex582"]);
const Flex582Cb = useFlex582Cb()
const Flex580Props = useStore((state)=>state["Blog"]["Flex580"]);
const Flex580IoProps = useIoStore((state)=>state["Blog"]["Flex580"]);
const Flex580Cb = useFlex580Cb()
const Flex581Props = useStore((state)=>state["Blog"]["Flex581"]);
const Flex581IoProps = useIoStore((state)=>state["Blog"]["Flex581"]);
const Flex581Cb = useFlex581Cb()
const Flex583Props = useStore((state)=>state["Blog"]["Flex583"]);
const Flex583IoProps = useIoStore((state)=>state["Blog"]["Flex583"]);
const Flex583Cb = useFlex583Cb()
const Flex969Props = useStore((state)=>state["Blog"]["Flex969"]);
const Flex969IoProps = useIoStore((state)=>state["Blog"]["Flex969"]);
const Flex969Cb = useFlex969Cb()
const Flex968Props = useStore((state)=>state["Blog"]["Flex968"]);
const Flex968IoProps = useIoStore((state)=>state["Blog"]["Flex968"]);
const Flex968Cb = useFlex968Cb()
const Flex965Props = useStore((state)=>state["Blog"]["Flex965"]);
const Flex965IoProps = useIoStore((state)=>state["Blog"]["Flex965"]);
const Flex965Cb = useFlex965Cb()
const Flex966Props = useStore((state)=>state["Blog"]["Flex966"]);
const Flex966IoProps = useIoStore((state)=>state["Blog"]["Flex966"]);
const Flex966Cb = useFlex966Cb()
const Flex963Props = useStore((state)=>state["Blog"]["Flex963"]);
const Flex963IoProps = useIoStore((state)=>state["Blog"]["Flex963"]);
const Flex963Cb = useFlex963Cb()
const Flex959Props = useStore((state)=>state["Blog"]["Flex959"]);
const Flex959IoProps = useIoStore((state)=>state["Blog"]["Flex959"]);
const Flex959Cb = useFlex959Cb()
const Flex960Props = useStore((state)=>state["Blog"]["Flex960"]);
const Flex960IoProps = useIoStore((state)=>state["Blog"]["Flex960"]);
const Flex960Cb = useFlex960Cb()
const Flex961Props = useStore((state)=>state["Blog"]["Flex961"]);
const Flex961IoProps = useIoStore((state)=>state["Blog"]["Flex961"]);
const Flex961Cb = useFlex961Cb()
const Flex964Props = useStore((state)=>state["Blog"]["Flex964"]);
const Flex964IoProps = useIoStore((state)=>state["Blog"]["Flex964"]);
const Flex964Cb = useFlex964Cb()
const Flex962Props = useStore((state)=>state["Blog"]["Flex962"]);
const Flex962IoProps = useIoStore((state)=>state["Blog"]["Flex962"]);
const Flex962Cb = useFlex962Cb()
const Flex967Props = useStore((state)=>state["Blog"]["Flex967"]);
const Flex967IoProps = useIoStore((state)=>state["Blog"]["Flex967"]);
const Flex967Cb = useFlex967Cb()
const Flex977Props = useStore((state)=>state["Blog"]["Flex977"]);
const Flex977IoProps = useIoStore((state)=>state["Blog"]["Flex977"]);
const Flex977Cb = useFlex977Cb()
const Flex976Props = useStore((state)=>state["Blog"]["Flex976"]);
const Flex976IoProps = useIoStore((state)=>state["Blog"]["Flex976"]);
const Flex976Cb = useFlex976Cb()
const Flex975Props = useStore((state)=>state["Blog"]["Flex975"]);
const Flex975IoProps = useIoStore((state)=>state["Blog"]["Flex975"]);
const Flex975Cb = useFlex975Cb()
const Flex973Props = useStore((state)=>state["Blog"]["Flex973"]);
const Flex973IoProps = useIoStore((state)=>state["Blog"]["Flex973"]);
const Flex973Cb = useFlex973Cb()
const Menu16Props = useStore((state)=>state["Blog"]["Menu16"]);
const Menu16IoProps = useIoStore((state)=>state["Blog"]["Menu16"]);
const Menu16Cb = useMenu16Cb()
const Flex974Props = useStore((state)=>state["Blog"]["Flex974"]);
const Flex974IoProps = useIoStore((state)=>state["Blog"]["Flex974"]);
const Flex974Cb = useFlex974Cb()
const Flex972Props = useStore((state)=>state["Blog"]["Flex972"]);
const Flex972IoProps = useIoStore((state)=>state["Blog"]["Flex972"]);
const Flex972Cb = useFlex972Cb()
const Flex971Props = useStore((state)=>state["Blog"]["Flex971"]);
const Flex971IoProps = useIoStore((state)=>state["Blog"]["Flex971"]);
const Flex971Cb = useFlex971Cb()
const Flex970Props = useStore((state)=>state["Blog"]["Flex970"]);
const Flex970IoProps = useIoStore((state)=>state["Blog"]["Flex970"]);
const Flex970Cb = useFlex970Cb()
const Image154Props = useStore((state)=>state["Blog"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["Blog"]["Image154"]);
const Image154Cb = useImage154Cb()
const TextBox399Props = useStore((state)=>state["Blog"]["TextBox399"]);
const TextBox399IoProps = useIoStore((state)=>state["Blog"]["TextBox399"]);
const TextBox399Cb = useTextBox399Cb()
const TextBox400Props = useStore((state)=>state["Blog"]["TextBox400"]);
const TextBox400IoProps = useIoStore((state)=>state["Blog"]["TextBox400"]);
const TextBox400Cb = useTextBox400Cb()
const TextBox401Props = useStore((state)=>state["Blog"]["TextBox401"]);
const TextBox401IoProps = useIoStore((state)=>state["Blog"]["TextBox401"]);
const TextBox401Cb = useTextBox401Cb()
const Image159Props = useStore((state)=>state["Blog"]["Image159"]);
const Image159IoProps = useIoStore((state)=>state["Blog"]["Image159"]);
const Image159Cb = useImage159Cb()
const Image164Props = useStore((state)=>state["Blog"]["Image164"]);
const Image164IoProps = useIoStore((state)=>state["Blog"]["Image164"]);
const Image164Cb = useImage164Cb()
const TextBox415Props = useStore((state)=>state["Blog"]["TextBox415"]);
const TextBox415IoProps = useIoStore((state)=>state["Blog"]["TextBox415"]);
const TextBox415Cb = useTextBox415Cb()
const TextBox949Props = useStore((state)=>state["Blog"]["TextBox949"]);
const TextBox949IoProps = useIoStore((state)=>state["Blog"]["TextBox949"]);
const TextBox949Cb = useTextBox949Cb()
const TextBox417Props = useStore((state)=>state["Blog"]["TextBox417"]);
const TextBox417IoProps = useIoStore((state)=>state["Blog"]["TextBox417"]);
const TextBox417Cb = useTextBox417Cb()
const Image163Props = useStore((state)=>state["Blog"]["Image163"]);
const Image163IoProps = useIoStore((state)=>state["Blog"]["Image163"]);
const Image163Cb = useImage163Cb()
const Image172Props = useStore((state)=>state["Blog"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["Blog"]["Image172"]);
const Image172Cb = useImage172Cb()
const TextBox430Props = useStore((state)=>state["Blog"]["TextBox430"]);
const TextBox430IoProps = useIoStore((state)=>state["Blog"]["TextBox430"]);
const TextBox430Cb = useTextBox430Cb()
const TextBox432Props = useStore((state)=>state["Blog"]["TextBox432"]);
const TextBox432IoProps = useIoStore((state)=>state["Blog"]["TextBox432"]);
const TextBox432Cb = useTextBox432Cb()
const TextBox950Props = useStore((state)=>state["Blog"]["TextBox950"]);
const TextBox950IoProps = useIoStore((state)=>state["Blog"]["TextBox950"]);
const TextBox950Cb = useTextBox950Cb()
const Image173Props = useStore((state)=>state["Blog"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["Blog"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image174Props = useStore((state)=>state["Blog"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["Blog"]["Image174"]);
const Image174Cb = useImage174Cb()
const TextBox433Props = useStore((state)=>state["Blog"]["TextBox433"]);
const TextBox433IoProps = useIoStore((state)=>state["Blog"]["TextBox433"]);
const TextBox433Cb = useTextBox433Cb()
const TextBox435Props = useStore((state)=>state["Blog"]["TextBox435"]);
const TextBox435IoProps = useIoStore((state)=>state["Blog"]["TextBox435"]);
const TextBox435Cb = useTextBox435Cb()
const TextBox951Props = useStore((state)=>state["Blog"]["TextBox951"]);
const TextBox951IoProps = useIoStore((state)=>state["Blog"]["TextBox951"]);
const TextBox951Cb = useTextBox951Cb()
const Image175Props = useStore((state)=>state["Blog"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["Blog"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image176Props = useStore((state)=>state["Blog"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["Blog"]["Image176"]);
const Image176Cb = useImage176Cb()
const TextBox436Props = useStore((state)=>state["Blog"]["TextBox436"]);
const TextBox436IoProps = useIoStore((state)=>state["Blog"]["TextBox436"]);
const TextBox436Cb = useTextBox436Cb()
const TextBox438Props = useStore((state)=>state["Blog"]["TextBox438"]);
const TextBox438IoProps = useIoStore((state)=>state["Blog"]["TextBox438"]);
const TextBox438Cb = useTextBox438Cb()
const TextBox952Props = useStore((state)=>state["Blog"]["TextBox952"]);
const TextBox952IoProps = useIoStore((state)=>state["Blog"]["TextBox952"]);
const TextBox952Cb = useTextBox952Cb()
const Image177Props = useStore((state)=>state["Blog"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["Blog"]["Image177"]);
const Image177Cb = useImage177Cb()
const Link275Props = useStore((state)=>state["Blog"]["Link275"]);
const Link275IoProps = useIoStore((state)=>state["Blog"]["Link275"]);
const Link275Cb = useLink275Cb()
const Link276Props = useStore((state)=>state["Blog"]["Link276"]);
const Link276IoProps = useIoStore((state)=>state["Blog"]["Link276"]);
const Link276Cb = useLink276Cb()
const Link277Props = useStore((state)=>state["Blog"]["Link277"]);
const Link277IoProps = useIoStore((state)=>state["Blog"]["Link277"]);
const Link277Cb = useLink277Cb()
const TextBox892Props = useStore((state)=>state["Blog"]["TextBox892"]);
const TextBox892IoProps = useIoStore((state)=>state["Blog"]["TextBox892"]);
const TextBox892Cb = useTextBox892Cb()
const TextBox893Props = useStore((state)=>state["Blog"]["TextBox893"]);
const TextBox893IoProps = useIoStore((state)=>state["Blog"]["TextBox893"]);
const TextBox893Cb = useTextBox893Cb()
const TextBox894Props = useStore((state)=>state["Blog"]["TextBox894"]);
const TextBox894IoProps = useIoStore((state)=>state["Blog"]["TextBox894"]);
const TextBox894Cb = useTextBox894Cb()
const Link278Props = useStore((state)=>state["Blog"]["Link278"]);
const Link278IoProps = useIoStore((state)=>state["Blog"]["Link278"]);
const Link278Cb = useLink278Cb()
const TextBox895Props = useStore((state)=>state["Blog"]["TextBox895"]);
const TextBox895IoProps = useIoStore((state)=>state["Blog"]["TextBox895"]);
const TextBox895Cb = useTextBox895Cb()
const Link279Props = useStore((state)=>state["Blog"]["Link279"]);
const Link279IoProps = useIoStore((state)=>state["Blog"]["Link279"]);
const Link279Cb = useLink279Cb()
const TextBox896Props = useStore((state)=>state["Blog"]["TextBox896"]);
const TextBox896IoProps = useIoStore((state)=>state["Blog"]["TextBox896"]);
const TextBox896Cb = useTextBox896Cb()
const Link280Props = useStore((state)=>state["Blog"]["Link280"]);
const Link280IoProps = useIoStore((state)=>state["Blog"]["Link280"]);
const Link280Cb = useLink280Cb()
const TextBox897Props = useStore((state)=>state["Blog"]["TextBox897"]);
const TextBox897IoProps = useIoStore((state)=>state["Blog"]["TextBox897"]);
const TextBox897Cb = useTextBox897Cb()
const TextBox881Props = useStore((state)=>state["Blog"]["TextBox881"]);
const TextBox881IoProps = useIoStore((state)=>state["Blog"]["TextBox881"]);
const TextBox881Cb = useTextBox881Cb()
const TextBox882Props = useStore((state)=>state["Blog"]["TextBox882"]);
const TextBox882IoProps = useIoStore((state)=>state["Blog"]["TextBox882"]);
const TextBox882Cb = useTextBox882Cb()
const TextBox883Props = useStore((state)=>state["Blog"]["TextBox883"]);
const TextBox883IoProps = useIoStore((state)=>state["Blog"]["TextBox883"]);
const TextBox883Cb = useTextBox883Cb()
const TextBox884Props = useStore((state)=>state["Blog"]["TextBox884"]);
const TextBox884IoProps = useIoStore((state)=>state["Blog"]["TextBox884"]);
const TextBox884Cb = useTextBox884Cb()
const TextBox885Props = useStore((state)=>state["Blog"]["TextBox885"]);
const TextBox885IoProps = useIoStore((state)=>state["Blog"]["TextBox885"]);
const TextBox885Cb = useTextBox885Cb()
const TextBox886Props = useStore((state)=>state["Blog"]["TextBox886"]);
const TextBox886IoProps = useIoStore((state)=>state["Blog"]["TextBox886"]);
const TextBox886Cb = useTextBox886Cb()
const TextBox887Props = useStore((state)=>state["Blog"]["TextBox887"]);
const TextBox887IoProps = useIoStore((state)=>state["Blog"]["TextBox887"]);
const TextBox887Cb = useTextBox887Cb()
const TextBox888Props = useStore((state)=>state["Blog"]["TextBox888"]);
const TextBox888IoProps = useIoStore((state)=>state["Blog"]["TextBox888"]);
const TextBox888Cb = useTextBox888Cb()
const TextBox889Props = useStore((state)=>state["Blog"]["TextBox889"]);
const TextBox889IoProps = useIoStore((state)=>state["Blog"]["TextBox889"]);
const TextBox889Cb = useTextBox889Cb()
const TextBox891Props = useStore((state)=>state["Blog"]["TextBox891"]);
const TextBox891IoProps = useIoStore((state)=>state["Blog"]["TextBox891"]);
const TextBox891Cb = useTextBox891Cb()
const Image282Props = useStore((state)=>state["Blog"]["Image282"]);
const Image282IoProps = useIoStore((state)=>state["Blog"]["Image282"]);
const Image282Cb = useImage282Cb()
const TextBox890Props = useStore((state)=>state["Blog"]["TextBox890"]);
const TextBox890IoProps = useIoStore((state)=>state["Blog"]["TextBox890"]);
const TextBox890Cb = useTextBox890Cb()
const Image281Props = useStore((state)=>state["Blog"]["Image281"]);
const Image281IoProps = useIoStore((state)=>state["Blog"]["Image281"]);
const Image281Cb = useImage281Cb()
const TextBox898Props = useStore((state)=>state["Blog"]["TextBox898"]);
const TextBox898IoProps = useIoStore((state)=>state["Blog"]["TextBox898"]);
const TextBox898Cb = useTextBox898Cb()
const TextBox899Props = useStore((state)=>state["Blog"]["TextBox899"]);
const TextBox899IoProps = useIoStore((state)=>state["Blog"]["TextBox899"]);
const TextBox899Cb = useTextBox899Cb()
const Image285Props = useStore((state)=>state["Blog"]["Image285"]);
const Image285IoProps = useIoStore((state)=>state["Blog"]["Image285"]);
const Image285Cb = useImage285Cb()
const TextBox906Props = useStore((state)=>state["Blog"]["TextBox906"]);
const TextBox906IoProps = useIoStore((state)=>state["Blog"]["TextBox906"]);
const TextBox906Cb = useTextBox906Cb()
const TextBox907Props = useStore((state)=>state["Blog"]["TextBox907"]);
const TextBox907IoProps = useIoStore((state)=>state["Blog"]["TextBox907"]);
const TextBox907Cb = useTextBox907Cb()
const TextBox908Props = useStore((state)=>state["Blog"]["TextBox908"]);
const TextBox908IoProps = useIoStore((state)=>state["Blog"]["TextBox908"]);
const TextBox908Cb = useTextBox908Cb()
const TextBox909Props = useStore((state)=>state["Blog"]["TextBox909"]);
const TextBox909IoProps = useIoStore((state)=>state["Blog"]["TextBox909"]);
const TextBox909Cb = useTextBox909Cb()
const TextBox905Props = useStore((state)=>state["Blog"]["TextBox905"]);
const TextBox905IoProps = useIoStore((state)=>state["Blog"]["TextBox905"]);
const TextBox905Cb = useTextBox905Cb()
const Image284Props = useStore((state)=>state["Blog"]["Image284"]);
const Image284IoProps = useIoStore((state)=>state["Blog"]["Image284"]);
const Image284Cb = useImage284Cb()
const TextBox901Props = useStore((state)=>state["Blog"]["TextBox901"]);
const TextBox901IoProps = useIoStore((state)=>state["Blog"]["TextBox901"]);
const TextBox901Cb = useTextBox901Cb()
const TextBox902Props = useStore((state)=>state["Blog"]["TextBox902"]);
const TextBox902IoProps = useIoStore((state)=>state["Blog"]["TextBox902"]);
const TextBox902Cb = useTextBox902Cb()
const TextBox903Props = useStore((state)=>state["Blog"]["TextBox903"]);
const TextBox903IoProps = useIoStore((state)=>state["Blog"]["TextBox903"]);
const TextBox903Cb = useTextBox903Cb()
const TextBox904Props = useStore((state)=>state["Blog"]["TextBox904"]);
const TextBox904IoProps = useIoStore((state)=>state["Blog"]["TextBox904"]);
const TextBox904Cb = useTextBox904Cb()
const Image283Props = useStore((state)=>state["Blog"]["Image283"]);
const Image283IoProps = useIoStore((state)=>state["Blog"]["Image283"]);
const Image283Cb = useImage283Cb()
const TextBox900Props = useStore((state)=>state["Blog"]["TextBox900"]);
const TextBox900IoProps = useIoStore((state)=>state["Blog"]["TextBox900"]);
const TextBox900Cb = useTextBox900Cb()

  return (<>
  <Flex2 className="p-Blog Flex977 bpt" {...Flex977Props} {...Flex977Cb} {...Flex977IoProps}>
<Flex2 className="p-Blog Flex976 bpt" {...Flex976Props} {...Flex976Cb} {...Flex976IoProps}>
<Image2 className="p-Blog Image285 bpt" {...Image285Props} {...Image285Cb} {...Image285IoProps}/>
<Flex2 className="p-Blog Flex975 bpt" {...Flex975Props} {...Flex975Cb} {...Flex975IoProps}>
<TextBox2 className="p-Blog TextBox909 bpt" {...TextBox909Props} {...TextBox909Cb} {...TextBox909IoProps}/>
<TextBox2 className="p-Blog TextBox906 bpt" {...TextBox906Props} {...TextBox906Cb} {...TextBox906IoProps}/>
<TextBox2 className="p-Blog TextBox907 bpt" {...TextBox907Props} {...TextBox907Cb} {...TextBox907IoProps}/>
<TextBox2 className="p-Blog TextBox908 bpt" {...TextBox908Props} {...TextBox908Cb} {...TextBox908IoProps}/>
<Flex2 className="p-Blog Flex973 bpt" {...Flex973Props} {...Flex973Cb} {...Flex973IoProps}>
<TextBox2 className="p-Blog TextBox905 bpt" {...TextBox905Props} {...TextBox905Cb} {...TextBox905IoProps}/>
<Image2 className="p-Blog Image284 bpt" {...Image284Props} {...Image284Cb} {...Image284IoProps}/>
</Flex2>
</Flex2>
<Menu2 className="p-Blog Menu16 bpt" {...Menu16Props} {...Menu16Cb} {...Menu16IoProps}>
<Flex2 className="p-Blog Flex974 bpt" {...Flex974Props} {...Flex974Cb} {...Flex974IoProps}>
<Flex2 className="p-Blog Flex972 bpt" {...Flex972Props} {...Flex972Cb} {...Flex972IoProps}>
<Flex2 className="p-Blog Flex971 bpt" {...Flex971Props} {...Flex971Cb} {...Flex971IoProps}>
<TextBox2 className="p-Blog TextBox901 bpt" {...TextBox901Props} {...TextBox901Cb} {...TextBox901IoProps}/>
<TextBox2 className="p-Blog TextBox904 bpt" {...TextBox904Props} {...TextBox904Cb} {...TextBox904IoProps}/>
<TextBox2 className="p-Blog TextBox903 bpt" {...TextBox903Props} {...TextBox903Cb} {...TextBox903IoProps}/>
<TextBox2 className="p-Blog TextBox902 bpt" {...TextBox902Props} {...TextBox902Cb} {...TextBox902IoProps}/>
<Flex2 className="p-Blog Flex970 bpt" {...Flex970Props} {...Flex970Cb} {...Flex970IoProps}>
<TextBox2 className="p-Blog TextBox900 bpt" {...TextBox900Props} {...TextBox900Cb} {...TextBox900IoProps}/>
<Image2 className="p-Blog Image283 bpt" {...Image283Props} {...Image283Cb} {...Image283IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Menu2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex532 bpt" {...Flex532Props} {...Flex532Cb} {...Flex532IoProps}>
<Flex2 className="p-Blog Flex531 bpt" {...Flex531Props} {...Flex531Cb} {...Flex531IoProps}>
<Flex2 className="p-Blog Flex530 bpt" {...Flex530Props} {...Flex530Cb} {...Flex530IoProps}>
<Flex2 className="p-Blog Flex528 bpt" {...Flex528Props} {...Flex528Cb} {...Flex528IoProps}>
<Flex2 className="p-Blog Flex546 bpt" {...Flex546Props} {...Flex546Cb} {...Flex546IoProps}>
<Image2 className="p-Blog Image159 bpt" {...Image159Props} {...Image159Cb} {...Image159IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex523 bpt" {...Flex523Props} {...Flex523Cb} {...Flex523IoProps}>
<Flex2 className="p-Blog Flex517 bpt" {...Flex517Props} {...Flex517Cb} {...Flex517IoProps}>
<TextBox2 className="p-Blog TextBox400 bpt" {...TextBox400Props} {...TextBox400Cb} {...TextBox400IoProps}/>
<TextBox2 className="p-Blog TextBox401 bpt" {...TextBox401Props} {...TextBox401Cb} {...TextBox401IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex516 bpt" {...Flex516Props} {...Flex516Cb} {...Flex516IoProps}>
<TextBox2 className="p-Blog TextBox399 bpt" {...TextBox399Props} {...TextBox399Cb} {...TextBox399IoProps}/>
<Image2 className="p-Blog Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex551 bpt" {...Flex551Props} {...Flex551Cb} {...Flex551IoProps}>
<Flex2 className="p-Blog Flex549 bpt" {...Flex549Props} {...Flex549Cb} {...Flex549IoProps}>
<Image2 className="p-Blog Image164 bpt" {...Image164Props} {...Image164Cb} {...Image164IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex550 bpt" {...Flex550Props} {...Flex550Cb} {...Flex550IoProps}>
<Flex2 className="p-Blog Flex547 bpt" {...Flex547Props} {...Flex547Cb} {...Flex547IoProps}>
<TextBox2 className="p-Blog TextBox949 bpt" {...TextBox949Props} {...TextBox949Cb} {...TextBox949IoProps}/>
<TextBox2 className="p-Blog TextBox415 bpt" {...TextBox415Props} {...TextBox415Cb} {...TextBox415IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex548 bpt" {...Flex548Props} {...Flex548Cb} {...Flex548IoProps}>
<TextBox2 className="p-Blog TextBox417 bpt" {...TextBox417Props} {...TextBox417Cb} {...TextBox417IoProps}/>
<Image2 className="p-Blog Image163 bpt" {...Image163Props} {...Image163Cb} {...Image163IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex574 bpt" {...Flex574Props} {...Flex574Cb} {...Flex574IoProps}>
<Flex2 className="p-Blog Flex573 bpt" {...Flex573Props} {...Flex573Cb} {...Flex573IoProps}>
<Image2 className="p-Blog Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex572 bpt" {...Flex572Props} {...Flex572Cb} {...Flex572IoProps}>
<Flex2 className="p-Blog Flex571 bpt" {...Flex571Props} {...Flex571Cb} {...Flex571IoProps}>
<TextBox2 className="p-Blog TextBox950 bpt" {...TextBox950Props} {...TextBox950Cb} {...TextBox950IoProps}/>
<TextBox2 className="p-Blog TextBox432 bpt" {...TextBox432Props} {...TextBox432Cb} {...TextBox432IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex570 bpt" {...Flex570Props} {...Flex570Cb} {...Flex570IoProps}>
<TextBox2 className="p-Blog TextBox430 bpt" {...TextBox430Props} {...TextBox430Cb} {...TextBox430IoProps}/>
<Image2 className="p-Blog Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex579 bpt" {...Flex579Props} {...Flex579Cb} {...Flex579IoProps}>
<Flex2 className="p-Blog Flex578 bpt" {...Flex578Props} {...Flex578Cb} {...Flex578IoProps}>
<Image2 className="p-Blog Image175 bpt" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex577 bpt" {...Flex577Props} {...Flex577Cb} {...Flex577IoProps}>
<Flex2 className="p-Blog Flex576 bpt" {...Flex576Props} {...Flex576Cb} {...Flex576IoProps}>
<TextBox2 className="p-Blog TextBox951 bpt" {...TextBox951Props} {...TextBox951Cb} {...TextBox951IoProps}/>
<TextBox2 className="p-Blog TextBox435 bpt" {...TextBox435Props} {...TextBox435Cb} {...TextBox435IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex575 bpt" {...Flex575Props} {...Flex575Cb} {...Flex575IoProps}>
<TextBox2 className="p-Blog TextBox433 bpt" {...TextBox433Props} {...TextBox433Cb} {...TextBox433IoProps}/>
<Image2 className="p-Blog Image174 bpt" {...Image174Props} {...Image174Cb} {...Image174IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex584 bpt" {...Flex584Props} {...Flex584Cb} {...Flex584IoProps}>
<Flex2 className="p-Blog Flex583 bpt" {...Flex583Props} {...Flex583Cb} {...Flex583IoProps}>
<Image2 className="p-Blog Image177 bpt" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex582 bpt" {...Flex582Props} {...Flex582Cb} {...Flex582IoProps}>
<Flex2 className="p-Blog Flex581 bpt" {...Flex581Props} {...Flex581Cb} {...Flex581IoProps}>
<TextBox2 className="p-Blog TextBox952 bpt" {...TextBox952Props} {...TextBox952Cb} {...TextBox952IoProps}/>
<TextBox2 className="p-Blog TextBox438 bpt" {...TextBox438Props} {...TextBox438Cb} {...TextBox438IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex580 bpt" {...Flex580Props} {...Flex580Cb} {...Flex580IoProps}>
<TextBox2 className="p-Blog TextBox436 bpt" {...TextBox436Props} {...TextBox436Cb} {...TextBox436IoProps}/>
<Image2 className="p-Blog Image176 bpt" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex969 bpt" {...Flex969Props} {...Flex969Cb} {...Flex969IoProps}>
<Flex2 className="p-Blog Flex968 bpt" {...Flex968Props} {...Flex968Cb} {...Flex968IoProps}>
<Flex2 className="p-Blog Flex967 bpt" {...Flex967Props} {...Flex967Cb} {...Flex967IoProps}>
<TextBox2 className="p-Blog TextBox899 bpt" {...TextBox899Props} {...TextBox899Cb} {...TextBox899IoProps}/>
<TextBox2 className="p-Blog TextBox898 bpt" {...TextBox898Props} {...TextBox898Cb} {...TextBox898IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex966 bpt" {...Flex966Props} {...Flex966Cb} {...Flex966IoProps}>
<Flex2 className="p-Blog Flex964 bpt" {...Flex964Props} {...Flex964Cb} {...Flex964IoProps}>
<Image2 className="p-Blog Image282 bpt" {...Image282Props} {...Image282Cb} {...Image282IoProps}/>
<TextBox2 className="p-Blog TextBox891 bpt" {...TextBox891Props} {...TextBox891Cb} {...TextBox891IoProps}/>
<Flex2 className="p-Blog Flex962 bpt" {...Flex962Props} {...Flex962Cb} {...Flex962IoProps}>
<Image2 className="p-Blog Image281 bpt" {...Image281Props} {...Image281Cb} {...Image281IoProps}/>
<TextBox2 className="p-Blog TextBox890 bpt" {...TextBox890Props} {...TextBox890Cb} {...TextBox890IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex963 bpt" {...Flex963Props} {...Flex963Cb} {...Flex963IoProps}>
<Flex2 className="p-Blog Flex959 bpt" {...Flex959Props} {...Flex959Cb} {...Flex959IoProps}>
<TextBox2 className="p-Blog TextBox883 bpt" {...TextBox883Props} {...TextBox883Cb} {...TextBox883IoProps}/>
<TextBox2 className="p-Blog TextBox881 bpt" {...TextBox881Props} {...TextBox881Cb} {...TextBox881IoProps}/>
<TextBox2 className="p-Blog TextBox882 bpt" {...TextBox882Props} {...TextBox882Cb} {...TextBox882IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex961 bpt" {...Flex961Props} {...Flex961Cb} {...Flex961IoProps}>
<TextBox2 className="p-Blog TextBox889 bpt" {...TextBox889Props} {...TextBox889Cb} {...TextBox889IoProps}/>
<TextBox2 className="p-Blog TextBox888 bpt" {...TextBox888Props} {...TextBox888Cb} {...TextBox888IoProps}/>
<TextBox2 className="p-Blog TextBox887 bpt" {...TextBox887Props} {...TextBox887Cb} {...TextBox887IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex960 bpt" {...Flex960Props} {...Flex960Cb} {...Flex960IoProps}>
<TextBox2 className="p-Blog TextBox886 bpt" {...TextBox886Props} {...TextBox886Cb} {...TextBox886IoProps}/>
<TextBox2 className="p-Blog TextBox885 bpt" {...TextBox885Props} {...TextBox885Cb} {...TextBox885IoProps}/>
<TextBox2 className="p-Blog TextBox884 bpt" {...TextBox884Props} {...TextBox884Cb} {...TextBox884IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex965 bpt" {...Flex965Props} {...Flex965Cb} {...Flex965IoProps}>
<TextBox2 className="p-Blog TextBox897 bpt" {...TextBox897Props} {...TextBox897Cb} {...TextBox897IoProps}/>
<Link2 className="p-Blog Link280 bpt" {...Link280Props} {...Link280Cb} {...Link280IoProps}/>
<TextBox2 className="p-Blog TextBox896 bpt" {...TextBox896Props} {...TextBox896Cb} {...TextBox896IoProps}/>
<Link2 className="p-Blog Link279 bpt" {...Link279Props} {...Link279Cb} {...Link279IoProps}/>
<TextBox2 className="p-Blog TextBox895 bpt" {...TextBox895Props} {...TextBox895Cb} {...TextBox895IoProps}/>
<Link2 className="p-Blog Link277 bpt" {...Link277Props} {...Link277Cb} {...Link277IoProps}/>
<TextBox2 className="p-Blog TextBox894 bpt" {...TextBox894Props} {...TextBox894Cb} {...TextBox894IoProps}/>
<Link2 className="p-Blog Link276 bpt" {...Link276Props} {...Link276Cb} {...Link276IoProps}/>
<TextBox2 className="p-Blog TextBox893 bpt" {...TextBox893Props} {...TextBox893Cb} {...TextBox893IoProps}/>
<Link2 className="p-Blog Link278 bpt" {...Link278Props} {...Link278Cb} {...Link278IoProps}/>
<TextBox2 className="p-Blog TextBox892 bpt" {...TextBox892Props} {...TextBox892Cb} {...TextBox892IoProps}/>
<Link2 className="p-Blog Link275 bpt" {...Link275Props} {...Link275Cb} {...Link275IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
