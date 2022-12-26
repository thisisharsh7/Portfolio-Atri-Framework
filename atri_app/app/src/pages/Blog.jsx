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
import { useFlex532Cb, useFlex531Cb, useFlex530Cb, useFlex528Cb, useFlex523Cb, useFlex516Cb, useFlex517Cb, useFlex546Cb, useFlex551Cb, useFlex549Cb, useFlex550Cb, useFlex547Cb, useFlex548Cb, useFlex574Cb, useFlex572Cb, useFlex570Cb, useFlex571Cb, useFlex573Cb, useFlex579Cb, useFlex577Cb, useFlex575Cb, useFlex576Cb, useFlex578Cb, useFlex584Cb, useFlex582Cb, useFlex580Cb, useFlex581Cb, useFlex583Cb, useFlex785Cb, useFlex784Cb, useFlex783Cb, useFlex781Cb, useMenu11Cb, useFlex782Cb, useFlex780Cb, useFlex779Cb, useFlex778Cb, useFlex815Cb, useFlex814Cb, useFlex811Cb, useFlex812Cb, useFlex809Cb, useFlex805Cb, useFlex806Cb, useFlex807Cb, useFlex810Cb, useFlex808Cb, useFlex813Cb, useImage154Cb, useTextBox399Cb, useTextBox400Cb, useTextBox401Cb, useImage159Cb, useImage164Cb, useTextBox415Cb, useTextBox416Cb, useTextBox417Cb, useImage163Cb, useImage172Cb, useTextBox430Cb, useTextBox431Cb, useTextBox432Cb, useImage173Cb, useImage174Cb, useTextBox433Cb, useTextBox434Cb, useTextBox435Cb, useImage175Cb, useImage176Cb, useTextBox436Cb, useTextBox437Cb, useTextBox438Cb, useImage177Cb, useImage234Cb, useTextBox623Cb, useTextBox624Cb, useTextBox625Cb, useTextBox626Cb, useTextBox622Cb, useImage233Cb, useTextBox618Cb, useTextBox619Cb, useTextBox620Cb, useTextBox621Cb, useImage232Cb, useTextBox617Cb, useLink227Cb, useLink228Cb, useLink229Cb, useTextBox667Cb, useTextBox668Cb, useTextBox669Cb, useLink230Cb, useTextBox670Cb, useLink231Cb, useTextBox671Cb, useLink232Cb, useTextBox672Cb, useTextBox656Cb, useTextBox657Cb, useTextBox658Cb, useTextBox659Cb, useTextBox660Cb, useTextBox661Cb, useTextBox662Cb, useTextBox663Cb, useTextBox664Cb, useTextBox666Cb, useImage241Cb, useTextBox665Cb, useImage240Cb, useTextBox673Cb, useTextBox674Cb } from "../page-cbs/Blog";
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
const Flex785Props = useStore((state)=>state["Blog"]["Flex785"]);
const Flex785IoProps = useIoStore((state)=>state["Blog"]["Flex785"]);
const Flex785Cb = useFlex785Cb()
const Flex784Props = useStore((state)=>state["Blog"]["Flex784"]);
const Flex784IoProps = useIoStore((state)=>state["Blog"]["Flex784"]);
const Flex784Cb = useFlex784Cb()
const Flex783Props = useStore((state)=>state["Blog"]["Flex783"]);
const Flex783IoProps = useIoStore((state)=>state["Blog"]["Flex783"]);
const Flex783Cb = useFlex783Cb()
const Flex781Props = useStore((state)=>state["Blog"]["Flex781"]);
const Flex781IoProps = useIoStore((state)=>state["Blog"]["Flex781"]);
const Flex781Cb = useFlex781Cb()
const Menu11Props = useStore((state)=>state["Blog"]["Menu11"]);
const Menu11IoProps = useIoStore((state)=>state["Blog"]["Menu11"]);
const Menu11Cb = useMenu11Cb()
const Flex782Props = useStore((state)=>state["Blog"]["Flex782"]);
const Flex782IoProps = useIoStore((state)=>state["Blog"]["Flex782"]);
const Flex782Cb = useFlex782Cb()
const Flex780Props = useStore((state)=>state["Blog"]["Flex780"]);
const Flex780IoProps = useIoStore((state)=>state["Blog"]["Flex780"]);
const Flex780Cb = useFlex780Cb()
const Flex779Props = useStore((state)=>state["Blog"]["Flex779"]);
const Flex779IoProps = useIoStore((state)=>state["Blog"]["Flex779"]);
const Flex779Cb = useFlex779Cb()
const Flex778Props = useStore((state)=>state["Blog"]["Flex778"]);
const Flex778IoProps = useIoStore((state)=>state["Blog"]["Flex778"]);
const Flex778Cb = useFlex778Cb()
const Flex815Props = useStore((state)=>state["Blog"]["Flex815"]);
const Flex815IoProps = useIoStore((state)=>state["Blog"]["Flex815"]);
const Flex815Cb = useFlex815Cb()
const Flex814Props = useStore((state)=>state["Blog"]["Flex814"]);
const Flex814IoProps = useIoStore((state)=>state["Blog"]["Flex814"]);
const Flex814Cb = useFlex814Cb()
const Flex811Props = useStore((state)=>state["Blog"]["Flex811"]);
const Flex811IoProps = useIoStore((state)=>state["Blog"]["Flex811"]);
const Flex811Cb = useFlex811Cb()
const Flex812Props = useStore((state)=>state["Blog"]["Flex812"]);
const Flex812IoProps = useIoStore((state)=>state["Blog"]["Flex812"]);
const Flex812Cb = useFlex812Cb()
const Flex809Props = useStore((state)=>state["Blog"]["Flex809"]);
const Flex809IoProps = useIoStore((state)=>state["Blog"]["Flex809"]);
const Flex809Cb = useFlex809Cb()
const Flex805Props = useStore((state)=>state["Blog"]["Flex805"]);
const Flex805IoProps = useIoStore((state)=>state["Blog"]["Flex805"]);
const Flex805Cb = useFlex805Cb()
const Flex806Props = useStore((state)=>state["Blog"]["Flex806"]);
const Flex806IoProps = useIoStore((state)=>state["Blog"]["Flex806"]);
const Flex806Cb = useFlex806Cb()
const Flex807Props = useStore((state)=>state["Blog"]["Flex807"]);
const Flex807IoProps = useIoStore((state)=>state["Blog"]["Flex807"]);
const Flex807Cb = useFlex807Cb()
const Flex810Props = useStore((state)=>state["Blog"]["Flex810"]);
const Flex810IoProps = useIoStore((state)=>state["Blog"]["Flex810"]);
const Flex810Cb = useFlex810Cb()
const Flex808Props = useStore((state)=>state["Blog"]["Flex808"]);
const Flex808IoProps = useIoStore((state)=>state["Blog"]["Flex808"]);
const Flex808Cb = useFlex808Cb()
const Flex813Props = useStore((state)=>state["Blog"]["Flex813"]);
const Flex813IoProps = useIoStore((state)=>state["Blog"]["Flex813"]);
const Flex813Cb = useFlex813Cb()
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
const TextBox416Props = useStore((state)=>state["Blog"]["TextBox416"]);
const TextBox416IoProps = useIoStore((state)=>state["Blog"]["TextBox416"]);
const TextBox416Cb = useTextBox416Cb()
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
const TextBox431Props = useStore((state)=>state["Blog"]["TextBox431"]);
const TextBox431IoProps = useIoStore((state)=>state["Blog"]["TextBox431"]);
const TextBox431Cb = useTextBox431Cb()
const TextBox432Props = useStore((state)=>state["Blog"]["TextBox432"]);
const TextBox432IoProps = useIoStore((state)=>state["Blog"]["TextBox432"]);
const TextBox432Cb = useTextBox432Cb()
const Image173Props = useStore((state)=>state["Blog"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["Blog"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image174Props = useStore((state)=>state["Blog"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["Blog"]["Image174"]);
const Image174Cb = useImage174Cb()
const TextBox433Props = useStore((state)=>state["Blog"]["TextBox433"]);
const TextBox433IoProps = useIoStore((state)=>state["Blog"]["TextBox433"]);
const TextBox433Cb = useTextBox433Cb()
const TextBox434Props = useStore((state)=>state["Blog"]["TextBox434"]);
const TextBox434IoProps = useIoStore((state)=>state["Blog"]["TextBox434"]);
const TextBox434Cb = useTextBox434Cb()
const TextBox435Props = useStore((state)=>state["Blog"]["TextBox435"]);
const TextBox435IoProps = useIoStore((state)=>state["Blog"]["TextBox435"]);
const TextBox435Cb = useTextBox435Cb()
const Image175Props = useStore((state)=>state["Blog"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["Blog"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image176Props = useStore((state)=>state["Blog"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["Blog"]["Image176"]);
const Image176Cb = useImage176Cb()
const TextBox436Props = useStore((state)=>state["Blog"]["TextBox436"]);
const TextBox436IoProps = useIoStore((state)=>state["Blog"]["TextBox436"]);
const TextBox436Cb = useTextBox436Cb()
const TextBox437Props = useStore((state)=>state["Blog"]["TextBox437"]);
const TextBox437IoProps = useIoStore((state)=>state["Blog"]["TextBox437"]);
const TextBox437Cb = useTextBox437Cb()
const TextBox438Props = useStore((state)=>state["Blog"]["TextBox438"]);
const TextBox438IoProps = useIoStore((state)=>state["Blog"]["TextBox438"]);
const TextBox438Cb = useTextBox438Cb()
const Image177Props = useStore((state)=>state["Blog"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["Blog"]["Image177"]);
const Image177Cb = useImage177Cb()
const Image234Props = useStore((state)=>state["Blog"]["Image234"]);
const Image234IoProps = useIoStore((state)=>state["Blog"]["Image234"]);
const Image234Cb = useImage234Cb()
const TextBox623Props = useStore((state)=>state["Blog"]["TextBox623"]);
const TextBox623IoProps = useIoStore((state)=>state["Blog"]["TextBox623"]);
const TextBox623Cb = useTextBox623Cb()
const TextBox624Props = useStore((state)=>state["Blog"]["TextBox624"]);
const TextBox624IoProps = useIoStore((state)=>state["Blog"]["TextBox624"]);
const TextBox624Cb = useTextBox624Cb()
const TextBox625Props = useStore((state)=>state["Blog"]["TextBox625"]);
const TextBox625IoProps = useIoStore((state)=>state["Blog"]["TextBox625"]);
const TextBox625Cb = useTextBox625Cb()
const TextBox626Props = useStore((state)=>state["Blog"]["TextBox626"]);
const TextBox626IoProps = useIoStore((state)=>state["Blog"]["TextBox626"]);
const TextBox626Cb = useTextBox626Cb()
const TextBox622Props = useStore((state)=>state["Blog"]["TextBox622"]);
const TextBox622IoProps = useIoStore((state)=>state["Blog"]["TextBox622"]);
const TextBox622Cb = useTextBox622Cb()
const Image233Props = useStore((state)=>state["Blog"]["Image233"]);
const Image233IoProps = useIoStore((state)=>state["Blog"]["Image233"]);
const Image233Cb = useImage233Cb()
const TextBox618Props = useStore((state)=>state["Blog"]["TextBox618"]);
const TextBox618IoProps = useIoStore((state)=>state["Blog"]["TextBox618"]);
const TextBox618Cb = useTextBox618Cb()
const TextBox619Props = useStore((state)=>state["Blog"]["TextBox619"]);
const TextBox619IoProps = useIoStore((state)=>state["Blog"]["TextBox619"]);
const TextBox619Cb = useTextBox619Cb()
const TextBox620Props = useStore((state)=>state["Blog"]["TextBox620"]);
const TextBox620IoProps = useIoStore((state)=>state["Blog"]["TextBox620"]);
const TextBox620Cb = useTextBox620Cb()
const TextBox621Props = useStore((state)=>state["Blog"]["TextBox621"]);
const TextBox621IoProps = useIoStore((state)=>state["Blog"]["TextBox621"]);
const TextBox621Cb = useTextBox621Cb()
const Image232Props = useStore((state)=>state["Blog"]["Image232"]);
const Image232IoProps = useIoStore((state)=>state["Blog"]["Image232"]);
const Image232Cb = useImage232Cb()
const TextBox617Props = useStore((state)=>state["Blog"]["TextBox617"]);
const TextBox617IoProps = useIoStore((state)=>state["Blog"]["TextBox617"]);
const TextBox617Cb = useTextBox617Cb()
const Link227Props = useStore((state)=>state["Blog"]["Link227"]);
const Link227IoProps = useIoStore((state)=>state["Blog"]["Link227"]);
const Link227Cb = useLink227Cb()
const Link228Props = useStore((state)=>state["Blog"]["Link228"]);
const Link228IoProps = useIoStore((state)=>state["Blog"]["Link228"]);
const Link228Cb = useLink228Cb()
const Link229Props = useStore((state)=>state["Blog"]["Link229"]);
const Link229IoProps = useIoStore((state)=>state["Blog"]["Link229"]);
const Link229Cb = useLink229Cb()
const TextBox667Props = useStore((state)=>state["Blog"]["TextBox667"]);
const TextBox667IoProps = useIoStore((state)=>state["Blog"]["TextBox667"]);
const TextBox667Cb = useTextBox667Cb()
const TextBox668Props = useStore((state)=>state["Blog"]["TextBox668"]);
const TextBox668IoProps = useIoStore((state)=>state["Blog"]["TextBox668"]);
const TextBox668Cb = useTextBox668Cb()
const TextBox669Props = useStore((state)=>state["Blog"]["TextBox669"]);
const TextBox669IoProps = useIoStore((state)=>state["Blog"]["TextBox669"]);
const TextBox669Cb = useTextBox669Cb()
const Link230Props = useStore((state)=>state["Blog"]["Link230"]);
const Link230IoProps = useIoStore((state)=>state["Blog"]["Link230"]);
const Link230Cb = useLink230Cb()
const TextBox670Props = useStore((state)=>state["Blog"]["TextBox670"]);
const TextBox670IoProps = useIoStore((state)=>state["Blog"]["TextBox670"]);
const TextBox670Cb = useTextBox670Cb()
const Link231Props = useStore((state)=>state["Blog"]["Link231"]);
const Link231IoProps = useIoStore((state)=>state["Blog"]["Link231"]);
const Link231Cb = useLink231Cb()
const TextBox671Props = useStore((state)=>state["Blog"]["TextBox671"]);
const TextBox671IoProps = useIoStore((state)=>state["Blog"]["TextBox671"]);
const TextBox671Cb = useTextBox671Cb()
const Link232Props = useStore((state)=>state["Blog"]["Link232"]);
const Link232IoProps = useIoStore((state)=>state["Blog"]["Link232"]);
const Link232Cb = useLink232Cb()
const TextBox672Props = useStore((state)=>state["Blog"]["TextBox672"]);
const TextBox672IoProps = useIoStore((state)=>state["Blog"]["TextBox672"]);
const TextBox672Cb = useTextBox672Cb()
const TextBox656Props = useStore((state)=>state["Blog"]["TextBox656"]);
const TextBox656IoProps = useIoStore((state)=>state["Blog"]["TextBox656"]);
const TextBox656Cb = useTextBox656Cb()
const TextBox657Props = useStore((state)=>state["Blog"]["TextBox657"]);
const TextBox657IoProps = useIoStore((state)=>state["Blog"]["TextBox657"]);
const TextBox657Cb = useTextBox657Cb()
const TextBox658Props = useStore((state)=>state["Blog"]["TextBox658"]);
const TextBox658IoProps = useIoStore((state)=>state["Blog"]["TextBox658"]);
const TextBox658Cb = useTextBox658Cb()
const TextBox659Props = useStore((state)=>state["Blog"]["TextBox659"]);
const TextBox659IoProps = useIoStore((state)=>state["Blog"]["TextBox659"]);
const TextBox659Cb = useTextBox659Cb()
const TextBox660Props = useStore((state)=>state["Blog"]["TextBox660"]);
const TextBox660IoProps = useIoStore((state)=>state["Blog"]["TextBox660"]);
const TextBox660Cb = useTextBox660Cb()
const TextBox661Props = useStore((state)=>state["Blog"]["TextBox661"]);
const TextBox661IoProps = useIoStore((state)=>state["Blog"]["TextBox661"]);
const TextBox661Cb = useTextBox661Cb()
const TextBox662Props = useStore((state)=>state["Blog"]["TextBox662"]);
const TextBox662IoProps = useIoStore((state)=>state["Blog"]["TextBox662"]);
const TextBox662Cb = useTextBox662Cb()
const TextBox663Props = useStore((state)=>state["Blog"]["TextBox663"]);
const TextBox663IoProps = useIoStore((state)=>state["Blog"]["TextBox663"]);
const TextBox663Cb = useTextBox663Cb()
const TextBox664Props = useStore((state)=>state["Blog"]["TextBox664"]);
const TextBox664IoProps = useIoStore((state)=>state["Blog"]["TextBox664"]);
const TextBox664Cb = useTextBox664Cb()
const TextBox666Props = useStore((state)=>state["Blog"]["TextBox666"]);
const TextBox666IoProps = useIoStore((state)=>state["Blog"]["TextBox666"]);
const TextBox666Cb = useTextBox666Cb()
const Image241Props = useStore((state)=>state["Blog"]["Image241"]);
const Image241IoProps = useIoStore((state)=>state["Blog"]["Image241"]);
const Image241Cb = useImage241Cb()
const TextBox665Props = useStore((state)=>state["Blog"]["TextBox665"]);
const TextBox665IoProps = useIoStore((state)=>state["Blog"]["TextBox665"]);
const TextBox665Cb = useTextBox665Cb()
const Image240Props = useStore((state)=>state["Blog"]["Image240"]);
const Image240IoProps = useIoStore((state)=>state["Blog"]["Image240"]);
const Image240Cb = useImage240Cb()
const TextBox673Props = useStore((state)=>state["Blog"]["TextBox673"]);
const TextBox673IoProps = useIoStore((state)=>state["Blog"]["TextBox673"]);
const TextBox673Cb = useTextBox673Cb()
const TextBox674Props = useStore((state)=>state["Blog"]["TextBox674"]);
const TextBox674IoProps = useIoStore((state)=>state["Blog"]["TextBox674"]);
const TextBox674Cb = useTextBox674Cb()

  return (<>
  <Flex2 className="p-Blog Flex785 bpt" {...Flex785Props} {...Flex785Cb} {...Flex785IoProps}>
<Flex2 className="p-Blog Flex784 bpt" {...Flex784Props} {...Flex784Cb} {...Flex784IoProps}>
<Image2 className="p-Blog Image234 bpt" {...Image234Props} {...Image234Cb} {...Image234IoProps}/>
<Flex2 className="p-Blog Flex783 bpt" {...Flex783Props} {...Flex783Cb} {...Flex783IoProps}>
<TextBox2 className="p-Blog TextBox626 bpt" {...TextBox626Props} {...TextBox626Cb} {...TextBox626IoProps}/>
<TextBox2 className="p-Blog TextBox623 bpt" {...TextBox623Props} {...TextBox623Cb} {...TextBox623IoProps}/>
<TextBox2 className="p-Blog TextBox624 bpt" {...TextBox624Props} {...TextBox624Cb} {...TextBox624IoProps}/>
<TextBox2 className="p-Blog TextBox625 bpt" {...TextBox625Props} {...TextBox625Cb} {...TextBox625IoProps}/>
<Flex2 className="p-Blog Flex781 bpt" {...Flex781Props} {...Flex781Cb} {...Flex781IoProps}>
<TextBox2 className="p-Blog TextBox622 bpt" {...TextBox622Props} {...TextBox622Cb} {...TextBox622IoProps}/>
<Image2 className="p-Blog Image233 bpt" {...Image233Props} {...Image233Cb} {...Image233IoProps}/>
</Flex2>
</Flex2>
<Menu2 className="p-Blog Menu11 bpt" {...Menu11Props} {...Menu11Cb} {...Menu11IoProps}>
<Flex2 className="p-Blog Flex782 bpt" {...Flex782Props} {...Flex782Cb} {...Flex782IoProps}>
<Flex2 className="p-Blog Flex780 bpt" {...Flex780Props} {...Flex780Cb} {...Flex780IoProps}>
<Flex2 className="p-Blog Flex779 bpt" {...Flex779Props} {...Flex779Cb} {...Flex779IoProps}>
<TextBox2 className="p-Blog TextBox618 bpt" {...TextBox618Props} {...TextBox618Cb} {...TextBox618IoProps}/>
<TextBox2 className="p-Blog TextBox621 bpt" {...TextBox621Props} {...TextBox621Cb} {...TextBox621IoProps}/>
<TextBox2 className="p-Blog TextBox620 bpt" {...TextBox620Props} {...TextBox620Cb} {...TextBox620IoProps}/>
<TextBox2 className="p-Blog TextBox619 bpt" {...TextBox619Props} {...TextBox619Cb} {...TextBox619IoProps}/>
<Flex2 className="p-Blog Flex778 bpt" {...Flex778Props} {...Flex778Cb} {...Flex778IoProps}>
<TextBox2 className="p-Blog TextBox617 bpt" {...TextBox617Props} {...TextBox617Cb} {...TextBox617IoProps}/>
<Image2 className="p-Blog Image232 bpt" {...Image232Props} {...Image232Cb} {...Image232IoProps}/>
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
<TextBox2 className="p-Blog TextBox416 bpt" {...TextBox416Props} {...TextBox416Cb} {...TextBox416IoProps}/>
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
<TextBox2 className="p-Blog TextBox431 bpt" {...TextBox431Props} {...TextBox431Cb} {...TextBox431IoProps}/>
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
<TextBox2 className="p-Blog TextBox434 bpt" {...TextBox434Props} {...TextBox434Cb} {...TextBox434IoProps}/>
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
<TextBox2 className="p-Blog TextBox437 bpt" {...TextBox437Props} {...TextBox437Cb} {...TextBox437IoProps}/>
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
<Flex2 className="p-Blog Flex815 bpt" {...Flex815Props} {...Flex815Cb} {...Flex815IoProps}>
<Flex2 className="p-Blog Flex814 bpt" {...Flex814Props} {...Flex814Cb} {...Flex814IoProps}>
<Flex2 className="p-Blog Flex813 bpt" {...Flex813Props} {...Flex813Cb} {...Flex813IoProps}>
<TextBox2 className="p-Blog TextBox674 bpt" {...TextBox674Props} {...TextBox674Cb} {...TextBox674IoProps}/>
<TextBox2 className="p-Blog TextBox673 bpt" {...TextBox673Props} {...TextBox673Cb} {...TextBox673IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex812 bpt" {...Flex812Props} {...Flex812Cb} {...Flex812IoProps}>
<Flex2 className="p-Blog Flex810 bpt" {...Flex810Props} {...Flex810Cb} {...Flex810IoProps}>
<Image2 className="p-Blog Image241 bpt" {...Image241Props} {...Image241Cb} {...Image241IoProps}/>
<TextBox2 className="p-Blog TextBox666 bpt" {...TextBox666Props} {...TextBox666Cb} {...TextBox666IoProps}/>
<Flex2 className="p-Blog Flex808 bpt" {...Flex808Props} {...Flex808Cb} {...Flex808IoProps}>
<Image2 className="p-Blog Image240 bpt" {...Image240Props} {...Image240Cb} {...Image240IoProps}/>
<TextBox2 className="p-Blog TextBox665 bpt" {...TextBox665Props} {...TextBox665Cb} {...TextBox665IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex809 bpt" {...Flex809Props} {...Flex809Cb} {...Flex809IoProps}>
<Flex2 className="p-Blog Flex805 bpt" {...Flex805Props} {...Flex805Cb} {...Flex805IoProps}>
<TextBox2 className="p-Blog TextBox658 bpt" {...TextBox658Props} {...TextBox658Cb} {...TextBox658IoProps}/>
<TextBox2 className="p-Blog TextBox656 bpt" {...TextBox656Props} {...TextBox656Cb} {...TextBox656IoProps}/>
<TextBox2 className="p-Blog TextBox657 bpt" {...TextBox657Props} {...TextBox657Cb} {...TextBox657IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex807 bpt" {...Flex807Props} {...Flex807Cb} {...Flex807IoProps}>
<TextBox2 className="p-Blog TextBox664 bpt" {...TextBox664Props} {...TextBox664Cb} {...TextBox664IoProps}/>
<TextBox2 className="p-Blog TextBox663 bpt" {...TextBox663Props} {...TextBox663Cb} {...TextBox663IoProps}/>
<TextBox2 className="p-Blog TextBox662 bpt" {...TextBox662Props} {...TextBox662Cb} {...TextBox662IoProps}/>
</Flex2>
<Flex2 className="p-Blog Flex806 bpt" {...Flex806Props} {...Flex806Cb} {...Flex806IoProps}>
<TextBox2 className="p-Blog TextBox661 bpt" {...TextBox661Props} {...TextBox661Cb} {...TextBox661IoProps}/>
<TextBox2 className="p-Blog TextBox660 bpt" {...TextBox660Props} {...TextBox660Cb} {...TextBox660IoProps}/>
<TextBox2 className="p-Blog TextBox659 bpt" {...TextBox659Props} {...TextBox659Cb} {...TextBox659IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Blog Flex811 bpt" {...Flex811Props} {...Flex811Cb} {...Flex811IoProps}>
<TextBox2 className="p-Blog TextBox672 bpt" {...TextBox672Props} {...TextBox672Cb} {...TextBox672IoProps}/>
<Link2 className="p-Blog Link232 bpt" {...Link232Props} {...Link232Cb} {...Link232IoProps}/>
<TextBox2 className="p-Blog TextBox671 bpt" {...TextBox671Props} {...TextBox671Cb} {...TextBox671IoProps}/>
<Link2 className="p-Blog Link231 bpt" {...Link231Props} {...Link231Cb} {...Link231IoProps}/>
<TextBox2 className="p-Blog TextBox670 bpt" {...TextBox670Props} {...TextBox670Cb} {...TextBox670IoProps}/>
<Link2 className="p-Blog Link229 bpt" {...Link229Props} {...Link229Cb} {...Link229IoProps}/>
<TextBox2 className="p-Blog TextBox669 bpt" {...TextBox669Props} {...TextBox669Cb} {...TextBox669IoProps}/>
<Link2 className="p-Blog Link228 bpt" {...Link228Props} {...Link228Cb} {...Link228IoProps}/>
<TextBox2 className="p-Blog TextBox668 bpt" {...TextBox668Props} {...TextBox668Cb} {...TextBox668IoProps}/>
<Link2 className="p-Blog Link230 bpt" {...Link230Props} {...Link230Cb} {...Link230IoProps}/>
<TextBox2 className="p-Blog TextBox667 bpt" {...TextBox667Props} {...TextBox667Cb} {...TextBox667IoProps}/>
<Link2 className="p-Blog Link227 bpt" {...Link227Props} {...Link227Cb} {...Link227IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
