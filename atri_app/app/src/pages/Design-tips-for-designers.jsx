import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu4 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Link as Link4 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex1122Cb, useFlex1121Cb, useFlex1118Cb, useFlex1119Cb, useFlex1116Cb, useFlex1112Cb, useFlex1113Cb, useFlex1114Cb, useFlex1117Cb, useFlex1115Cb, useFlex1120Cb, useFlex1192Cb, useFlex1191Cb, useFlex1190Cb, useFlex1187Cb, useFlex1181Cb, useFlex1182Cb, useFlex1183Cb, useFlex1188Cb, useFlex1184Cb, useFlex1185Cb, useFlex1186Cb, useFlex1189Cb, useFlex1198Cb, useFlex1197Cb, useFlex1194Cb, useFlex1195Cb, useFlex1193Cb, useFlex1196Cb, useFlex1206Cb, useFlex1205Cb, useFlex1204Cb, useFlex1202Cb, useMenu21Cb, useFlex1203Cb, useFlex1201Cb, useFlex1200Cb, useFlex1199Cb, useFlex1180Cb, useFlex1179Cb, useFlex1178Cb, useFlex1482Cb, useFlex1477Cb, useFlex1467Cb, useFlex1468Cb, useFlex1478Cb, useFlex1469Cb, useFlex1470Cb, useFlex1479Cb, useFlex1471Cb, useFlex1472Cb, useFlex1480Cb, useFlex1473Cb, useFlex1474Cb, useFlex1481Cb, useFlex1475Cb, useFlex1476Cb, useLink299Cb, useLink300Cb, useLink301Cb, useTextBox1117Cb, useTextBox1118Cb, useTextBox1119Cb, useLink302Cb, useTextBox1120Cb, useLink303Cb, useTextBox1121Cb, useLink304Cb, useTextBox1122Cb, useTextBox1106Cb, useTextBox1107Cb, useTextBox1108Cb, useTextBox1109Cb, useTextBox1110Cb, useTextBox1111Cb, useTextBox1112Cb, useTextBox1113Cb, useTextBox1114Cb, useTextBox1116Cb, useImage317Cb, useTextBox1115Cb, useImage316Cb, useTextBox1123Cb, useTextBox1124Cb, useTextBox1220Cb, useTextBox1221Cb, useTextBox1222Cb, useTextBox1223Cb, useTextBox1224Cb, useTextBox1225Cb, useTextBox1226Cb, useTextBox1227Cb, useTextBox1228Cb, useTextBox1229Cb, useTextBox1207Cb, useTextBox1208Cb, useTextBox1209Cb, useTextBox1210Cb, useTextBox1211Cb, useTextBox1212Cb, useTextBox1213Cb, useTextBox1214Cb, useTextBox1215Cb, useTextBox1216Cb, useTextBox1217Cb, useTextBox1218Cb, useTextBox1219Cb, useImage334Cb, useTextBox1233Cb, useTextBox1230Cb, useTextBox1231Cb, useTextBox1232Cb, useImage335Cb, useImage338Cb, useTextBox1240Cb, useTextBox1241Cb, useTextBox1242Cb, useTextBox1243Cb, useTextBox1239Cb, useImage337Cb, useTextBox1235Cb, useTextBox1236Cb, useTextBox1237Cb, useTextBox1238Cb, useImage336Cb, useTextBox1234Cb, useTextBox1205Cb, useTextBox1206Cb, useTextBox1647Cb, useTextBox1627Cb, useTextBox1628Cb, useTextBox1629Cb, useImage398Cb, useTextBox1630Cb, useTextBox1648Cb, useTextBox1631Cb, useImage399Cb, useTextBox1632Cb, useTextBox1633Cb, useTextBox1634Cb, useTextBox1649Cb, useTextBox1635Cb, useImage400Cb, useTextBox1636Cb, useTextBox1637Cb, useTextBox1638Cb, useTextBox1650Cb, useTextBox1639Cb, useImage401Cb, useTextBox1640Cb, useTextBox1641Cb, useTextBox1642Cb, useTextBox1651Cb, useTextBox1643Cb, useImage402Cb, useTextBox1644Cb, useTextBox1645Cb, useTextBox1646Cb } from "../page-cbs/design-tips-for-designers";
import "../page-css/design-tips-for-designers.css";
import "../custom/design-tips-for-designers";

