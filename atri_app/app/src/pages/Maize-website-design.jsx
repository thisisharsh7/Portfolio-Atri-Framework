import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex11 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu11 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox11 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image12 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex1839Cb, useFlex1838Cb, useFlex1836Cb, useFlex1837Cb, useFlex1834Cb, useFlex1830Cb, useFlex1835Cb, useFlex1831Cb, useFlex1832Cb, useFlex1833Cb, useFlex1860Cb, useFlex1857Cb, useFlex1854Cb, useFlex1855Cb, useFlex1851Cb, useFlex1852Cb, useFlex1858Cb, useFlex1859Cb, useFlex1856Cb, useFlex1853Cb, useFlex1849Cb, useFlex1846Cb, useFlex1840Cb, useFlex1841Cb, useFlex1842Cb, useFlex1847Cb, useFlex1843Cb, useFlex1844Cb, useFlex1845Cb, useFlex1848Cb, useFlex1850Cb, useFlex1907Cb, useFlex1906Cb, useFlex1905Cb, useFlex1903Cb, useMenu31Cb, useFlex1904Cb, useFlex1902Cb, useFlex1901Cb, useFlex1900Cb, useTextBox2093Cb, useTextBox2094Cb, useImage511Cb, useTextBox2092Cb, useImage510Cb, useTextBox2082Cb, useTextBox2083Cb, useTextBox2084Cb, useTextBox2085Cb, useTextBox2086Cb, useTextBox2087Cb, useTextBox2088Cb, useTextBox2089Cb, useTextBox2090Cb, useTextBox2091Cb, useTextBox2123Cb, useTextBox2124Cb, useTextBox2119Cb, useTextBox2120Cb, useTextBox2121Cb, useTextBox2122Cb, useImage513Cb, useTextBox2108Cb, useTextBox2109Cb, useTextBox2110Cb, useTextBox2111Cb, useTextBox2112Cb, useTextBox2113Cb, useTextBox2114Cb, useTextBox2115Cb, useTextBox2116Cb, useTextBox2117Cb, useTextBox2095Cb, useTextBox2096Cb, useTextBox2097Cb, useTextBox2098Cb, useTextBox2099Cb, useTextBox2100Cb, useTextBox2101Cb, useTextBox2102Cb, useTextBox2103Cb, useTextBox2104Cb, useTextBox2105Cb, useTextBox2106Cb, useTextBox2107Cb, useTextBox2118Cb, useImage512Cb, useImage523Cb, useTextBox2184Cb, useTextBox2185Cb, useTextBox2186Cb, useTextBox2187Cb, useTextBox2183Cb, useImage522Cb, useTextBox2179Cb, useTextBox2180Cb, useTextBox2181Cb, useTextBox2182Cb, useImage521Cb, useTextBox2178Cb } from "../page-cbs/maize-website-design";
import "../page-css/maize-website-design.css";
import "../custom/maize-website-design";

