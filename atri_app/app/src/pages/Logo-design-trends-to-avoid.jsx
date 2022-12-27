import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex7 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu7 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox7 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image7 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link7 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex1394Cb, useFlex1393Cb, useFlex1392Cb, useFlex1530Cb, useFlex1525Cb, useFlex1515Cb, useFlex1516Cb, useFlex1526Cb, useFlex1517Cb, useFlex1518Cb, useFlex1527Cb, useFlex1519Cb, useFlex1520Cb, useFlex1528Cb, useFlex1521Cb, useFlex1522Cb, useFlex1529Cb, useFlex1523Cb, useFlex1524Cb, useFlex1406Cb, useFlex1405Cb, useFlex1404Cb, useFlex1401Cb, useFlex1395Cb, useFlex1396Cb, useFlex1397Cb, useFlex1402Cb, useFlex1398Cb, useFlex1399Cb, useFlex1400Cb, useFlex1403Cb, useFlex1412Cb, useFlex1411Cb, useFlex1408Cb, useFlex1409Cb, useFlex1407Cb, useFlex1410Cb, useFlex1420Cb, useFlex1419Cb, useFlex1418Cb, useFlex1416Cb, useMenu24Cb, useFlex1417Cb, useFlex1415Cb, useFlex1414Cb, useFlex1413Cb, useFlex1431Cb, useFlex1430Cb, useFlex1427Cb, useFlex1428Cb, useFlex1425Cb, useFlex1421Cb, useFlex1422Cb, useFlex1423Cb, useFlex1426Cb, useFlex1424Cb, useFlex1429Cb, useTextBox1517Cb, useTextBox1518Cb, useTextBox1722Cb, useTextBox1702Cb, useTextBox1703Cb, useTextBox1704Cb, useImage413Cb, useTextBox1705Cb, useTextBox1723Cb, useTextBox1706Cb, useImage414Cb, useTextBox1707Cb, useTextBox1708Cb, useTextBox1709Cb, useTextBox1724Cb, useTextBox1710Cb, useImage415Cb, useTextBox1711Cb, useTextBox1712Cb, useTextBox1713Cb, useTextBox1725Cb, useTextBox1714Cb, useImage416Cb, useTextBox1715Cb, useTextBox1716Cb, useTextBox1717Cb, useTextBox1726Cb, useTextBox1718Cb, useImage417Cb, useTextBox1719Cb, useTextBox1720Cb, useTextBox1721Cb, useTextBox1532Cb, useTextBox1533Cb, useTextBox1534Cb, useTextBox1535Cb, useTextBox1536Cb, useTextBox1537Cb, useTextBox1538Cb, useTextBox1539Cb, useTextBox1540Cb, useTextBox1541Cb, useTextBox1519Cb, useTextBox1520Cb, useTextBox1521Cb, useTextBox1522Cb, useTextBox1523Cb, useTextBox1524Cb, useTextBox1525Cb, useTextBox1526Cb, useTextBox1527Cb, useTextBox1528Cb, useTextBox1529Cb, useTextBox1530Cb, useTextBox1531Cb, useImage381Cb, useTextBox1545Cb, useTextBox1542Cb, useTextBox1543Cb, useTextBox1544Cb, useImage382Cb, useImage385Cb, useTextBox1552Cb, useTextBox1553Cb, useTextBox1554Cb, useTextBox1555Cb, useTextBox1551Cb, useImage384Cb, useTextBox1547Cb, useTextBox1548Cb, useTextBox1549Cb, useTextBox1550Cb, useImage383Cb, useTextBox1546Cb, useLink317Cb, useLink318Cb, useLink319Cb, useTextBox1567Cb, useTextBox1568Cb, useTextBox1569Cb, useLink320Cb, useTextBox1570Cb, useLink321Cb, useTextBox1571Cb, useLink322Cb, useTextBox1572Cb, useTextBox1556Cb, useTextBox1557Cb, useTextBox1558Cb, useTextBox1559Cb, useTextBox1560Cb, useTextBox1561Cb, useTextBox1562Cb, useTextBox1563Cb, useTextBox1564Cb, useTextBox1566Cb, useImage387Cb, useTextBox1565Cb, useImage386Cb, useTextBox1573Cb, useTextBox1574Cb } from "../page-cbs/logo-design-trends-to-avoid";
import "../page-css/logo-design-trends-to-avoid.css";
import "../custom/logo-design-trends-to-avoid";

