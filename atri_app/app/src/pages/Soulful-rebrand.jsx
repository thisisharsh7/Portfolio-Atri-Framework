import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex9 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu9 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox9 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image10 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex1870Cb, useFlex1869Cb, useFlex1867Cb, useFlex1868Cb, useFlex1865Cb, useFlex1861Cb, useFlex1866Cb, useFlex1862Cb, useFlex1863Cb, useFlex1864Cb, useFlex1891Cb, useFlex1888Cb, useFlex1885Cb, useFlex1886Cb, useFlex1882Cb, useFlex1883Cb, useFlex1889Cb, useFlex1890Cb, useFlex1887Cb, useFlex1884Cb, useFlex1880Cb, useFlex1877Cb, useFlex1871Cb, useFlex1872Cb, useFlex1873Cb, useFlex1878Cb, useFlex1874Cb, useFlex1875Cb, useFlex1876Cb, useFlex1879Cb, useFlex1881Cb, useFlex1899Cb, useFlex1898Cb, useFlex1897Cb, useFlex1895Cb, useMenu30Cb, useFlex1896Cb, useFlex1894Cb, useFlex1893Cb, useFlex1892Cb, useTextBox2136Cb, useTextBox2137Cb, useImage515Cb, useTextBox2135Cb, useImage514Cb, useTextBox2125Cb, useTextBox2126Cb, useTextBox2127Cb, useTextBox2128Cb, useTextBox2129Cb, useTextBox2130Cb, useTextBox2131Cb, useTextBox2132Cb, useTextBox2133Cb, useTextBox2134Cb, useTextBox2166Cb, useTextBox2167Cb, useTextBox2162Cb, useTextBox2163Cb, useTextBox2164Cb, useTextBox2165Cb, useImage517Cb, useTextBox2151Cb, useTextBox2152Cb, useTextBox2153Cb, useTextBox2154Cb, useTextBox2155Cb, useTextBox2156Cb, useTextBox2157Cb, useTextBox2158Cb, useTextBox2159Cb, useTextBox2160Cb, useTextBox2138Cb, useTextBox2139Cb, useTextBox2140Cb, useTextBox2141Cb, useTextBox2142Cb, useTextBox2143Cb, useTextBox2144Cb, useTextBox2145Cb, useTextBox2146Cb, useTextBox2147Cb, useTextBox2148Cb, useTextBox2149Cb, useTextBox2150Cb, useTextBox2161Cb, useImage516Cb, useImage520Cb, useTextBox2174Cb, useTextBox2175Cb, useTextBox2176Cb, useTextBox2177Cb, useTextBox2173Cb, useImage519Cb, useTextBox2169Cb, useTextBox2170Cb, useTextBox2171Cb, useTextBox2172Cb, useImage518Cb, useTextBox2168Cb } from "../page-cbs/soulful-rebrand";
import "../page-css/soulful-rebrand.css";
import "../custom/soulful-rebrand";

