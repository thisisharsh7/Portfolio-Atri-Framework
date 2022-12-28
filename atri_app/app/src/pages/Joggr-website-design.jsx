import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex13 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu13 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox13 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image14 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex1808Cb, useFlex1807Cb, useFlex1805Cb, useFlex1806Cb, useFlex1803Cb, useFlex1799Cb, useFlex1804Cb, useFlex1800Cb, useFlex1801Cb, useFlex1802Cb, useFlex1829Cb, useFlex1826Cb, useFlex1823Cb, useFlex1824Cb, useFlex1820Cb, useFlex1821Cb, useFlex1827Cb, useFlex1828Cb, useFlex1825Cb, useFlex1822Cb, useFlex1818Cb, useFlex1815Cb, useFlex1809Cb, useFlex1810Cb, useFlex1811Cb, useFlex1816Cb, useFlex1812Cb, useFlex1813Cb, useFlex1814Cb, useFlex1817Cb, useFlex1819Cb, useFlex1915Cb, useFlex1914Cb, useFlex1913Cb, useFlex1911Cb, useMenu32Cb, useFlex1912Cb, useFlex1910Cb, useFlex1909Cb, useFlex1908Cb, useTextBox2050Cb, useTextBox2051Cb, useImage507Cb, useTextBox2049Cb, useImage506Cb, useTextBox2039Cb, useTextBox2040Cb, useTextBox2041Cb, useTextBox2042Cb, useTextBox2043Cb, useTextBox2044Cb, useTextBox2045Cb, useTextBox2046Cb, useTextBox2047Cb, useTextBox2048Cb, useTextBox2080Cb, useTextBox2081Cb, useTextBox2076Cb, useTextBox2077Cb, useTextBox2078Cb, useTextBox2079Cb, useImage509Cb, useTextBox2065Cb, useTextBox2066Cb, useTextBox2067Cb, useTextBox2068Cb, useTextBox2069Cb, useTextBox2070Cb, useTextBox2071Cb, useTextBox2072Cb, useTextBox2073Cb, useTextBox2074Cb, useTextBox2052Cb, useTextBox2053Cb, useTextBox2054Cb, useTextBox2055Cb, useTextBox2056Cb, useTextBox2057Cb, useTextBox2058Cb, useTextBox2059Cb, useTextBox2060Cb, useTextBox2061Cb, useTextBox2062Cb, useTextBox2063Cb, useTextBox2064Cb, useTextBox2075Cb, useImage508Cb, useImage526Cb, useTextBox2194Cb, useTextBox2195Cb, useTextBox2196Cb, useTextBox2197Cb, useTextBox2193Cb, useImage525Cb, useTextBox2189Cb, useTextBox2190Cb, useTextBox2191Cb, useTextBox2192Cb, useImage524Cb, useTextBox2188Cb } from "../page-cbs/joggr-website-design";
import "../page-css/joggr-website-design.css";
import "../custom/joggr-website-design";