export default function DesignTipsForDesigners() {
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

  const Flex1122Props = useStore((state)=>state["design-tips-for-designers"]["Flex1122"]);
const Flex1122IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1122"]);
const Flex1122Cb = useFlex1122Cb()
const Flex1121Props = useStore((state)=>state["design-tips-for-designers"]["Flex1121"]);
const Flex1121IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1121"]);
const Flex1121Cb = useFlex1121Cb()
const Flex1118Props = useStore((state)=>state["design-tips-for-designers"]["Flex1118"]);
const Flex1118IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1118"]);
const Flex1118Cb = useFlex1118Cb()
const Flex1119Props = useStore((state)=>state["design-tips-for-designers"]["Flex1119"]);
const Flex1119IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1119"]);
const Flex1119Cb = useFlex1119Cb()
const Flex1116Props = useStore((state)=>state["design-tips-for-designers"]["Flex1116"]);
const Flex1116IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1116"]);
const Flex1116Cb = useFlex1116Cb()
const Flex1112Props = useStore((state)=>state["design-tips-for-designers"]["Flex1112"]);
const Flex1112IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1112"]);
const Flex1112Cb = useFlex1112Cb()
const Flex1113Props = useStore((state)=>state["design-tips-for-designers"]["Flex1113"]);
const Flex1113IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1113"]);
const Flex1113Cb = useFlex1113Cb()
const Flex1114Props = useStore((state)=>state["design-tips-for-designers"]["Flex1114"]);
const Flex1114IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1114"]);
const Flex1114Cb = useFlex1114Cb()
const Flex1117Props = useStore((state)=>state["design-tips-for-designers"]["Flex1117"]);
const Flex1117IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1117"]);
const Flex1117Cb = useFlex1117Cb()
const Flex1115Props = useStore((state)=>state["design-tips-for-designers"]["Flex1115"]);
const Flex1115IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1115"]);
const Flex1115Cb = useFlex1115Cb()
const Flex1120Props = useStore((state)=>state["design-tips-for-designers"]["Flex1120"]);
const Flex1120IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1120"]);
const Flex1120Cb = useFlex1120Cb()
const Flex1192Props = useStore((state)=>state["design-tips-for-designers"]["Flex1192"]);
const Flex1192IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1192"]);
const Flex1192Cb = useFlex1192Cb()
const Flex1191Props = useStore((state)=>state["design-tips-for-designers"]["Flex1191"]);
const Flex1191IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1191"]);
const Flex1191Cb = useFlex1191Cb()
const Flex1190Props = useStore((state)=>state["design-tips-for-designers"]["Flex1190"]);
const Flex1190IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1190"]);
const Flex1190Cb = useFlex1190Cb()
const Flex1187Props = useStore((state)=>state["design-tips-for-designers"]["Flex1187"]);
const Flex1187IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1187"]);
const Flex1187Cb = useFlex1187Cb()
const Flex1181Props = useStore((state)=>state["design-tips-for-designers"]["Flex1181"]);
const Flex1181IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1181"]);
const Flex1181Cb = useFlex1181Cb()
const Flex1182Props = useStore((state)=>state["design-tips-for-designers"]["Flex1182"]);
const Flex1182IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1182"]);
const Flex1182Cb = useFlex1182Cb()
const Flex1183Props = useStore((state)=>state["design-tips-for-designers"]["Flex1183"]);
const Flex1183IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1183"]);
const Flex1183Cb = useFlex1183Cb()
const Flex1188Props = useStore((state)=>state["design-tips-for-designers"]["Flex1188"]);
const Flex1188IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1188"]);
const Flex1188Cb = useFlex1188Cb()
const Flex1184Props = useStore((state)=>state["design-tips-for-designers"]["Flex1184"]);
const Flex1184IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1184"]);
const Flex1184Cb = useFlex1184Cb()
const Flex1185Props = useStore((state)=>state["design-tips-for-designers"]["Flex1185"]);
const Flex1185IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1185"]);
const Flex1185Cb = useFlex1185Cb()
const Flex1186Props = useStore((state)=>state["design-tips-for-designers"]["Flex1186"]);
const Flex1186IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1186"]);
const Flex1186Cb = useFlex1186Cb()
const Flex1189Props = useStore((state)=>state["design-tips-for-designers"]["Flex1189"]);
const Flex1189IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1189"]);
const Flex1189Cb = useFlex1189Cb()
const Flex1198Props = useStore((state)=>state["design-tips-for-designers"]["Flex1198"]);
const Flex1198IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1198"]);
const Flex1198Cb = useFlex1198Cb()
const Flex1197Props = useStore((state)=>state["design-tips-for-designers"]["Flex1197"]);
const Flex1197IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1197"]);
const Flex1197Cb = useFlex1197Cb()
const Flex1194Props = useStore((state)=>state["design-tips-for-designers"]["Flex1194"]);
const Flex1194IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1194"]);
const Flex1194Cb = useFlex1194Cb()
const Flex1195Props = useStore((state)=>state["design-tips-for-designers"]["Flex1195"]);
const Flex1195IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1195"]);
const Flex1195Cb = useFlex1195Cb()
const Flex1193Props = useStore((state)=>state["design-tips-for-designers"]["Flex1193"]);
const Flex1193IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1193"]);
const Flex1193Cb = useFlex1193Cb()
const Flex1196Props = useStore((state)=>state["design-tips-for-designers"]["Flex1196"]);
const Flex1196IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1196"]);
const Flex1196Cb = useFlex1196Cb()
const Flex1206Props = useStore((state)=>state["design-tips-for-designers"]["Flex1206"]);
const Flex1206IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1206"]);
const Flex1206Cb = useFlex1206Cb()
const Flex1205Props = useStore((state)=>state["design-tips-for-designers"]["Flex1205"]);
const Flex1205IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1205"]);
const Flex1205Cb = useFlex1205Cb()
const Flex1204Props = useStore((state)=>state["design-tips-for-designers"]["Flex1204"]);
const Flex1204IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1204"]);
const Flex1204Cb = useFlex1204Cb()
const Flex1202Props = useStore((state)=>state["design-tips-for-designers"]["Flex1202"]);
const Flex1202IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1202"]);
const Flex1202Cb = useFlex1202Cb()
const Menu21Props = useStore((state)=>state["design-tips-for-designers"]["Menu21"]);
const Menu21IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Menu21"]);
const Menu21Cb = useMenu21Cb()
const Flex1203Props = useStore((state)=>state["design-tips-for-designers"]["Flex1203"]);
const Flex1203IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1203"]);
const Flex1203Cb = useFlex1203Cb()
const Flex1201Props = useStore((state)=>state["design-tips-for-designers"]["Flex1201"]);
const Flex1201IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1201"]);
const Flex1201Cb = useFlex1201Cb()
const Flex1200Props = useStore((state)=>state["design-tips-for-designers"]["Flex1200"]);
const Flex1200IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1200"]);
const Flex1200Cb = useFlex1200Cb()
const Flex1199Props = useStore((state)=>state["design-tips-for-designers"]["Flex1199"]);
const Flex1199IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1199"]);
const Flex1199Cb = useFlex1199Cb()
const Flex1180Props = useStore((state)=>state["design-tips-for-designers"]["Flex1180"]);
const Flex1180IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1180"]);
const Flex1180Cb = useFlex1180Cb()
const Flex1179Props = useStore((state)=>state["design-tips-for-designers"]["Flex1179"]);
const Flex1179IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1179"]);
const Flex1179Cb = useFlex1179Cb()
const Flex1178Props = useStore((state)=>state["design-tips-for-designers"]["Flex1178"]);
const Flex1178IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1178"]);
const Flex1178Cb = useFlex1178Cb()
const Flex1482Props = useStore((state)=>state["design-tips-for-designers"]["Flex1482"]);
const Flex1482IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1482"]);
const Flex1482Cb = useFlex1482Cb()
const Flex1477Props = useStore((state)=>state["design-tips-for-designers"]["Flex1477"]);
const Flex1477IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1477"]);
const Flex1477Cb = useFlex1477Cb()
const Flex1467Props = useStore((state)=>state["design-tips-for-designers"]["Flex1467"]);
const Flex1467IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1467"]);
const Flex1467Cb = useFlex1467Cb()
const Flex1468Props = useStore((state)=>state["design-tips-for-designers"]["Flex1468"]);
const Flex1468IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1468"]);
const Flex1468Cb = useFlex1468Cb()
const Flex1478Props = useStore((state)=>state["design-tips-for-designers"]["Flex1478"]);
const Flex1478IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1478"]);
const Flex1478Cb = useFlex1478Cb()
const Flex1469Props = useStore((state)=>state["design-tips-for-designers"]["Flex1469"]);
const Flex1469IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1469"]);
const Flex1469Cb = useFlex1469Cb()
const Flex1470Props = useStore((state)=>state["design-tips-for-designers"]["Flex1470"]);
const Flex1470IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1470"]);
const Flex1470Cb = useFlex1470Cb()
const Flex1479Props = useStore((state)=>state["design-tips-for-designers"]["Flex1479"]);
const Flex1479IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1479"]);
const Flex1479Cb = useFlex1479Cb()
const Flex1471Props = useStore((state)=>state["design-tips-for-designers"]["Flex1471"]);
const Flex1471IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1471"]);
const Flex1471Cb = useFlex1471Cb()
const Flex1472Props = useStore((state)=>state["design-tips-for-designers"]["Flex1472"]);
const Flex1472IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1472"]);
const Flex1472Cb = useFlex1472Cb()
const Flex1480Props = useStore((state)=>state["design-tips-for-designers"]["Flex1480"]);
const Flex1480IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1480"]);
const Flex1480Cb = useFlex1480Cb()
const Flex1473Props = useStore((state)=>state["design-tips-for-designers"]["Flex1473"]);
const Flex1473IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1473"]);
const Flex1473Cb = useFlex1473Cb()
const Flex1474Props = useStore((state)=>state["design-tips-for-designers"]["Flex1474"]);
const Flex1474IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1474"]);
const Flex1474Cb = useFlex1474Cb()
const Flex1481Props = useStore((state)=>state["design-tips-for-designers"]["Flex1481"]);
const Flex1481IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1481"]);
const Flex1481Cb = useFlex1481Cb()
const Flex1475Props = useStore((state)=>state["design-tips-for-designers"]["Flex1475"]);
const Flex1475IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1475"]);
const Flex1475Cb = useFlex1475Cb()
const Flex1476Props = useStore((state)=>state["design-tips-for-designers"]["Flex1476"]);
const Flex1476IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Flex1476"]);
const Flex1476Cb = useFlex1476Cb()
const Link299Props = useStore((state)=>state["design-tips-for-designers"]["Link299"]);
const Link299IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Link299"]);
const Link299Cb = useLink299Cb()
const Link300Props = useStore((state)=>state["design-tips-for-designers"]["Link300"]);
const Link300IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Link300"]);
const Link300Cb = useLink300Cb()
const Link301Props = useStore((state)=>state["design-tips-for-designers"]["Link301"]);
const Link301IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Link301"]);
const Link301Cb = useLink301Cb()
const TextBox1117Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1117"]);
const TextBox1117IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1117"]);
const TextBox1117Cb = useTextBox1117Cb()
const TextBox1118Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1118"]);
const TextBox1118IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1118"]);
const TextBox1118Cb = useTextBox1118Cb()
const TextBox1119Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1119"]);
const TextBox1119IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1119"]);
const TextBox1119Cb = useTextBox1119Cb()
const Link302Props = useStore((state)=>state["design-tips-for-designers"]["Link302"]);
const Link302IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Link302"]);
const Link302Cb = useLink302Cb()
const TextBox1120Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1120"]);
const TextBox1120IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1120"]);
const TextBox1120Cb = useTextBox1120Cb()
const Link303Props = useStore((state)=>state["design-tips-for-designers"]["Link303"]);
const Link303IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Link303"]);
const Link303Cb = useLink303Cb()
const TextBox1121Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1121"]);
const TextBox1121IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1121"]);
const TextBox1121Cb = useTextBox1121Cb()
const Link304Props = useStore((state)=>state["design-tips-for-designers"]["Link304"]);
const Link304IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Link304"]);
const Link304Cb = useLink304Cb()
const TextBox1122Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1122"]);
const TextBox1122IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1122"]);
const TextBox1122Cb = useTextBox1122Cb()
const TextBox1106Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1106"]);
const TextBox1106IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1106"]);
const TextBox1106Cb = useTextBox1106Cb()
const TextBox1107Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1107"]);
const TextBox1107IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1107"]);
const TextBox1107Cb = useTextBox1107Cb()
const TextBox1108Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1108"]);
const TextBox1108IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1108"]);
const TextBox1108Cb = useTextBox1108Cb()
const TextBox1109Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1109"]);
const TextBox1109IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1109"]);
const TextBox1109Cb = useTextBox1109Cb()
const TextBox1110Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1110"]);
const TextBox1110IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1110"]);
const TextBox1110Cb = useTextBox1110Cb()
const TextBox1111Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1111"]);
const TextBox1111IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1111"]);
const TextBox1111Cb = useTextBox1111Cb()
const TextBox1112Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1112"]);
const TextBox1112IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1112"]);
const TextBox1112Cb = useTextBox1112Cb()
const TextBox1113Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1113"]);
const TextBox1113IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1113"]);
const TextBox1113Cb = useTextBox1113Cb()
const TextBox1114Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1114"]);
const TextBox1114IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1114"]);
const TextBox1114Cb = useTextBox1114Cb()
const TextBox1116Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1116"]);
const TextBox1116IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1116"]);
const TextBox1116Cb = useTextBox1116Cb()
const Image317Props = useStore((state)=>state["design-tips-for-designers"]["Image317"]);
const Image317IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image317"]);
const Image317Cb = useImage317Cb()
const TextBox1115Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1115"]);
const TextBox1115IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1115"]);
const TextBox1115Cb = useTextBox1115Cb()
const Image316Props = useStore((state)=>state["design-tips-for-designers"]["Image316"]);
const Image316IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image316"]);
const Image316Cb = useImage316Cb()
const TextBox1123Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1123"]);
const TextBox1123IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1123"]);
const TextBox1123Cb = useTextBox1123Cb()
const TextBox1124Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1124"]);
const TextBox1124IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1124"]);
const TextBox1124Cb = useTextBox1124Cb()
const TextBox1220Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1220"]);
const TextBox1220IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1220"]);
const TextBox1220Cb = useTextBox1220Cb()
const TextBox1221Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1221"]);
const TextBox1221IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1221"]);
const TextBox1221Cb = useTextBox1221Cb()
const TextBox1222Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1222"]);
const TextBox1222IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1222"]);
const TextBox1222Cb = useTextBox1222Cb()
const TextBox1223Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1223"]);
const TextBox1223IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1223"]);
const TextBox1223Cb = useTextBox1223Cb()
const TextBox1224Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1224"]);
const TextBox1224IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1224"]);
const TextBox1224Cb = useTextBox1224Cb()
const TextBox1225Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1225"]);
const TextBox1225IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1225"]);
const TextBox1225Cb = useTextBox1225Cb()
const TextBox1226Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1226"]);
const TextBox1226IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1226"]);
const TextBox1226Cb = useTextBox1226Cb()
const TextBox1227Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1227"]);
const TextBox1227IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1227"]);
const TextBox1227Cb = useTextBox1227Cb()
const TextBox1228Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1228"]);
const TextBox1228IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1228"]);
const TextBox1228Cb = useTextBox1228Cb()
const TextBox1229Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1229"]);
const TextBox1229IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1229"]);
const TextBox1229Cb = useTextBox1229Cb()
const TextBox1207Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1207"]);
const TextBox1207IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1207"]);
const TextBox1207Cb = useTextBox1207Cb()
const TextBox1208Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1208"]);
const TextBox1208IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1208"]);
const TextBox1208Cb = useTextBox1208Cb()
const TextBox1209Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1209"]);
const TextBox1209IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1209"]);
const TextBox1209Cb = useTextBox1209Cb()
const TextBox1210Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1210"]);
const TextBox1210IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1210"]);
const TextBox1210Cb = useTextBox1210Cb()
const TextBox1211Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1211"]);
const TextBox1211IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1211"]);
const TextBox1211Cb = useTextBox1211Cb()
const TextBox1212Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1212"]);
const TextBox1212IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1212"]);
const TextBox1212Cb = useTextBox1212Cb()
const TextBox1213Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1213"]);
const TextBox1213IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1213"]);
const TextBox1213Cb = useTextBox1213Cb()
const TextBox1214Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1214"]);
const TextBox1214IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1214"]);
const TextBox1214Cb = useTextBox1214Cb()
const TextBox1215Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1215"]);
const TextBox1215IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1215"]);
const TextBox1215Cb = useTextBox1215Cb()
const TextBox1216Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1216"]);
const TextBox1216IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1216"]);
const TextBox1216Cb = useTextBox1216Cb()
const TextBox1217Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1217"]);
const TextBox1217IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1217"]);
const TextBox1217Cb = useTextBox1217Cb()
const TextBox1218Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1218"]);
const TextBox1218IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1218"]);
const TextBox1218Cb = useTextBox1218Cb()
const TextBox1219Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1219"]);
const TextBox1219IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1219"]);
const TextBox1219Cb = useTextBox1219Cb()
const Image334Props = useStore((state)=>state["design-tips-for-designers"]["Image334"]);
const Image334IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image334"]);
const Image334Cb = useImage334Cb()
const TextBox1233Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1233"]);
const TextBox1233IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1233"]);
const TextBox1233Cb = useTextBox1233Cb()
const TextBox1230Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1230"]);
const TextBox1230IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1230"]);
const TextBox1230Cb = useTextBox1230Cb()
const TextBox1231Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1231"]);
const TextBox1231IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1231"]);
const TextBox1231Cb = useTextBox1231Cb()
const TextBox1232Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1232"]);
const TextBox1232IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1232"]);
const TextBox1232Cb = useTextBox1232Cb()
const Image335Props = useStore((state)=>state["design-tips-for-designers"]["Image335"]);
const Image335IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image335"]);
const Image335Cb = useImage335Cb()
const Image338Props = useStore((state)=>state["design-tips-for-designers"]["Image338"]);
const Image338IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image338"]);
const Image338Cb = useImage338Cb()
const TextBox1240Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1240"]);
const TextBox1240IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1240"]);
const TextBox1240Cb = useTextBox1240Cb()
const TextBox1241Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1241"]);
const TextBox1241IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1241"]);
const TextBox1241Cb = useTextBox1241Cb()
const TextBox1242Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1242"]);
const TextBox1242IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1242"]);
const TextBox1242Cb = useTextBox1242Cb()
const TextBox1243Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1243"]);
const TextBox1243IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1243"]);
const TextBox1243Cb = useTextBox1243Cb()
const TextBox1239Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1239"]);
const TextBox1239IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1239"]);
const TextBox1239Cb = useTextBox1239Cb()
const Image337Props = useStore((state)=>state["design-tips-for-designers"]["Image337"]);
const Image337IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image337"]);
const Image337Cb = useImage337Cb()
const TextBox1235Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1235"]);
const TextBox1235IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1235"]);
const TextBox1235Cb = useTextBox1235Cb()
const TextBox1236Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1236"]);
const TextBox1236IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1236"]);
const TextBox1236Cb = useTextBox1236Cb()
const TextBox1237Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1237"]);
const TextBox1237IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1237"]);
const TextBox1237Cb = useTextBox1237Cb()
const TextBox1238Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1238"]);
const TextBox1238IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1238"]);
const TextBox1238Cb = useTextBox1238Cb()
const Image336Props = useStore((state)=>state["design-tips-for-designers"]["Image336"]);
const Image336IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image336"]);
const Image336Cb = useImage336Cb()
const TextBox1234Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1234"]);
const TextBox1234IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1234"]);
const TextBox1234Cb = useTextBox1234Cb()
const TextBox1205Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1205"]);
const TextBox1205IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1205"]);
const TextBox1205Cb = useTextBox1205Cb()
const TextBox1206Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1206"]);
const TextBox1206IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1206"]);
const TextBox1206Cb = useTextBox1206Cb()
const TextBox1647Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1647"]);
const TextBox1647IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1647"]);
const TextBox1647Cb = useTextBox1647Cb()
const TextBox1627Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1627"]);
const TextBox1627IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1627"]);
const TextBox1627Cb = useTextBox1627Cb()
const TextBox1628Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1628"]);
const TextBox1628IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1628"]);
const TextBox1628Cb = useTextBox1628Cb()
const TextBox1629Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1629"]);
const TextBox1629IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1629"]);
const TextBox1629Cb = useTextBox1629Cb()
const Image398Props = useStore((state)=>state["design-tips-for-designers"]["Image398"]);
const Image398IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image398"]);
const Image398Cb = useImage398Cb()
const TextBox1630Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1630"]);
const TextBox1630IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1630"]);
const TextBox1630Cb = useTextBox1630Cb()
const TextBox1648Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1648"]);
const TextBox1648IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1648"]);
const TextBox1648Cb = useTextBox1648Cb()
const TextBox1631Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1631"]);
const TextBox1631IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1631"]);
const TextBox1631Cb = useTextBox1631Cb()
const Image399Props = useStore((state)=>state["design-tips-for-designers"]["Image399"]);
const Image399IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image399"]);
const Image399Cb = useImage399Cb()
const TextBox1632Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1632"]);
const TextBox1632IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1632"]);
const TextBox1632Cb = useTextBox1632Cb()
const TextBox1633Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1633"]);
const TextBox1633IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1633"]);
const TextBox1633Cb = useTextBox1633Cb()
const TextBox1634Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1634"]);
const TextBox1634IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1634"]);
const TextBox1634Cb = useTextBox1634Cb()
const TextBox1649Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1649"]);
const TextBox1649IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1649"]);
const TextBox1649Cb = useTextBox1649Cb()
const TextBox1635Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1635"]);
const TextBox1635IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1635"]);
const TextBox1635Cb = useTextBox1635Cb()
const Image400Props = useStore((state)=>state["design-tips-for-designers"]["Image400"]);
const Image400IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image400"]);
const Image400Cb = useImage400Cb()
const TextBox1636Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1636"]);
const TextBox1636IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1636"]);
const TextBox1636Cb = useTextBox1636Cb()
const TextBox1637Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1637"]);
const TextBox1637IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1637"]);
const TextBox1637Cb = useTextBox1637Cb()
const TextBox1638Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1638"]);
const TextBox1638IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1638"]);
const TextBox1638Cb = useTextBox1638Cb()
const TextBox1650Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1650"]);
const TextBox1650IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1650"]);
const TextBox1650Cb = useTextBox1650Cb()
const TextBox1639Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1639"]);
const TextBox1639IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1639"]);
const TextBox1639Cb = useTextBox1639Cb()
const Image401Props = useStore((state)=>state["design-tips-for-designers"]["Image401"]);
const Image401IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image401"]);
const Image401Cb = useImage401Cb()
const TextBox1640Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1640"]);
const TextBox1640IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1640"]);
const TextBox1640Cb = useTextBox1640Cb()
const TextBox1641Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1641"]);
const TextBox1641IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1641"]);
const TextBox1641Cb = useTextBox1641Cb()
const TextBox1642Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1642"]);
const TextBox1642IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1642"]);
const TextBox1642Cb = useTextBox1642Cb()
const TextBox1651Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1651"]);
const TextBox1651IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1651"]);
const TextBox1651Cb = useTextBox1651Cb()
const TextBox1643Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1643"]);
const TextBox1643IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1643"]);
const TextBox1643Cb = useTextBox1643Cb()
const Image402Props = useStore((state)=>state["design-tips-for-designers"]["Image402"]);
const Image402IoProps = useIoStore((state)=>state["design-tips-for-designers"]["Image402"]);
const Image402Cb = useImage402Cb()
const TextBox1644Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1644"]);
const TextBox1644IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1644"]);
const TextBox1644Cb = useTextBox1644Cb()
const TextBox1645Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1645"]);
const TextBox1645IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1645"]);
const TextBox1645Cb = useTextBox1645Cb()
const TextBox1646Props = useStore((state)=>state["design-tips-for-designers"]["TextBox1646"]);
const TextBox1646IoProps = useIoStore((state)=>state["design-tips-for-designers"]["TextBox1646"]);
const TextBox1646Cb = useTextBox1646Cb()

  return (<>
  <Flex4 className="p-design-tips-for-designers Flex1206 bpt" {...Flex1206Props} {...Flex1206Cb} {...Flex1206IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1205 bpt" {...Flex1205Props} {...Flex1205Cb} {...Flex1205IoProps}>
<Image4 className="p-design-tips-for-designers Image338 bpt" {...Image338Props} {...Image338Cb} {...Image338IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1204 bpt" {...Flex1204Props} {...Flex1204Cb} {...Flex1204IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1243 bpt" {...TextBox1243Props} {...TextBox1243Cb} {...TextBox1243IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1240 bpt" {...TextBox1240Props} {...TextBox1240Cb} {...TextBox1240IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1241 bpt" {...TextBox1241Props} {...TextBox1241Cb} {...TextBox1241IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1242 bpt" {...TextBox1242Props} {...TextBox1242Cb} {...TextBox1242IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1202 bpt" {...Flex1202Props} {...Flex1202Cb} {...Flex1202IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1239 bpt" {...TextBox1239Props} {...TextBox1239Cb} {...TextBox1239IoProps}/>
<Image4 className="p-design-tips-for-designers Image337 bpt" {...Image337Props} {...Image337Cb} {...Image337IoProps}/>
</Flex4>
</Flex4>
<Menu4 className="p-design-tips-for-designers Menu21 bpt" {...Menu21Props} {...Menu21Cb} {...Menu21IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1203 bpt" {...Flex1203Props} {...Flex1203Cb} {...Flex1203IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1201 bpt" {...Flex1201Props} {...Flex1201Cb} {...Flex1201IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1200 bpt" {...Flex1200Props} {...Flex1200Cb} {...Flex1200IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1235 bpt" {...TextBox1235Props} {...TextBox1235Cb} {...TextBox1235IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1238 bpt" {...TextBox1238Props} {...TextBox1238Cb} {...TextBox1238IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1237 bpt" {...TextBox1237Props} {...TextBox1237Cb} {...TextBox1237IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1236 bpt" {...TextBox1236Props} {...TextBox1236Cb} {...TextBox1236IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1199 bpt" {...Flex1199Props} {...Flex1199Cb} {...Flex1199IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1234 bpt" {...TextBox1234Props} {...TextBox1234Cb} {...TextBox1234IoProps}/>
<Image4 className="p-design-tips-for-designers Image336 bpt" {...Image336Props} {...Image336Cb} {...Image336IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
</Menu4>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1198 bpt" {...Flex1198Props} {...Flex1198Cb} {...Flex1198IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1197 bpt" {...Flex1197Props} {...Flex1197Cb} {...Flex1197IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1195 bpt" {...Flex1195Props} {...Flex1195Cb} {...Flex1195IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1193 bpt" {...Flex1193Props} {...Flex1193Cb} {...Flex1193IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1230 bpt" {...TextBox1230Props} {...TextBox1230Cb} {...TextBox1230IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1231 bpt" {...TextBox1231Props} {...TextBox1231Cb} {...TextBox1231IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1232 bpt" {...TextBox1232Props} {...TextBox1232Cb} {...TextBox1232IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1233 bpt" {...TextBox1233Props} {...TextBox1233Cb} {...TextBox1233IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1194 bpt" {...Flex1194Props} {...Flex1194Cb} {...Flex1194IoProps}>
<Image4 className="p-design-tips-for-designers Image334 bpt" {...Image334Props} {...Image334Cb} {...Image334IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1196 bpt" {...Flex1196Props} {...Flex1196Cb} {...Flex1196IoProps}>
<Image4 className="p-design-tips-for-designers Image335 bpt" {...Image335Props} {...Image335Cb} {...Image335IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1192 bpt" {...Flex1192Props} {...Flex1192Cb} {...Flex1192IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1191 bpt" {...Flex1191Props} {...Flex1191Cb} {...Flex1191IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1190 bpt" {...Flex1190Props} {...Flex1190Cb} {...Flex1190IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1228 bpt" {...TextBox1228Props} {...TextBox1228Cb} {...TextBox1228IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1229 bpt" {...TextBox1229Props} {...TextBox1229Cb} {...TextBox1229IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1227 bpt" {...TextBox1227Props} {...TextBox1227Cb} {...TextBox1227IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1189 bpt" {...Flex1189Props} {...Flex1189Cb} {...Flex1189IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1219 bpt" {...TextBox1219Props} {...TextBox1219Cb} {...TextBox1219IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1223 bpt" {...TextBox1223Props} {...TextBox1223Cb} {...TextBox1223IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1222 bpt" {...TextBox1222Props} {...TextBox1222Cb} {...TextBox1222IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1187 bpt" {...Flex1187Props} {...Flex1187Cb} {...Flex1187IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1181 bpt" {...Flex1181Props} {...Flex1181Cb} {...Flex1181IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1208 bpt" {...TextBox1208Props} {...TextBox1208Cb} {...TextBox1208IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1207 bpt" {...TextBox1207Props} {...TextBox1207Cb} {...TextBox1207IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1182 bpt" {...Flex1182Props} {...Flex1182Cb} {...Flex1182IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1209 bpt" {...TextBox1209Props} {...TextBox1209Cb} {...TextBox1209IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1210 bpt" {...TextBox1210Props} {...TextBox1210Cb} {...TextBox1210IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1183 bpt" {...Flex1183Props} {...Flex1183Cb} {...Flex1183IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1211 bpt" {...TextBox1211Props} {...TextBox1211Cb} {...TextBox1211IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1212 bpt" {...TextBox1212Props} {...TextBox1212Cb} {...TextBox1212IoProps}/>
</Flex4>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1226 bpt" {...TextBox1226Props} {...TextBox1226Cb} {...TextBox1226IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1221 bpt" {...TextBox1221Props} {...TextBox1221Cb} {...TextBox1221IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1188 bpt" {...Flex1188Props} {...Flex1188Cb} {...Flex1188IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1186 bpt" {...Flex1186Props} {...Flex1186Cb} {...Flex1186IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1217 bpt" {...TextBox1217Props} {...TextBox1217Cb} {...TextBox1217IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1218 bpt" {...TextBox1218Props} {...TextBox1218Cb} {...TextBox1218IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1185 bpt" {...Flex1185Props} {...Flex1185Cb} {...Flex1185IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1216 bpt" {...TextBox1216Props} {...TextBox1216Cb} {...TextBox1216IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1215 bpt" {...TextBox1215Props} {...TextBox1215Cb} {...TextBox1215IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1184 bpt" {...Flex1184Props} {...Flex1184Cb} {...Flex1184IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1214 bpt" {...TextBox1214Props} {...TextBox1214Cb} {...TextBox1214IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1213 bpt" {...TextBox1213Props} {...TextBox1213Cb} {...TextBox1213IoProps}/>
</Flex4>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1225 bpt" {...TextBox1225Props} {...TextBox1225Cb} {...TextBox1225IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1220 bpt" {...TextBox1220Props} {...TextBox1220Cb} {...TextBox1220IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1224 bpt" {...TextBox1224Props} {...TextBox1224Cb} {...TextBox1224IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1180 bpt" {...Flex1180Props} {...Flex1180Cb} {...Flex1180IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1179 bpt" {...Flex1179Props} {...Flex1179Cb} {...Flex1179IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1178 bpt" {...Flex1178Props} {...Flex1178Cb} {...Flex1178IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1206 bpt" {...TextBox1206Props} {...TextBox1206Cb} {...TextBox1206IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1205 bpt" {...TextBox1205Props} {...TextBox1205Cb} {...TextBox1205IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1482 bpt" {...Flex1482Props} {...Flex1482Cb} {...Flex1482IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1477 bpt" {...Flex1477Props} {...Flex1477Cb} {...Flex1477IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1467 bpt" {...Flex1467Props} {...Flex1467Cb} {...Flex1467IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1627 bpt" {...TextBox1627Props} {...TextBox1627Cb} {...TextBox1627IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1628 bpt" {...TextBox1628Props} {...TextBox1628Cb} {...TextBox1628IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1629 bpt" {...TextBox1629Props} {...TextBox1629Cb} {...TextBox1629IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1647 bpt" {...TextBox1647Props} {...TextBox1647Cb} {...TextBox1647IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1468 bpt" {...Flex1468Props} {...Flex1468Cb} {...Flex1468IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1630 bpt" {...TextBox1630Props} {...TextBox1630Cb} {...TextBox1630IoProps}/>
<Image4 className="p-design-tips-for-designers Image398 bpt" {...Image398Props} {...Image398Cb} {...Image398IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1478 bpt" {...Flex1478Props} {...Flex1478Cb} {...Flex1478IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1470 bpt" {...Flex1470Props} {...Flex1470Cb} {...Flex1470IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1634 bpt" {...TextBox1634Props} {...TextBox1634Cb} {...TextBox1634IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1633 bpt" {...TextBox1633Props} {...TextBox1633Cb} {...TextBox1633IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1632 bpt" {...TextBox1632Props} {...TextBox1632Cb} {...TextBox1632IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1648 bpt" {...TextBox1648Props} {...TextBox1648Cb} {...TextBox1648IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1469 bpt" {...Flex1469Props} {...Flex1469Cb} {...Flex1469IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1631 bpt" {...TextBox1631Props} {...TextBox1631Cb} {...TextBox1631IoProps}/>
<Image4 className="p-design-tips-for-designers Image399 bpt" {...Image399Props} {...Image399Cb} {...Image399IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1479 bpt" {...Flex1479Props} {...Flex1479Cb} {...Flex1479IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1472 bpt" {...Flex1472Props} {...Flex1472Cb} {...Flex1472IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1638 bpt" {...TextBox1638Props} {...TextBox1638Cb} {...TextBox1638IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1637 bpt" {...TextBox1637Props} {...TextBox1637Cb} {...TextBox1637IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1636 bpt" {...TextBox1636Props} {...TextBox1636Cb} {...TextBox1636IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1649 bpt" {...TextBox1649Props} {...TextBox1649Cb} {...TextBox1649IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1471 bpt" {...Flex1471Props} {...Flex1471Cb} {...Flex1471IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1635 bpt" {...TextBox1635Props} {...TextBox1635Cb} {...TextBox1635IoProps}/>
<Image4 className="p-design-tips-for-designers Image400 bpt" {...Image400Props} {...Image400Cb} {...Image400IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1480 bpt" {...Flex1480Props} {...Flex1480Cb} {...Flex1480IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1474 bpt" {...Flex1474Props} {...Flex1474Cb} {...Flex1474IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1642 bpt" {...TextBox1642Props} {...TextBox1642Cb} {...TextBox1642IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1641 bpt" {...TextBox1641Props} {...TextBox1641Cb} {...TextBox1641IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1640 bpt" {...TextBox1640Props} {...TextBox1640Cb} {...TextBox1640IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1650 bpt" {...TextBox1650Props} {...TextBox1650Cb} {...TextBox1650IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1473 bpt" {...Flex1473Props} {...Flex1473Cb} {...Flex1473IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1639 bpt" {...TextBox1639Props} {...TextBox1639Cb} {...TextBox1639IoProps}/>
<Image4 className="p-design-tips-for-designers Image401 bpt" {...Image401Props} {...Image401Cb} {...Image401IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1481 bpt" {...Flex1481Props} {...Flex1481Cb} {...Flex1481IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1476 bpt" {...Flex1476Props} {...Flex1476Cb} {...Flex1476IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1646 bpt" {...TextBox1646Props} {...TextBox1646Cb} {...TextBox1646IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1645 bpt" {...TextBox1645Props} {...TextBox1645Cb} {...TextBox1645IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1644 bpt" {...TextBox1644Props} {...TextBox1644Cb} {...TextBox1644IoProps}/>
</Flex4>
<TextBox4 className="p-design-tips-for-designers TextBox1651 bpt" {...TextBox1651Props} {...TextBox1651Cb} {...TextBox1651IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1475 bpt" {...Flex1475Props} {...Flex1475Cb} {...Flex1475IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1643 bpt" {...TextBox1643Props} {...TextBox1643Cb} {...TextBox1643IoProps}/>
<Image4 className="p-design-tips-for-designers Image402 bpt" {...Image402Props} {...Image402Cb} {...Image402IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1122 bpt" {...Flex1122Props} {...Flex1122Cb} {...Flex1122IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1121 bpt" {...Flex1121Props} {...Flex1121Cb} {...Flex1121IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1120 bpt" {...Flex1120Props} {...Flex1120Cb} {...Flex1120IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1124 bpt" {...TextBox1124Props} {...TextBox1124Cb} {...TextBox1124IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1123 bpt" {...TextBox1123Props} {...TextBox1123Cb} {...TextBox1123IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1119 bpt" {...Flex1119Props} {...Flex1119Cb} {...Flex1119IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1117 bpt" {...Flex1117Props} {...Flex1117Cb} {...Flex1117IoProps}>
<Image4 className="p-design-tips-for-designers Image317 bpt" {...Image317Props} {...Image317Cb} {...Image317IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1116 bpt" {...TextBox1116Props} {...TextBox1116Cb} {...TextBox1116IoProps}/>
<Flex4 className="p-design-tips-for-designers Flex1115 bpt" {...Flex1115Props} {...Flex1115Cb} {...Flex1115IoProps}>
<Image4 className="p-design-tips-for-designers Image316 bpt" {...Image316Props} {...Image316Cb} {...Image316IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1115 bpt" {...TextBox1115Props} {...TextBox1115Cb} {...TextBox1115IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1116 bpt" {...Flex1116Props} {...Flex1116Cb} {...Flex1116IoProps}>
<Flex4 className="p-design-tips-for-designers Flex1112 bpt" {...Flex1112Props} {...Flex1112Cb} {...Flex1112IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1108 bpt" {...TextBox1108Props} {...TextBox1108Cb} {...TextBox1108IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1106 bpt" {...TextBox1106Props} {...TextBox1106Cb} {...TextBox1106IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1107 bpt" {...TextBox1107Props} {...TextBox1107Cb} {...TextBox1107IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1114 bpt" {...Flex1114Props} {...Flex1114Cb} {...Flex1114IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1114 bpt" {...TextBox1114Props} {...TextBox1114Cb} {...TextBox1114IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1113 bpt" {...TextBox1113Props} {...TextBox1113Cb} {...TextBox1113IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1112 bpt" {...TextBox1112Props} {...TextBox1112Cb} {...TextBox1112IoProps}/>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1113 bpt" {...Flex1113Props} {...Flex1113Cb} {...Flex1113IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1111 bpt" {...TextBox1111Props} {...TextBox1111Cb} {...TextBox1111IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1110 bpt" {...TextBox1110Props} {...TextBox1110Cb} {...TextBox1110IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1109 bpt" {...TextBox1109Props} {...TextBox1109Cb} {...TextBox1109IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-design-tips-for-designers Flex1118 bpt" {...Flex1118Props} {...Flex1118Cb} {...Flex1118IoProps}>
<TextBox4 className="p-design-tips-for-designers TextBox1122 bpt" {...TextBox1122Props} {...TextBox1122Cb} {...TextBox1122IoProps}/>
<Link4 className="p-design-tips-for-designers Link304 bpt" {...Link304Props} {...Link304Cb} {...Link304IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1121 bpt" {...TextBox1121Props} {...TextBox1121Cb} {...TextBox1121IoProps}/>
<Link4 className="p-design-tips-for-designers Link303 bpt" {...Link303Props} {...Link303Cb} {...Link303IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1120 bpt" {...TextBox1120Props} {...TextBox1120Cb} {...TextBox1120IoProps}/>
<Link4 className="p-design-tips-for-designers Link301 bpt" {...Link301Props} {...Link301Cb} {...Link301IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1119 bpt" {...TextBox1119Props} {...TextBox1119Cb} {...TextBox1119IoProps}/>
<Link4 className="p-design-tips-for-designers Link300 bpt" {...Link300Props} {...Link300Cb} {...Link300IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1118 bpt" {...TextBox1118Props} {...TextBox1118Cb} {...TextBox1118IoProps}/>
<Link4 className="p-design-tips-for-designers Link302 bpt" {...Link302Props} {...Link302Cb} {...Link302IoProps}/>
<TextBox4 className="p-design-tips-for-designers TextBox1117 bpt" {...TextBox1117Props} {...TextBox1117Cb} {...TextBox1117IoProps}/>
<Link4 className="p-design-tips-for-designers Link299 bpt" {...Link299Props} {...Link299Cb} {...Link299IoProps}/>
</Flex4>
</Flex4>
</Flex4>
  </>);
}