export default function MaizeWebsiteDesign() {
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

  const Flex1839Props = useStore((state)=>state["maize-website-design"]["Flex1839"]);
const Flex1839IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1839"]);
const Flex1839Cb = useFlex1839Cb()
const Flex1838Props = useStore((state)=>state["maize-website-design"]["Flex1838"]);
const Flex1838IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1838"]);
const Flex1838Cb = useFlex1838Cb()
const Flex1836Props = useStore((state)=>state["maize-website-design"]["Flex1836"]);
const Flex1836IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1836"]);
const Flex1836Cb = useFlex1836Cb()
const Flex1837Props = useStore((state)=>state["maize-website-design"]["Flex1837"]);
const Flex1837IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1837"]);
const Flex1837Cb = useFlex1837Cb()
const Flex1834Props = useStore((state)=>state["maize-website-design"]["Flex1834"]);
const Flex1834IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1834"]);
const Flex1834Cb = useFlex1834Cb()
const Flex1830Props = useStore((state)=>state["maize-website-design"]["Flex1830"]);
const Flex1830IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1830"]);
const Flex1830Cb = useFlex1830Cb()
const Flex1835Props = useStore((state)=>state["maize-website-design"]["Flex1835"]);
const Flex1835IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1835"]);
const Flex1835Cb = useFlex1835Cb()
const Flex1831Props = useStore((state)=>state["maize-website-design"]["Flex1831"]);
const Flex1831IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1831"]);
const Flex1831Cb = useFlex1831Cb()
const Flex1832Props = useStore((state)=>state["maize-website-design"]["Flex1832"]);
const Flex1832IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1832"]);
const Flex1832Cb = useFlex1832Cb()
const Flex1833Props = useStore((state)=>state["maize-website-design"]["Flex1833"]);
const Flex1833IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1833"]);
const Flex1833Cb = useFlex1833Cb()
const Flex1860Props = useStore((state)=>state["maize-website-design"]["Flex1860"]);
const Flex1860IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1860"]);
const Flex1860Cb = useFlex1860Cb()
const Flex1857Props = useStore((state)=>state["maize-website-design"]["Flex1857"]);
const Flex1857IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1857"]);
const Flex1857Cb = useFlex1857Cb()
const Flex1854Props = useStore((state)=>state["maize-website-design"]["Flex1854"]);
const Flex1854IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1854"]);
const Flex1854Cb = useFlex1854Cb()
const Flex1855Props = useStore((state)=>state["maize-website-design"]["Flex1855"]);
const Flex1855IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1855"]);
const Flex1855Cb = useFlex1855Cb()
const Flex1851Props = useStore((state)=>state["maize-website-design"]["Flex1851"]);
const Flex1851IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1851"]);
const Flex1851Cb = useFlex1851Cb()
const Flex1852Props = useStore((state)=>state["maize-website-design"]["Flex1852"]);
const Flex1852IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1852"]);
const Flex1852Cb = useFlex1852Cb()
const Flex1858Props = useStore((state)=>state["maize-website-design"]["Flex1858"]);
const Flex1858IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1858"]);
const Flex1858Cb = useFlex1858Cb()
const Flex1859Props = useStore((state)=>state["maize-website-design"]["Flex1859"]);
const Flex1859IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1859"]);
const Flex1859Cb = useFlex1859Cb()
const Flex1856Props = useStore((state)=>state["maize-website-design"]["Flex1856"]);
const Flex1856IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1856"]);
const Flex1856Cb = useFlex1856Cb()
const Flex1853Props = useStore((state)=>state["maize-website-design"]["Flex1853"]);
const Flex1853IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1853"]);
const Flex1853Cb = useFlex1853Cb()
const Flex1849Props = useStore((state)=>state["maize-website-design"]["Flex1849"]);
const Flex1849IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1849"]);
const Flex1849Cb = useFlex1849Cb()
const Flex1846Props = useStore((state)=>state["maize-website-design"]["Flex1846"]);
const Flex1846IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1846"]);
const Flex1846Cb = useFlex1846Cb()
const Flex1840Props = useStore((state)=>state["maize-website-design"]["Flex1840"]);
const Flex1840IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1840"]);
const Flex1840Cb = useFlex1840Cb()
const Flex1841Props = useStore((state)=>state["maize-website-design"]["Flex1841"]);
const Flex1841IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1841"]);
const Flex1841Cb = useFlex1841Cb()
const Flex1842Props = useStore((state)=>state["maize-website-design"]["Flex1842"]);
const Flex1842IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1842"]);
const Flex1842Cb = useFlex1842Cb()
const Flex1847Props = useStore((state)=>state["maize-website-design"]["Flex1847"]);
const Flex1847IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1847"]);
const Flex1847Cb = useFlex1847Cb()
const Flex1843Props = useStore((state)=>state["maize-website-design"]["Flex1843"]);
const Flex1843IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1843"]);
const Flex1843Cb = useFlex1843Cb()
const Flex1844Props = useStore((state)=>state["maize-website-design"]["Flex1844"]);
const Flex1844IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1844"]);
const Flex1844Cb = useFlex1844Cb()
const Flex1845Props = useStore((state)=>state["maize-website-design"]["Flex1845"]);
const Flex1845IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1845"]);
const Flex1845Cb = useFlex1845Cb()
const Flex1848Props = useStore((state)=>state["maize-website-design"]["Flex1848"]);
const Flex1848IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1848"]);
const Flex1848Cb = useFlex1848Cb()
const Flex1850Props = useStore((state)=>state["maize-website-design"]["Flex1850"]);
const Flex1850IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1850"]);
const Flex1850Cb = useFlex1850Cb()
const Flex1907Props = useStore((state)=>state["maize-website-design"]["Flex1907"]);
const Flex1907IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1907"]);
const Flex1907Cb = useFlex1907Cb()
const Flex1906Props = useStore((state)=>state["maize-website-design"]["Flex1906"]);
const Flex1906IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1906"]);
const Flex1906Cb = useFlex1906Cb()
const Flex1905Props = useStore((state)=>state["maize-website-design"]["Flex1905"]);
const Flex1905IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1905"]);
const Flex1905Cb = useFlex1905Cb()
const Flex1903Props = useStore((state)=>state["maize-website-design"]["Flex1903"]);
const Flex1903IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1903"]);
const Flex1903Cb = useFlex1903Cb()
const Menu31Props = useStore((state)=>state["maize-website-design"]["Menu31"]);
const Menu31IoProps = useIoStore((state)=>state["maize-website-design"]["Menu31"]);
const Menu31Cb = useMenu31Cb()
const Flex1904Props = useStore((state)=>state["maize-website-design"]["Flex1904"]);
const Flex1904IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1904"]);
const Flex1904Cb = useFlex1904Cb()
const Flex1902Props = useStore((state)=>state["maize-website-design"]["Flex1902"]);
const Flex1902IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1902"]);
const Flex1902Cb = useFlex1902Cb()
const Flex1901Props = useStore((state)=>state["maize-website-design"]["Flex1901"]);
const Flex1901IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1901"]);
const Flex1901Cb = useFlex1901Cb()
const Flex1900Props = useStore((state)=>state["maize-website-design"]["Flex1900"]);
const Flex1900IoProps = useIoStore((state)=>state["maize-website-design"]["Flex1900"]);
const Flex1900Cb = useFlex1900Cb()
const TextBox2093Props = useStore((state)=>state["maize-website-design"]["TextBox2093"]);
const TextBox2093IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2093"]);
const TextBox2093Cb = useTextBox2093Cb()
const TextBox2094Props = useStore((state)=>state["maize-website-design"]["TextBox2094"]);
const TextBox2094IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2094"]);
const TextBox2094Cb = useTextBox2094Cb()
const Image511Props = useStore((state)=>state["maize-website-design"]["Image511"]);
const Image511IoProps = useIoStore((state)=>state["maize-website-design"]["Image511"]);
const Image511Cb = useImage511Cb()
const TextBox2092Props = useStore((state)=>state["maize-website-design"]["TextBox2092"]);
const TextBox2092IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2092"]);
const TextBox2092Cb = useTextBox2092Cb()
const Image510Props = useStore((state)=>state["maize-website-design"]["Image510"]);
const Image510IoProps = useIoStore((state)=>state["maize-website-design"]["Image510"]);
const Image510Cb = useImage510Cb()
const TextBox2082Props = useStore((state)=>state["maize-website-design"]["TextBox2082"]);
const TextBox2082IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2082"]);
const TextBox2082Cb = useTextBox2082Cb()
const TextBox2083Props = useStore((state)=>state["maize-website-design"]["TextBox2083"]);
const TextBox2083IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2083"]);
const TextBox2083Cb = useTextBox2083Cb()
const TextBox2084Props = useStore((state)=>state["maize-website-design"]["TextBox2084"]);
const TextBox2084IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2084"]);
const TextBox2084Cb = useTextBox2084Cb()
const TextBox2085Props = useStore((state)=>state["maize-website-design"]["TextBox2085"]);
const TextBox2085IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2085"]);
const TextBox2085Cb = useTextBox2085Cb()
const TextBox2086Props = useStore((state)=>state["maize-website-design"]["TextBox2086"]);
const TextBox2086IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2086"]);
const TextBox2086Cb = useTextBox2086Cb()
const TextBox2087Props = useStore((state)=>state["maize-website-design"]["TextBox2087"]);
const TextBox2087IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2087"]);
const TextBox2087Cb = useTextBox2087Cb()
const TextBox2088Props = useStore((state)=>state["maize-website-design"]["TextBox2088"]);
const TextBox2088IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2088"]);
const TextBox2088Cb = useTextBox2088Cb()
const TextBox2089Props = useStore((state)=>state["maize-website-design"]["TextBox2089"]);
const TextBox2089IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2089"]);
const TextBox2089Cb = useTextBox2089Cb()
const TextBox2090Props = useStore((state)=>state["maize-website-design"]["TextBox2090"]);
const TextBox2090IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2090"]);
const TextBox2090Cb = useTextBox2090Cb()
const TextBox2091Props = useStore((state)=>state["maize-website-design"]["TextBox2091"]);
const TextBox2091IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2091"]);
const TextBox2091Cb = useTextBox2091Cb()
const TextBox2123Props = useStore((state)=>state["maize-website-design"]["TextBox2123"]);
const TextBox2123IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2123"]);
const TextBox2123Cb = useTextBox2123Cb()
const TextBox2124Props = useStore((state)=>state["maize-website-design"]["TextBox2124"]);
const TextBox2124IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2124"]);
const TextBox2124Cb = useTextBox2124Cb()
const TextBox2119Props = useStore((state)=>state["maize-website-design"]["TextBox2119"]);
const TextBox2119IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2119"]);
const TextBox2119Cb = useTextBox2119Cb()
const TextBox2120Props = useStore((state)=>state["maize-website-design"]["TextBox2120"]);
const TextBox2120IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2120"]);
const TextBox2120Cb = useTextBox2120Cb()
const TextBox2121Props = useStore((state)=>state["maize-website-design"]["TextBox2121"]);
const TextBox2121IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2121"]);
const TextBox2121Cb = useTextBox2121Cb()
const TextBox2122Props = useStore((state)=>state["maize-website-design"]["TextBox2122"]);
const TextBox2122IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2122"]);
const TextBox2122Cb = useTextBox2122Cb()
const Image513Props = useStore((state)=>state["maize-website-design"]["Image513"]);
const Image513IoProps = useIoStore((state)=>state["maize-website-design"]["Image513"]);
const Image513Cb = useImage513Cb()
const TextBox2108Props = useStore((state)=>state["maize-website-design"]["TextBox2108"]);
const TextBox2108IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2108"]);
const TextBox2108Cb = useTextBox2108Cb()
const TextBox2109Props = useStore((state)=>state["maize-website-design"]["TextBox2109"]);
const TextBox2109IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2109"]);
const TextBox2109Cb = useTextBox2109Cb()
const TextBox2110Props = useStore((state)=>state["maize-website-design"]["TextBox2110"]);
const TextBox2110IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2110"]);
const TextBox2110Cb = useTextBox2110Cb()
const TextBox2111Props = useStore((state)=>state["maize-website-design"]["TextBox2111"]);
const TextBox2111IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2111"]);
const TextBox2111Cb = useTextBox2111Cb()
const TextBox2112Props = useStore((state)=>state["maize-website-design"]["TextBox2112"]);
const TextBox2112IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2112"]);
const TextBox2112Cb = useTextBox2112Cb()
const TextBox2113Props = useStore((state)=>state["maize-website-design"]["TextBox2113"]);
const TextBox2113IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2113"]);
const TextBox2113Cb = useTextBox2113Cb()
const TextBox2114Props = useStore((state)=>state["maize-website-design"]["TextBox2114"]);
const TextBox2114IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2114"]);
const TextBox2114Cb = useTextBox2114Cb()
const TextBox2115Props = useStore((state)=>state["maize-website-design"]["TextBox2115"]);
const TextBox2115IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2115"]);
const TextBox2115Cb = useTextBox2115Cb()
const TextBox2116Props = useStore((state)=>state["maize-website-design"]["TextBox2116"]);
const TextBox2116IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2116"]);
const TextBox2116Cb = useTextBox2116Cb()
const TextBox2117Props = useStore((state)=>state["maize-website-design"]["TextBox2117"]);
const TextBox2117IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2117"]);
const TextBox2117Cb = useTextBox2117Cb()
const TextBox2095Props = useStore((state)=>state["maize-website-design"]["TextBox2095"]);
const TextBox2095IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2095"]);
const TextBox2095Cb = useTextBox2095Cb()
const TextBox2096Props = useStore((state)=>state["maize-website-design"]["TextBox2096"]);
const TextBox2096IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2096"]);
const TextBox2096Cb = useTextBox2096Cb()
const TextBox2097Props = useStore((state)=>state["maize-website-design"]["TextBox2097"]);
const TextBox2097IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2097"]);
const TextBox2097Cb = useTextBox2097Cb()
const TextBox2098Props = useStore((state)=>state["maize-website-design"]["TextBox2098"]);
const TextBox2098IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2098"]);
const TextBox2098Cb = useTextBox2098Cb()
const TextBox2099Props = useStore((state)=>state["maize-website-design"]["TextBox2099"]);
const TextBox2099IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2099"]);
const TextBox2099Cb = useTextBox2099Cb()
const TextBox2100Props = useStore((state)=>state["maize-website-design"]["TextBox2100"]);
const TextBox2100IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2100"]);
const TextBox2100Cb = useTextBox2100Cb()
const TextBox2101Props = useStore((state)=>state["maize-website-design"]["TextBox2101"]);
const TextBox2101IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2101"]);
const TextBox2101Cb = useTextBox2101Cb()
const TextBox2102Props = useStore((state)=>state["maize-website-design"]["TextBox2102"]);
const TextBox2102IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2102"]);
const TextBox2102Cb = useTextBox2102Cb()
const TextBox2103Props = useStore((state)=>state["maize-website-design"]["TextBox2103"]);
const TextBox2103IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2103"]);
const TextBox2103Cb = useTextBox2103Cb()
const TextBox2104Props = useStore((state)=>state["maize-website-design"]["TextBox2104"]);
const TextBox2104IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2104"]);
const TextBox2104Cb = useTextBox2104Cb()
const TextBox2105Props = useStore((state)=>state["maize-website-design"]["TextBox2105"]);
const TextBox2105IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2105"]);
const TextBox2105Cb = useTextBox2105Cb()
const TextBox2106Props = useStore((state)=>state["maize-website-design"]["TextBox2106"]);
const TextBox2106IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2106"]);
const TextBox2106Cb = useTextBox2106Cb()
const TextBox2107Props = useStore((state)=>state["maize-website-design"]["TextBox2107"]);
const TextBox2107IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2107"]);
const TextBox2107Cb = useTextBox2107Cb()
const TextBox2118Props = useStore((state)=>state["maize-website-design"]["TextBox2118"]);
const TextBox2118IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2118"]);
const TextBox2118Cb = useTextBox2118Cb()
const Image512Props = useStore((state)=>state["maize-website-design"]["Image512"]);
const Image512IoProps = useIoStore((state)=>state["maize-website-design"]["Image512"]);
const Image512Cb = useImage512Cb()
const Image523Props = useStore((state)=>state["maize-website-design"]["Image523"]);
const Image523IoProps = useIoStore((state)=>state["maize-website-design"]["Image523"]);
const Image523Cb = useImage523Cb()
const TextBox2184Props = useStore((state)=>state["maize-website-design"]["TextBox2184"]);
const TextBox2184IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2184"]);
const TextBox2184Cb = useTextBox2184Cb()
const TextBox2185Props = useStore((state)=>state["maize-website-design"]["TextBox2185"]);
const TextBox2185IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2185"]);
const TextBox2185Cb = useTextBox2185Cb()
const TextBox2186Props = useStore((state)=>state["maize-website-design"]["TextBox2186"]);
const TextBox2186IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2186"]);
const TextBox2186Cb = useTextBox2186Cb()
const TextBox2187Props = useStore((state)=>state["maize-website-design"]["TextBox2187"]);
const TextBox2187IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2187"]);
const TextBox2187Cb = useTextBox2187Cb()
const TextBox2183Props = useStore((state)=>state["maize-website-design"]["TextBox2183"]);
const TextBox2183IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2183"]);
const TextBox2183Cb = useTextBox2183Cb()
const Image522Props = useStore((state)=>state["maize-website-design"]["Image522"]);
const Image522IoProps = useIoStore((state)=>state["maize-website-design"]["Image522"]);
const Image522Cb = useImage522Cb()
const TextBox2179Props = useStore((state)=>state["maize-website-design"]["TextBox2179"]);
const TextBox2179IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2179"]);
const TextBox2179Cb = useTextBox2179Cb()
const TextBox2180Props = useStore((state)=>state["maize-website-design"]["TextBox2180"]);
const TextBox2180IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2180"]);
const TextBox2180Cb = useTextBox2180Cb()
const TextBox2181Props = useStore((state)=>state["maize-website-design"]["TextBox2181"]);
const TextBox2181IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2181"]);
const TextBox2181Cb = useTextBox2181Cb()
const TextBox2182Props = useStore((state)=>state["maize-website-design"]["TextBox2182"]);
const TextBox2182IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2182"]);
const TextBox2182Cb = useTextBox2182Cb()
const Image521Props = useStore((state)=>state["maize-website-design"]["Image521"]);
const Image521IoProps = useIoStore((state)=>state["maize-website-design"]["Image521"]);
const Image521Cb = useImage521Cb()
const TextBox2178Props = useStore((state)=>state["maize-website-design"]["TextBox2178"]);
const TextBox2178IoProps = useIoStore((state)=>state["maize-website-design"]["TextBox2178"]);
const TextBox2178Cb = useTextBox2178Cb()

  return (<>
  <Flex11 className="p-maize-website-design Flex1907 bpt" {...Flex1907Props} {...Flex1907Cb} {...Flex1907IoProps}>
<Flex11 className="p-maize-website-design Flex1906 bpt" {...Flex1906Props} {...Flex1906Cb} {...Flex1906IoProps}>
<Image12 className="p-maize-website-design Image523 bpt" {...Image523Props} {...Image523Cb} {...Image523IoProps}/>
<Flex11 className="p-maize-website-design Flex1905 bpt" {...Flex1905Props} {...Flex1905Cb} {...Flex1905IoProps}>
<TextBox11 className="p-maize-website-design TextBox2187 bpt" {...TextBox2187Props} {...TextBox2187Cb} {...TextBox2187IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2184 bpt" {...TextBox2184Props} {...TextBox2184Cb} {...TextBox2184IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2185 bpt" {...TextBox2185Props} {...TextBox2185Cb} {...TextBox2185IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2186 bpt" {...TextBox2186Props} {...TextBox2186Cb} {...TextBox2186IoProps}/>
<Flex11 className="p-maize-website-design Flex1903 bpt" {...Flex1903Props} {...Flex1903Cb} {...Flex1903IoProps}>
<TextBox11 className="p-maize-website-design TextBox2183 bpt" {...TextBox2183Props} {...TextBox2183Cb} {...TextBox2183IoProps}/>
<Image12 className="p-maize-website-design Image522 bpt" {...Image522Props} {...Image522Cb} {...Image522IoProps}/>
</Flex11>
</Flex11>
<Menu11 className="p-maize-website-design Menu31 bpt" {...Menu31Props} {...Menu31Cb} {...Menu31IoProps}>
<Flex11 className="p-maize-website-design Flex1904 bpt" {...Flex1904Props} {...Flex1904Cb} {...Flex1904IoProps}>
<Flex11 className="p-maize-website-design Flex1902 bpt" {...Flex1902Props} {...Flex1902Cb} {...Flex1902IoProps}>
<Flex11 className="p-maize-website-design Flex1901 bpt" {...Flex1901Props} {...Flex1901Cb} {...Flex1901IoProps}>
<TextBox11 className="p-maize-website-design TextBox2179 bpt" {...TextBox2179Props} {...TextBox2179Cb} {...TextBox2179IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2182 bpt" {...TextBox2182Props} {...TextBox2182Cb} {...TextBox2182IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2181 bpt" {...TextBox2181Props} {...TextBox2181Cb} {...TextBox2181IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2180 bpt" {...TextBox2180Props} {...TextBox2180Cb} {...TextBox2180IoProps}/>
<Flex11 className="p-maize-website-design Flex1900 bpt" {...Flex1900Props} {...Flex1900Cb} {...Flex1900IoProps}>
<TextBox11 className="p-maize-website-design TextBox2178 bpt" {...TextBox2178Props} {...TextBox2178Cb} {...TextBox2178IoProps}/>
<Image12 className="p-maize-website-design Image521 bpt" {...Image521Props} {...Image521Cb} {...Image521IoProps}/>
</Flex11>
</Flex11>
</Flex11>
</Flex11>
</Menu11>
</Flex11>
</Flex11>
<Flex11 className="p-maize-website-design Flex1860 bpt" {...Flex1860Props} {...Flex1860Cb} {...Flex1860IoProps}>
<Flex11 className="p-maize-website-design Flex1857 bpt" {...Flex1857Props} {...Flex1857Cb} {...Flex1857IoProps}>
<Flex11 className="p-maize-website-design Flex1854 bpt" {...Flex1854Props} {...Flex1854Cb} {...Flex1854IoProps}>
<TextBox11 className="p-maize-website-design TextBox2124 bpt" {...TextBox2124Props} {...TextBox2124Cb} {...TextBox2124IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2123 bpt" {...TextBox2123Props} {...TextBox2123Cb} {...TextBox2123IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1855 bpt" {...Flex1855Props} {...Flex1855Cb} {...Flex1855IoProps}>
<Flex11 className="p-maize-website-design Flex1852 bpt" {...Flex1852Props} {...Flex1852Cb} {...Flex1852IoProps}>
<TextBox11 className="p-maize-website-design TextBox2121 bpt" {...TextBox2121Props} {...TextBox2121Cb} {...TextBox2121IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2122 bpt" {...TextBox2122Props} {...TextBox2122Cb} {...TextBox2122IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1851 bpt" {...Flex1851Props} {...Flex1851Cb} {...Flex1851IoProps}>
<TextBox11 className="p-maize-website-design TextBox2120 bpt" {...TextBox2120Props} {...TextBox2120Cb} {...TextBox2120IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2119 bpt" {...TextBox2119Props} {...TextBox2119Cb} {...TextBox2119IoProps}/>
</Flex11>
</Flex11>
</Flex11>
<Flex11 className="p-maize-website-design Flex1858 bpt" {...Flex1858Props} {...Flex1858Cb} {...Flex1858IoProps}>
<Image12 className="p-maize-website-design Image513 bpt" {...Image513Props} {...Image513Cb} {...Image513IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1859 bpt" {...Flex1859Props} {...Flex1859Cb} {...Flex1859IoProps}>
<Flex11 className="p-maize-website-design Flex1856 bpt" {...Flex1856Props} {...Flex1856Cb} {...Flex1856IoProps}>
<Flex11 className="p-maize-website-design Flex1853 bpt" {...Flex1853Props} {...Flex1853Cb} {...Flex1853IoProps}>
<Flex11 className="p-maize-website-design Flex1849 bpt" {...Flex1849Props} {...Flex1849Cb} {...Flex1849IoProps}>
<TextBox11 className="p-maize-website-design TextBox2116 bpt" {...TextBox2116Props} {...TextBox2116Cb} {...TextBox2116IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2117 bpt" {...TextBox2117Props} {...TextBox2117Cb} {...TextBox2117IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2115 bpt" {...TextBox2115Props} {...TextBox2115Cb} {...TextBox2115IoProps}/>
<Flex11 className="p-maize-website-design Flex1848 bpt" {...Flex1848Props} {...Flex1848Cb} {...Flex1848IoProps}>
<TextBox11 className="p-maize-website-design TextBox2107 bpt" {...TextBox2107Props} {...TextBox2107Cb} {...TextBox2107IoProps}/>
</Flex11>
<TextBox11 className="p-maize-website-design TextBox2111 bpt" {...TextBox2111Props} {...TextBox2111Cb} {...TextBox2111IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2110 bpt" {...TextBox2110Props} {...TextBox2110Cb} {...TextBox2110IoProps}/>
<Flex11 className="p-maize-website-design Flex1846 bpt" {...Flex1846Props} {...Flex1846Cb} {...Flex1846IoProps}>
<Flex11 className="p-maize-website-design Flex1840 bpt" {...Flex1840Props} {...Flex1840Cb} {...Flex1840IoProps}>
<TextBox11 className="p-maize-website-design TextBox2096 bpt" {...TextBox2096Props} {...TextBox2096Cb} {...TextBox2096IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2095 bpt" {...TextBox2095Props} {...TextBox2095Cb} {...TextBox2095IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1841 bpt" {...Flex1841Props} {...Flex1841Cb} {...Flex1841IoProps}>
<TextBox11 className="p-maize-website-design TextBox2097 bpt" {...TextBox2097Props} {...TextBox2097Cb} {...TextBox2097IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2098 bpt" {...TextBox2098Props} {...TextBox2098Cb} {...TextBox2098IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1842 bpt" {...Flex1842Props} {...Flex1842Cb} {...Flex1842IoProps}>
<TextBox11 className="p-maize-website-design TextBox2099 bpt" {...TextBox2099Props} {...TextBox2099Cb} {...TextBox2099IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2100 bpt" {...TextBox2100Props} {...TextBox2100Cb} {...TextBox2100IoProps}/>
</Flex11>
</Flex11>
<TextBox11 className="p-maize-website-design TextBox2114 bpt" {...TextBox2114Props} {...TextBox2114Cb} {...TextBox2114IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2109 bpt" {...TextBox2109Props} {...TextBox2109Cb} {...TextBox2109IoProps}/>
<Flex11 className="p-maize-website-design Flex1847 bpt" {...Flex1847Props} {...Flex1847Cb} {...Flex1847IoProps}>
<Flex11 className="p-maize-website-design Flex1845 bpt" {...Flex1845Props} {...Flex1845Cb} {...Flex1845IoProps}>
<TextBox11 className="p-maize-website-design TextBox2105 bpt" {...TextBox2105Props} {...TextBox2105Cb} {...TextBox2105IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2106 bpt" {...TextBox2106Props} {...TextBox2106Cb} {...TextBox2106IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1844 bpt" {...Flex1844Props} {...Flex1844Cb} {...Flex1844IoProps}>
<TextBox11 className="p-maize-website-design TextBox2104 bpt" {...TextBox2104Props} {...TextBox2104Cb} {...TextBox2104IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2103 bpt" {...TextBox2103Props} {...TextBox2103Cb} {...TextBox2103IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1843 bpt" {...Flex1843Props} {...Flex1843Cb} {...Flex1843IoProps}>
<TextBox11 className="p-maize-website-design TextBox2102 bpt" {...TextBox2102Props} {...TextBox2102Cb} {...TextBox2102IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2101 bpt" {...TextBox2101Props} {...TextBox2101Cb} {...TextBox2101IoProps}/>
</Flex11>
</Flex11>
<TextBox11 className="p-maize-website-design TextBox2113 bpt" {...TextBox2113Props} {...TextBox2113Cb} {...TextBox2113IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2108 bpt" {...TextBox2108Props} {...TextBox2108Cb} {...TextBox2108IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2112 bpt" {...TextBox2112Props} {...TextBox2112Cb} {...TextBox2112IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1850 bpt" {...Flex1850Props} {...Flex1850Cb} {...Flex1850IoProps}>
<TextBox11 className="p-maize-website-design TextBox2118 bpt" {...TextBox2118Props} {...TextBox2118Cb} {...TextBox2118IoProps}/>
<Image12 className="p-maize-website-design Image512 bpt" {...Image512Props} {...Image512Cb} {...Image512IoProps}/>
</Flex11>
</Flex11>
</Flex11>
</Flex11>
</Flex11>
<Flex11 className="p-maize-website-design Flex1839 bpt" {...Flex1839Props} {...Flex1839Cb} {...Flex1839IoProps}>
<Flex11 className="p-maize-website-design Flex1838 bpt" {...Flex1838Props} {...Flex1838Cb} {...Flex1838IoProps}>
<Flex11 className="p-maize-website-design Flex1836 bpt" {...Flex1836Props} {...Flex1836Cb} {...Flex1836IoProps}>
<TextBox11 className="p-maize-website-design TextBox2093 bpt" {...TextBox2093Props} {...TextBox2093Cb} {...TextBox2093IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2094 bpt" {...TextBox2094Props} {...TextBox2094Cb} {...TextBox2094IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1837 bpt" {...Flex1837Props} {...Flex1837Cb} {...Flex1837IoProps}>
<Flex11 className="p-maize-website-design Flex1834 bpt" {...Flex1834Props} {...Flex1834Cb} {...Flex1834IoProps}>
<Image12 className="p-maize-website-design Image511 bpt" {...Image511Props} {...Image511Cb} {...Image511IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2092 bpt" {...TextBox2092Props} {...TextBox2092Cb} {...TextBox2092IoProps}/>
<Flex11 className="p-maize-website-design Flex1830 bpt" {...Flex1830Props} {...Flex1830Cb} {...Flex1830IoProps}>
<Image12 className="p-maize-website-design Image510 bpt" {...Image510Props} {...Image510Cb} {...Image510IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2082 bpt" {...TextBox2082Props} {...TextBox2082Cb} {...TextBox2082IoProps}/>
</Flex11>
</Flex11>
<Flex11 className="p-maize-website-design Flex1835 bpt" {...Flex1835Props} {...Flex1835Cb} {...Flex1835IoProps}>
<Flex11 className="p-maize-website-design Flex1833 bpt" {...Flex1833Props} {...Flex1833Cb} {...Flex1833IoProps}>
<TextBox11 className="p-maize-website-design TextBox2089 bpt" {...TextBox2089Props} {...TextBox2089Cb} {...TextBox2089IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2091 bpt" {...TextBox2091Props} {...TextBox2091Cb} {...TextBox2091IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2090 bpt" {...TextBox2090Props} {...TextBox2090Cb} {...TextBox2090IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1831 bpt" {...Flex1831Props} {...Flex1831Cb} {...Flex1831IoProps}>
<TextBox11 className="p-maize-website-design TextBox2083 bpt" {...TextBox2083Props} {...TextBox2083Cb} {...TextBox2083IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2084 bpt" {...TextBox2084Props} {...TextBox2084Cb} {...TextBox2084IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2085 bpt" {...TextBox2085Props} {...TextBox2085Cb} {...TextBox2085IoProps}/>
</Flex11>
<Flex11 className="p-maize-website-design Flex1832 bpt" {...Flex1832Props} {...Flex1832Cb} {...Flex1832IoProps}>
<TextBox11 className="p-maize-website-design TextBox2086 bpt" {...TextBox2086Props} {...TextBox2086Cb} {...TextBox2086IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2087 bpt" {...TextBox2087Props} {...TextBox2087Cb} {...TextBox2087IoProps}/>
<TextBox11 className="p-maize-website-design TextBox2088 bpt" {...TextBox2088Props} {...TextBox2088Cb} {...TextBox2088IoProps}/>
</Flex11>
</Flex11>
</Flex11>
</Flex11>
</Flex11>
  </>);
}
