import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex8 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu7 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image as Image8 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox8 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link8 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex1023Cb, useFlex1022Cb, useFlex1021Cb, useFlex1019Cb, useMenu19Cb, useFlex1020Cb, useFlex1018Cb, useFlex1017Cb, useFlex1016Cb, useFlex1025Cb, useFlex1037Cb, useFlex1038Cb, useFlex1040Cb, useFlex1043Cb, useFlex1046Cb, useFlex1047Cb, useFlex1048Cb, useFlex1052Cb, useFlex1049Cb, useFlex1050Cb, useFlex1051Cb, useFlex1036Cb, useFlex1035Cb, useFlex1033Cb, useFlex1034Cb, useFlex1032Cb, useFlex1054Cb, useFlex1065Cb, useFlex1064Cb, useFlex1061Cb, useFlex1062Cb, useFlex1059Cb, useFlex1055Cb, useFlex1056Cb, useFlex1057Cb, useFlex1060Cb, useFlex1058Cb, useFlex1063Cb, useFlex1085Cb, useFlex1084Cb, useFlex1082Cb, useFlex1447Cb, useFlex1442Cb, useFlex1432Cb, useFlex1433Cb, useFlex1443Cb, useFlex1434Cb, useFlex1435Cb, useFlex1444Cb, useFlex1436Cb, useFlex1437Cb, useFlex1445Cb, useFlex1438Cb, useFlex1439Cb, useFlex1446Cb, useFlex1440Cb, useFlex1441Cb, useImage298Cb, useTextBox978Cb, useTextBox979Cb, useTextBox980Cb, useTextBox981Cb, useTextBox977Cb, useImage297Cb, useTextBox973Cb, useTextBox974Cb, useTextBox975Cb, useTextBox976Cb, useImage296Cb, useTextBox972Cb, useTextBox990Cb, useTextBox991Cb, useTextBox995Cb, useTextBox996Cb, useTextBox997Cb, useTextBox998Cb, useTextBox1000Cb, useTextBox1001Cb, useTextBox1002Cb, useTextBox1021Cb, useTextBox999Cb, useTextBox1005Cb, useTextBox1007Cb, useTextBox1008Cb, useTextBox1009Cb, useTextBox1010Cb, useTextBox1011Cb, useTextBox1012Cb, useTextBox1019Cb, useTextBox1014Cb, useTextBox1018Cb, useTextBox1016Cb, useTextBox1017Cb, useImage301Cb, useTextBox989Cb, useTextBox986Cb, useTextBox987Cb, useTextBox988Cb, useImage302Cb, useLink293Cb, useLink294Cb, useLink295Cb, useTextBox1033Cb, useTextBox1034Cb, useTextBox1035Cb, useLink296Cb, useTextBox1036Cb, useLink297Cb, useTextBox1037Cb, useLink298Cb, useTextBox1038Cb, useTextBox1022Cb, useTextBox1023Cb, useTextBox1024Cb, useTextBox1025Cb, useTextBox1026Cb, useTextBox1027Cb, useTextBox1028Cb, useTextBox1029Cb, useTextBox1030Cb, useTextBox1032Cb, useImage304Cb, useTextBox1031Cb, useImage303Cb, useTextBox1039Cb, useTextBox1040Cb, useTextBox1067Cb, useTextBox1068Cb, useTextBox1595Cb, useTextBox1575Cb, useTextBox1576Cb, useTextBox1577Cb, useImage388Cb, useTextBox1578Cb, useTextBox1596Cb, useTextBox1579Cb, useTextBox1580Cb, useTextBox1581Cb, useImage389Cb, useTextBox1582Cb, useTextBox1597Cb, useTextBox1583Cb, useTextBox1584Cb, useTextBox1585Cb, useImage390Cb, useTextBox1586Cb, useTextBox1598Cb, useTextBox1587Cb, useTextBox1588Cb, useTextBox1589Cb, useImage391Cb, useTextBox1590Cb, useTextBox1599Cb, useTextBox1591Cb, useImage392Cb, useTextBox1592Cb, useTextBox1593Cb, useTextBox1594Cb } from "../page-cbs/best-UI-design-tools";
import "../page-css/best-UI-design-tools.css";
import "../custom/best-UI-design-tools";