export default function LogoDesignTrendsToAvoid() {
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

  const Flex1394Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1394"]);
const Flex1394IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1394"]);
const Flex1394Cb = useFlex1394Cb()
const Flex1393Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1393"]);
const Flex1393IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1393"]);
const Flex1393Cb = useFlex1393Cb()
const Flex1392Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1392"]);
const Flex1392IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1392"]);
const Flex1392Cb = useFlex1392Cb()
const Flex1530Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1530"]);
const Flex1530IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1530"]);
const Flex1530Cb = useFlex1530Cb()
const Flex1525Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1525"]);
const Flex1525IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1525"]);
const Flex1525Cb = useFlex1525Cb()
const Flex1515Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1515"]);
const Flex1515IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1515"]);
const Flex1515Cb = useFlex1515Cb()
const Flex1516Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1516"]);
const Flex1516IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1516"]);
const Flex1516Cb = useFlex1516Cb()
const Flex1526Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1526"]);
const Flex1526IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1526"]);
const Flex1526Cb = useFlex1526Cb()
const Flex1517Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1517"]);
const Flex1517IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1517"]);
const Flex1517Cb = useFlex1517Cb()
const Flex1518Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1518"]);
const Flex1518IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1518"]);
const Flex1518Cb = useFlex1518Cb()
const Flex1527Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1527"]);
const Flex1527IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1527"]);
const Flex1527Cb = useFlex1527Cb()
const Flex1519Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1519"]);
const Flex1519IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1519"]);
const Flex1519Cb = useFlex1519Cb()
const Flex1520Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1520"]);
const Flex1520IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1520"]);
const Flex1520Cb = useFlex1520Cb()
const Flex1528Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1528"]);
const Flex1528IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1528"]);
const Flex1528Cb = useFlex1528Cb()
const Flex1521Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1521"]);
const Flex1521IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1521"]);
const Flex1521Cb = useFlex1521Cb()
const Flex1522Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1522"]);
const Flex1522IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1522"]);
const Flex1522Cb = useFlex1522Cb()
const Flex1529Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1529"]);
const Flex1529IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1529"]);
const Flex1529Cb = useFlex1529Cb()
const Flex1523Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1523"]);
const Flex1523IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1523"]);
const Flex1523Cb = useFlex1523Cb()
const Flex1524Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1524"]);
const Flex1524IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1524"]);
const Flex1524Cb = useFlex1524Cb()
const Flex1406Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1406"]);
const Flex1406IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1406"]);
const Flex1406Cb = useFlex1406Cb()
const Flex1405Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1405"]);
const Flex1405IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1405"]);
const Flex1405Cb = useFlex1405Cb()
const Flex1404Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1404"]);
const Flex1404IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1404"]);
const Flex1404Cb = useFlex1404Cb()
const Flex1401Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1401"]);
const Flex1401IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1401"]);
const Flex1401Cb = useFlex1401Cb()
const Flex1395Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1395"]);
const Flex1395IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1395"]);
const Flex1395Cb = useFlex1395Cb()
const Flex1396Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1396"]);
const Flex1396IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1396"]);
const Flex1396Cb = useFlex1396Cb()
const Flex1397Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1397"]);
const Flex1397IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1397"]);
const Flex1397Cb = useFlex1397Cb()
const Flex1402Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1402"]);
const Flex1402IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1402"]);
const Flex1402Cb = useFlex1402Cb()
const Flex1398Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1398"]);
const Flex1398IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1398"]);
const Flex1398Cb = useFlex1398Cb()
const Flex1399Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1399"]);
const Flex1399IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1399"]);
const Flex1399Cb = useFlex1399Cb()
const Flex1400Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1400"]);
const Flex1400IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1400"]);
const Flex1400Cb = useFlex1400Cb()
const Flex1403Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1403"]);
const Flex1403IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1403"]);
const Flex1403Cb = useFlex1403Cb()
const Flex1412Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1412"]);
const Flex1412IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1412"]);
const Flex1412Cb = useFlex1412Cb()
const Flex1411Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1411"]);
const Flex1411IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1411"]);
const Flex1411Cb = useFlex1411Cb()
const Flex1408Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1408"]);
const Flex1408IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1408"]);
const Flex1408Cb = useFlex1408Cb()
const Flex1409Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1409"]);
const Flex1409IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1409"]);
const Flex1409Cb = useFlex1409Cb()
const Flex1407Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1407"]);
const Flex1407IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1407"]);
const Flex1407Cb = useFlex1407Cb()
const Flex1410Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1410"]);
const Flex1410IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1410"]);
const Flex1410Cb = useFlex1410Cb()
const Flex1420Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1420"]);
const Flex1420IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1420"]);
const Flex1420Cb = useFlex1420Cb()
const Flex1419Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1419"]);
const Flex1419IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1419"]);
const Flex1419Cb = useFlex1419Cb()
const Flex1418Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1418"]);
const Flex1418IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1418"]);
const Flex1418Cb = useFlex1418Cb()
const Flex1416Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1416"]);
const Flex1416IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1416"]);
const Flex1416Cb = useFlex1416Cb()
const Menu24Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Menu24"]);
const Menu24IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Menu24"]);
const Menu24Cb = useMenu24Cb()
const Flex1417Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1417"]);
const Flex1417IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1417"]);
const Flex1417Cb = useFlex1417Cb()
const Flex1415Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1415"]);
const Flex1415IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1415"]);
const Flex1415Cb = useFlex1415Cb()
const Flex1414Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1414"]);
const Flex1414IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1414"]);
const Flex1414Cb = useFlex1414Cb()
const Flex1413Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1413"]);
const Flex1413IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1413"]);
const Flex1413Cb = useFlex1413Cb()
const Flex1431Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1431"]);
const Flex1431IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1431"]);
const Flex1431Cb = useFlex1431Cb()
const Flex1430Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1430"]);
const Flex1430IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1430"]);
const Flex1430Cb = useFlex1430Cb()
const Flex1427Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1427"]);
const Flex1427IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1427"]);
const Flex1427Cb = useFlex1427Cb()
const Flex1428Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1428"]);
const Flex1428IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1428"]);
const Flex1428Cb = useFlex1428Cb()
const Flex1425Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1425"]);
const Flex1425IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1425"]);
const Flex1425Cb = useFlex1425Cb()
const Flex1421Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1421"]);
const Flex1421IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1421"]);
const Flex1421Cb = useFlex1421Cb()
const Flex1422Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1422"]);
const Flex1422IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1422"]);
const Flex1422Cb = useFlex1422Cb()
const Flex1423Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1423"]);
const Flex1423IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1423"]);
const Flex1423Cb = useFlex1423Cb()
const Flex1426Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1426"]);
const Flex1426IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1426"]);
const Flex1426Cb = useFlex1426Cb()
const Flex1424Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1424"]);
const Flex1424IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1424"]);
const Flex1424Cb = useFlex1424Cb()
const Flex1429Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Flex1429"]);
const Flex1429IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Flex1429"]);
const Flex1429Cb = useFlex1429Cb()
const TextBox1517Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1517"]);
const TextBox1517IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1517"]);
const TextBox1517Cb = useTextBox1517Cb()
const TextBox1518Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1518"]);
const TextBox1518IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1518"]);
const TextBox1518Cb = useTextBox1518Cb()
const TextBox1722Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1722"]);
const TextBox1722IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1722"]);
const TextBox1722Cb = useTextBox1722Cb()
const TextBox1702Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1702"]);
const TextBox1702IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1702"]);
const TextBox1702Cb = useTextBox1702Cb()
const TextBox1703Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1703"]);
const TextBox1703IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1703"]);
const TextBox1703Cb = useTextBox1703Cb()
const TextBox1704Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1704"]);
const TextBox1704IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1704"]);
const TextBox1704Cb = useTextBox1704Cb()
const Image413Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image413"]);
const Image413IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image413"]);
const Image413Cb = useImage413Cb()
const TextBox1705Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1705"]);
const TextBox1705IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1705"]);
const TextBox1705Cb = useTextBox1705Cb()
const TextBox1723Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1723"]);
const TextBox1723IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1723"]);
const TextBox1723Cb = useTextBox1723Cb()
const TextBox1706Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1706"]);
const TextBox1706IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1706"]);
const TextBox1706Cb = useTextBox1706Cb()
const Image414Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image414"]);
const Image414IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image414"]);
const Image414Cb = useImage414Cb()
const TextBox1707Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1707"]);
const TextBox1707IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1707"]);
const TextBox1707Cb = useTextBox1707Cb()
const TextBox1708Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1708"]);
const TextBox1708IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1708"]);
const TextBox1708Cb = useTextBox1708Cb()
const TextBox1709Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1709"]);
const TextBox1709IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1709"]);
const TextBox1709Cb = useTextBox1709Cb()
const TextBox1724Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1724"]);
const TextBox1724IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1724"]);
const TextBox1724Cb = useTextBox1724Cb()
const TextBox1710Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1710"]);
const TextBox1710IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1710"]);
const TextBox1710Cb = useTextBox1710Cb()
const Image415Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image415"]);
const Image415IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image415"]);
const Image415Cb = useImage415Cb()
const TextBox1711Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1711"]);
const TextBox1711IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1711"]);
const TextBox1711Cb = useTextBox1711Cb()
const TextBox1712Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1712"]);
const TextBox1712IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1712"]);
const TextBox1712Cb = useTextBox1712Cb()
const TextBox1713Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1713"]);
const TextBox1713IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1713"]);
const TextBox1713Cb = useTextBox1713Cb()
const TextBox1725Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1725"]);
const TextBox1725IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1725"]);
const TextBox1725Cb = useTextBox1725Cb()
const TextBox1714Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1714"]);
const TextBox1714IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1714"]);
const TextBox1714Cb = useTextBox1714Cb()
const Image416Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image416"]);
const Image416IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image416"]);
const Image416Cb = useImage416Cb()
const TextBox1715Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1715"]);
const TextBox1715IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1715"]);
const TextBox1715Cb = useTextBox1715Cb()
const TextBox1716Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1716"]);
const TextBox1716IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1716"]);
const TextBox1716Cb = useTextBox1716Cb()
const TextBox1717Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1717"]);
const TextBox1717IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1717"]);
const TextBox1717Cb = useTextBox1717Cb()
const TextBox1726Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1726"]);
const TextBox1726IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1726"]);
const TextBox1726Cb = useTextBox1726Cb()
const TextBox1718Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1718"]);
const TextBox1718IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1718"]);
const TextBox1718Cb = useTextBox1718Cb()
const Image417Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image417"]);
const Image417IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image417"]);
const Image417Cb = useImage417Cb()
const TextBox1719Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1719"]);
const TextBox1719IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1719"]);
const TextBox1719Cb = useTextBox1719Cb()
const TextBox1720Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1720"]);
const TextBox1720IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1720"]);
const TextBox1720Cb = useTextBox1720Cb()
const TextBox1721Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1721"]);
const TextBox1721IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1721"]);
const TextBox1721Cb = useTextBox1721Cb()
const TextBox1532Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1532"]);
const TextBox1532IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1532"]);
const TextBox1532Cb = useTextBox1532Cb()
const TextBox1533Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1533"]);
const TextBox1533IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1533"]);
const TextBox1533Cb = useTextBox1533Cb()
const TextBox1534Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1534"]);
const TextBox1534IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1534"]);
const TextBox1534Cb = useTextBox1534Cb()
const TextBox1535Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1535"]);
const TextBox1535IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1535"]);
const TextBox1535Cb = useTextBox1535Cb()
const TextBox1536Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1536"]);
const TextBox1536IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1536"]);
const TextBox1536Cb = useTextBox1536Cb()
const TextBox1537Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1537"]);
const TextBox1537IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1537"]);
const TextBox1537Cb = useTextBox1537Cb()
const TextBox1538Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1538"]);
const TextBox1538IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1538"]);
const TextBox1538Cb = useTextBox1538Cb()
const TextBox1539Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1539"]);
const TextBox1539IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1539"]);
const TextBox1539Cb = useTextBox1539Cb()
const TextBox1540Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1540"]);
const TextBox1540IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1540"]);
const TextBox1540Cb = useTextBox1540Cb()
const TextBox1541Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1541"]);
const TextBox1541IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1541"]);
const TextBox1541Cb = useTextBox1541Cb()
const TextBox1519Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1519"]);
const TextBox1519IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1519"]);
const TextBox1519Cb = useTextBox1519Cb()
const TextBox1520Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1520"]);
const TextBox1520IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1520"]);
const TextBox1520Cb = useTextBox1520Cb()
const TextBox1521Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1521"]);
const TextBox1521IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1521"]);
const TextBox1521Cb = useTextBox1521Cb()
const TextBox1522Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1522"]);
const TextBox1522IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1522"]);
const TextBox1522Cb = useTextBox1522Cb()
const TextBox1523Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1523"]);
const TextBox1523IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1523"]);
const TextBox1523Cb = useTextBox1523Cb()
const TextBox1524Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1524"]);
const TextBox1524IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1524"]);
const TextBox1524Cb = useTextBox1524Cb()
const TextBox1525Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1525"]);
const TextBox1525IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1525"]);
const TextBox1525Cb = useTextBox1525Cb()
const TextBox1526Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1526"]);
const TextBox1526IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1526"]);
const TextBox1526Cb = useTextBox1526Cb()
const TextBox1527Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1527"]);
const TextBox1527IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1527"]);
const TextBox1527Cb = useTextBox1527Cb()
const TextBox1528Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1528"]);
const TextBox1528IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1528"]);
const TextBox1528Cb = useTextBox1528Cb()
const TextBox1529Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1529"]);
const TextBox1529IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1529"]);
const TextBox1529Cb = useTextBox1529Cb()
const TextBox1530Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1530"]);
const TextBox1530IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1530"]);
const TextBox1530Cb = useTextBox1530Cb()
const TextBox1531Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1531"]);
const TextBox1531IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1531"]);
const TextBox1531Cb = useTextBox1531Cb()
const Image381Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image381"]);
const Image381IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image381"]);
const Image381Cb = useImage381Cb()
const TextBox1545Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1545"]);
const TextBox1545IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1545"]);
const TextBox1545Cb = useTextBox1545Cb()
const TextBox1542Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1542"]);
const TextBox1542IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1542"]);
const TextBox1542Cb = useTextBox1542Cb()
const TextBox1543Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1543"]);
const TextBox1543IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1543"]);
const TextBox1543Cb = useTextBox1543Cb()
const TextBox1544Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1544"]);
const TextBox1544IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1544"]);
const TextBox1544Cb = useTextBox1544Cb()
const Image382Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image382"]);
const Image382IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image382"]);
const Image382Cb = useImage382Cb()
const Image385Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image385"]);
const Image385IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image385"]);
const Image385Cb = useImage385Cb()
const TextBox1552Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1552"]);
const TextBox1552IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1552"]);
const TextBox1552Cb = useTextBox1552Cb()
const TextBox1553Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1553"]);
const TextBox1553IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1553"]);
const TextBox1553Cb = useTextBox1553Cb()
const TextBox1554Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1554"]);
const TextBox1554IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1554"]);
const TextBox1554Cb = useTextBox1554Cb()
const TextBox1555Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1555"]);
const TextBox1555IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1555"]);
const TextBox1555Cb = useTextBox1555Cb()
const TextBox1551Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1551"]);
const TextBox1551IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1551"]);
const TextBox1551Cb = useTextBox1551Cb()
const Image384Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image384"]);
const Image384IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image384"]);
const Image384Cb = useImage384Cb()
const TextBox1547Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1547"]);
const TextBox1547IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1547"]);
const TextBox1547Cb = useTextBox1547Cb()
const TextBox1548Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1548"]);
const TextBox1548IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1548"]);
const TextBox1548Cb = useTextBox1548Cb()
const TextBox1549Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1549"]);
const TextBox1549IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1549"]);
const TextBox1549Cb = useTextBox1549Cb()
const TextBox1550Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1550"]);
const TextBox1550IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1550"]);
const TextBox1550Cb = useTextBox1550Cb()
const Image383Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image383"]);
const Image383IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image383"]);
const Image383Cb = useImage383Cb()
const TextBox1546Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1546"]);
const TextBox1546IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1546"]);
const TextBox1546Cb = useTextBox1546Cb()
const Link317Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Link317"]);
const Link317IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Link317"]);
const Link317Cb = useLink317Cb()
const Link318Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Link318"]);
const Link318IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Link318"]);
const Link318Cb = useLink318Cb()
const Link319Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Link319"]);
const Link319IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Link319"]);
const Link319Cb = useLink319Cb()
const TextBox1567Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1567"]);
const TextBox1567IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1567"]);
const TextBox1567Cb = useTextBox1567Cb()
const TextBox1568Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1568"]);
const TextBox1568IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1568"]);
const TextBox1568Cb = useTextBox1568Cb()
const TextBox1569Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1569"]);
const TextBox1569IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1569"]);
const TextBox1569Cb = useTextBox1569Cb()
const Link320Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Link320"]);
const Link320IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Link320"]);
const Link320Cb = useLink320Cb()
const TextBox1570Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1570"]);
const TextBox1570IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1570"]);
const TextBox1570Cb = useTextBox1570Cb()
const Link321Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Link321"]);
const Link321IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Link321"]);
const Link321Cb = useLink321Cb()
const TextBox1571Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1571"]);
const TextBox1571IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1571"]);
const TextBox1571Cb = useTextBox1571Cb()
const Link322Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Link322"]);
const Link322IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Link322"]);
const Link322Cb = useLink322Cb()
const TextBox1572Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1572"]);
const TextBox1572IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1572"]);
const TextBox1572Cb = useTextBox1572Cb()
const TextBox1556Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1556"]);
const TextBox1556IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1556"]);
const TextBox1556Cb = useTextBox1556Cb()
const TextBox1557Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1557"]);
const TextBox1557IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1557"]);
const TextBox1557Cb = useTextBox1557Cb()
const TextBox1558Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1558"]);
const TextBox1558IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1558"]);
const TextBox1558Cb = useTextBox1558Cb()
const TextBox1559Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1559"]);
const TextBox1559IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1559"]);
const TextBox1559Cb = useTextBox1559Cb()
const TextBox1560Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1560"]);
const TextBox1560IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1560"]);
const TextBox1560Cb = useTextBox1560Cb()
const TextBox1561Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1561"]);
const TextBox1561IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1561"]);
const TextBox1561Cb = useTextBox1561Cb()
const TextBox1562Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1562"]);
const TextBox1562IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1562"]);
const TextBox1562Cb = useTextBox1562Cb()
const TextBox1563Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1563"]);
const TextBox1563IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1563"]);
const TextBox1563Cb = useTextBox1563Cb()
const TextBox1564Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1564"]);
const TextBox1564IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1564"]);
const TextBox1564Cb = useTextBox1564Cb()
const TextBox1566Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1566"]);
const TextBox1566IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1566"]);
const TextBox1566Cb = useTextBox1566Cb()
const Image387Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image387"]);
const Image387IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image387"]);
const Image387Cb = useImage387Cb()
const TextBox1565Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1565"]);
const TextBox1565IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1565"]);
const TextBox1565Cb = useTextBox1565Cb()
const Image386Props = useStore((state)=>state["logo-design-trends-to-avoid"]["Image386"]);
const Image386IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["Image386"]);
const Image386Cb = useImage386Cb()
const TextBox1573Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1573"]);
const TextBox1573IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1573"]);
const TextBox1573Cb = useTextBox1573Cb()
const TextBox1574Props = useStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1574"]);
const TextBox1574IoProps = useIoStore((state)=>state["logo-design-trends-to-avoid"]["TextBox1574"]);
const TextBox1574Cb = useTextBox1574Cb()

  return (<>
  <Flex7 className="p-logo-design-trends-to-avoid Flex1420 bpt" {...Flex1420Props} {...Flex1420Cb} {...Flex1420IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1419 bpt" {...Flex1419Props} {...Flex1419Cb} {...Flex1419IoProps}>
<Image7 className="p-logo-design-trends-to-avoid Image385 bpt" {...Image385Props} {...Image385Cb} {...Image385IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1418 bpt" {...Flex1418Props} {...Flex1418Cb} {...Flex1418IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1555 bpt" {...TextBox1555Props} {...TextBox1555Cb} {...TextBox1555IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1552 bpt" {...TextBox1552Props} {...TextBox1552Cb} {...TextBox1552IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1553 bpt" {...TextBox1553Props} {...TextBox1553Cb} {...TextBox1553IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1554 bpt" {...TextBox1554Props} {...TextBox1554Cb} {...TextBox1554IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1416 bpt" {...Flex1416Props} {...Flex1416Cb} {...Flex1416IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1551 bpt" {...TextBox1551Props} {...TextBox1551Cb} {...TextBox1551IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image384 bpt" {...Image384Props} {...Image384Cb} {...Image384IoProps}/>
</Flex7>
</Flex7>
<Menu7 className="p-logo-design-trends-to-avoid Menu24 bpt" {...Menu24Props} {...Menu24Cb} {...Menu24IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1417 bpt" {...Flex1417Props} {...Flex1417Cb} {...Flex1417IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1415 bpt" {...Flex1415Props} {...Flex1415Cb} {...Flex1415IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1414 bpt" {...Flex1414Props} {...Flex1414Cb} {...Flex1414IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1547 bpt" {...TextBox1547Props} {...TextBox1547Cb} {...TextBox1547IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1550 bpt" {...TextBox1550Props} {...TextBox1550Cb} {...TextBox1550IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1549 bpt" {...TextBox1549Props} {...TextBox1549Cb} {...TextBox1549IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1548 bpt" {...TextBox1548Props} {...TextBox1548Cb} {...TextBox1548IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1413 bpt" {...Flex1413Props} {...Flex1413Cb} {...Flex1413IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1546 bpt" {...TextBox1546Props} {...TextBox1546Cb} {...TextBox1546IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image383 bpt" {...Image383Props} {...Image383Cb} {...Image383IoProps}/>
</Flex7>
</Flex7>
</Flex7>
</Flex7>
</Menu7>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1412 bpt" {...Flex1412Props} {...Flex1412Cb} {...Flex1412IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1411 bpt" {...Flex1411Props} {...Flex1411Cb} {...Flex1411IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1409 bpt" {...Flex1409Props} {...Flex1409Cb} {...Flex1409IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1407 bpt" {...Flex1407Props} {...Flex1407Cb} {...Flex1407IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1542 bpt" {...TextBox1542Props} {...TextBox1542Cb} {...TextBox1542IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1543 bpt" {...TextBox1543Props} {...TextBox1543Cb} {...TextBox1543IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1544 bpt" {...TextBox1544Props} {...TextBox1544Cb} {...TextBox1544IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1545 bpt" {...TextBox1545Props} {...TextBox1545Cb} {...TextBox1545IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1408 bpt" {...Flex1408Props} {...Flex1408Cb} {...Flex1408IoProps}>
<Image7 className="p-logo-design-trends-to-avoid Image381 bpt" {...Image381Props} {...Image381Cb} {...Image381IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1410 bpt" {...Flex1410Props} {...Flex1410Cb} {...Flex1410IoProps}>
<Image7 className="p-logo-design-trends-to-avoid Image382 bpt" {...Image382Props} {...Image382Cb} {...Image382IoProps}/>
</Flex7>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1406 bpt" {...Flex1406Props} {...Flex1406Cb} {...Flex1406IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1405 bpt" {...Flex1405Props} {...Flex1405Cb} {...Flex1405IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1404 bpt" {...Flex1404Props} {...Flex1404Cb} {...Flex1404IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1540 bpt" {...TextBox1540Props} {...TextBox1540Cb} {...TextBox1540IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1541 bpt" {...TextBox1541Props} {...TextBox1541Cb} {...TextBox1541IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1539 bpt" {...TextBox1539Props} {...TextBox1539Cb} {...TextBox1539IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1403 bpt" {...Flex1403Props} {...Flex1403Cb} {...Flex1403IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1531 bpt" {...TextBox1531Props} {...TextBox1531Cb} {...TextBox1531IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1535 bpt" {...TextBox1535Props} {...TextBox1535Cb} {...TextBox1535IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1534 bpt" {...TextBox1534Props} {...TextBox1534Cb} {...TextBox1534IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1401 bpt" {...Flex1401Props} {...Flex1401Cb} {...Flex1401IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1395 bpt" {...Flex1395Props} {...Flex1395Cb} {...Flex1395IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1520 bpt" {...TextBox1520Props} {...TextBox1520Cb} {...TextBox1520IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1519 bpt" {...TextBox1519Props} {...TextBox1519Cb} {...TextBox1519IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1396 bpt" {...Flex1396Props} {...Flex1396Cb} {...Flex1396IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1521 bpt" {...TextBox1521Props} {...TextBox1521Cb} {...TextBox1521IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1522 bpt" {...TextBox1522Props} {...TextBox1522Cb} {...TextBox1522IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1397 bpt" {...Flex1397Props} {...Flex1397Cb} {...Flex1397IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1523 bpt" {...TextBox1523Props} {...TextBox1523Cb} {...TextBox1523IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1524 bpt" {...TextBox1524Props} {...TextBox1524Cb} {...TextBox1524IoProps}/>
</Flex7>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1538 bpt" {...TextBox1538Props} {...TextBox1538Cb} {...TextBox1538IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1533 bpt" {...TextBox1533Props} {...TextBox1533Cb} {...TextBox1533IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1402 bpt" {...Flex1402Props} {...Flex1402Cb} {...Flex1402IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1400 bpt" {...Flex1400Props} {...Flex1400Cb} {...Flex1400IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1529 bpt" {...TextBox1529Props} {...TextBox1529Cb} {...TextBox1529IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1530 bpt" {...TextBox1530Props} {...TextBox1530Cb} {...TextBox1530IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1399 bpt" {...Flex1399Props} {...Flex1399Cb} {...Flex1399IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1528 bpt" {...TextBox1528Props} {...TextBox1528Cb} {...TextBox1528IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1527 bpt" {...TextBox1527Props} {...TextBox1527Cb} {...TextBox1527IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1398 bpt" {...Flex1398Props} {...Flex1398Cb} {...Flex1398IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1526 bpt" {...TextBox1526Props} {...TextBox1526Cb} {...TextBox1526IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1525 bpt" {...TextBox1525Props} {...TextBox1525Cb} {...TextBox1525IoProps}/>
</Flex7>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1537 bpt" {...TextBox1537Props} {...TextBox1537Cb} {...TextBox1537IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1532 bpt" {...TextBox1532Props} {...TextBox1532Cb} {...TextBox1532IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1536 bpt" {...TextBox1536Props} {...TextBox1536Cb} {...TextBox1536IoProps}/>
</Flex7>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1394 bpt" {...Flex1394Props} {...Flex1394Cb} {...Flex1394IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1393 bpt" {...Flex1393Props} {...Flex1393Cb} {...Flex1393IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1392 bpt" {...Flex1392Props} {...Flex1392Cb} {...Flex1392IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1518 bpt" {...TextBox1518Props} {...TextBox1518Cb} {...TextBox1518IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1517 bpt" {...TextBox1517Props} {...TextBox1517Cb} {...TextBox1517IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1530 bpt" {...Flex1530Props} {...Flex1530Cb} {...Flex1530IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1525 bpt" {...Flex1525Props} {...Flex1525Cb} {...Flex1525IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1515 bpt" {...Flex1515Props} {...Flex1515Cb} {...Flex1515IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1702 bpt" {...TextBox1702Props} {...TextBox1702Cb} {...TextBox1702IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1703 bpt" {...TextBox1703Props} {...TextBox1703Cb} {...TextBox1703IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1704 bpt" {...TextBox1704Props} {...TextBox1704Cb} {...TextBox1704IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1722 bpt" {...TextBox1722Props} {...TextBox1722Cb} {...TextBox1722IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1516 bpt" {...Flex1516Props} {...Flex1516Cb} {...Flex1516IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1705 bpt" {...TextBox1705Props} {...TextBox1705Cb} {...TextBox1705IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image413 bpt" {...Image413Props} {...Image413Cb} {...Image413IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1526 bpt" {...Flex1526Props} {...Flex1526Cb} {...Flex1526IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1518 bpt" {...Flex1518Props} {...Flex1518Cb} {...Flex1518IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1709 bpt" {...TextBox1709Props} {...TextBox1709Cb} {...TextBox1709IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1708 bpt" {...TextBox1708Props} {...TextBox1708Cb} {...TextBox1708IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1707 bpt" {...TextBox1707Props} {...TextBox1707Cb} {...TextBox1707IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1723 bpt" {...TextBox1723Props} {...TextBox1723Cb} {...TextBox1723IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1517 bpt" {...Flex1517Props} {...Flex1517Cb} {...Flex1517IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1706 bpt" {...TextBox1706Props} {...TextBox1706Cb} {...TextBox1706IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image414 bpt" {...Image414Props} {...Image414Cb} {...Image414IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1527 bpt" {...Flex1527Props} {...Flex1527Cb} {...Flex1527IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1520 bpt" {...Flex1520Props} {...Flex1520Cb} {...Flex1520IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1713 bpt" {...TextBox1713Props} {...TextBox1713Cb} {...TextBox1713IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1712 bpt" {...TextBox1712Props} {...TextBox1712Cb} {...TextBox1712IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1711 bpt" {...TextBox1711Props} {...TextBox1711Cb} {...TextBox1711IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1724 bpt" {...TextBox1724Props} {...TextBox1724Cb} {...TextBox1724IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1519 bpt" {...Flex1519Props} {...Flex1519Cb} {...Flex1519IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1710 bpt" {...TextBox1710Props} {...TextBox1710Cb} {...TextBox1710IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image415 bpt" {...Image415Props} {...Image415Cb} {...Image415IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1528 bpt" {...Flex1528Props} {...Flex1528Cb} {...Flex1528IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1522 bpt" {...Flex1522Props} {...Flex1522Cb} {...Flex1522IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1717 bpt" {...TextBox1717Props} {...TextBox1717Cb} {...TextBox1717IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1716 bpt" {...TextBox1716Props} {...TextBox1716Cb} {...TextBox1716IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1715 bpt" {...TextBox1715Props} {...TextBox1715Cb} {...TextBox1715IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1725 bpt" {...TextBox1725Props} {...TextBox1725Cb} {...TextBox1725IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1521 bpt" {...Flex1521Props} {...Flex1521Cb} {...Flex1521IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1714 bpt" {...TextBox1714Props} {...TextBox1714Cb} {...TextBox1714IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image416 bpt" {...Image416Props} {...Image416Cb} {...Image416IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1529 bpt" {...Flex1529Props} {...Flex1529Cb} {...Flex1529IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1524 bpt" {...Flex1524Props} {...Flex1524Cb} {...Flex1524IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1721 bpt" {...TextBox1721Props} {...TextBox1721Cb} {...TextBox1721IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1720 bpt" {...TextBox1720Props} {...TextBox1720Cb} {...TextBox1720IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1719 bpt" {...TextBox1719Props} {...TextBox1719Cb} {...TextBox1719IoProps}/>
</Flex7>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1726 bpt" {...TextBox1726Props} {...TextBox1726Cb} {...TextBox1726IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1523 bpt" {...Flex1523Props} {...Flex1523Cb} {...Flex1523IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1718 bpt" {...TextBox1718Props} {...TextBox1718Cb} {...TextBox1718IoProps}/>
<Image7 className="p-logo-design-trends-to-avoid Image417 bpt" {...Image417Props} {...Image417Cb} {...Image417IoProps}/>
</Flex7>
</Flex7>
</Flex7>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1431 bpt" {...Flex1431Props} {...Flex1431Cb} {...Flex1431IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1430 bpt" {...Flex1430Props} {...Flex1430Cb} {...Flex1430IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1429 bpt" {...Flex1429Props} {...Flex1429Cb} {...Flex1429IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1574 bpt" {...TextBox1574Props} {...TextBox1574Cb} {...TextBox1574IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1573 bpt" {...TextBox1573Props} {...TextBox1573Cb} {...TextBox1573IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1428 bpt" {...Flex1428Props} {...Flex1428Cb} {...Flex1428IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1426 bpt" {...Flex1426Props} {...Flex1426Cb} {...Flex1426IoProps}>
<Image7 className="p-logo-design-trends-to-avoid Image387 bpt" {...Image387Props} {...Image387Cb} {...Image387IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1566 bpt" {...TextBox1566Props} {...TextBox1566Cb} {...TextBox1566IoProps}/>
<Flex7 className="p-logo-design-trends-to-avoid Flex1424 bpt" {...Flex1424Props} {...Flex1424Cb} {...Flex1424IoProps}>
<Image7 className="p-logo-design-trends-to-avoid Image386 bpt" {...Image386Props} {...Image386Cb} {...Image386IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1565 bpt" {...TextBox1565Props} {...TextBox1565Cb} {...TextBox1565IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1425 bpt" {...Flex1425Props} {...Flex1425Cb} {...Flex1425IoProps}>
<Flex7 className="p-logo-design-trends-to-avoid Flex1421 bpt" {...Flex1421Props} {...Flex1421Cb} {...Flex1421IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1558 bpt" {...TextBox1558Props} {...TextBox1558Cb} {...TextBox1558IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1556 bpt" {...TextBox1556Props} {...TextBox1556Cb} {...TextBox1556IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1557 bpt" {...TextBox1557Props} {...TextBox1557Cb} {...TextBox1557IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1423 bpt" {...Flex1423Props} {...Flex1423Cb} {...Flex1423IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1564 bpt" {...TextBox1564Props} {...TextBox1564Cb} {...TextBox1564IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1563 bpt" {...TextBox1563Props} {...TextBox1563Cb} {...TextBox1563IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1562 bpt" {...TextBox1562Props} {...TextBox1562Cb} {...TextBox1562IoProps}/>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1422 bpt" {...Flex1422Props} {...Flex1422Cb} {...Flex1422IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1561 bpt" {...TextBox1561Props} {...TextBox1561Cb} {...TextBox1561IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1560 bpt" {...TextBox1560Props} {...TextBox1560Cb} {...TextBox1560IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1559 bpt" {...TextBox1559Props} {...TextBox1559Cb} {...TextBox1559IoProps}/>
</Flex7>
</Flex7>
</Flex7>
<Flex7 className="p-logo-design-trends-to-avoid Flex1427 bpt" {...Flex1427Props} {...Flex1427Cb} {...Flex1427IoProps}>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1572 bpt" {...TextBox1572Props} {...TextBox1572Cb} {...TextBox1572IoProps}/>
<Link7 className="p-logo-design-trends-to-avoid Link322 bpt" {...Link322Props} {...Link322Cb} {...Link322IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1571 bpt" {...TextBox1571Props} {...TextBox1571Cb} {...TextBox1571IoProps}/>
<Link7 className="p-logo-design-trends-to-avoid Link321 bpt" {...Link321Props} {...Link321Cb} {...Link321IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1570 bpt" {...TextBox1570Props} {...TextBox1570Cb} {...TextBox1570IoProps}/>
<Link7 className="p-logo-design-trends-to-avoid Link319 bpt" {...Link319Props} {...Link319Cb} {...Link319IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1569 bpt" {...TextBox1569Props} {...TextBox1569Cb} {...TextBox1569IoProps}/>
<Link7 className="p-logo-design-trends-to-avoid Link318 bpt" {...Link318Props} {...Link318Cb} {...Link318IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1568 bpt" {...TextBox1568Props} {...TextBox1568Cb} {...TextBox1568IoProps}/>
<Link7 className="p-logo-design-trends-to-avoid Link320 bpt" {...Link320Props} {...Link320Cb} {...Link320IoProps}/>
<TextBox7 className="p-logo-design-trends-to-avoid TextBox1567 bpt" {...TextBox1567Props} {...TextBox1567Cb} {...TextBox1567IoProps}/>
<Link7 className="p-logo-design-trends-to-avoid Link317 bpt" {...Link317Props} {...Link317Cb} {...Link317IoProps}/>
</Flex7>
</Flex7>
</Flex7>
  </>);
}
