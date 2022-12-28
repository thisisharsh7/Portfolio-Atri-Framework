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
import { useFlex1582Cb, useFlex1581Cb, useFlex1580Cb, useFlex1578Cb, useMenu26Cb, useFlex1579Cb, useFlex1577Cb, useFlex1576Cb, useFlex1575Cb, useFlex1583Cb, useFlex1584Cb, useFlex1585Cb, useFlex1586Cb, useFlex1587Cb, useFlex1590Cb, useFlex1589Cb, useFlex1639Cb, useFlex1637Cb, useFlex1636Cb, useFlex1638Cb, useFlex1643Cb, useFlex1641Cb, useFlex1640Cb, useFlex1642Cb, useFlex1647Cb, useFlex1645Cb, useFlex1644Cb, useFlex1646Cb, useFlex1651Cb, useFlex1649Cb, useFlex1648Cb, useFlex1650Cb, useFlex1662Cb, useFlex1661Cb, useFlex1658Cb, useFlex1659Cb, useFlex1656Cb, useFlex1652Cb, useFlex1653Cb, useFlex1654Cb, useFlex1657Cb, useFlex1655Cb, useFlex1660Cb, useImage445Cb, useTextBox1776Cb, useTextBox1777Cb, useTextBox1778Cb, useTextBox1779Cb, useTextBox1775Cb, useImage444Cb, useTextBox1771Cb, useTextBox1772Cb, useTextBox1773Cb, useTextBox1774Cb, useImage443Cb, useTextBox1770Cb, useImage446Cb, useTextBox1784Cb, useTextBox1785Cb, useImage447Cb, useTextBox1783Cb, useTextBox1820Cb, useTextBox1821Cb, useTextBox1819Cb, useImage470Cb, useImage471Cb, useTextBox1823Cb, useTextBox1824Cb, useTextBox1822Cb, useImage472Cb, useImage473Cb, useTextBox1826Cb, useTextBox1827Cb, useTextBox1825Cb, useImage474Cb, useImage475Cb, useTextBox1829Cb, useTextBox1830Cb, useTextBox1828Cb, useImage476Cb, useImage477Cb, useLink323Cb, useLink324Cb, useLink325Cb, useTextBox1842Cb, useTextBox1843Cb, useTextBox1844Cb, useLink326Cb, useTextBox1845Cb, useLink327Cb, useTextBox1846Cb, useLink328Cb, useTextBox1847Cb, useTextBox1831Cb, useTextBox1832Cb, useTextBox1833Cb, useTextBox1834Cb, useTextBox1835Cb, useTextBox1836Cb, useTextBox1837Cb, useTextBox1838Cb, useTextBox1839Cb, useTextBox1841Cb, useImage479Cb, useTextBox1840Cb, useImage478Cb, useTextBox1848Cb, useTextBox1849Cb } from "../page-cbs/Projects";
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

  const Flex1582Props = useStore((state)=>state["Projects"]["Flex1582"]);