export default function BestUiDesignTools() {
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

  const Flex1023Props = useStore((state)=>state["best-UI-design-tools"]["Flex1023"]);
const Flex1023IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1023"]);
const Flex1023Cb = useFlex1023Cb()
const Flex1022Props = useStore((state)=>state["best-UI-design-tools"]["Flex1022"]);
const Flex1022IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1022"]);
const Flex1022Cb = useFlex1022Cb()
const Flex1021Props = useStore((state)=>state["best-UI-design-tools"]["Flex1021"]);
const Flex1021IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1021"]);
const Flex1021Cb = useFlex1021Cb()
const Flex1019Props = useStore((state)=>state["best-UI-design-tools"]["Flex1019"]);
const Flex1019IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1019"]);
const Flex1019Cb = useFlex1019Cb()
const Menu19Props = useStore((state)=>state["best-UI-design-tools"]["Menu19"]);
const Menu19IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Menu19"]);
const Menu19Cb = useMenu19Cb()
const Flex1020Props = useStore((state)=>state["best-UI-design-tools"]["Flex1020"]);
const Flex1020IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1020"]);
const Flex1020Cb = useFlex1020Cb()
const Flex1018Props = useStore((state)=>state["best-UI-design-tools"]["Flex1018"]);
const Flex1018IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1018"]);
const Flex1018Cb = useFlex1018Cb()
const Flex1017Props = useStore((state)=>state["best-UI-design-tools"]["Flex1017"]);
const Flex1017IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1017"]);
const Flex1017Cb = useFlex1017Cb()
const Flex1016Props = useStore((state)=>state["best-UI-design-tools"]["Flex1016"]);
const Flex1016IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1016"]);
const Flex1016Cb = useFlex1016Cb()
const Flex1025Props = useStore((state)=>state["best-UI-design-tools"]["Flex1025"]);
const Flex1025IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1025"]);
const Flex1025Cb = useFlex1025Cb()
const Flex1037Props = useStore((state)=>state["best-UI-design-tools"]["Flex1037"]);
const Flex1037IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1037"]);
const Flex1037Cb = useFlex1037Cb()
const Flex1038Props = useStore((state)=>state["best-UI-design-tools"]["Flex1038"]);
const Flex1038IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1038"]);
const Flex1038Cb = useFlex1038Cb()
const Flex1040Props = useStore((state)=>state["best-UI-design-tools"]["Flex1040"]);
const Flex1040IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1040"]);
const Flex1040Cb = useFlex1040Cb()
const Flex1043Props = useStore((state)=>state["best-UI-design-tools"]["Flex1043"]);
const Flex1043IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1043"]);
const Flex1043Cb = useFlex1043Cb()
const Flex1046Props = useStore((state)=>state["best-UI-design-tools"]["Flex1046"]);
const Flex1046IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1046"]);
const Flex1046Cb = useFlex1046Cb()
const Flex1047Props = useStore((state)=>state["best-UI-design-tools"]["Flex1047"]);
const Flex1047IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1047"]);
const Flex1047Cb = useFlex1047Cb()
const Flex1048Props = useStore((state)=>state["best-UI-design-tools"]["Flex1048"]);
const Flex1048IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1048"]);
const Flex1048Cb = useFlex1048Cb()
const Flex1052Props = useStore((state)=>state["best-UI-design-tools"]["Flex1052"]);
const Flex1052IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1052"]);
const Flex1052Cb = useFlex1052Cb()
const Flex1049Props = useStore((state)=>state["best-UI-design-tools"]["Flex1049"]);
const Flex1049IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1049"]);
const Flex1049Cb = useFlex1049Cb()
const Flex1050Props = useStore((state)=>state["best-UI-design-tools"]["Flex1050"]);
const Flex1050IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1050"]);
const Flex1050Cb = useFlex1050Cb()
const Flex1051Props = useStore((state)=>state["best-UI-design-tools"]["Flex1051"]);
const Flex1051IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1051"]);
const Flex1051Cb = useFlex1051Cb()
const Flex1036Props = useStore((state)=>state["best-UI-design-tools"]["Flex1036"]);
const Flex1036IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1036"]);
const Flex1036Cb = useFlex1036Cb()
const Flex1035Props = useStore((state)=>state["best-UI-design-tools"]["Flex1035"]);
const Flex1035IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1035"]);
const Flex1035Cb = useFlex1035Cb()
const Flex1033Props = useStore((state)=>state["best-UI-design-tools"]["Flex1033"]);
const Flex1033IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1033"]);
const Flex1033Cb = useFlex1033Cb()
const Flex1034Props = useStore((state)=>state["best-UI-design-tools"]["Flex1034"]);
const Flex1034IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1034"]);
const Flex1034Cb = useFlex1034Cb()
const Flex1032Props = useStore((state)=>state["best-UI-design-tools"]["Flex1032"]);
const Flex1032IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1032"]);
const Flex1032Cb = useFlex1032Cb()
const Flex1054Props = useStore((state)=>state["best-UI-design-tools"]["Flex1054"]);
const Flex1054IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1054"]);
const Flex1054Cb = useFlex1054Cb()
const Flex1065Props = useStore((state)=>state["best-UI-design-tools"]["Flex1065"]);
const Flex1065IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1065"]);
const Flex1065Cb = useFlex1065Cb()
const Flex1064Props = useStore((state)=>state["best-UI-design-tools"]["Flex1064"]);
const Flex1064IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1064"]);
const Flex1064Cb = useFlex1064Cb()
const Flex1061Props = useStore((state)=>state["best-UI-design-tools"]["Flex1061"]);
const Flex1061IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1061"]);
const Flex1061Cb = useFlex1061Cb()
const Flex1062Props = useStore((state)=>state["best-UI-design-tools"]["Flex1062"]);
const Flex1062IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1062"]);
const Flex1062Cb = useFlex1062Cb()
const Flex1059Props = useStore((state)=>state["best-UI-design-tools"]["Flex1059"]);
const Flex1059IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1059"]);
const Flex1059Cb = useFlex1059Cb()
const Flex1055Props = useStore((state)=>state["best-UI-design-tools"]["Flex1055"]);
const Flex1055IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1055"]);
const Flex1055Cb = useFlex1055Cb()
const Flex1056Props = useStore((state)=>state["best-UI-design-tools"]["Flex1056"]);
const Flex1056IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1056"]);
const Flex1056Cb = useFlex1056Cb()
const Flex1057Props = useStore((state)=>state["best-UI-design-tools"]["Flex1057"]);
const Flex1057IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1057"]);
const Flex1057Cb = useFlex1057Cb()
const Flex1060Props = useStore((state)=>state["best-UI-design-tools"]["Flex1060"]);
const Flex1060IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1060"]);
const Flex1060Cb = useFlex1060Cb()
const Flex1058Props = useStore((state)=>state["best-UI-design-tools"]["Flex1058"]);
const Flex1058IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1058"]);
const Flex1058Cb = useFlex1058Cb()
const Flex1063Props = useStore((state)=>state["best-UI-design-tools"]["Flex1063"]);
const Flex1063IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1063"]);
const Flex1063Cb = useFlex1063Cb()
const Flex1085Props = useStore((state)=>state["best-UI-design-tools"]["Flex1085"]);
const Flex1085IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1085"]);
const Flex1085Cb = useFlex1085Cb()
const Flex1084Props = useStore((state)=>state["best-UI-design-tools"]["Flex1084"]);
const Flex1084IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1084"]);
const Flex1084Cb = useFlex1084Cb()
const Flex1082Props = useStore((state)=>state["best-UI-design-tools"]["Flex1082"]);
const Flex1082IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1082"]);
const Flex1082Cb = useFlex1082Cb()
const Flex1447Props = useStore((state)=>state["best-UI-design-tools"]["Flex1447"]);
const Flex1447IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1447"]);
const Flex1447Cb = useFlex1447Cb()
const Flex1442Props = useStore((state)=>state["best-UI-design-tools"]["Flex1442"]);
const Flex1442IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1442"]);
const Flex1442Cb = useFlex1442Cb()
const Flex1432Props = useStore((state)=>state["best-UI-design-tools"]["Flex1432"]);
const Flex1432IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1432"]);
const Flex1432Cb = useFlex1432Cb()
const Flex1433Props = useStore((state)=>state["best-UI-design-tools"]["Flex1433"]);
const Flex1433IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1433"]);
const Flex1433Cb = useFlex1433Cb()
const Flex1443Props = useStore((state)=>state["best-UI-design-tools"]["Flex1443"]);
const Flex1443IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1443"]);
const Flex1443Cb = useFlex1443Cb()
const Flex1434Props = useStore((state)=>state["best-UI-design-tools"]["Flex1434"]);
const Flex1434IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1434"]);
const Flex1434Cb = useFlex1434Cb()
const Flex1435Props = useStore((state)=>state["best-UI-design-tools"]["Flex1435"]);
const Flex1435IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1435"]);
const Flex1435Cb = useFlex1435Cb()
const Flex1444Props = useStore((state)=>state["best-UI-design-tools"]["Flex1444"]);
const Flex1444IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1444"]);
const Flex1444Cb = useFlex1444Cb()
const Flex1436Props = useStore((state)=>state["best-UI-design-tools"]["Flex1436"]);
const Flex1436IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1436"]);
const Flex1436Cb = useFlex1436Cb()
const Flex1437Props = useStore((state)=>state["best-UI-design-tools"]["Flex1437"]);
const Flex1437IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1437"]);
const Flex1437Cb = useFlex1437Cb()
const Flex1445Props = useStore((state)=>state["best-UI-design-tools"]["Flex1445"]);
const Flex1445IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1445"]);
const Flex1445Cb = useFlex1445Cb()
const Flex1438Props = useStore((state)=>state["best-UI-design-tools"]["Flex1438"]);
const Flex1438IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1438"]);
const Flex1438Cb = useFlex1438Cb()
const Flex1439Props = useStore((state)=>state["best-UI-design-tools"]["Flex1439"]);
const Flex1439IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1439"]);
const Flex1439Cb = useFlex1439Cb()
const Flex1446Props = useStore((state)=>state["best-UI-design-tools"]["Flex1446"]);
const Flex1446IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1446"]);
const Flex1446Cb = useFlex1446Cb()
const Flex1440Props = useStore((state)=>state["best-UI-design-tools"]["Flex1440"]);
const Flex1440IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1440"]);
const Flex1440Cb = useFlex1440Cb()
const Flex1441Props = useStore((state)=>state["best-UI-design-tools"]["Flex1441"]);
const Flex1441IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Flex1441"]);
const Flex1441Cb = useFlex1441Cb()
const Image298Props = useStore((state)=>state["best-UI-design-tools"]["Image298"]);
const Image298IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image298"]);
const Image298Cb = useImage298Cb()
const TextBox978Props = useStore((state)=>state["best-UI-design-tools"]["TextBox978"]);
const TextBox978IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox978"]);
const TextBox978Cb = useTextBox978Cb()
const TextBox979Props = useStore((state)=>state["best-UI-design-tools"]["TextBox979"]);
const TextBox979IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox979"]);
const TextBox979Cb = useTextBox979Cb()
const TextBox980Props = useStore((state)=>state["best-UI-design-tools"]["TextBox980"]);
const TextBox980IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox980"]);
const TextBox980Cb = useTextBox980Cb()
const TextBox981Props = useStore((state)=>state["best-UI-design-tools"]["TextBox981"]);
const TextBox981IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox981"]);
const TextBox981Cb = useTextBox981Cb()
const TextBox977Props = useStore((state)=>state["best-UI-design-tools"]["TextBox977"]);
const TextBox977IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox977"]);
const TextBox977Cb = useTextBox977Cb()
const Image297Props = useStore((state)=>state["best-UI-design-tools"]["Image297"]);
const Image297IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image297"]);
const Image297Cb = useImage297Cb()
const TextBox973Props = useStore((state)=>state["best-UI-design-tools"]["TextBox973"]);
const TextBox973IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox973"]);
const TextBox973Cb = useTextBox973Cb()
const TextBox974Props = useStore((state)=>state["best-UI-design-tools"]["TextBox974"]);
const TextBox974IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox974"]);
const TextBox974Cb = useTextBox974Cb()
const TextBox975Props = useStore((state)=>state["best-UI-design-tools"]["TextBox975"]);
const TextBox975IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox975"]);
const TextBox975Cb = useTextBox975Cb()
const TextBox976Props = useStore((state)=>state["best-UI-design-tools"]["TextBox976"]);
const TextBox976IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox976"]);
const TextBox976Cb = useTextBox976Cb()
const Image296Props = useStore((state)=>state["best-UI-design-tools"]["Image296"]);
const Image296IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image296"]);
const Image296Cb = useImage296Cb()
const TextBox972Props = useStore((state)=>state["best-UI-design-tools"]["TextBox972"]);
const TextBox972IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox972"]);
const TextBox972Cb = useTextBox972Cb()
const TextBox990Props = useStore((state)=>state["best-UI-design-tools"]["TextBox990"]);
const TextBox990IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox990"]);
const TextBox990Cb = useTextBox990Cb()
const TextBox991Props = useStore((state)=>state["best-UI-design-tools"]["TextBox991"]);
const TextBox991IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox991"]);
const TextBox991Cb = useTextBox991Cb()
const TextBox995Props = useStore((state)=>state["best-UI-design-tools"]["TextBox995"]);
const TextBox995IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox995"]);
const TextBox995Cb = useTextBox995Cb()
const TextBox996Props = useStore((state)=>state["best-UI-design-tools"]["TextBox996"]);
const TextBox996IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox996"]);
const TextBox996Cb = useTextBox996Cb()
const TextBox997Props = useStore((state)=>state["best-UI-design-tools"]["TextBox997"]);
const TextBox997IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox997"]);
const TextBox997Cb = useTextBox997Cb()
const TextBox998Props = useStore((state)=>state["best-UI-design-tools"]["TextBox998"]);
const TextBox998IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox998"]);
const TextBox998Cb = useTextBox998Cb()
const TextBox1000Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1000"]);
const TextBox1000IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1000"]);
const TextBox1000Cb = useTextBox1000Cb()
const TextBox1001Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1001"]);
const TextBox1001IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1001"]);
const TextBox1001Cb = useTextBox1001Cb()
const TextBox1002Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1002"]);
const TextBox1002IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1002"]);
const TextBox1002Cb = useTextBox1002Cb()
const TextBox1021Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1021"]);
const TextBox1021IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1021"]);
const TextBox1021Cb = useTextBox1021Cb()
const TextBox999Props = useStore((state)=>state["best-UI-design-tools"]["TextBox999"]);
const TextBox999IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox999"]);
const TextBox999Cb = useTextBox999Cb()
const TextBox1005Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1005"]);
const TextBox1005IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1005"]);
const TextBox1005Cb = useTextBox1005Cb()
const TextBox1007Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1007"]);
const TextBox1007IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1007"]);
const TextBox1007Cb = useTextBox1007Cb()
const TextBox1008Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1008"]);
const TextBox1008IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1008"]);
const TextBox1008Cb = useTextBox1008Cb()
const TextBox1009Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1009"]);
const TextBox1009IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1009"]);
const TextBox1009Cb = useTextBox1009Cb()
const TextBox1010Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1010"]);
const TextBox1010IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1010"]);
const TextBox1010Cb = useTextBox1010Cb()
const TextBox1011Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1011"]);
const TextBox1011IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1011"]);
const TextBox1011Cb = useTextBox1011Cb()
const TextBox1012Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1012"]);
const TextBox1012IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1012"]);
const TextBox1012Cb = useTextBox1012Cb()
const TextBox1019Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1019"]);
const TextBox1019IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1019"]);
const TextBox1019Cb = useTextBox1019Cb()
const TextBox1014Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1014"]);
const TextBox1014IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1014"]);
const TextBox1014Cb = useTextBox1014Cb()
const TextBox1018Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1018"]);
const TextBox1018IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1018"]);
const TextBox1018Cb = useTextBox1018Cb()
const TextBox1016Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1016"]);
const TextBox1016IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1016"]);
const TextBox1016Cb = useTextBox1016Cb()
const TextBox1017Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1017"]);
const TextBox1017IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1017"]);
const TextBox1017Cb = useTextBox1017Cb()
const Image301Props = useStore((state)=>state["best-UI-design-tools"]["Image301"]);
const Image301IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image301"]);
const Image301Cb = useImage301Cb()
const TextBox989Props = useStore((state)=>state["best-UI-design-tools"]["TextBox989"]);
const TextBox989IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox989"]);
const TextBox989Cb = useTextBox989Cb()
const TextBox986Props = useStore((state)=>state["best-UI-design-tools"]["TextBox986"]);
const TextBox986IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox986"]);
const TextBox986Cb = useTextBox986Cb()
const TextBox987Props = useStore((state)=>state["best-UI-design-tools"]["TextBox987"]);
const TextBox987IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox987"]);
const TextBox987Cb = useTextBox987Cb()
const TextBox988Props = useStore((state)=>state["best-UI-design-tools"]["TextBox988"]);
const TextBox988IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox988"]);
const TextBox988Cb = useTextBox988Cb()
const Image302Props = useStore((state)=>state["best-UI-design-tools"]["Image302"]);
const Image302IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image302"]);
const Image302Cb = useImage302Cb()
const Link293Props = useStore((state)=>state["best-UI-design-tools"]["Link293"]);
const Link293IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Link293"]);
const Link293Cb = useLink293Cb()
const Link294Props = useStore((state)=>state["best-UI-design-tools"]["Link294"]);
const Link294IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Link294"]);
const Link294Cb = useLink294Cb()
const Link295Props = useStore((state)=>state["best-UI-design-tools"]["Link295"]);
const Link295IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Link295"]);
const Link295Cb = useLink295Cb()
const TextBox1033Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1033"]);
const TextBox1033IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1033"]);
const TextBox1033Cb = useTextBox1033Cb()
const TextBox1034Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1034"]);
const TextBox1034IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1034"]);
const TextBox1034Cb = useTextBox1034Cb()
const TextBox1035Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1035"]);
const TextBox1035IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1035"]);
const TextBox1035Cb = useTextBox1035Cb()
const Link296Props = useStore((state)=>state["best-UI-design-tools"]["Link296"]);
const Link296IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Link296"]);
const Link296Cb = useLink296Cb()
const TextBox1036Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1036"]);
const TextBox1036IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1036"]);
const TextBox1036Cb = useTextBox1036Cb()
const Link297Props = useStore((state)=>state["best-UI-design-tools"]["Link297"]);
const Link297IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Link297"]);
const Link297Cb = useLink297Cb()
const TextBox1037Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1037"]);
const TextBox1037IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1037"]);
const TextBox1037Cb = useTextBox1037Cb()
const Link298Props = useStore((state)=>state["best-UI-design-tools"]["Link298"]);
const Link298IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Link298"]);
const Link298Cb = useLink298Cb()
const TextBox1038Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1038"]);
const TextBox1038IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1038"]);
const TextBox1038Cb = useTextBox1038Cb()
const TextBox1022Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1022"]);
const TextBox1022IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1022"]);
const TextBox1022Cb = useTextBox1022Cb()
const TextBox1023Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1023"]);
const TextBox1023IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1023"]);
const TextBox1023Cb = useTextBox1023Cb()
const TextBox1024Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1024"]);
const TextBox1024IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1024"]);
const TextBox1024Cb = useTextBox1024Cb()
const TextBox1025Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1025"]);
const TextBox1025IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1025"]);
const TextBox1025Cb = useTextBox1025Cb()
const TextBox1026Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1026"]);
const TextBox1026IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1026"]);
const TextBox1026Cb = useTextBox1026Cb()
const TextBox1027Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1027"]);
const TextBox1027IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1027"]);
const TextBox1027Cb = useTextBox1027Cb()
const TextBox1028Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1028"]);
const TextBox1028IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1028"]);
const TextBox1028Cb = useTextBox1028Cb()
const TextBox1029Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1029"]);
const TextBox1029IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1029"]);
const TextBox1029Cb = useTextBox1029Cb()
const TextBox1030Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1030"]);
const TextBox1030IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1030"]);
const TextBox1030Cb = useTextBox1030Cb()
const TextBox1032Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1032"]);
const TextBox1032IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1032"]);
const TextBox1032Cb = useTextBox1032Cb()
const Image304Props = useStore((state)=>state["best-UI-design-tools"]["Image304"]);
const Image304IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image304"]);
const Image304Cb = useImage304Cb()
const TextBox1031Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1031"]);
const TextBox1031IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1031"]);
const TextBox1031Cb = useTextBox1031Cb()
const Image303Props = useStore((state)=>state["best-UI-design-tools"]["Image303"]);
const Image303IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image303"]);
const Image303Cb = useImage303Cb()
const TextBox1039Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1039"]);
const TextBox1039IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1039"]);
const TextBox1039Cb = useTextBox1039Cb()
const TextBox1040Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1040"]);
const TextBox1040IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1040"]);
const TextBox1040Cb = useTextBox1040Cb()
const TextBox1067Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1067"]);
const TextBox1067IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1067"]);
const TextBox1067Cb = useTextBox1067Cb()
const TextBox1068Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1068"]);
const TextBox1068IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1068"]);
const TextBox1068Cb = useTextBox1068Cb()
const TextBox1595Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1595"]);
const TextBox1595IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1595"]);
const TextBox1595Cb = useTextBox1595Cb()
const TextBox1575Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1575"]);
const TextBox1575IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1575"]);
const TextBox1575Cb = useTextBox1575Cb()
const TextBox1576Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1576"]);
const TextBox1576IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1576"]);
const TextBox1576Cb = useTextBox1576Cb()
const TextBox1577Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1577"]);
const TextBox1577IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1577"]);
const TextBox1577Cb = useTextBox1577Cb()
const Image388Props = useStore((state)=>state["best-UI-design-tools"]["Image388"]);
const Image388IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image388"]);
const Image388Cb = useImage388Cb()
const TextBox1578Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1578"]);
const TextBox1578IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1578"]);
const TextBox1578Cb = useTextBox1578Cb()
const TextBox1596Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1596"]);
const TextBox1596IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1596"]);
const TextBox1596Cb = useTextBox1596Cb()
const TextBox1579Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1579"]);
const TextBox1579IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1579"]);
const TextBox1579Cb = useTextBox1579Cb()
const TextBox1580Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1580"]);
const TextBox1580IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1580"]);
const TextBox1580Cb = useTextBox1580Cb()
const TextBox1581Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1581"]);
const TextBox1581IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1581"]);
const TextBox1581Cb = useTextBox1581Cb()
const Image389Props = useStore((state)=>state["best-UI-design-tools"]["Image389"]);
const Image389IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image389"]);
const Image389Cb = useImage389Cb()
const TextBox1582Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1582"]);
const TextBox1582IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1582"]);
const TextBox1582Cb = useTextBox1582Cb()
const TextBox1597Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1597"]);
const TextBox1597IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1597"]);
const TextBox1597Cb = useTextBox1597Cb()
const TextBox1583Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1583"]);
const TextBox1583IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1583"]);
const TextBox1583Cb = useTextBox1583Cb()
const TextBox1584Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1584"]);
const TextBox1584IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1584"]);
const TextBox1584Cb = useTextBox1584Cb()
const TextBox1585Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1585"]);
const TextBox1585IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1585"]);
const TextBox1585Cb = useTextBox1585Cb()
const Image390Props = useStore((state)=>state["best-UI-design-tools"]["Image390"]);
const Image390IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image390"]);
const Image390Cb = useImage390Cb()
const TextBox1586Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1586"]);
const TextBox1586IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1586"]);
const TextBox1586Cb = useTextBox1586Cb()
const TextBox1598Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1598"]);
const TextBox1598IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1598"]);
const TextBox1598Cb = useTextBox1598Cb()
const TextBox1587Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1587"]);
const TextBox1587IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1587"]);
const TextBox1587Cb = useTextBox1587Cb()
const TextBox1588Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1588"]);
const TextBox1588IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1588"]);
const TextBox1588Cb = useTextBox1588Cb()
const TextBox1589Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1589"]);
const TextBox1589IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1589"]);
const TextBox1589Cb = useTextBox1589Cb()
const Image391Props = useStore((state)=>state["best-UI-design-tools"]["Image391"]);
const Image391IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image391"]);
const Image391Cb = useImage391Cb()
const TextBox1590Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1590"]);
const TextBox1590IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1590"]);
const TextBox1590Cb = useTextBox1590Cb()
const TextBox1599Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1599"]);
const TextBox1599IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1599"]);
const TextBox1599Cb = useTextBox1599Cb()
const TextBox1591Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1591"]);
const TextBox1591IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1591"]);
const TextBox1591Cb = useTextBox1591Cb()
const Image392Props = useStore((state)=>state["best-UI-design-tools"]["Image392"]);
const Image392IoProps = useIoStore((state)=>state["best-UI-design-tools"]["Image392"]);
const Image392Cb = useImage392Cb()
const TextBox1592Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1592"]);
const TextBox1592IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1592"]);
const TextBox1592Cb = useTextBox1592Cb()
const TextBox1593Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1593"]);
const TextBox1593IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1593"]);
const TextBox1593Cb = useTextBox1593Cb()
const TextBox1594Props = useStore((state)=>state["best-UI-design-tools"]["TextBox1594"]);
const TextBox1594IoProps = useIoStore((state)=>state["best-UI-design-tools"]["TextBox1594"]);
const TextBox1594Cb = useTextBox1594Cb()

  return (<>
  <Flex8 className="p-best-UI-design-tools Flex1023 bpt" {...Flex1023Props} {...Flex1023Cb} {...Flex1023IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1022 bpt" {...Flex1022Props} {...Flex1022Cb} {...Flex1022IoProps}>
<Image8 className="p-best-UI-design-tools Image298 bpt" {...Image298Props} {...Image298Cb} {...Image298IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1021 bpt" {...Flex1021Props} {...Flex1021Cb} {...Flex1021IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox981 bpt" {...TextBox981Props} {...TextBox981Cb} {...TextBox981IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox978 bpt" {...TextBox978Props} {...TextBox978Cb} {...TextBox978IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox979 bpt" {...TextBox979Props} {...TextBox979Cb} {...TextBox979IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox980 bpt" {...TextBox980Props} {...TextBox980Cb} {...TextBox980IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1019 bpt" {...Flex1019Props} {...Flex1019Cb} {...Flex1019IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox977 bpt" {...TextBox977Props} {...TextBox977Cb} {...TextBox977IoProps}/>
<Image8 className="p-best-UI-design-tools Image297 bpt" {...Image297Props} {...Image297Cb} {...Image297IoProps}/>
</Flex8>
</Flex8>
<Menu7 className="p-best-UI-design-tools Menu19 bpt" {...Menu19Props} {...Menu19Cb} {...Menu19IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1020 bpt" {...Flex1020Props} {...Flex1020Cb} {...Flex1020IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1018 bpt" {...Flex1018Props} {...Flex1018Cb} {...Flex1018IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1017 bpt" {...Flex1017Props} {...Flex1017Cb} {...Flex1017IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox973 bpt" {...TextBox973Props} {...TextBox973Cb} {...TextBox973IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox976 bpt" {...TextBox976Props} {...TextBox976Cb} {...TextBox976IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox975 bpt" {...TextBox975Props} {...TextBox975Cb} {...TextBox975IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox974 bpt" {...TextBox974Props} {...TextBox974Cb} {...TextBox974IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1016 bpt" {...Flex1016Props} {...Flex1016Cb} {...Flex1016IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox972 bpt" {...TextBox972Props} {...TextBox972Cb} {...TextBox972IoProps}/>
<Image8 className="p-best-UI-design-tools Image296 bpt" {...Image296Props} {...Image296Cb} {...Image296IoProps}/>
</Flex8>
</Flex8>
</Flex8>
</Flex8>
</Menu7>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1036 bpt" {...Flex1036Props} {...Flex1036Cb} {...Flex1036IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1035 bpt" {...Flex1035Props} {...Flex1035Cb} {...Flex1035IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1034 bpt" {...Flex1034Props} {...Flex1034Cb} {...Flex1034IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1032 bpt" {...Flex1032Props} {...Flex1032Cb} {...Flex1032IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox988 bpt" {...TextBox988Props} {...TextBox988Cb} {...TextBox988IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox987 bpt" {...TextBox987Props} {...TextBox987Cb} {...TextBox987IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox986 bpt" {...TextBox986Props} {...TextBox986Cb} {...TextBox986IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox989 bpt" {...TextBox989Props} {...TextBox989Cb} {...TextBox989IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1054 bpt" {...Flex1054Props} {...Flex1054Cb} {...Flex1054IoProps}>
<Image8 className="p-best-UI-design-tools Image302 bpt" {...Image302Props} {...Image302Cb} {...Image302IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1033 bpt" {...Flex1033Props} {...Flex1033Cb} {...Flex1033IoProps}>
<Image8 className="p-best-UI-design-tools Image301 bpt" {...Image301Props} {...Image301Cb} {...Image301IoProps}/>
</Flex8>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1025 bpt" {...Flex1025Props} {...Flex1025Cb} {...Flex1025IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1037 bpt" {...Flex1037Props} {...Flex1037Cb} {...Flex1037IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1038 bpt" {...Flex1038Props} {...Flex1038Cb} {...Flex1038IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox991 bpt" {...TextBox991Props} {...TextBox991Cb} {...TextBox991IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox990 bpt" {...TextBox990Props} {...TextBox990Cb} {...TextBox990IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox995 bpt" {...TextBox995Props} {...TextBox995Cb} {...TextBox995IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1040 bpt" {...Flex1040Props} {...Flex1040Cb} {...Flex1040IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox999 bpt" {...TextBox999Props} {...TextBox999Cb} {...TextBox999IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox1000 bpt" {...TextBox1000Props} {...TextBox1000Cb} {...TextBox1000IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1001 bpt" {...TextBox1001Props} {...TextBox1001Cb} {...TextBox1001IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1052 bpt" {...Flex1052Props} {...Flex1052Cb} {...Flex1052IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1051 bpt" {...Flex1051Props} {...Flex1051Cb} {...Flex1051IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1016 bpt" {...TextBox1016Props} {...TextBox1016Cb} {...TextBox1016IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1017 bpt" {...TextBox1017Props} {...TextBox1017Cb} {...TextBox1017IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1050 bpt" {...Flex1050Props} {...Flex1050Cb} {...Flex1050IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1018 bpt" {...TextBox1018Props} {...TextBox1018Cb} {...TextBox1018IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1014 bpt" {...TextBox1014Props} {...TextBox1014Cb} {...TextBox1014IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1049 bpt" {...Flex1049Props} {...Flex1049Cb} {...Flex1049IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1019 bpt" {...TextBox1019Props} {...TextBox1019Cb} {...TextBox1019IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1012 bpt" {...TextBox1012Props} {...TextBox1012Cb} {...TextBox1012IoProps}/>
</Flex8>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox996 bpt" {...TextBox996Props} {...TextBox996Cb} {...TextBox996IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1002 bpt" {...TextBox1002Props} {...TextBox1002Cb} {...TextBox1002IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1043 bpt" {...Flex1043Props} {...Flex1043Cb} {...Flex1043IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1046 bpt" {...Flex1046Props} {...Flex1046Cb} {...Flex1046IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1007 bpt" {...TextBox1007Props} {...TextBox1007Cb} {...TextBox1007IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1005 bpt" {...TextBox1005Props} {...TextBox1005Cb} {...TextBox1005IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1047 bpt" {...Flex1047Props} {...Flex1047Cb} {...Flex1047IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1008 bpt" {...TextBox1008Props} {...TextBox1008Cb} {...TextBox1008IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1009 bpt" {...TextBox1009Props} {...TextBox1009Cb} {...TextBox1009IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1048 bpt" {...Flex1048Props} {...Flex1048Cb} {...Flex1048IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1010 bpt" {...TextBox1010Props} {...TextBox1010Cb} {...TextBox1010IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1011 bpt" {...TextBox1011Props} {...TextBox1011Cb} {...TextBox1011IoProps}/>
</Flex8>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox997 bpt" {...TextBox997Props} {...TextBox997Cb} {...TextBox997IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1021 bpt" {...TextBox1021Props} {...TextBox1021Cb} {...TextBox1021IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox998 bpt" {...TextBox998Props} {...TextBox998Cb} {...TextBox998IoProps}/>
</Flex8>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1085 bpt" {...Flex1085Props} {...Flex1085Cb} {...Flex1085IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1084 bpt" {...Flex1084Props} {...Flex1084Cb} {...Flex1084IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1082 bpt" {...Flex1082Props} {...Flex1082Cb} {...Flex1082IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1067 bpt" {...TextBox1067Props} {...TextBox1067Cb} {...TextBox1067IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1068 bpt" {...TextBox1068Props} {...TextBox1068Cb} {...TextBox1068IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1447 bpt" {...Flex1447Props} {...Flex1447Cb} {...Flex1447IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1446 bpt" {...Flex1446Props} {...Flex1446Cb} {...Flex1446IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1441 bpt" {...Flex1441Props} {...Flex1441Cb} {...Flex1441IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1594 bpt" {...TextBox1594Props} {...TextBox1594Cb} {...TextBox1594IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1593 bpt" {...TextBox1593Props} {...TextBox1593Cb} {...TextBox1593IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1592 bpt" {...TextBox1592Props} {...TextBox1592Cb} {...TextBox1592IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox1599 bpt" {...TextBox1599Props} {...TextBox1599Cb} {...TextBox1599IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1440 bpt" {...Flex1440Props} {...Flex1440Cb} {...Flex1440IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1591 bpt" {...TextBox1591Props} {...TextBox1591Cb} {...TextBox1591IoProps}/>
<Image8 className="p-best-UI-design-tools Image392 bpt" {...Image392Props} {...Image392Cb} {...Image392IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1445 bpt" {...Flex1445Props} {...Flex1445Cb} {...Flex1445IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1438 bpt" {...Flex1438Props} {...Flex1438Cb} {...Flex1438IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1587 bpt" {...TextBox1587Props} {...TextBox1587Cb} {...TextBox1587IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1588 bpt" {...TextBox1588Props} {...TextBox1588Cb} {...TextBox1588IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1589 bpt" {...TextBox1589Props} {...TextBox1589Cb} {...TextBox1589IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox1598 bpt" {...TextBox1598Props} {...TextBox1598Cb} {...TextBox1598IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1439 bpt" {...Flex1439Props} {...Flex1439Cb} {...Flex1439IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1590 bpt" {...TextBox1590Props} {...TextBox1590Cb} {...TextBox1590IoProps}/>
<Image8 className="p-best-UI-design-tools Image391 bpt" {...Image391Props} {...Image391Cb} {...Image391IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1444 bpt" {...Flex1444Props} {...Flex1444Cb} {...Flex1444IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1436 bpt" {...Flex1436Props} {...Flex1436Cb} {...Flex1436IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1583 bpt" {...TextBox1583Props} {...TextBox1583Cb} {...TextBox1583IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1584 bpt" {...TextBox1584Props} {...TextBox1584Cb} {...TextBox1584IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1585 bpt" {...TextBox1585Props} {...TextBox1585Cb} {...TextBox1585IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox1597 bpt" {...TextBox1597Props} {...TextBox1597Cb} {...TextBox1597IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1437 bpt" {...Flex1437Props} {...Flex1437Cb} {...Flex1437IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1586 bpt" {...TextBox1586Props} {...TextBox1586Cb} {...TextBox1586IoProps}/>
<Image8 className="p-best-UI-design-tools Image390 bpt" {...Image390Props} {...Image390Cb} {...Image390IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1443 bpt" {...Flex1443Props} {...Flex1443Cb} {...Flex1443IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1434 bpt" {...Flex1434Props} {...Flex1434Cb} {...Flex1434IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1579 bpt" {...TextBox1579Props} {...TextBox1579Cb} {...TextBox1579IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1580 bpt" {...TextBox1580Props} {...TextBox1580Cb} {...TextBox1580IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1581 bpt" {...TextBox1581Props} {...TextBox1581Cb} {...TextBox1581IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox1596 bpt" {...TextBox1596Props} {...TextBox1596Cb} {...TextBox1596IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1435 bpt" {...Flex1435Props} {...Flex1435Cb} {...Flex1435IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1582 bpt" {...TextBox1582Props} {...TextBox1582Cb} {...TextBox1582IoProps}/>
<Image8 className="p-best-UI-design-tools Image389 bpt" {...Image389Props} {...Image389Cb} {...Image389IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1442 bpt" {...Flex1442Props} {...Flex1442Cb} {...Flex1442IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1432 bpt" {...Flex1432Props} {...Flex1432Cb} {...Flex1432IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1575 bpt" {...TextBox1575Props} {...TextBox1575Cb} {...TextBox1575IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1576 bpt" {...TextBox1576Props} {...TextBox1576Cb} {...TextBox1576IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1577 bpt" {...TextBox1577Props} {...TextBox1577Cb} {...TextBox1577IoProps}/>
</Flex8>
<TextBox8 className="p-best-UI-design-tools TextBox1595 bpt" {...TextBox1595Props} {...TextBox1595Cb} {...TextBox1595IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1433 bpt" {...Flex1433Props} {...Flex1433Cb} {...Flex1433IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1578 bpt" {...TextBox1578Props} {...TextBox1578Cb} {...TextBox1578IoProps}/>
<Image8 className="p-best-UI-design-tools Image388 bpt" {...Image388Props} {...Image388Cb} {...Image388IoProps}/>
</Flex8>
</Flex8>
</Flex8>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1065 bpt" {...Flex1065Props} {...Flex1065Cb} {...Flex1065IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1064 bpt" {...Flex1064Props} {...Flex1064Cb} {...Flex1064IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1063 bpt" {...Flex1063Props} {...Flex1063Cb} {...Flex1063IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1040 bpt" {...TextBox1040Props} {...TextBox1040Cb} {...TextBox1040IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1039 bpt" {...TextBox1039Props} {...TextBox1039Cb} {...TextBox1039IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1062 bpt" {...Flex1062Props} {...Flex1062Cb} {...Flex1062IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1060 bpt" {...Flex1060Props} {...Flex1060Cb} {...Flex1060IoProps}>
<Image8 className="p-best-UI-design-tools Image304 bpt" {...Image304Props} {...Image304Cb} {...Image304IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1032 bpt" {...TextBox1032Props} {...TextBox1032Cb} {...TextBox1032IoProps}/>
<Flex8 className="p-best-UI-design-tools Flex1058 bpt" {...Flex1058Props} {...Flex1058Cb} {...Flex1058IoProps}>
<Image8 className="p-best-UI-design-tools Image303 bpt" {...Image303Props} {...Image303Cb} {...Image303IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1031 bpt" {...TextBox1031Props} {...TextBox1031Cb} {...TextBox1031IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1059 bpt" {...Flex1059Props} {...Flex1059Cb} {...Flex1059IoProps}>
<Flex8 className="p-best-UI-design-tools Flex1055 bpt" {...Flex1055Props} {...Flex1055Cb} {...Flex1055IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1024 bpt" {...TextBox1024Props} {...TextBox1024Cb} {...TextBox1024IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1022 bpt" {...TextBox1022Props} {...TextBox1022Cb} {...TextBox1022IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1023 bpt" {...TextBox1023Props} {...TextBox1023Cb} {...TextBox1023IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1057 bpt" {...Flex1057Props} {...Flex1057Cb} {...Flex1057IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1030 bpt" {...TextBox1030Props} {...TextBox1030Cb} {...TextBox1030IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1029 bpt" {...TextBox1029Props} {...TextBox1029Cb} {...TextBox1029IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1028 bpt" {...TextBox1028Props} {...TextBox1028Cb} {...TextBox1028IoProps}/>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1056 bpt" {...Flex1056Props} {...Flex1056Cb} {...Flex1056IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1027 bpt" {...TextBox1027Props} {...TextBox1027Cb} {...TextBox1027IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1026 bpt" {...TextBox1026Props} {...TextBox1026Cb} {...TextBox1026IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1025 bpt" {...TextBox1025Props} {...TextBox1025Cb} {...TextBox1025IoProps}/>
</Flex8>
</Flex8>
</Flex8>
<Flex8 className="p-best-UI-design-tools Flex1061 bpt" {...Flex1061Props} {...Flex1061Cb} {...Flex1061IoProps}>
<TextBox8 className="p-best-UI-design-tools TextBox1038 bpt" {...TextBox1038Props} {...TextBox1038Cb} {...TextBox1038IoProps}/>
<Link8 className="p-best-UI-design-tools Link298 bpt" {...Link298Props} {...Link298Cb} {...Link298IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1037 bpt" {...TextBox1037Props} {...TextBox1037Cb} {...TextBox1037IoProps}/>
<Link8 className="p-best-UI-design-tools Link297 bpt" {...Link297Props} {...Link297Cb} {...Link297IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1036 bpt" {...TextBox1036Props} {...TextBox1036Cb} {...TextBox1036IoProps}/>
<Link8 className="p-best-UI-design-tools Link295 bpt" {...Link295Props} {...Link295Cb} {...Link295IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1035 bpt" {...TextBox1035Props} {...TextBox1035Cb} {...TextBox1035IoProps}/>
<Link8 className="p-best-UI-design-tools Link294 bpt" {...Link294Props} {...Link294Cb} {...Link294IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1034 bpt" {...TextBox1034Props} {...TextBox1034Cb} {...TextBox1034IoProps}/>
<Link8 className="p-best-UI-design-tools Link296 bpt" {...Link296Props} {...Link296Cb} {...Link296IoProps}/>
<TextBox8 className="p-best-UI-design-tools TextBox1033 bpt" {...TextBox1033Props} {...TextBox1033Cb} {...TextBox1033IoProps}/>
<Link8 className="p-best-UI-design-tools Link293 bpt" {...Link293Props} {...Link293Cb} {...Link293IoProps}/>
</Flex8>
</Flex8>
</Flex8>
  </>);
}