export default function JoggrWebsiteDesign() {
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

  const Flex1808Props = useStore((state)=>state["joggr-website-design"]["Flex1808"]);
const Flex1808IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1808"]);
const Flex1808Cb = useFlex1808Cb()
const Flex1807Props = useStore((state)=>state["joggr-website-design"]["Flex1807"]);
const Flex1807IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1807"]);
const Flex1807Cb = useFlex1807Cb()
const Flex1805Props = useStore((state)=>state["joggr-website-design"]["Flex1805"]);
const Flex1805IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1805"]);
const Flex1805Cb = useFlex1805Cb()
const Flex1806Props = useStore((state)=>state["joggr-website-design"]["Flex1806"]);
const Flex1806IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1806"]);
const Flex1806Cb = useFlex1806Cb()
const Flex1803Props = useStore((state)=>state["joggr-website-design"]["Flex1803"]);
const Flex1803IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1803"]);
const Flex1803Cb = useFlex1803Cb()
const Flex1799Props = useStore((state)=>state["joggr-website-design"]["Flex1799"]);
const Flex1799IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1799"]);
const Flex1799Cb = useFlex1799Cb()
const Flex1804Props = useStore((state)=>state["joggr-website-design"]["Flex1804"]);
const Flex1804IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1804"]);
const Flex1804Cb = useFlex1804Cb()
const Flex1800Props = useStore((state)=>state["joggr-website-design"]["Flex1800"]);
const Flex1800IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1800"]);
const Flex1800Cb = useFlex1800Cb()
const Flex1801Props = useStore((state)=>state["joggr-website-design"]["Flex1801"]);
const Flex1801IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1801"]);
const Flex1801Cb = useFlex1801Cb()
const Flex1802Props = useStore((state)=>state["joggr-website-design"]["Flex1802"]);
const Flex1802IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1802"]);
const Flex1802Cb = useFlex1802Cb()
const Flex1829Props = useStore((state)=>state["joggr-website-design"]["Flex1829"]);
const Flex1829IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1829"]);
const Flex1829Cb = useFlex1829Cb()
const Flex1826Props = useStore((state)=>state["joggr-website-design"]["Flex1826"]);
const Flex1826IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1826"]);
const Flex1826Cb = useFlex1826Cb()
const Flex1823Props = useStore((state)=>state["joggr-website-design"]["Flex1823"]);
const Flex1823IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1823"]);
const Flex1823Cb = useFlex1823Cb()
const Flex1824Props = useStore((state)=>state["joggr-website-design"]["Flex1824"]);
const Flex1824IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1824"]);
const Flex1824Cb = useFlex1824Cb()
const Flex1820Props = useStore((state)=>state["joggr-website-design"]["Flex1820"]);
const Flex1820IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1820"]);
const Flex1820Cb = useFlex1820Cb()
const Flex1821Props = useStore((state)=>state["joggr-website-design"]["Flex1821"]);
const Flex1821IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1821"]);
const Flex1821Cb = useFlex1821Cb()
const Flex1827Props = useStore((state)=>state["joggr-website-design"]["Flex1827"]);
const Flex1827IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1827"]);
const Flex1827Cb = useFlex1827Cb()
const Flex1828Props = useStore((state)=>state["joggr-website-design"]["Flex1828"]);
const Flex1828IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1828"]);
const Flex1828Cb = useFlex1828Cb()
const Flex1825Props = useStore((state)=>state["joggr-website-design"]["Flex1825"]);
const Flex1825IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1825"]);
const Flex1825Cb = useFlex1825Cb()
const Flex1822Props = useStore((state)=>state["joggr-website-design"]["Flex1822"]);
const Flex1822IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1822"]);
const Flex1822Cb = useFlex1822Cb()
const Flex1818Props = useStore((state)=>state["joggr-website-design"]["Flex1818"]);
const Flex1818IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1818"]);
const Flex1818Cb = useFlex1818Cb()
const Flex1815Props = useStore((state)=>state["joggr-website-design"]["Flex1815"]);
const Flex1815IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1815"]);
const Flex1815Cb = useFlex1815Cb()
const Flex1809Props = useStore((state)=>state["joggr-website-design"]["Flex1809"]);
const Flex1809IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1809"]);
const Flex1809Cb = useFlex1809Cb()
const Flex1810Props = useStore((state)=>state["joggr-website-design"]["Flex1810"]);
const Flex1810IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1810"]);
const Flex1810Cb = useFlex1810Cb()
const Flex1811Props = useStore((state)=>state["joggr-website-design"]["Flex1811"]);
const Flex1811IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1811"]);
const Flex1811Cb = useFlex1811Cb()
const Flex1816Props = useStore((state)=>state["joggr-website-design"]["Flex1816"]);
const Flex1816IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1816"]);
const Flex1816Cb = useFlex1816Cb()
const Flex1812Props = useStore((state)=>state["joggr-website-design"]["Flex1812"]);
const Flex1812IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1812"]);
const Flex1812Cb = useFlex1812Cb()
const Flex1813Props = useStore((state)=>state["joggr-website-design"]["Flex1813"]);
const Flex1813IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1813"]);
const Flex1813Cb = useFlex1813Cb()
const Flex1814Props = useStore((state)=>state["joggr-website-design"]["Flex1814"]);
const Flex1814IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1814"]);
const Flex1814Cb = useFlex1814Cb()
const Flex1817Props = useStore((state)=>state["joggr-website-design"]["Flex1817"]);
const Flex1817IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1817"]);
const Flex1817Cb = useFlex1817Cb()
const Flex1819Props = useStore((state)=>state["joggr-website-design"]["Flex1819"]);
const Flex1819IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1819"]);
const Flex1819Cb = useFlex1819Cb()
const Flex1915Props = useStore((state)=>state["joggr-website-design"]["Flex1915"]);
const Flex1915IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1915"]);
const Flex1915Cb = useFlex1915Cb()
const Flex1914Props = useStore((state)=>state["joggr-website-design"]["Flex1914"]);
const Flex1914IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1914"]);
const Flex1914Cb = useFlex1914Cb()
const Flex1913Props = useStore((state)=>state["joggr-website-design"]["Flex1913"]);
const Flex1913IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1913"]);
const Flex1913Cb = useFlex1913Cb()
const Flex1911Props = useStore((state)=>state["joggr-website-design"]["Flex1911"]);
const Flex1911IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1911"]);
const Flex1911Cb = useFlex1911Cb()
const Menu32Props = useStore((state)=>state["joggr-website-design"]["Menu32"]);
const Menu32IoProps = useIoStore((state)=>state["joggr-website-design"]["Menu32"]);
const Menu32Cb = useMenu32Cb()
const Flex1912Props = useStore((state)=>state["joggr-website-design"]["Flex1912"]);
const Flex1912IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1912"]);
const Flex1912Cb = useFlex1912Cb()
const Flex1910Props = useStore((state)=>state["joggr-website-design"]["Flex1910"]);
const Flex1910IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1910"]);
const Flex1910Cb = useFlex1910Cb()
const Flex1909Props = useStore((state)=>state["joggr-website-design"]["Flex1909"]);
const Flex1909IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1909"]);
const Flex1909Cb = useFlex1909Cb()
const Flex1908Props = useStore((state)=>state["joggr-website-design"]["Flex1908"]);
const Flex1908IoProps = useIoStore((state)=>state["joggr-website-design"]["Flex1908"]);
const Flex1908Cb = useFlex1908Cb()
const TextBox2050Props = useStore((state)=>state["joggr-website-design"]["TextBox2050"]);
const TextBox2050IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2050"]);
const TextBox2050Cb = useTextBox2050Cb()
const TextBox2051Props = useStore((state)=>state["joggr-website-design"]["TextBox2051"]);
const TextBox2051IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2051"]);
const TextBox2051Cb = useTextBox2051Cb()
const Image507Props = useStore((state)=>state["joggr-website-design"]["Image507"]);
const Image507IoProps = useIoStore((state)=>state["joggr-website-design"]["Image507"]);
const Image507Cb = useImage507Cb()
const TextBox2049Props = useStore((state)=>state["joggr-website-design"]["TextBox2049"]);
const TextBox2049IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2049"]);
const TextBox2049Cb = useTextBox2049Cb()
const Image506Props = useStore((state)=>state["joggr-website-design"]["Image506"]);
const Image506IoProps = useIoStore((state)=>state["joggr-website-design"]["Image506"]);
const Image506Cb = useImage506Cb()
const TextBox2039Props = useStore((state)=>state["joggr-website-design"]["TextBox2039"]);
const TextBox2039IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2039"]);
const TextBox2039Cb = useTextBox2039Cb()
const TextBox2040Props = useStore((state)=>state["joggr-website-design"]["TextBox2040"]);
const TextBox2040IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2040"]);
const TextBox2040Cb = useTextBox2040Cb()
const TextBox2041Props = useStore((state)=>state["joggr-website-design"]["TextBox2041"]);
const TextBox2041IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2041"]);
const TextBox2041Cb = useTextBox2041Cb()
const TextBox2042Props = useStore((state)=>state["joggr-website-design"]["TextBox2042"]);
const TextBox2042IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2042"]);
const TextBox2042Cb = useTextBox2042Cb()
const TextBox2043Props = useStore((state)=>state["joggr-website-design"]["TextBox2043"]);
const TextBox2043IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2043"]);
const TextBox2043Cb = useTextBox2043Cb()
const TextBox2044Props = useStore((state)=>state["joggr-website-design"]["TextBox2044"]);
const TextBox2044IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2044"]);
const TextBox2044Cb = useTextBox2044Cb()
const TextBox2045Props = useStore((state)=>state["joggr-website-design"]["TextBox2045"]);
const TextBox2045IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2045"]);
const TextBox2045Cb = useTextBox2045Cb()
const TextBox2046Props = useStore((state)=>state["joggr-website-design"]["TextBox2046"]);
const TextBox2046IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2046"]);
const TextBox2046Cb = useTextBox2046Cb()
const TextBox2047Props = useStore((state)=>state["joggr-website-design"]["TextBox2047"]);
const TextBox2047IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2047"]);
const TextBox2047Cb = useTextBox2047Cb()
const TextBox2048Props = useStore((state)=>state["joggr-website-design"]["TextBox2048"]);
const TextBox2048IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2048"]);
const TextBox2048Cb = useTextBox2048Cb()
const TextBox2080Props = useStore((state)=>state["joggr-website-design"]["TextBox2080"]);
const TextBox2080IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2080"]);
const TextBox2080Cb = useTextBox2080Cb()
const TextBox2081Props = useStore((state)=>state["joggr-website-design"]["TextBox2081"]);
const TextBox2081IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2081"]);
const TextBox2081Cb = useTextBox2081Cb()
const TextBox2076Props = useStore((state)=>state["joggr-website-design"]["TextBox2076"]);
const TextBox2076IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2076"]);
const TextBox2076Cb = useTextBox2076Cb()
const TextBox2077Props = useStore((state)=>state["joggr-website-design"]["TextBox2077"]);
const TextBox2077IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2077"]);
const TextBox2077Cb = useTextBox2077Cb()
const TextBox2078Props = useStore((state)=>state["joggr-website-design"]["TextBox2078"]);
const TextBox2078IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2078"]);
const TextBox2078Cb = useTextBox2078Cb()
const TextBox2079Props = useStore((state)=>state["joggr-website-design"]["TextBox2079"]);
const TextBox2079IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2079"]);
const TextBox2079Cb = useTextBox2079Cb()
const Image509Props = useStore((state)=>state["joggr-website-design"]["Image509"]);
const Image509IoProps = useIoStore((state)=>state["joggr-website-design"]["Image509"]);
const Image509Cb = useImage509Cb()
const TextBox2065Props = useStore((state)=>state["joggr-website-design"]["TextBox2065"]);
const TextBox2065IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2065"]);
const TextBox2065Cb = useTextBox2065Cb()
const TextBox2066Props = useStore((state)=>state["joggr-website-design"]["TextBox2066"]);
const TextBox2066IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2066"]);
const TextBox2066Cb = useTextBox2066Cb()
const TextBox2067Props = useStore((state)=>state["joggr-website-design"]["TextBox2067"]);
const TextBox2067IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2067"]);
const TextBox2067Cb = useTextBox2067Cb()
const TextBox2068Props = useStore((state)=>state["joggr-website-design"]["TextBox2068"]);
const TextBox2068IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2068"]);
const TextBox2068Cb = useTextBox2068Cb()
const TextBox2069Props = useStore((state)=>state["joggr-website-design"]["TextBox2069"]);
const TextBox2069IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2069"]);
const TextBox2069Cb = useTextBox2069Cb()
const TextBox2070Props = useStore((state)=>state["joggr-website-design"]["TextBox2070"]);
const TextBox2070IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2070"]);
const TextBox2070Cb = useTextBox2070Cb()
const TextBox2071Props = useStore((state)=>state["joggr-website-design"]["TextBox2071"]);
const TextBox2071IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2071"]);
const TextBox2071Cb = useTextBox2071Cb()
const TextBox2072Props = useStore((state)=>state["joggr-website-design"]["TextBox2072"]);
const TextBox2072IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2072"]);
const TextBox2072Cb = useTextBox2072Cb()
const TextBox2073Props = useStore((state)=>state["joggr-website-design"]["TextBox2073"]);
const TextBox2073IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2073"]);
const TextBox2073Cb = useTextBox2073Cb()
const TextBox2074Props = useStore((state)=>state["joggr-website-design"]["TextBox2074"]);
const TextBox2074IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2074"]);
const TextBox2074Cb = useTextBox2074Cb()
const TextBox2052Props = useStore((state)=>state["joggr-website-design"]["TextBox2052"]);
const TextBox2052IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2052"]);
const TextBox2052Cb = useTextBox2052Cb()
const TextBox2053Props = useStore((state)=>state["joggr-website-design"]["TextBox2053"]);
const TextBox2053IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2053"]);
const TextBox2053Cb = useTextBox2053Cb()
const TextBox2054Props = useStore((state)=>state["joggr-website-design"]["TextBox2054"]);
const TextBox2054IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2054"]);
const TextBox2054Cb = useTextBox2054Cb()
const TextBox2055Props = useStore((state)=>state["joggr-website-design"]["TextBox2055"]);
const TextBox2055IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2055"]);
const TextBox2055Cb = useTextBox2055Cb()
const TextBox2056Props = useStore((state)=>state["joggr-website-design"]["TextBox2056"]);
const TextBox2056IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2056"]);
const TextBox2056Cb = useTextBox2056Cb()
const TextBox2057Props = useStore((state)=>state["joggr-website-design"]["TextBox2057"]);
const TextBox2057IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2057"]);
const TextBox2057Cb = useTextBox2057Cb()
const TextBox2058Props = useStore((state)=>state["joggr-website-design"]["TextBox2058"]);
const TextBox2058IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2058"]);
const TextBox2058Cb = useTextBox2058Cb()
const TextBox2059Props = useStore((state)=>state["joggr-website-design"]["TextBox2059"]);
const TextBox2059IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2059"]);
const TextBox2059Cb = useTextBox2059Cb()
const TextBox2060Props = useStore((state)=>state["joggr-website-design"]["TextBox2060"]);
const TextBox2060IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2060"]);
const TextBox2060Cb = useTextBox2060Cb()
const TextBox2061Props = useStore((state)=>state["joggr-website-design"]["TextBox2061"]);
const TextBox2061IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2061"]);
const TextBox2061Cb = useTextBox2061Cb()
const TextBox2062Props = useStore((state)=>state["joggr-website-design"]["TextBox2062"]);
const TextBox2062IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2062"]);
const TextBox2062Cb = useTextBox2062Cb()
const TextBox2063Props = useStore((state)=>state["joggr-website-design"]["TextBox2063"]);
const TextBox2063IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2063"]);
const TextBox2063Cb = useTextBox2063Cb()
const TextBox2064Props = useStore((state)=>state["joggr-website-design"]["TextBox2064"]);
const TextBox2064IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2064"]);
const TextBox2064Cb = useTextBox2064Cb()
const TextBox2075Props = useStore((state)=>state["joggr-website-design"]["TextBox2075"]);
const TextBox2075IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2075"]);
const TextBox2075Cb = useTextBox2075Cb()
const Image508Props = useStore((state)=>state["joggr-website-design"]["Image508"]);
const Image508IoProps = useIoStore((state)=>state["joggr-website-design"]["Image508"]);
const Image508Cb = useImage508Cb()
const Image526Props = useStore((state)=>state["joggr-website-design"]["Image526"]);
const Image526IoProps = useIoStore((state)=>state["joggr-website-design"]["Image526"]);
const Image526Cb = useImage526Cb()
const TextBox2194Props = useStore((state)=>state["joggr-website-design"]["TextBox2194"]);
const TextBox2194IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2194"]);
const TextBox2194Cb = useTextBox2194Cb()
const TextBox2195Props = useStore((state)=>state["joggr-website-design"]["TextBox2195"]);
const TextBox2195IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2195"]);
const TextBox2195Cb = useTextBox2195Cb()
const TextBox2196Props = useStore((state)=>state["joggr-website-design"]["TextBox2196"]);
const TextBox2196IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2196"]);
const TextBox2196Cb = useTextBox2196Cb()
const TextBox2197Props = useStore((state)=>state["joggr-website-design"]["TextBox2197"]);
const TextBox2197IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2197"]);
const TextBox2197Cb = useTextBox2197Cb()
const TextBox2193Props = useStore((state)=>state["joggr-website-design"]["TextBox2193"]);
const TextBox2193IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2193"]);
const TextBox2193Cb = useTextBox2193Cb()
const Image525Props = useStore((state)=>state["joggr-website-design"]["Image525"]);
const Image525IoProps = useIoStore((state)=>state["joggr-website-design"]["Image525"]);
const Image525Cb = useImage525Cb()
const TextBox2189Props = useStore((state)=>state["joggr-website-design"]["TextBox2189"]);
const TextBox2189IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2189"]);
const TextBox2189Cb = useTextBox2189Cb()
const TextBox2190Props = useStore((state)=>state["joggr-website-design"]["TextBox2190"]);
const TextBox2190IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2190"]);
const TextBox2190Cb = useTextBox2190Cb()
const TextBox2191Props = useStore((state)=>state["joggr-website-design"]["TextBox2191"]);
const TextBox2191IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2191"]);
const TextBox2191Cb = useTextBox2191Cb()
const TextBox2192Props = useStore((state)=>state["joggr-website-design"]["TextBox2192"]);
const TextBox2192IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2192"]);
const TextBox2192Cb = useTextBox2192Cb()
const Image524Props = useStore((state)=>state["joggr-website-design"]["Image524"]);
const Image524IoProps = useIoStore((state)=>state["joggr-website-design"]["Image524"]);
const Image524Cb = useImage524Cb()
const TextBox2188Props = useStore((state)=>state["joggr-website-design"]["TextBox2188"]);
const TextBox2188IoProps = useIoStore((state)=>state["joggr-website-design"]["TextBox2188"]);
const TextBox2188Cb = useTextBox2188Cb()

  return (<>
  <Flex13 className="p-joggr-website-design Flex1915 bpt" {...Flex1915Props} {...Flex1915Cb} {...Flex1915IoProps}>
<Flex13 className="p-joggr-website-design Flex1914 bpt" {...Flex1914Props} {...Flex1914Cb} {...Flex1914IoProps}>
<Image14 className="p-joggr-website-design Image526 bpt" {...Image526Props} {...Image526Cb} {...Image526IoProps}/>
<Flex13 className="p-joggr-website-design Flex1913 bpt" {...Flex1913Props} {...Flex1913Cb} {...Flex1913IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2197 bpt" {...TextBox2197Props} {...TextBox2197Cb} {...TextBox2197IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2194 bpt" {...TextBox2194Props} {...TextBox2194Cb} {...TextBox2194IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2195 bpt" {...TextBox2195Props} {...TextBox2195Cb} {...TextBox2195IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2196 bpt" {...TextBox2196Props} {...TextBox2196Cb} {...TextBox2196IoProps}/>
<Flex13 className="p-joggr-website-design Flex1911 bpt" {...Flex1911Props} {...Flex1911Cb} {...Flex1911IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2193 bpt" {...TextBox2193Props} {...TextBox2193Cb} {...TextBox2193IoProps}/>
<Image14 className="p-joggr-website-design Image525 bpt" {...Image525Props} {...Image525Cb} {...Image525IoProps}/>
</Flex13>
</Flex13>
<Menu13 className="p-joggr-website-design Menu32 bpt" {...Menu32Props} {...Menu32Cb} {...Menu32IoProps}>
<Flex13 className="p-joggr-website-design Flex1912 bpt" {...Flex1912Props} {...Flex1912Cb} {...Flex1912IoProps}>
<Flex13 className="p-joggr-website-design Flex1910 bpt" {...Flex1910Props} {...Flex1910Cb} {...Flex1910IoProps}>
<Flex13 className="p-joggr-website-design Flex1909 bpt" {...Flex1909Props} {...Flex1909Cb} {...Flex1909IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2189 bpt" {...TextBox2189Props} {...TextBox2189Cb} {...TextBox2189IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2192 bpt" {...TextBox2192Props} {...TextBox2192Cb} {...TextBox2192IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2191 bpt" {...TextBox2191Props} {...TextBox2191Cb} {...TextBox2191IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2190 bpt" {...TextBox2190Props} {...TextBox2190Cb} {...TextBox2190IoProps}/>
<Flex13 className="p-joggr-website-design Flex1908 bpt" {...Flex1908Props} {...Flex1908Cb} {...Flex1908IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2188 bpt" {...TextBox2188Props} {...TextBox2188Cb} {...TextBox2188IoProps}/>
<Image14 className="p-joggr-website-design Image524 bpt" {...Image524Props} {...Image524Cb} {...Image524IoProps}/>
</Flex13>
</Flex13>
</Flex13>
</Flex13>
</Menu13>
</Flex13>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1829 bpt" {...Flex1829Props} {...Flex1829Cb} {...Flex1829IoProps}>
<Flex13 className="p-joggr-website-design Flex1826 bpt" {...Flex1826Props} {...Flex1826Cb} {...Flex1826IoProps}>
<Flex13 className="p-joggr-website-design Flex1823 bpt" {...Flex1823Props} {...Flex1823Cb} {...Flex1823IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2081 bpt" {...TextBox2081Props} {...TextBox2081Cb} {...TextBox2081IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2080 bpt" {...TextBox2080Props} {...TextBox2080Cb} {...TextBox2080IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1824 bpt" {...Flex1824Props} {...Flex1824Cb} {...Flex1824IoProps}>
<Flex13 className="p-joggr-website-design Flex1821 bpt" {...Flex1821Props} {...Flex1821Cb} {...Flex1821IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2078 bpt" {...TextBox2078Props} {...TextBox2078Cb} {...TextBox2078IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2079 bpt" {...TextBox2079Props} {...TextBox2079Cb} {...TextBox2079IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1820 bpt" {...Flex1820Props} {...Flex1820Cb} {...Flex1820IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2077 bpt" {...TextBox2077Props} {...TextBox2077Cb} {...TextBox2077IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2076 bpt" {...TextBox2076Props} {...TextBox2076Cb} {...TextBox2076IoProps}/>
</Flex13>
</Flex13>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1827 bpt" {...Flex1827Props} {...Flex1827Cb} {...Flex1827IoProps}>
<Image14 className="p-joggr-website-design Image509 bpt" {...Image509Props} {...Image509Cb} {...Image509IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1828 bpt" {...Flex1828Props} {...Flex1828Cb} {...Flex1828IoProps}>
<Flex13 className="p-joggr-website-design Flex1825 bpt" {...Flex1825Props} {...Flex1825Cb} {...Flex1825IoProps}>
<Flex13 className="p-joggr-website-design Flex1822 bpt" {...Flex1822Props} {...Flex1822Cb} {...Flex1822IoProps}>
<Flex13 className="p-joggr-website-design Flex1818 bpt" {...Flex1818Props} {...Flex1818Cb} {...Flex1818IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2073 bpt" {...TextBox2073Props} {...TextBox2073Cb} {...TextBox2073IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2074 bpt" {...TextBox2074Props} {...TextBox2074Cb} {...TextBox2074IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2072 bpt" {...TextBox2072Props} {...TextBox2072Cb} {...TextBox2072IoProps}/>
<Flex13 className="p-joggr-website-design Flex1817 bpt" {...Flex1817Props} {...Flex1817Cb} {...Flex1817IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2064 bpt" {...TextBox2064Props} {...TextBox2064Cb} {...TextBox2064IoProps}/>
</Flex13>
<TextBox13 className="p-joggr-website-design TextBox2068 bpt" {...TextBox2068Props} {...TextBox2068Cb} {...TextBox2068IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2067 bpt" {...TextBox2067Props} {...TextBox2067Cb} {...TextBox2067IoProps}/>
<Flex13 className="p-joggr-website-design Flex1815 bpt" {...Flex1815Props} {...Flex1815Cb} {...Flex1815IoProps}>
<Flex13 className="p-joggr-website-design Flex1809 bpt" {...Flex1809Props} {...Flex1809Cb} {...Flex1809IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2053 bpt" {...TextBox2053Props} {...TextBox2053Cb} {...TextBox2053IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2052 bpt" {...TextBox2052Props} {...TextBox2052Cb} {...TextBox2052IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1810 bpt" {...Flex1810Props} {...Flex1810Cb} {...Flex1810IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2054 bpt" {...TextBox2054Props} {...TextBox2054Cb} {...TextBox2054IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2055 bpt" {...TextBox2055Props} {...TextBox2055Cb} {...TextBox2055IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1811 bpt" {...Flex1811Props} {...Flex1811Cb} {...Flex1811IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2056 bpt" {...TextBox2056Props} {...TextBox2056Cb} {...TextBox2056IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2057 bpt" {...TextBox2057Props} {...TextBox2057Cb} {...TextBox2057IoProps}/>
</Flex13>
</Flex13>
<TextBox13 className="p-joggr-website-design TextBox2071 bpt" {...TextBox2071Props} {...TextBox2071Cb} {...TextBox2071IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2066 bpt" {...TextBox2066Props} {...TextBox2066Cb} {...TextBox2066IoProps}/>
<Flex13 className="p-joggr-website-design Flex1816 bpt" {...Flex1816Props} {...Flex1816Cb} {...Flex1816IoProps}>
<Flex13 className="p-joggr-website-design Flex1814 bpt" {...Flex1814Props} {...Flex1814Cb} {...Flex1814IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2062 bpt" {...TextBox2062Props} {...TextBox2062Cb} {...TextBox2062IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2063 bpt" {...TextBox2063Props} {...TextBox2063Cb} {...TextBox2063IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1813 bpt" {...Flex1813Props} {...Flex1813Cb} {...Flex1813IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2061 bpt" {...TextBox2061Props} {...TextBox2061Cb} {...TextBox2061IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2060 bpt" {...TextBox2060Props} {...TextBox2060Cb} {...TextBox2060IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1812 bpt" {...Flex1812Props} {...Flex1812Cb} {...Flex1812IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2059 bpt" {...TextBox2059Props} {...TextBox2059Cb} {...TextBox2059IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2058 bpt" {...TextBox2058Props} {...TextBox2058Cb} {...TextBox2058IoProps}/>
</Flex13>
</Flex13>
<TextBox13 className="p-joggr-website-design TextBox2070 bpt" {...TextBox2070Props} {...TextBox2070Cb} {...TextBox2070IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2065 bpt" {...TextBox2065Props} {...TextBox2065Cb} {...TextBox2065IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2069 bpt" {...TextBox2069Props} {...TextBox2069Cb} {...TextBox2069IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1819 bpt" {...Flex1819Props} {...Flex1819Cb} {...Flex1819IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2075 bpt" {...TextBox2075Props} {...TextBox2075Cb} {...TextBox2075IoProps}/>
<Image14 className="p-joggr-website-design Image508 bpt" {...Image508Props} {...Image508Cb} {...Image508IoProps}/>
</Flex13>
</Flex13>
</Flex13>
</Flex13>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1808 bpt" {...Flex1808Props} {...Flex1808Cb} {...Flex1808IoProps}>
<Flex13 className="p-joggr-website-design Flex1807 bpt" {...Flex1807Props} {...Flex1807Cb} {...Flex1807IoProps}>
<Flex13 className="p-joggr-website-design Flex1805 bpt" {...Flex1805Props} {...Flex1805Cb} {...Flex1805IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2050 bpt" {...TextBox2050Props} {...TextBox2050Cb} {...TextBox2050IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2051 bpt" {...TextBox2051Props} {...TextBox2051Cb} {...TextBox2051IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1806 bpt" {...Flex1806Props} {...Flex1806Cb} {...Flex1806IoProps}>
<Flex13 className="p-joggr-website-design Flex1803 bpt" {...Flex1803Props} {...Flex1803Cb} {...Flex1803IoProps}>
<Image14 className="p-joggr-website-design Image507 bpt" {...Image507Props} {...Image507Cb} {...Image507IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2049 bpt" {...TextBox2049Props} {...TextBox2049Cb} {...TextBox2049IoProps}/>
<Flex13 className="p-joggr-website-design Flex1799 bpt" {...Flex1799Props} {...Flex1799Cb} {...Flex1799IoProps}>
<Image14 className="p-joggr-website-design Image506 bpt" {...Image506Props} {...Image506Cb} {...Image506IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2039 bpt" {...TextBox2039Props} {...TextBox2039Cb} {...TextBox2039IoProps}/>
</Flex13>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1804 bpt" {...Flex1804Props} {...Flex1804Cb} {...Flex1804IoProps}>
<Flex13 className="p-joggr-website-design Flex1802 bpt" {...Flex1802Props} {...Flex1802Cb} {...Flex1802IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2046 bpt" {...TextBox2046Props} {...TextBox2046Cb} {...TextBox2046IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2048 bpt" {...TextBox2048Props} {...TextBox2048Cb} {...TextBox2048IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2047 bpt" {...TextBox2047Props} {...TextBox2047Cb} {...TextBox2047IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1800 bpt" {...Flex1800Props} {...Flex1800Cb} {...Flex1800IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2040 bpt" {...TextBox2040Props} {...TextBox2040Cb} {...TextBox2040IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2041 bpt" {...TextBox2041Props} {...TextBox2041Cb} {...TextBox2041IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2042 bpt" {...TextBox2042Props} {...TextBox2042Cb} {...TextBox2042IoProps}/>
</Flex13>
<Flex13 className="p-joggr-website-design Flex1801 bpt" {...Flex1801Props} {...Flex1801Cb} {...Flex1801IoProps}>
<TextBox13 className="p-joggr-website-design TextBox2043 bpt" {...TextBox2043Props} {...TextBox2043Cb} {...TextBox2043IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2044 bpt" {...TextBox2044Props} {...TextBox2044Cb} {...TextBox2044IoProps}/>
<TextBox13 className="p-joggr-website-design TextBox2045 bpt" {...TextBox2045Props} {...TextBox2045Cb} {...TextBox2045IoProps}/>
</Flex13>
</Flex13>
</Flex13>
</Flex13>
</Flex13>
  </>);
}