export default function SoulfulRebrand() {
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

  const Flex1870Props = useStore((state)=>state["soulful-rebrand"]["Flex1870"]);
const Flex1870IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1870"]);
const Flex1870Cb = useFlex1870Cb()
const Flex1869Props = useStore((state)=>state["soulful-rebrand"]["Flex1869"]);
const Flex1869IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1869"]);
const Flex1869Cb = useFlex1869Cb()
const Flex1867Props = useStore((state)=>state["soulful-rebrand"]["Flex1867"]);
const Flex1867IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1867"]);
const Flex1867Cb = useFlex1867Cb()
const Flex1868Props = useStore((state)=>state["soulful-rebrand"]["Flex1868"]);
const Flex1868IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1868"]);
const Flex1868Cb = useFlex1868Cb()
const Flex1865Props = useStore((state)=>state["soulful-rebrand"]["Flex1865"]);
const Flex1865IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1865"]);
const Flex1865Cb = useFlex1865Cb()
const Flex1861Props = useStore((state)=>state["soulful-rebrand"]["Flex1861"]);
const Flex1861IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1861"]);
const Flex1861Cb = useFlex1861Cb()
const Flex1866Props = useStore((state)=>state["soulful-rebrand"]["Flex1866"]);
const Flex1866IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1866"]);
const Flex1866Cb = useFlex1866Cb()
const Flex1862Props = useStore((state)=>state["soulful-rebrand"]["Flex1862"]);
const Flex1862IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1862"]);
const Flex1862Cb = useFlex1862Cb()
const Flex1863Props = useStore((state)=>state["soulful-rebrand"]["Flex1863"]);
const Flex1863IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1863"]);
const Flex1863Cb = useFlex1863Cb()
const Flex1864Props = useStore((state)=>state["soulful-rebrand"]["Flex1864"]);
const Flex1864IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1864"]);
const Flex1864Cb = useFlex1864Cb()
const Flex1891Props = useStore((state)=>state["soulful-rebrand"]["Flex1891"]);
const Flex1891IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1891"]);
const Flex1891Cb = useFlex1891Cb()
const Flex1888Props = useStore((state)=>state["soulful-rebrand"]["Flex1888"]);
const Flex1888IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1888"]);
const Flex1888Cb = useFlex1888Cb()
const Flex1885Props = useStore((state)=>state["soulful-rebrand"]["Flex1885"]);
const Flex1885IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1885"]);
const Flex1885Cb = useFlex1885Cb()
const Flex1886Props = useStore((state)=>state["soulful-rebrand"]["Flex1886"]);
const Flex1886IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1886"]);
const Flex1886Cb = useFlex1886Cb()
const Flex1882Props = useStore((state)=>state["soulful-rebrand"]["Flex1882"]);
const Flex1882IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1882"]);
const Flex1882Cb = useFlex1882Cb()
const Flex1883Props = useStore((state)=>state["soulful-rebrand"]["Flex1883"]);
const Flex1883IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1883"]);
const Flex1883Cb = useFlex1883Cb()
const Flex1889Props = useStore((state)=>state["soulful-rebrand"]["Flex1889"]);
const Flex1889IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1889"]);
const Flex1889Cb = useFlex1889Cb()
const Flex1890Props = useStore((state)=>state["soulful-rebrand"]["Flex1890"]);
const Flex1890IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1890"]);
const Flex1890Cb = useFlex1890Cb()
const Flex1887Props = useStore((state)=>state["soulful-rebrand"]["Flex1887"]);
const Flex1887IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1887"]);
const Flex1887Cb = useFlex1887Cb()
const Flex1884Props = useStore((state)=>state["soulful-rebrand"]["Flex1884"]);
const Flex1884IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1884"]);
const Flex1884Cb = useFlex1884Cb()
const Flex1880Props = useStore((state)=>state["soulful-rebrand"]["Flex1880"]);
const Flex1880IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1880"]);
const Flex1880Cb = useFlex1880Cb()
const Flex1877Props = useStore((state)=>state["soulful-rebrand"]["Flex1877"]);
const Flex1877IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1877"]);
const Flex1877Cb = useFlex1877Cb()
const Flex1871Props = useStore((state)=>state["soulful-rebrand"]["Flex1871"]);
const Flex1871IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1871"]);
const Flex1871Cb = useFlex1871Cb()
const Flex1872Props = useStore((state)=>state["soulful-rebrand"]["Flex1872"]);
const Flex1872IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1872"]);
const Flex1872Cb = useFlex1872Cb()
const Flex1873Props = useStore((state)=>state["soulful-rebrand"]["Flex1873"]);
const Flex1873IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1873"]);
const Flex1873Cb = useFlex1873Cb()
const Flex1878Props = useStore((state)=>state["soulful-rebrand"]["Flex1878"]);
const Flex1878IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1878"]);
const Flex1878Cb = useFlex1878Cb()
const Flex1874Props = useStore((state)=>state["soulful-rebrand"]["Flex1874"]);
const Flex1874IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1874"]);
const Flex1874Cb = useFlex1874Cb()
const Flex1875Props = useStore((state)=>state["soulful-rebrand"]["Flex1875"]);
const Flex1875IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1875"]);
const Flex1875Cb = useFlex1875Cb()
const Flex1876Props = useStore((state)=>state["soulful-rebrand"]["Flex1876"]);
const Flex1876IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1876"]);
const Flex1876Cb = useFlex1876Cb()
const Flex1879Props = useStore((state)=>state["soulful-rebrand"]["Flex1879"]);
const Flex1879IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1879"]);
const Flex1879Cb = useFlex1879Cb()
const Flex1881Props = useStore((state)=>state["soulful-rebrand"]["Flex1881"]);
const Flex1881IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1881"]);
const Flex1881Cb = useFlex1881Cb()
const Flex1899Props = useStore((state)=>state["soulful-rebrand"]["Flex1899"]);
const Flex1899IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1899"]);
const Flex1899Cb = useFlex1899Cb()
const Flex1898Props = useStore((state)=>state["soulful-rebrand"]["Flex1898"]);
const Flex1898IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1898"]);
const Flex1898Cb = useFlex1898Cb()
const Flex1897Props = useStore((state)=>state["soulful-rebrand"]["Flex1897"]);
const Flex1897IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1897"]);
const Flex1897Cb = useFlex1897Cb()
const Flex1895Props = useStore((state)=>state["soulful-rebrand"]["Flex1895"]);
const Flex1895IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1895"]);
const Flex1895Cb = useFlex1895Cb()
const Menu30Props = useStore((state)=>state["soulful-rebrand"]["Menu30"]);
const Menu30IoProps = useIoStore((state)=>state["soulful-rebrand"]["Menu30"]);
const Menu30Cb = useMenu30Cb()
const Flex1896Props = useStore((state)=>state["soulful-rebrand"]["Flex1896"]);
const Flex1896IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1896"]);
const Flex1896Cb = useFlex1896Cb()
const Flex1894Props = useStore((state)=>state["soulful-rebrand"]["Flex1894"]);
const Flex1894IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1894"]);
const Flex1894Cb = useFlex1894Cb()
const Flex1893Props = useStore((state)=>state["soulful-rebrand"]["Flex1893"]);
const Flex1893IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1893"]);
const Flex1893Cb = useFlex1893Cb()
const Flex1892Props = useStore((state)=>state["soulful-rebrand"]["Flex1892"]);
const Flex1892IoProps = useIoStore((state)=>state["soulful-rebrand"]["Flex1892"]);
const Flex1892Cb = useFlex1892Cb()
const TextBox2136Props = useStore((state)=>state["soulful-rebrand"]["TextBox2136"]);
const TextBox2136IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2136"]);
const TextBox2136Cb = useTextBox2136Cb()
const TextBox2137Props = useStore((state)=>state["soulful-rebrand"]["TextBox2137"]);
const TextBox2137IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2137"]);
const TextBox2137Cb = useTextBox2137Cb()
const Image515Props = useStore((state)=>state["soulful-rebrand"]["Image515"]);
const Image515IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image515"]);
const Image515Cb = useImage515Cb()
const TextBox2135Props = useStore((state)=>state["soulful-rebrand"]["TextBox2135"]);
const TextBox2135IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2135"]);
const TextBox2135Cb = useTextBox2135Cb()
const Image514Props = useStore((state)=>state["soulful-rebrand"]["Image514"]);
const Image514IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image514"]);
const Image514Cb = useImage514Cb()
const TextBox2125Props = useStore((state)=>state["soulful-rebrand"]["TextBox2125"]);
const TextBox2125IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2125"]);
const TextBox2125Cb = useTextBox2125Cb()
const TextBox2126Props = useStore((state)=>state["soulful-rebrand"]["TextBox2126"]);
const TextBox2126IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2126"]);
const TextBox2126Cb = useTextBox2126Cb()
const TextBox2127Props = useStore((state)=>state["soulful-rebrand"]["TextBox2127"]);
const TextBox2127IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2127"]);
const TextBox2127Cb = useTextBox2127Cb()
const TextBox2128Props = useStore((state)=>state["soulful-rebrand"]["TextBox2128"]);
const TextBox2128IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2128"]);
const TextBox2128Cb = useTextBox2128Cb()
const TextBox2129Props = useStore((state)=>state["soulful-rebrand"]["TextBox2129"]);
const TextBox2129IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2129"]);
const TextBox2129Cb = useTextBox2129Cb()
const TextBox2130Props = useStore((state)=>state["soulful-rebrand"]["TextBox2130"]);
const TextBox2130IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2130"]);
const TextBox2130Cb = useTextBox2130Cb()
const TextBox2131Props = useStore((state)=>state["soulful-rebrand"]["TextBox2131"]);
const TextBox2131IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2131"]);
const TextBox2131Cb = useTextBox2131Cb()
const TextBox2132Props = useStore((state)=>state["soulful-rebrand"]["TextBox2132"]);
const TextBox2132IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2132"]);
const TextBox2132Cb = useTextBox2132Cb()
const TextBox2133Props = useStore((state)=>state["soulful-rebrand"]["TextBox2133"]);
const TextBox2133IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2133"]);
const TextBox2133Cb = useTextBox2133Cb()
const TextBox2134Props = useStore((state)=>state["soulful-rebrand"]["TextBox2134"]);
const TextBox2134IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2134"]);
const TextBox2134Cb = useTextBox2134Cb()
const TextBox2166Props = useStore((state)=>state["soulful-rebrand"]["TextBox2166"]);
const TextBox2166IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2166"]);
const TextBox2166Cb = useTextBox2166Cb()
const TextBox2167Props = useStore((state)=>state["soulful-rebrand"]["TextBox2167"]);
const TextBox2167IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2167"]);
const TextBox2167Cb = useTextBox2167Cb()
const TextBox2162Props = useStore((state)=>state["soulful-rebrand"]["TextBox2162"]);
const TextBox2162IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2162"]);
const TextBox2162Cb = useTextBox2162Cb()
const TextBox2163Props = useStore((state)=>state["soulful-rebrand"]["TextBox2163"]);
const TextBox2163IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2163"]);
const TextBox2163Cb = useTextBox2163Cb()
const TextBox2164Props = useStore((state)=>state["soulful-rebrand"]["TextBox2164"]);
const TextBox2164IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2164"]);
const TextBox2164Cb = useTextBox2164Cb()
const TextBox2165Props = useStore((state)=>state["soulful-rebrand"]["TextBox2165"]);
const TextBox2165IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2165"]);
const TextBox2165Cb = useTextBox2165Cb()
const Image517Props = useStore((state)=>state["soulful-rebrand"]["Image517"]);
const Image517IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image517"]);
const Image517Cb = useImage517Cb()
const TextBox2151Props = useStore((state)=>state["soulful-rebrand"]["TextBox2151"]);
const TextBox2151IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2151"]);
const TextBox2151Cb = useTextBox2151Cb()
const TextBox2152Props = useStore((state)=>state["soulful-rebrand"]["TextBox2152"]);
const TextBox2152IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2152"]);
const TextBox2152Cb = useTextBox2152Cb()
const TextBox2153Props = useStore((state)=>state["soulful-rebrand"]["TextBox2153"]);
const TextBox2153IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2153"]);
const TextBox2153Cb = useTextBox2153Cb()
const TextBox2154Props = useStore((state)=>state["soulful-rebrand"]["TextBox2154"]);
const TextBox2154IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2154"]);
const TextBox2154Cb = useTextBox2154Cb()
const TextBox2155Props = useStore((state)=>state["soulful-rebrand"]["TextBox2155"]);
const TextBox2155IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2155"]);
const TextBox2155Cb = useTextBox2155Cb()
const TextBox2156Props = useStore((state)=>state["soulful-rebrand"]["TextBox2156"]);
const TextBox2156IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2156"]);
const TextBox2156Cb = useTextBox2156Cb()
const TextBox2157Props = useStore((state)=>state["soulful-rebrand"]["TextBox2157"]);
const TextBox2157IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2157"]);
const TextBox2157Cb = useTextBox2157Cb()
const TextBox2158Props = useStore((state)=>state["soulful-rebrand"]["TextBox2158"]);
const TextBox2158IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2158"]);
const TextBox2158Cb = useTextBox2158Cb()
const TextBox2159Props = useStore((state)=>state["soulful-rebrand"]["TextBox2159"]);
const TextBox2159IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2159"]);
const TextBox2159Cb = useTextBox2159Cb()
const TextBox2160Props = useStore((state)=>state["soulful-rebrand"]["TextBox2160"]);
const TextBox2160IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2160"]);
const TextBox2160Cb = useTextBox2160Cb()
const TextBox2138Props = useStore((state)=>state["soulful-rebrand"]["TextBox2138"]);
const TextBox2138IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2138"]);
const TextBox2138Cb = useTextBox2138Cb()
const TextBox2139Props = useStore((state)=>state["soulful-rebrand"]["TextBox2139"]);
const TextBox2139IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2139"]);
const TextBox2139Cb = useTextBox2139Cb()
const TextBox2140Props = useStore((state)=>state["soulful-rebrand"]["TextBox2140"]);
const TextBox2140IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2140"]);
const TextBox2140Cb = useTextBox2140Cb()
const TextBox2141Props = useStore((state)=>state["soulful-rebrand"]["TextBox2141"]);
const TextBox2141IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2141"]);
const TextBox2141Cb = useTextBox2141Cb()
const TextBox2142Props = useStore((state)=>state["soulful-rebrand"]["TextBox2142"]);
const TextBox2142IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2142"]);
const TextBox2142Cb = useTextBox2142Cb()
const TextBox2143Props = useStore((state)=>state["soulful-rebrand"]["TextBox2143"]);
const TextBox2143IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2143"]);
const TextBox2143Cb = useTextBox2143Cb()
const TextBox2144Props = useStore((state)=>state["soulful-rebrand"]["TextBox2144"]);
const TextBox2144IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2144"]);
const TextBox2144Cb = useTextBox2144Cb()
const TextBox2145Props = useStore((state)=>state["soulful-rebrand"]["TextBox2145"]);
const TextBox2145IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2145"]);
const TextBox2145Cb = useTextBox2145Cb()
const TextBox2146Props = useStore((state)=>state["soulful-rebrand"]["TextBox2146"]);
const TextBox2146IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2146"]);
const TextBox2146Cb = useTextBox2146Cb()
const TextBox2147Props = useStore((state)=>state["soulful-rebrand"]["TextBox2147"]);
const TextBox2147IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2147"]);
const TextBox2147Cb = useTextBox2147Cb()
const TextBox2148Props = useStore((state)=>state["soulful-rebrand"]["TextBox2148"]);
const TextBox2148IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2148"]);
const TextBox2148Cb = useTextBox2148Cb()
const TextBox2149Props = useStore((state)=>state["soulful-rebrand"]["TextBox2149"]);
const TextBox2149IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2149"]);
const TextBox2149Cb = useTextBox2149Cb()
const TextBox2150Props = useStore((state)=>state["soulful-rebrand"]["TextBox2150"]);
const TextBox2150IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2150"]);
const TextBox2150Cb = useTextBox2150Cb()
const TextBox2161Props = useStore((state)=>state["soulful-rebrand"]["TextBox2161"]);
const TextBox2161IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2161"]);
const TextBox2161Cb = useTextBox2161Cb()
const Image516Props = useStore((state)=>state["soulful-rebrand"]["Image516"]);
const Image516IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image516"]);
const Image516Cb = useImage516Cb()
const Image520Props = useStore((state)=>state["soulful-rebrand"]["Image520"]);
const Image520IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image520"]);
const Image520Cb = useImage520Cb()
const TextBox2174Props = useStore((state)=>state["soulful-rebrand"]["TextBox2174"]);
const TextBox2174IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2174"]);
const TextBox2174Cb = useTextBox2174Cb()
const TextBox2175Props = useStore((state)=>state["soulful-rebrand"]["TextBox2175"]);
const TextBox2175IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2175"]);
const TextBox2175Cb = useTextBox2175Cb()
const TextBox2176Props = useStore((state)=>state["soulful-rebrand"]["TextBox2176"]);
const TextBox2176IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2176"]);
const TextBox2176Cb = useTextBox2176Cb()
const TextBox2177Props = useStore((state)=>state["soulful-rebrand"]["TextBox2177"]);
const TextBox2177IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2177"]);
const TextBox2177Cb = useTextBox2177Cb()
const TextBox2173Props = useStore((state)=>state["soulful-rebrand"]["TextBox2173"]);
const TextBox2173IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2173"]);
const TextBox2173Cb = useTextBox2173Cb()
const Image519Props = useStore((state)=>state["soulful-rebrand"]["Image519"]);
const Image519IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image519"]);
const Image519Cb = useImage519Cb()
const TextBox2169Props = useStore((state)=>state["soulful-rebrand"]["TextBox2169"]);
const TextBox2169IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2169"]);
const TextBox2169Cb = useTextBox2169Cb()
const TextBox2170Props = useStore((state)=>state["soulful-rebrand"]["TextBox2170"]);
const TextBox2170IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2170"]);
const TextBox2170Cb = useTextBox2170Cb()
const TextBox2171Props = useStore((state)=>state["soulful-rebrand"]["TextBox2171"]);
const TextBox2171IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2171"]);
const TextBox2171Cb = useTextBox2171Cb()
const TextBox2172Props = useStore((state)=>state["soulful-rebrand"]["TextBox2172"]);
const TextBox2172IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2172"]);
const TextBox2172Cb = useTextBox2172Cb()
const Image518Props = useStore((state)=>state["soulful-rebrand"]["Image518"]);
const Image518IoProps = useIoStore((state)=>state["soulful-rebrand"]["Image518"]);
const Image518Cb = useImage518Cb()
const TextBox2168Props = useStore((state)=>state["soulful-rebrand"]["TextBox2168"]);
const TextBox2168IoProps = useIoStore((state)=>state["soulful-rebrand"]["TextBox2168"]);
const TextBox2168Cb = useTextBox2168Cb()

  return (<>
  <Flex9 className="p-soulful-rebrand Flex1899 bpt" {...Flex1899Props} {...Flex1899Cb} {...Flex1899IoProps}>
<Flex9 className="p-soulful-rebrand Flex1898 bpt" {...Flex1898Props} {...Flex1898Cb} {...Flex1898IoProps}>
<Image10 className="p-soulful-rebrand Image520 bpt" {...Image520Props} {...Image520Cb} {...Image520IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1897 bpt" {...Flex1897Props} {...Flex1897Cb} {...Flex1897IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2177 bpt" {...TextBox2177Props} {...TextBox2177Cb} {...TextBox2177IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2174 bpt" {...TextBox2174Props} {...TextBox2174Cb} {...TextBox2174IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2175 bpt" {...TextBox2175Props} {...TextBox2175Cb} {...TextBox2175IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2176 bpt" {...TextBox2176Props} {...TextBox2176Cb} {...TextBox2176IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1895 bpt" {...Flex1895Props} {...Flex1895Cb} {...Flex1895IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2173 bpt" {...TextBox2173Props} {...TextBox2173Cb} {...TextBox2173IoProps}/>
<Image10 className="p-soulful-rebrand Image519 bpt" {...Image519Props} {...Image519Cb} {...Image519IoProps}/>
</Flex9>
</Flex9>
<Menu9 className="p-soulful-rebrand Menu30 bpt" {...Menu30Props} {...Menu30Cb} {...Menu30IoProps}>
<Flex9 className="p-soulful-rebrand Flex1896 bpt" {...Flex1896Props} {...Flex1896Cb} {...Flex1896IoProps}>
<Flex9 className="p-soulful-rebrand Flex1894 bpt" {...Flex1894Props} {...Flex1894Cb} {...Flex1894IoProps}>
<Flex9 className="p-soulful-rebrand Flex1893 bpt" {...Flex1893Props} {...Flex1893Cb} {...Flex1893IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2169 bpt" {...TextBox2169Props} {...TextBox2169Cb} {...TextBox2169IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2172 bpt" {...TextBox2172Props} {...TextBox2172Cb} {...TextBox2172IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2171 bpt" {...TextBox2171Props} {...TextBox2171Cb} {...TextBox2171IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2170 bpt" {...TextBox2170Props} {...TextBox2170Cb} {...TextBox2170IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1892 bpt" {...Flex1892Props} {...Flex1892Cb} {...Flex1892IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2168 bpt" {...TextBox2168Props} {...TextBox2168Cb} {...TextBox2168IoProps}/>
<Image10 className="p-soulful-rebrand Image518 bpt" {...Image518Props} {...Image518Cb} {...Image518IoProps}/>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
</Menu9>
</Flex9>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1891 bpt" {...Flex1891Props} {...Flex1891Cb} {...Flex1891IoProps}>
<Flex9 className="p-soulful-rebrand Flex1888 bpt" {...Flex1888Props} {...Flex1888Cb} {...Flex1888IoProps}>
<Flex9 className="p-soulful-rebrand Flex1885 bpt" {...Flex1885Props} {...Flex1885Cb} {...Flex1885IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2167 bpt" {...TextBox2167Props} {...TextBox2167Cb} {...TextBox2167IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2166 bpt" {...TextBox2166Props} {...TextBox2166Cb} {...TextBox2166IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1886 bpt" {...Flex1886Props} {...Flex1886Cb} {...Flex1886IoProps}>
<Flex9 className="p-soulful-rebrand Flex1883 bpt" {...Flex1883Props} {...Flex1883Cb} {...Flex1883IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2164 bpt" {...TextBox2164Props} {...TextBox2164Cb} {...TextBox2164IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2165 bpt" {...TextBox2165Props} {...TextBox2165Cb} {...TextBox2165IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1882 bpt" {...Flex1882Props} {...Flex1882Cb} {...Flex1882IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2163 bpt" {...TextBox2163Props} {...TextBox2163Cb} {...TextBox2163IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2162 bpt" {...TextBox2162Props} {...TextBox2162Cb} {...TextBox2162IoProps}/>
</Flex9>
</Flex9>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1889 bpt" {...Flex1889Props} {...Flex1889Cb} {...Flex1889IoProps}>
<Image10 className="p-soulful-rebrand Image517 bpt" {...Image517Props} {...Image517Cb} {...Image517IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1890 bpt" {...Flex1890Props} {...Flex1890Cb} {...Flex1890IoProps}>
<Flex9 className="p-soulful-rebrand Flex1887 bpt" {...Flex1887Props} {...Flex1887Cb} {...Flex1887IoProps}>
<Flex9 className="p-soulful-rebrand Flex1884 bpt" {...Flex1884Props} {...Flex1884Cb} {...Flex1884IoProps}>
<Flex9 className="p-soulful-rebrand Flex1880 bpt" {...Flex1880Props} {...Flex1880Cb} {...Flex1880IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2159 bpt" {...TextBox2159Props} {...TextBox2159Cb} {...TextBox2159IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2160 bpt" {...TextBox2160Props} {...TextBox2160Cb} {...TextBox2160IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2158 bpt" {...TextBox2158Props} {...TextBox2158Cb} {...TextBox2158IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1879 bpt" {...Flex1879Props} {...Flex1879Cb} {...Flex1879IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2150 bpt" {...TextBox2150Props} {...TextBox2150Cb} {...TextBox2150IoProps}/>
</Flex9>
<TextBox9 className="p-soulful-rebrand TextBox2154 bpt" {...TextBox2154Props} {...TextBox2154Cb} {...TextBox2154IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2153 bpt" {...TextBox2153Props} {...TextBox2153Cb} {...TextBox2153IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1877 bpt" {...Flex1877Props} {...Flex1877Cb} {...Flex1877IoProps}>
<Flex9 className="p-soulful-rebrand Flex1871 bpt" {...Flex1871Props} {...Flex1871Cb} {...Flex1871IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2139 bpt" {...TextBox2139Props} {...TextBox2139Cb} {...TextBox2139IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2138 bpt" {...TextBox2138Props} {...TextBox2138Cb} {...TextBox2138IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1872 bpt" {...Flex1872Props} {...Flex1872Cb} {...Flex1872IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2140 bpt" {...TextBox2140Props} {...TextBox2140Cb} {...TextBox2140IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2141 bpt" {...TextBox2141Props} {...TextBox2141Cb} {...TextBox2141IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1873 bpt" {...Flex1873Props} {...Flex1873Cb} {...Flex1873IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2142 bpt" {...TextBox2142Props} {...TextBox2142Cb} {...TextBox2142IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2143 bpt" {...TextBox2143Props} {...TextBox2143Cb} {...TextBox2143IoProps}/>
</Flex9>
</Flex9>
<TextBox9 className="p-soulful-rebrand TextBox2157 bpt" {...TextBox2157Props} {...TextBox2157Cb} {...TextBox2157IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2152 bpt" {...TextBox2152Props} {...TextBox2152Cb} {...TextBox2152IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1878 bpt" {...Flex1878Props} {...Flex1878Cb} {...Flex1878IoProps}>
<Flex9 className="p-soulful-rebrand Flex1876 bpt" {...Flex1876Props} {...Flex1876Cb} {...Flex1876IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2148 bpt" {...TextBox2148Props} {...TextBox2148Cb} {...TextBox2148IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2149 bpt" {...TextBox2149Props} {...TextBox2149Cb} {...TextBox2149IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1875 bpt" {...Flex1875Props} {...Flex1875Cb} {...Flex1875IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2147 bpt" {...TextBox2147Props} {...TextBox2147Cb} {...TextBox2147IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2146 bpt" {...TextBox2146Props} {...TextBox2146Cb} {...TextBox2146IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1874 bpt" {...Flex1874Props} {...Flex1874Cb} {...Flex1874IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2145 bpt" {...TextBox2145Props} {...TextBox2145Cb} {...TextBox2145IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2144 bpt" {...TextBox2144Props} {...TextBox2144Cb} {...TextBox2144IoProps}/>
</Flex9>
</Flex9>
<TextBox9 className="p-soulful-rebrand TextBox2156 bpt" {...TextBox2156Props} {...TextBox2156Cb} {...TextBox2156IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2151 bpt" {...TextBox2151Props} {...TextBox2151Cb} {...TextBox2151IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2155 bpt" {...TextBox2155Props} {...TextBox2155Cb} {...TextBox2155IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1881 bpt" {...Flex1881Props} {...Flex1881Cb} {...Flex1881IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2161 bpt" {...TextBox2161Props} {...TextBox2161Cb} {...TextBox2161IoProps}/>
<Image10 className="p-soulful-rebrand Image516 bpt" {...Image516Props} {...Image516Cb} {...Image516IoProps}/>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1870 bpt" {...Flex1870Props} {...Flex1870Cb} {...Flex1870IoProps}>
<Flex9 className="p-soulful-rebrand Flex1869 bpt" {...Flex1869Props} {...Flex1869Cb} {...Flex1869IoProps}>
<Flex9 className="p-soulful-rebrand Flex1867 bpt" {...Flex1867Props} {...Flex1867Cb} {...Flex1867IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2136 bpt" {...TextBox2136Props} {...TextBox2136Cb} {...TextBox2136IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2137 bpt" {...TextBox2137Props} {...TextBox2137Cb} {...TextBox2137IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1868 bpt" {...Flex1868Props} {...Flex1868Cb} {...Flex1868IoProps}>
<Flex9 className="p-soulful-rebrand Flex1865 bpt" {...Flex1865Props} {...Flex1865Cb} {...Flex1865IoProps}>
<Image10 className="p-soulful-rebrand Image515 bpt" {...Image515Props} {...Image515Cb} {...Image515IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2135 bpt" {...TextBox2135Props} {...TextBox2135Cb} {...TextBox2135IoProps}/>
<Flex9 className="p-soulful-rebrand Flex1861 bpt" {...Flex1861Props} {...Flex1861Cb} {...Flex1861IoProps}>
<Image10 className="p-soulful-rebrand Image514 bpt" {...Image514Props} {...Image514Cb} {...Image514IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2125 bpt" {...TextBox2125Props} {...TextBox2125Cb} {...TextBox2125IoProps}/>
</Flex9>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1866 bpt" {...Flex1866Props} {...Flex1866Cb} {...Flex1866IoProps}>
<Flex9 className="p-soulful-rebrand Flex1864 bpt" {...Flex1864Props} {...Flex1864Cb} {...Flex1864IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2132 bpt" {...TextBox2132Props} {...TextBox2132Cb} {...TextBox2132IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2134 bpt" {...TextBox2134Props} {...TextBox2134Cb} {...TextBox2134IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2133 bpt" {...TextBox2133Props} {...TextBox2133Cb} {...TextBox2133IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1862 bpt" {...Flex1862Props} {...Flex1862Cb} {...Flex1862IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2126 bpt" {...TextBox2126Props} {...TextBox2126Cb} {...TextBox2126IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2127 bpt" {...TextBox2127Props} {...TextBox2127Cb} {...TextBox2127IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2128 bpt" {...TextBox2128Props} {...TextBox2128Cb} {...TextBox2128IoProps}/>
</Flex9>
<Flex9 className="p-soulful-rebrand Flex1863 bpt" {...Flex1863Props} {...Flex1863Cb} {...Flex1863IoProps}>
<TextBox9 className="p-soulful-rebrand TextBox2129 bpt" {...TextBox2129Props} {...TextBox2129Cb} {...TextBox2129IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2130 bpt" {...TextBox2130Props} {...TextBox2130Cb} {...TextBox2130IoProps}/>
<TextBox9 className="p-soulful-rebrand TextBox2131 bpt" {...TextBox2131Props} {...TextBox2131Cb} {...TextBox2131IoProps}/>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
  </>);
}