const Flex1582IoProps = useIoStore((state)=>state["Projects"]["Flex1582"]);
const Flex1582Cb = useFlex1582Cb()
const Flex1581Props = useStore((state)=>state["Projects"]["Flex1581"]);
const Flex1581IoProps = useIoStore((state)=>state["Projects"]["Flex1581"]);
const Flex1581Cb = useFlex1581Cb()
const Flex1580Props = useStore((state)=>state["Projects"]["Flex1580"]);
const Flex1580IoProps = useIoStore((state)=>state["Projects"]["Flex1580"]);
const Flex1580Cb = useFlex1580Cb()
const Flex1578Props = useStore((state)=>state["Projects"]["Flex1578"]);
const Flex1578IoProps = useIoStore((state)=>state["Projects"]["Flex1578"]);
const Flex1578Cb = useFlex1578Cb()
const Menu26Props = useStore((state)=>state["Projects"]["Menu26"]);
const Menu26IoProps = useIoStore((state)=>state["Projects"]["Menu26"]);
const Menu26Cb = useMenu26Cb()
const Flex1579Props = useStore((state)=>state["Projects"]["Flex1579"]);
const Flex1579IoProps = useIoStore((state)=>state["Projects"]["Flex1579"]);
const Flex1579Cb = useFlex1579Cb()
const Flex1577Props = useStore((state)=>state["Projects"]["Flex1577"]);
const Flex1577IoProps = useIoStore((state)=>state["Projects"]["Flex1577"]);
const Flex1577Cb = useFlex1577Cb()
const Flex1576Props = useStore((state)=>state["Projects"]["Flex1576"]);
const Flex1576IoProps = useIoStore((state)=>state["Projects"]["Flex1576"]);
const Flex1576Cb = useFlex1576Cb()
const Flex1575Props = useStore((state)=>state["Projects"]["Flex1575"]);
const Flex1575IoProps = useIoStore((state)=>state["Projects"]["Flex1575"]);
const Flex1575Cb = useFlex1575Cb()
const Flex1583Props = useStore((state)=>state["Projects"]["Flex1583"]);
const Flex1583IoProps = useIoStore((state)=>state["Projects"]["Flex1583"]);
const Flex1583Cb = useFlex1583Cb()
const Flex1584Props = useStore((state)=>state["Projects"]["Flex1584"]);
const Flex1584IoProps = useIoStore((state)=>state["Projects"]["Flex1584"]);
const Flex1584Cb = useFlex1584Cb()
const Flex1585Props = useStore((state)=>state["Projects"]["Flex1585"]);
const Flex1585IoProps = useIoStore((state)=>state["Projects"]["Flex1585"]);
const Flex1585Cb = useFlex1585Cb()
const Flex1586Props = useStore((state)=>state["Projects"]["Flex1586"]);
const Flex1586IoProps = useIoStore((state)=>state["Projects"]["Flex1586"]);
const Flex1586Cb = useFlex1586Cb()
const Flex1587Props = useStore((state)=>state["Projects"]["Flex1587"]);
const Flex1587IoProps = useIoStore((state)=>state["Projects"]["Flex1587"]);
const Flex1587Cb = useFlex1587Cb()
const Flex1590Props = useStore((state)=>state["Projects"]["Flex1590"]);
const Flex1590IoProps = useIoStore((state)=>state["Projects"]["Flex1590"]);
const Flex1590Cb = useFlex1590Cb()
const Flex1589Props = useStore((state)=>state["Projects"]["Flex1589"]);
const Flex1589IoProps = useIoStore((state)=>state["Projects"]["Flex1589"]);
const Flex1589Cb = useFlex1589Cb()
const Flex1639Props = useStore((state)=>state["Projects"]["Flex1639"]);
const Flex1639IoProps = useIoStore((state)=>state["Projects"]["Flex1639"]);
const Flex1639Cb = useFlex1639Cb()
const Flex1637Props = useStore((state)=>state["Projects"]["Flex1637"]);
const Flex1637IoProps = useIoStore((state)=>state["Projects"]["Flex1637"]);
const Flex1637Cb = useFlex1637Cb()
const Flex1636Props = useStore((state)=>state["Projects"]["Flex1636"]);
const Flex1636IoProps = useIoStore((state)=>state["Projects"]["Flex1636"]);
const Flex1636Cb = useFlex1636Cb()
const Flex1638Props = useStore((state)=>state["Projects"]["Flex1638"]);
const Flex1638IoProps = useIoStore((state)=>state["Projects"]["Flex1638"]);
const Flex1638Cb = useFlex1638Cb()
const Flex1643Props = useStore((state)=>state["Projects"]["Flex1643"]);
const Flex1643IoProps = useIoStore((state)=>state["Projects"]["Flex1643"]);
const Flex1643Cb = useFlex1643Cb()
const Flex1641Props = useStore((state)=>state["Projects"]["Flex1641"]);
const Flex1641IoProps = useIoStore((state)=>state["Projects"]["Flex1641"]);
const Flex1641Cb = useFlex1641Cb()
const Flex1640Props = useStore((state)=>state["Projects"]["Flex1640"]);
const Flex1640IoProps = useIoStore((state)=>state["Projects"]["Flex1640"]);
const Flex1640Cb = useFlex1640Cb()
const Flex1642Props = useStore((state)=>state["Projects"]["Flex1642"]);
const Flex1642IoProps = useIoStore((state)=>state["Projects"]["Flex1642"]);
const Flex1642Cb = useFlex1642Cb()
const Flex1647Props = useStore((state)=>state["Projects"]["Flex1647"]);
const Flex1647IoProps = useIoStore((state)=>state["Projects"]["Flex1647"]);
const Flex1647Cb = useFlex1647Cb()
const Flex1645Props = useStore((state)=>state["Projects"]["Flex1645"]);
const Flex1645IoProps = useIoStore((state)=>state["Projects"]["Flex1645"]);
const Flex1645Cb = useFlex1645Cb()
const Flex1644Props = useStore((state)=>state["Projects"]["Flex1644"]);
const Flex1644IoProps = useIoStore((state)=>state["Projects"]["Flex1644"]);
const Flex1644Cb = useFlex1644Cb()
const Flex1646Props = useStore((state)=>state["Projects"]["Flex1646"]);
const Flex1646IoProps = useIoStore((state)=>state["Projects"]["Flex1646"]);
const Flex1646Cb = useFlex1646Cb()
const Flex1651Props = useStore((state)=>state["Projects"]["Flex1651"]);
const Flex1651IoProps = useIoStore((state)=>state["Projects"]["Flex1651"]);
const Flex1651Cb = useFlex1651Cb()
const Flex1649Props = useStore((state)=>state["Projects"]["Flex1649"]);
const Flex1649IoProps = useIoStore((state)=>state["Projects"]["Flex1649"]);
const Flex1649Cb = useFlex1649Cb()
const Flex1648Props = useStore((state)=>state["Projects"]["Flex1648"]);
const Flex1648IoProps = useIoStore((state)=>state["Projects"]["Flex1648"]);
const Flex1648Cb = useFlex1648Cb()
const Flex1650Props = useStore((state)=>state["Projects"]["Flex1650"]);
const Flex1650IoProps = useIoStore((state)=>state["Projects"]["Flex1650"]);
const Flex1650Cb = useFlex1650Cb()
const Flex1662Props = useStore((state)=>state["Projects"]["Flex1662"]);
const Flex1662IoProps = useIoStore((state)=>state["Projects"]["Flex1662"]);
const Flex1662Cb = useFlex1662Cb()
const Flex1661Props = useStore((state)=>state["Projects"]["Flex1661"]);
const Flex1661IoProps = useIoStore((state)=>state["Projects"]["Flex1661"]);
const Flex1661Cb = useFlex1661Cb()
const Flex1658Props = useStore((state)=>state["Projects"]["Flex1658"]);
const Flex1658IoProps = useIoStore((state)=>state["Projects"]["Flex1658"]);
const Flex1658Cb = useFlex1658Cb()
const Flex1659Props = useStore((state)=>state["Projects"]["Flex1659"]);
const Flex1659IoProps = useIoStore((state)=>state["Projects"]["Flex1659"]);
const Flex1659Cb = useFlex1659Cb()
const Flex1656Props = useStore((state)=>state["Projects"]["Flex1656"]);
const Flex1656IoProps = useIoStore((state)=>state["Projects"]["Flex1656"]);
const Flex1656Cb = useFlex1656Cb()
const Flex1652Props = useStore((state)=>state["Projects"]["Flex1652"]);
const Flex1652IoProps = useIoStore((state)=>state["Projects"]["Flex1652"]);
const Flex1652Cb = useFlex1652Cb()
const Flex1653Props = useStore((state)=>state["Projects"]["Flex1653"]);
const Flex1653IoProps = useIoStore((state)=>state["Projects"]["Flex1653"]);
const Flex1653Cb = useFlex1653Cb()
const Flex1654Props = useStore((state)=>state["Projects"]["Flex1654"]);
const Flex1654IoProps = useIoStore((state)=>state["Projects"]["Flex1654"]);
const Flex1654Cb = useFlex1654Cb()
const Flex1657Props = useStore((state)=>state["Projects"]["Flex1657"]);
const Flex1657IoProps = useIoStore((state)=>state["Projects"]["Flex1657"]);
const Flex1657Cb = useFlex1657Cb()
const Flex1655Props = useStore((state)=>state["Projects"]["Flex1655"]);
const Flex1655IoProps = useIoStore((state)=>state["Projects"]["Flex1655"]);
const Flex1655Cb = useFlex1655Cb()
const Flex1660Props = useStore((state)=>state["Projects"]["Flex1660"]);
const Flex1660IoProps = useIoStore((state)=>state["Projects"]["Flex1660"]);
const Flex1660Cb = useFlex1660Cb()
const Image445Props = useStore((state)=>state["Projects"]["Image445"]);
const Image445IoProps = useIoStore((state)=>state["Projects"]["Image445"]);
const Image445Cb = useImage445Cb()
const TextBox1776Props = useStore((state)=>state["Projects"]["TextBox1776"]);
const TextBox1776IoProps = useIoStore((state)=>state["Projects"]["TextBox1776"]);
const TextBox1776Cb = useTextBox1776Cb()
const TextBox1777Props = useStore((state)=>state["Projects"]["TextBox1777"]);
const TextBox1777IoProps = useIoStore((state)=>state["Projects"]["TextBox1777"]);
const TextBox1777Cb = useTextBox1777Cb()
const TextBox1778Props = useStore((state)=>state["Projects"]["TextBox1778"]);
const TextBox1778IoProps = useIoStore((state)=>state["Projects"]["TextBox1778"]);
const TextBox1778Cb = useTextBox1778Cb()
const TextBox1779Props = useStore((state)=>state["Projects"]["TextBox1779"]);
const TextBox1779IoProps = useIoStore((state)=>state["Projects"]["TextBox1779"]);
const TextBox1779Cb = useTextBox1779Cb()
const TextBox1775Props = useStore((state)=>state["Projects"]["TextBox1775"]);
const TextBox1775IoProps = useIoStore((state)=>state["Projects"]["TextBox1775"]);
const TextBox1775Cb = useTextBox1775Cb()
const Image444Props = useStore((state)=>state["Projects"]["Image444"]);
const Image444IoProps = useIoStore((state)=>state["Projects"]["Image444"]);
const Image444Cb = useImage444Cb()
const TextBox1771Props = useStore((state)=>state["Projects"]["TextBox1771"]);
const TextBox1771IoProps = useIoStore((state)=>state["Projects"]["TextBox1771"]);
const TextBox1771Cb = useTextBox1771Cb()
const TextBox1772Props = useStore((state)=>state["Projects"]["TextBox1772"]);
const TextBox1772IoProps = useIoStore((state)=>state["Projects"]["TextBox1772"]);
const TextBox1772Cb = useTextBox1772Cb()
const TextBox1773Props = useStore((state)=>state["Projects"]["TextBox1773"]);
const TextBox1773IoProps = useIoStore((state)=>state["Projects"]["TextBox1773"]);
const TextBox1773Cb = useTextBox1773Cb()
const TextBox1774Props = useStore((state)=>state["Projects"]["TextBox1774"]);
const TextBox1774IoProps = useIoStore((state)=>state["Projects"]["TextBox1774"]);
const TextBox1774Cb = useTextBox1774Cb()
const Image443Props = useStore((state)=>state["Projects"]["Image443"]);
const Image443IoProps = useIoStore((state)=>state["Projects"]["Image443"]);
const Image443Cb = useImage443Cb()
const TextBox1770Props = useStore((state)=>state["Projects"]["TextBox1770"]);
const TextBox1770IoProps = useIoStore((state)=>state["Projects"]["TextBox1770"]);
const TextBox1770Cb = useTextBox1770Cb()
const Image446Props = useStore((state)=>state["Projects"]["Image446"]);
const Image446IoProps = useIoStore((state)=>state["Projects"]["Image446"]);
const Image446Cb = useImage446Cb()
const TextBox1784Props = useStore((state)=>state["Projects"]["TextBox1784"]);
const TextBox1784IoProps = useIoStore((state)=>state["Projects"]["TextBox1784"]);
const TextBox1784Cb = useTextBox1784Cb()
const TextBox1785Props = useStore((state)=>state["Projects"]["TextBox1785"]);
const TextBox1785IoProps = useIoStore((state)=>state["Projects"]["TextBox1785"]);
const TextBox1785Cb = useTextBox1785Cb()
const Image447Props = useStore((state)=>state["Projects"]["Image447"]);
const Image447IoProps = useIoStore((state)=>state["Projects"]["Image447"]);
const Image447Cb = useImage447Cb()
const TextBox1783Props = useStore((state)=>state["Projects"]["TextBox1783"]);
const TextBox1783IoProps = useIoStore((state)=>state["Projects"]["TextBox1783"]);
const TextBox1783Cb = useTextBox1783Cb()
const TextBox1820Props = useStore((state)=>state["Projects"]["TextBox1820"]);
const TextBox1820IoProps = useIoStore((state)=>state["Projects"]["TextBox1820"]);
const TextBox1820Cb = useTextBox1820Cb()
const TextBox1821Props = useStore((state)=>state["Projects"]["TextBox1821"]);
const TextBox1821IoProps = useIoStore((state)=>state["Projects"]["TextBox1821"]);
const TextBox1821Cb = useTextBox1821Cb()
const TextBox1819Props = useStore((state)=>state["Projects"]["TextBox1819"]);
const TextBox1819IoProps = useIoStore((state)=>state["Projects"]["TextBox1819"]);
const TextBox1819Cb = useTextBox1819Cb()
const Image470Props = useStore((state)=>state["Projects"]["Image470"]);
const Image470IoProps = useIoStore((state)=>state["Projects"]["Image470"]);
const Image470Cb = useImage470Cb()
const Image471Props = useStore((state)=>state["Projects"]["Image471"]);
const Image471IoProps = useIoStore((state)=>state["Projects"]["Image471"]);
const Image471Cb = useImage471Cb()
const TextBox1823Props = useStore((state)=>state["Projects"]["TextBox1823"]);
const TextBox1823IoProps = useIoStore((state)=>state["Projects"]["TextBox1823"]);
const TextBox1823Cb = useTextBox1823Cb()
const TextBox1824Props = useStore((state)=>state["Projects"]["TextBox1824"]);
const TextBox1824IoProps = useIoStore((state)=>state["Projects"]["TextBox1824"]);
const TextBox1824Cb = useTextBox1824Cb()
const TextBox1822Props = useStore((state)=>state["Projects"]["TextBox1822"]);
const TextBox1822IoProps = useIoStore((state)=>state["Projects"]["TextBox1822"]);
const TextBox1822Cb = useTextBox1822Cb()
const Image472Props = useStore((state)=>state["Projects"]["Image472"]);
const Image472IoProps = useIoStore((state)=>state["Projects"]["Image472"]);
const Image472Cb = useImage472Cb()
const Image473Props = useStore((state)=>state["Projects"]["Image473"]);
const Image473IoProps = useIoStore((state)=>state["Projects"]["Image473"]);
const Image473Cb = useImage473Cb()
const TextBox1826Props = useStore((state)=>state["Projects"]["TextBox1826"]);
const TextBox1826IoProps = useIoStore((state)=>state["Projects"]["TextBox1826"]);
const TextBox1826Cb = useTextBox1826Cb()
const TextBox1827Props = useStore((state)=>state["Projects"]["TextBox1827"]);
const TextBox1827IoProps = useIoStore((state)=>state["Projects"]["TextBox1827"]);
const TextBox1827Cb = useTextBox1827Cb()
const TextBox1825Props = useStore((state)=>state["Projects"]["TextBox1825"]);
const TextBox1825IoProps = useIoStore((state)=>state["Projects"]["TextBox1825"]);
const TextBox1825Cb = useTextBox1825Cb()
const Image474Props = useStore((state)=>state["Projects"]["Image474"]);
const Image474IoProps = useIoStore((state)=>state["Projects"]["Image474"]);
const Image474Cb = useImage474Cb()
const Image475Props = useStore((state)=>state["Projects"]["Image475"]);
const Image475IoProps = useIoStore((state)=>state["Projects"]["Image475"]);
const Image475Cb = useImage475Cb()
const TextBox1829Props = useStore((state)=>state["Projects"]["TextBox1829"]);
const TextBox1829IoProps = useIoStore((state)=>state["Projects"]["TextBox1829"]);
const TextBox1829Cb = useTextBox1829Cb()
const TextBox1830Props = useStore((state)=>state["Projects"]["TextBox1830"]);
const TextBox1830IoProps = useIoStore((state)=>state["Projects"]["TextBox1830"]);
const TextBox1830Cb = useTextBox1830Cb()
const TextBox1828Props = useStore((state)=>state["Projects"]["TextBox1828"]);
const TextBox1828IoProps = useIoStore((state)=>state["Projects"]["TextBox1828"]);
const TextBox1828Cb = useTextBox1828Cb()
const Image476Props = useStore((state)=>state["Projects"]["Image476"]);
const Image476IoProps = useIoStore((state)=>state["Projects"]["Image476"]);
const Image476Cb = useImage476Cb()
const Image477Props = useStore((state)=>state["Projects"]["Image477"]);
const Image477IoProps = useIoStore((state)=>state["Projects"]["Image477"]);
const Image477Cb = useImage477Cb()
const Link323Props = useStore((state)=>state["Projects"]["Link323"]);
const Link323IoProps = useIoStore((state)=>state["Projects"]["Link323"]);
const Link323Cb = useLink323Cb()
const Link324Props = useStore((state)=>state["Projects"]["Link324"]);
const Link324IoProps = useIoStore((state)=>state["Projects"]["Link324"]);
const Link324Cb = useLink324Cb()
const Link325Props = useStore((state)=>state["Projects"]["Link325"]);
const Link325IoProps = useIoStore((state)=>state["Projects"]["Link325"]);
const Link325Cb = useLink325Cb()
const TextBox1842Props = useStore((state)=>state["Projects"]["TextBox1842"]);
const TextBox1842IoProps = useIoStore((state)=>state["Projects"]["TextBox1842"]);
const TextBox1842Cb = useTextBox1842Cb()
const TextBox1843Props = useStore((state)=>state["Projects"]["TextBox1843"]);
const TextBox1843IoProps = useIoStore((state)=>state["Projects"]["TextBox1843"]);
const TextBox1843Cb = useTextBox1843Cb()
const TextBox1844Props = useStore((state)=>state["Projects"]["TextBox1844"]);
const TextBox1844IoProps = useIoStore((state)=>state["Projects"]["TextBox1844"]);
const TextBox1844Cb = useTextBox1844Cb()
const Link326Props = useStore((state)=>state["Projects"]["Link326"]);
const Link326IoProps = useIoStore((state)=>state["Projects"]["Link326"]);
const Link326Cb = useLink326Cb()
const TextBox1845Props = useStore((state)=>state["Projects"]["TextBox1845"]);
const TextBox1845IoProps = useIoStore((state)=>state["Projects"]["TextBox1845"]);
const TextBox1845Cb = useTextBox1845Cb()
const Link327Props = useStore((state)=>state["Projects"]["Link327"]);
const Link327IoProps = useIoStore((state)=>state["Projects"]["Link327"]);
const Link327Cb = useLink327Cb()
const TextBox1846Props = useStore((state)=>state["Projects"]["TextBox1846"]);
const TextBox1846IoProps = useIoStore((state)=>state["Projects"]["TextBox1846"]);
const TextBox1846Cb = useTextBox1846Cb()
const Link328Props = useStore((state)=>state["Projects"]["Link328"]);
const Link328IoProps = useIoStore((state)=>state["Projects"]["Link328"]);
const Link328Cb = useLink328Cb()
const TextBox1847Props = useStore((state)=>state["Projects"]["TextBox1847"]);
const TextBox1847IoProps = useIoStore((state)=>state["Projects"]["TextBox1847"]);
const TextBox1847Cb = useTextBox1847Cb()
const TextBox1831Props = useStore((state)=>state["Projects"]["TextBox1831"]);
const TextBox1831IoProps = useIoStore((state)=>state["Projects"]["TextBox1831"]);
const TextBox1831Cb = useTextBox1831Cb()
const TextBox1832Props = useStore((state)=>state["Projects"]["TextBox1832"]);
const TextBox1832IoProps = useIoStore((state)=>state["Projects"]["TextBox1832"]);
const TextBox1832Cb = useTextBox1832Cb()
const TextBox1833Props = useStore((state)=>state["Projects"]["TextBox1833"]);
const TextBox1833IoProps = useIoStore((state)=>state["Projects"]["TextBox1833"]);
const TextBox1833Cb = useTextBox1833Cb()
const TextBox1834Props = useStore((state)=>state["Projects"]["TextBox1834"]);
const TextBox1834IoProps = useIoStore((state)=>state["Projects"]["TextBox1834"]);
const TextBox1834Cb = useTextBox1834Cb()
const TextBox1835Props = useStore((state)=>state["Projects"]["TextBox1835"]);
const TextBox1835IoProps = useIoStore((state)=>state["Projects"]["TextBox1835"]);
const TextBox1835Cb = useTextBox1835Cb()
const TextBox1836Props = useStore((state)=>state["Projects"]["TextBox1836"]);
const TextBox1836IoProps = useIoStore((state)=>state["Projects"]["TextBox1836"]);
const TextBox1836Cb = useTextBox1836Cb()
const TextBox1837Props = useStore((state)=>state["Projects"]["TextBox1837"]);
const TextBox1837IoProps = useIoStore((state)=>state["Projects"]["TextBox1837"]);
const TextBox1837Cb = useTextBox1837Cb()
const TextBox1838Props = useStore((state)=>state["Projects"]["TextBox1838"]);
const TextBox1838IoProps = useIoStore((state)=>state["Projects"]["TextBox1838"]);
const TextBox1838Cb = useTextBox1838Cb()
const TextBox1839Props = useStore((state)=>state["Projects"]["TextBox1839"]);
const TextBox1839IoProps = useIoStore((state)=>state["Projects"]["TextBox1839"]);
const TextBox1839Cb = useTextBox1839Cb()
const TextBox1841Props = useStore((state)=>state["Projects"]["TextBox1841"]);
const TextBox1841IoProps = useIoStore((state)=>state["Projects"]["TextBox1841"]);
const TextBox1841Cb = useTextBox1841Cb()
const Image479Props = useStore((state)=>state["Projects"]["Image479"]);
const Image479IoProps = useIoStore((state)=>state["Projects"]["Image479"]);
const Image479Cb = useImage479Cb()
const TextBox1840Props = useStore((state)=>state["Projects"]["TextBox1840"]);
const TextBox1840IoProps = useIoStore((state)=>state["Projects"]["TextBox1840"]);
const TextBox1840Cb = useTextBox1840Cb()
const Image478Props = useStore((state)=>state["Projects"]["Image478"]);
const Image478IoProps = useIoStore((state)=>state["Projects"]["Image478"]);
const Image478Cb = useImage478Cb()
const TextBox1848Props = useStore((state)=>state["Projects"]["TextBox1848"]);
const TextBox1848IoProps = useIoStore((state)=>state["Projects"]["TextBox1848"]);
const TextBox1848Cb = useTextBox1848Cb()
const TextBox1849Props = useStore((state)=>state["Projects"]["TextBox1849"]);
const TextBox1849IoProps = useIoStore((state)=>state["Projects"]["TextBox1849"]);
const TextBox1849Cb = useTextBox1849Cb()

  return (<>
  <Flex1 className="p-Projects Flex1582 bpt" {...Flex1582Props} {...Flex1582Cb} {...Flex1582IoProps}>
<Flex1 className="p-Projects Flex1581 bpt" {...Flex1581Props} {...Flex1581Cb} {...Flex1581IoProps}>
<Image1 className="p-Projects Image445 bpt" {...Image445Props} {...Image445Cb} {...Image445IoProps}/>
<Flex1 className="p-Projects Flex1580 bpt" {...Flex1580Props} {...Flex1580Cb} {...Flex1580IoProps}>
<TextBox1 className="p-Projects TextBox1779 bpt" {...TextBox1779Props} {...TextBox1779Cb} {...TextBox1779IoProps}/>
<TextBox1 className="p-Projects TextBox1776 bpt" {...TextBox1776Props} {...TextBox1776Cb} {...TextBox1776IoProps}/>
<TextBox1 className="p-Projects TextBox1777 bpt" {...TextBox1777Props} {...TextBox1777Cb} {...TextBox1777IoProps}/>
<TextBox1 className="p-Projects TextBox1778 bpt" {...TextBox1778Props} {...TextBox1778Cb} {...TextBox1778IoProps}/>
<Flex1 className="p-Projects Flex1578 bpt" {...Flex1578Props} {...Flex1578Cb} {...Flex1578IoProps}>
<TextBox1 className="p-Projects TextBox1775 bpt" {...TextBox1775Props} {...TextBox1775Cb} {...TextBox1775IoProps}/>
<Image1 className="p-Projects Image444 bpt" {...Image444Props} {...Image444Cb} {...Image444IoProps}/>
</Flex1>
</Flex1>
<Menu1 className="p-Projects Menu26 bpt" {...Menu26Props} {...Menu26Cb} {...Menu26IoProps}>
<Flex1 className="p-Projects Flex1579 bpt" {...Flex1579Props} {...Flex1579Cb} {...Flex1579IoProps}>
<Flex1 className="p-Projects Flex1577 bpt" {...Flex1577Props} {...Flex1577Cb} {...Flex1577IoProps}>
<Flex1 className="p-Projects Flex1576 bpt" {...Flex1576Props} {...Flex1576Cb} {...Flex1576IoProps}>
<TextBox1 className="p-Projects TextBox1771 bpt" {...TextBox1771Props} {...TextBox1771Cb} {...TextBox1771IoProps}/>
<TextBox1 className="p-Projects TextBox1774 bpt" {...TextBox1774Props} {...TextBox1774Cb} {...TextBox1774IoProps}/>
<TextBox1 className="p-Projects TextBox1773 bpt" {...TextBox1773Props} {...TextBox1773Cb} {...TextBox1773IoProps}/>
<TextBox1 className="p-Projects TextBox1772 bpt" {...TextBox1772Props} {...TextBox1772Cb} {...TextBox1772IoProps}/>
<Flex1 className="p-Projects Flex1575 bpt" {...Flex1575Props} {...Flex1575Cb} {...Flex1575IoProps}>
<TextBox1 className="p-Projects TextBox1770 bpt" {...TextBox1770Props} {...TextBox1770Cb} {...TextBox1770IoProps}/>
<Image1 className="p-Projects Image443 bpt" {...Image443Props} {...Image443Cb} {...Image443IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1583 bpt" {...Flex1583Props} {...Flex1583Cb} {...Flex1583IoProps}>
<Flex1 className="p-Projects Flex1584 bpt" {...Flex1584Props} {...Flex1584Cb} {...Flex1584IoProps}>
<Flex1 className="p-Projects Flex1585 bpt" {...Flex1585Props} {...Flex1585Cb} {...Flex1585IoProps}>
<Flex1 className="p-Projects Flex1586 bpt" {...Flex1586Props} {...Flex1586Cb} {...Flex1586IoProps}>
<Flex1 className="p-Projects Flex1587 bpt" {...Flex1587Props} {...Flex1587Cb} {...Flex1587IoProps}>
<Image1 className="p-Projects Image446 bpt" {...Image446Props} {...Image446Cb} {...Image446IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1590 bpt" {...Flex1590Props} {...Flex1590Cb} {...Flex1590IoProps}>
<TextBox1 className="p-Projects TextBox1784 bpt" {...TextBox1784Props} {...TextBox1784Cb} {...TextBox1784IoProps}/>
<TextBox1 className="p-Projects TextBox1785 bpt" {...TextBox1785Props} {...TextBox1785Cb} {...TextBox1785IoProps}/>
<Flex1 className="p-Projects Flex1589 bpt" {...Flex1589Props} {...Flex1589Cb} {...Flex1589IoProps}>
<TextBox1 className="p-Projects TextBox1783 bpt" {...TextBox1783Props} {...TextBox1783Cb} {...TextBox1783IoProps}/>
<Image1 className="p-Projects Image447 bpt" {...Image447Props} {...Image447Cb} {...Image447IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1639 bpt" {...Flex1639Props} {...Flex1639Cb} {...Flex1639IoProps}>
<Flex1 className="p-Projects Flex1638 bpt" {...Flex1638Props} {...Flex1638Cb} {...Flex1638IoProps}>
<Image1 className="p-Projects Image471 bpt" {...Image471Props} {...Image471Cb} {...Image471IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1637 bpt" {...Flex1637Props} {...Flex1637Cb} {...Flex1637IoProps}>
<TextBox1 className="p-Projects TextBox1821 bpt" {...TextBox1821Props} {...TextBox1821Cb} {...TextBox1821IoProps}/>
<TextBox1 className="p-Projects TextBox1820 bpt" {...TextBox1820Props} {...TextBox1820Cb} {...TextBox1820IoProps}/>
<Flex1 className="p-Projects Flex1636 bpt" {...Flex1636Props} {...Flex1636Cb} {...Flex1636IoProps}>
<TextBox1 className="p-Projects TextBox1819 bpt" {...TextBox1819Props} {...TextBox1819Cb} {...TextBox1819IoProps}/>
<Image1 className="p-Projects Image470 bpt" {...Image470Props} {...Image470Cb} {...Image470IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1643 bpt" {...Flex1643Props} {...Flex1643Cb} {...Flex1643IoProps}>
<Flex1 className="p-Projects Flex1642 bpt" {...Flex1642Props} {...Flex1642Cb} {...Flex1642IoProps}>
<Image1 className="p-Projects Image473 bpt" {...Image473Props} {...Image473Cb} {...Image473IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1641 bpt" {...Flex1641Props} {...Flex1641Cb} {...Flex1641IoProps}>
<TextBox1 className="p-Projects TextBox1824 bpt" {...TextBox1824Props} {...TextBox1824Cb} {...TextBox1824IoProps}/>
<TextBox1 className="p-Projects TextBox1823 bpt" {...TextBox1823Props} {...TextBox1823Cb} {...TextBox1823IoProps}/>
<Flex1 className="p-Projects Flex1640 bpt" {...Flex1640Props} {...Flex1640Cb} {...Flex1640IoProps}>
<TextBox1 className="p-Projects TextBox1822 bpt" {...TextBox1822Props} {...TextBox1822Cb} {...TextBox1822IoProps}/>
<Image1 className="p-Projects Image472 bpt" {...Image472Props} {...Image472Cb} {...Image472IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1647 bpt" {...Flex1647Props} {...Flex1647Cb} {...Flex1647IoProps}>
<Flex1 className="p-Projects Flex1646 bpt" {...Flex1646Props} {...Flex1646Cb} {...Flex1646IoProps}>
<Image1 className="p-Projects Image475 bpt" {...Image475Props} {...Image475Cb} {...Image475IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1645 bpt" {...Flex1645Props} {...Flex1645Cb} {...Flex1645IoProps}>
<TextBox1 className="p-Projects TextBox1827 bpt" {...TextBox1827Props} {...TextBox1827Cb} {...TextBox1827IoProps}/>
<TextBox1 className="p-Projects TextBox1826 bpt" {...TextBox1826Props} {...TextBox1826Cb} {...TextBox1826IoProps}/>
<Flex1 className="p-Projects Flex1644 bpt" {...Flex1644Props} {...Flex1644Cb} {...Flex1644IoProps}>
<TextBox1 className="p-Projects TextBox1825 bpt" {...TextBox1825Props} {...TextBox1825Cb} {...TextBox1825IoProps}/>
<Image1 className="p-Projects Image474 bpt" {...Image474Props} {...Image474Cb} {...Image474IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1651 bpt" {...Flex1651Props} {...Flex1651Cb} {...Flex1651IoProps}>
<Flex1 className="p-Projects Flex1650 bpt" {...Flex1650Props} {...Flex1650Cb} {...Flex1650IoProps}>
<Image1 className="p-Projects Image477 bpt" {...Image477Props} {...Image477Cb} {...Image477IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1649 bpt" {...Flex1649Props} {...Flex1649Cb} {...Flex1649IoProps}>
<TextBox1 className="p-Projects TextBox1830 bpt" {...TextBox1830Props} {...TextBox1830Cb} {...TextBox1830IoProps}/>
<TextBox1 className="p-Projects TextBox1829 bpt" {...TextBox1829Props} {...TextBox1829Cb} {...TextBox1829IoProps}/>
<Flex1 className="p-Projects Flex1648 bpt" {...Flex1648Props} {...Flex1648Cb} {...Flex1648IoProps}>
<TextBox1 className="p-Projects TextBox1828 bpt" {...TextBox1828Props} {...TextBox1828Cb} {...TextBox1828IoProps}/>
<Image1 className="p-Projects Image476 bpt" {...Image476Props} {...Image476Cb} {...Image476IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1662 bpt" {...Flex1662Props} {...Flex1662Cb} {...Flex1662IoProps}>
<Flex1 className="p-Projects Flex1661 bpt" {...Flex1661Props} {...Flex1661Cb} {...Flex1661IoProps}>
<Flex1 className="p-Projects Flex1660 bpt" {...Flex1660Props} {...Flex1660Cb} {...Flex1660IoProps}>
<TextBox1 className="p-Projects TextBox1849 bpt" {...TextBox1849Props} {...TextBox1849Cb} {...TextBox1849IoProps}/>
<TextBox1 className="p-Projects TextBox1848 bpt" {...TextBox1848Props} {...TextBox1848Cb} {...TextBox1848IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1659 bpt" {...Flex1659Props} {...Flex1659Cb} {...Flex1659IoProps}>
<Flex1 className="p-Projects Flex1657 bpt" {...Flex1657Props} {...Flex1657Cb} {...Flex1657IoProps}>
<Image1 className="p-Projects Image479 bpt" {...Image479Props} {...Image479Cb} {...Image479IoProps}/>
<TextBox1 className="p-Projects TextBox1841 bpt" {...TextBox1841Props} {...TextBox1841Cb} {...TextBox1841IoProps}/>
<Flex1 className="p-Projects Flex1655 bpt" {...Flex1655Props} {...Flex1655Cb} {...Flex1655IoProps}>
<Image1 className="p-Projects Image478 bpt" {...Image478Props} {...Image478Cb} {...Image478IoProps}/>
<TextBox1 className="p-Projects TextBox1840 bpt" {...TextBox1840Props} {...TextBox1840Cb} {...TextBox1840IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1656 bpt" {...Flex1656Props} {...Flex1656Cb} {...Flex1656IoProps}>
<Flex1 className="p-Projects Flex1652 bpt" {...Flex1652Props} {...Flex1652Cb} {...Flex1652IoProps}>
<TextBox1 className="p-Projects TextBox1833 bpt" {...TextBox1833Props} {...TextBox1833Cb} {...TextBox1833IoProps}/>
<TextBox1 className="p-Projects TextBox1831 bpt" {...TextBox1831Props} {...TextBox1831Cb} {...TextBox1831IoProps}/>
<TextBox1 className="p-Projects TextBox1832 bpt" {...TextBox1832Props} {...TextBox1832Cb} {...TextBox1832IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1654 bpt" {...Flex1654Props} {...Flex1654Cb} {...Flex1654IoProps}>
<TextBox1 className="p-Projects TextBox1839 bpt" {...TextBox1839Props} {...TextBox1839Cb} {...TextBox1839IoProps}/>
<TextBox1 className="p-Projects TextBox1838 bpt" {...TextBox1838Props} {...TextBox1838Cb} {...TextBox1838IoProps}/>
<TextBox1 className="p-Projects TextBox1837 bpt" {...TextBox1837Props} {...TextBox1837Cb} {...TextBox1837IoProps}/>
</Flex1>
<Flex1 className="p-Projects Flex1653 bpt" {...Flex1653Props} {...Flex1653Cb} {...Flex1653IoProps}>
<TextBox1 className="p-Projects TextBox1836 bpt" {...TextBox1836Props} {...TextBox1836Cb} {...TextBox1836IoProps}/>
<TextBox1 className="p-Projects TextBox1835 bpt" {...TextBox1835Props} {...TextBox1835Cb} {...TextBox1835IoProps}/>
<TextBox1 className="p-Projects TextBox1834 bpt" {...TextBox1834Props} {...TextBox1834Cb} {...TextBox1834IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Projects Flex1658 bpt" {...Flex1658Props} {...Flex1658Cb} {...Flex1658IoProps}>
<TextBox1 className="p-Projects TextBox1847 bpt" {...TextBox1847Props} {...TextBox1847Cb} {...TextBox1847IoProps}/>
<Link1 className="p-Projects Link328 bpt" {...Link328Props} {...Link328Cb} {...Link328IoProps}/>
<TextBox1 className="p-Projects TextBox1846 bpt" {...TextBox1846Props} {...TextBox1846Cb} {...TextBox1846IoProps}/>
<Link1 className="p-Projects Link327 bpt" {...Link327Props} {...Link327Cb} {...Link327IoProps}/>
<TextBox1 className="p-Projects TextBox1845 bpt" {...TextBox1845Props} {...TextBox1845Cb} {...TextBox1845IoProps}/>
<Link1 className="p-Projects Link325 bpt" {...Link325Props} {...Link325Cb} {...Link325IoProps}/>
<TextBox1 className="p-Projects TextBox1844 bpt" {...TextBox1844Props} {...TextBox1844Cb} {...TextBox1844IoProps}/>
<Link1 className="p-Projects Link324 bpt" {...Link324Props} {...Link324Cb} {...Link324IoProps}/>
<TextBox1 className="p-Projects TextBox1843 bpt" {...TextBox1843Props} {...TextBox1843Cb} {...TextBox1843IoProps}/>
<Link1 className="p-Projects Link326 bpt" {...Link326Props} {...Link326Cb} {...Link326IoProps}/>
<TextBox1 className="p-Projects TextBox1842 bpt" {...TextBox1842Props} {...TextBox1842Cb} {...TextBox1842IoProps}/>
<Link1 className="p-Projects Link323 bpt" {...Link323Props} {...Link323Cb} {...Link323IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
