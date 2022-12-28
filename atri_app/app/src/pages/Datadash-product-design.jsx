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
import { useFlex1729Cb, useFlex1728Cb, useFlex1726Cb, useFlex1723Cb, useFlex1719Cb, useFlex1720Cb, useFlex1721Cb, useFlex1724Cb, useFlex1722Cb, useFlex1727Cb, useFlex1750Cb, useFlex1747Cb, useFlex1744Cb, useFlex1741Cb, useFlex1739Cb, useFlex1740Cb, useFlex1736Cb, useFlex1737Cb, useFlex1730Cb, useFlex1731Cb, useFlex1732Cb, useFlex1738Cb, useFlex1733Cb, useFlex1734Cb, useFlex1735Cb, useFlex1748Cb, useFlex1749Cb, useFlex1745Cb, useFlex1742Cb, useFlex1743Cb, useFlex1746Cb, useFlex1758Cb, useFlex1757Cb, useFlex1756Cb, useFlex1754Cb, useMenu28Cb, useFlex1755Cb, useFlex1753Cb, useFlex1752Cb, useFlex1751Cb, useTextBox1921Cb, useTextBox1922Cb, useTextBox1923Cb, useTextBox1924Cb, useTextBox1925Cb, useTextBox1926Cb, useTextBox1927Cb, useTextBox1928Cb, useTextBox1929Cb, useTextBox1931Cb, useImage493Cb, useTextBox1930Cb, useImage492Cb, useTextBox1938Cb, useTextBox1939Cb, useImage494Cb, useTextBox1953Cb, useTextBox1954Cb, useTextBox1955Cb, useTextBox1956Cb, useTextBox1957Cb, useTextBox1958Cb, useTextBox1959Cb, useTextBox1960Cb, useTextBox1961Cb, useTextBox1962Cb, useTextBox1963Cb, useTextBox1952Cb, useTextBox1940Cb, useTextBox1941Cb, useTextBox1942Cb, useTextBox1943Cb, useTextBox1944Cb, useTextBox1945Cb, useTextBox1946Cb, useTextBox1947Cb, useTextBox1948Cb, useTextBox1949Cb, useTextBox1950Cb, useTextBox1951Cb, useImage495Cb, useTextBox1964Cb, useTextBox1965Cb, useTextBox1966Cb, useTextBox1967Cb, useTextBox1968Cb, useTextBox1969Cb, useImage498Cb, useTextBox1976Cb, useTextBox1977Cb, useTextBox1978Cb, useTextBox1979Cb, useTextBox1975Cb, useImage497Cb, useTextBox1971Cb, useTextBox1972Cb, useTextBox1973Cb, useTextBox1974Cb, useImage496Cb, useTextBox1970Cb } from "../page-cbs/datadash-product-design";
import "../page-css/datadash-product-design.css";
import "../custom/datadash-product-design";

export default function DatadashProductDesign() {
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

  const Flex1729Props = useStore((state)=>state["datadash-product-design"]["Flex1729"]);
const Flex1729IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1729"]);
const Flex1729Cb = useFlex1729Cb()
const Flex1728Props = useStore((state)=>state["datadash-product-design"]["Flex1728"]);
const Flex1728IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1728"]);
const Flex1728Cb = useFlex1728Cb()
const Flex1726Props = useStore((state)=>state["datadash-product-design"]["Flex1726"]);
const Flex1726IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1726"]);
const Flex1726Cb = useFlex1726Cb()
const Flex1723Props = useStore((state)=>state["datadash-product-design"]["Flex1723"]);
const Flex1723IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1723"]);
const Flex1723Cb = useFlex1723Cb()
const Flex1719Props = useStore((state)=>state["datadash-product-design"]["Flex1719"]);
const Flex1719IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1719"]);
const Flex1719Cb = useFlex1719Cb()
const Flex1720Props = useStore((state)=>state["datadash-product-design"]["Flex1720"]);
const Flex1720IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1720"]);
const Flex1720Cb = useFlex1720Cb()
const Flex1721Props = useStore((state)=>state["datadash-product-design"]["Flex1721"]);
const Flex1721IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1721"]);
const Flex1721Cb = useFlex1721Cb()
const Flex1724Props = useStore((state)=>state["datadash-product-design"]["Flex1724"]);
const Flex1724IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1724"]);
const Flex1724Cb = useFlex1724Cb()
const Flex1722Props = useStore((state)=>state["datadash-product-design"]["Flex1722"]);
const Flex1722IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1722"]);
const Flex1722Cb = useFlex1722Cb()
const Flex1727Props = useStore((state)=>state["datadash-product-design"]["Flex1727"]);
const Flex1727IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1727"]);
const Flex1727Cb = useFlex1727Cb()
const Flex1750Props = useStore((state)=>state["datadash-product-design"]["Flex1750"]);
const Flex1750IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1750"]);
const Flex1750Cb = useFlex1750Cb()
const Flex1747Props = useStore((state)=>state["datadash-product-design"]["Flex1747"]);
const Flex1747IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1747"]);
const Flex1747Cb = useFlex1747Cb()
const Flex1744Props = useStore((state)=>state["datadash-product-design"]["Flex1744"]);
const Flex1744IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1744"]);
const Flex1744Cb = useFlex1744Cb()
const Flex1741Props = useStore((state)=>state["datadash-product-design"]["Flex1741"]);
const Flex1741IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1741"]);
const Flex1741Cb = useFlex1741Cb()
const Flex1739Props = useStore((state)=>state["datadash-product-design"]["Flex1739"]);
const Flex1739IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1739"]);
const Flex1739Cb = useFlex1739Cb()
const Flex1740Props = useStore((state)=>state["datadash-product-design"]["Flex1740"]);
const Flex1740IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1740"]);
const Flex1740Cb = useFlex1740Cb()
const Flex1736Props = useStore((state)=>state["datadash-product-design"]["Flex1736"]);
const Flex1736IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1736"]);
const Flex1736Cb = useFlex1736Cb()
const Flex1737Props = useStore((state)=>state["datadash-product-design"]["Flex1737"]);
const Flex1737IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1737"]);
const Flex1737Cb = useFlex1737Cb()
const Flex1730Props = useStore((state)=>state["datadash-product-design"]["Flex1730"]);
const Flex1730IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1730"]);
const Flex1730Cb = useFlex1730Cb()
const Flex1731Props = useStore((state)=>state["datadash-product-design"]["Flex1731"]);
const Flex1731IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1731"]);
const Flex1731Cb = useFlex1731Cb()
const Flex1732Props = useStore((state)=>state["datadash-product-design"]["Flex1732"]);
const Flex1732IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1732"]);
const Flex1732Cb = useFlex1732Cb()
const Flex1738Props = useStore((state)=>state["datadash-product-design"]["Flex1738"]);
const Flex1738IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1738"]);
const Flex1738Cb = useFlex1738Cb()
const Flex1733Props = useStore((state)=>state["datadash-product-design"]["Flex1733"]);
const Flex1733IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1733"]);
const Flex1733Cb = useFlex1733Cb()
const Flex1734Props = useStore((state)=>state["datadash-product-design"]["Flex1734"]);
const Flex1734IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1734"]);
const Flex1734Cb = useFlex1734Cb()
const Flex1735Props = useStore((state)=>state["datadash-product-design"]["Flex1735"]);
const Flex1735IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1735"]);
const Flex1735Cb = useFlex1735Cb()
const Flex1748Props = useStore((state)=>state["datadash-product-design"]["Flex1748"]);
const Flex1748IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1748"]);
const Flex1748Cb = useFlex1748Cb()
const Flex1749Props = useStore((state)=>state["datadash-product-design"]["Flex1749"]);
const Flex1749IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1749"]);
const Flex1749Cb = useFlex1749Cb()
const Flex1745Props = useStore((state)=>state["datadash-product-design"]["Flex1745"]);
const Flex1745IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1745"]);
const Flex1745Cb = useFlex1745Cb()
const Flex1742Props = useStore((state)=>state["datadash-product-design"]["Flex1742"]);
const Flex1742IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1742"]);
const Flex1742Cb = useFlex1742Cb()
const Flex1743Props = useStore((state)=>state["datadash-product-design"]["Flex1743"]);
const Flex1743IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1743"]);
const Flex1743Cb = useFlex1743Cb()
const Flex1746Props = useStore((state)=>state["datadash-product-design"]["Flex1746"]);
const Flex1746IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1746"]);
const Flex1746Cb = useFlex1746Cb()
const Flex1758Props = useStore((state)=>state["datadash-product-design"]["Flex1758"]);
const Flex1758IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1758"]);
const Flex1758Cb = useFlex1758Cb()
const Flex1757Props = useStore((state)=>state["datadash-product-design"]["Flex1757"]);
const Flex1757IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1757"]);
const Flex1757Cb = useFlex1757Cb()
const Flex1756Props = useStore((state)=>state["datadash-product-design"]["Flex1756"]);
const Flex1756IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1756"]);
const Flex1756Cb = useFlex1756Cb()
const Flex1754Props = useStore((state)=>state["datadash-product-design"]["Flex1754"]);
const Flex1754IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1754"]);
const Flex1754Cb = useFlex1754Cb()
const Menu28Props = useStore((state)=>state["datadash-product-design"]["Menu28"]);
const Menu28IoProps = useIoStore((state)=>state["datadash-product-design"]["Menu28"]);
const Menu28Cb = useMenu28Cb()
const Flex1755Props = useStore((state)=>state["datadash-product-design"]["Flex1755"]);
const Flex1755IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1755"]);
const Flex1755Cb = useFlex1755Cb()
const Flex1753Props = useStore((state)=>state["datadash-product-design"]["Flex1753"]);
const Flex1753IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1753"]);
const Flex1753Cb = useFlex1753Cb()
const Flex1752Props = useStore((state)=>state["datadash-product-design"]["Flex1752"]);
const Flex1752IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1752"]);
const Flex1752Cb = useFlex1752Cb()
const Flex1751Props = useStore((state)=>state["datadash-product-design"]["Flex1751"]);
const Flex1751IoProps = useIoStore((state)=>state["datadash-product-design"]["Flex1751"]);
const Flex1751Cb = useFlex1751Cb()
const TextBox1921Props = useStore((state)=>state["datadash-product-design"]["TextBox1921"]);
const TextBox1921IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1921"]);
const TextBox1921Cb = useTextBox1921Cb()
const TextBox1922Props = useStore((state)=>state["datadash-product-design"]["TextBox1922"]);
const TextBox1922IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1922"]);
const TextBox1922Cb = useTextBox1922Cb()
const TextBox1923Props = useStore((state)=>state["datadash-product-design"]["TextBox1923"]);
const TextBox1923IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1923"]);
const TextBox1923Cb = useTextBox1923Cb()
const TextBox1924Props = useStore((state)=>state["datadash-product-design"]["TextBox1924"]);
const TextBox1924IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1924"]);
const TextBox1924Cb = useTextBox1924Cb()
const TextBox1925Props = useStore((state)=>state["datadash-product-design"]["TextBox1925"]);
const TextBox1925IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1925"]);
const TextBox1925Cb = useTextBox1925Cb()
const TextBox1926Props = useStore((state)=>state["datadash-product-design"]["TextBox1926"]);
const TextBox1926IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1926"]);
const TextBox1926Cb = useTextBox1926Cb()
const TextBox1927Props = useStore((state)=>state["datadash-product-design"]["TextBox1927"]);
const TextBox1927IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1927"]);
const TextBox1927Cb = useTextBox1927Cb()
const TextBox1928Props = useStore((state)=>state["datadash-product-design"]["TextBox1928"]);
const TextBox1928IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1928"]);
const TextBox1928Cb = useTextBox1928Cb()
const TextBox1929Props = useStore((state)=>state["datadash-product-design"]["TextBox1929"]);
const TextBox1929IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1929"]);
const TextBox1929Cb = useTextBox1929Cb()
const TextBox1931Props = useStore((state)=>state["datadash-product-design"]["TextBox1931"]);
const TextBox1931IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1931"]);
const TextBox1931Cb = useTextBox1931Cb()
const Image493Props = useStore((state)=>state["datadash-product-design"]["Image493"]);
const Image493IoProps = useIoStore((state)=>state["datadash-product-design"]["Image493"]);
const Image493Cb = useImage493Cb()
const TextBox1930Props = useStore((state)=>state["datadash-product-design"]["TextBox1930"]);
const TextBox1930IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1930"]);
const TextBox1930Cb = useTextBox1930Cb()
const Image492Props = useStore((state)=>state["datadash-product-design"]["Image492"]);
const Image492IoProps = useIoStore((state)=>state["datadash-product-design"]["Image492"]);
const Image492Cb = useImage492Cb()
const TextBox1938Props = useStore((state)=>state["datadash-product-design"]["TextBox1938"]);
const TextBox1938IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1938"]);
const TextBox1938Cb = useTextBox1938Cb()
const TextBox1939Props = useStore((state)=>state["datadash-product-design"]["TextBox1939"]);
const TextBox1939IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1939"]);
const TextBox1939Cb = useTextBox1939Cb()
const Image494Props = useStore((state)=>state["datadash-product-design"]["Image494"]);
const Image494IoProps = useIoStore((state)=>state["datadash-product-design"]["Image494"]);
const Image494Cb = useImage494Cb()
const TextBox1953Props = useStore((state)=>state["datadash-product-design"]["TextBox1953"]);
const TextBox1953IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1953"]);
const TextBox1953Cb = useTextBox1953Cb()
const TextBox1954Props = useStore((state)=>state["datadash-product-design"]["TextBox1954"]);
const TextBox1954IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1954"]);
const TextBox1954Cb = useTextBox1954Cb()
const TextBox1955Props = useStore((state)=>state["datadash-product-design"]["TextBox1955"]);
const TextBox1955IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1955"]);
const TextBox1955Cb = useTextBox1955Cb()
const TextBox1956Props = useStore((state)=>state["datadash-product-design"]["TextBox1956"]);
const TextBox1956IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1956"]);
const TextBox1956Cb = useTextBox1956Cb()
const TextBox1957Props = useStore((state)=>state["datadash-product-design"]["TextBox1957"]);
const TextBox1957IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1957"]);
const TextBox1957Cb = useTextBox1957Cb()
const TextBox1958Props = useStore((state)=>state["datadash-product-design"]["TextBox1958"]);
const TextBox1958IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1958"]);
const TextBox1958Cb = useTextBox1958Cb()
const TextBox1959Props = useStore((state)=>state["datadash-product-design"]["TextBox1959"]);
const TextBox1959IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1959"]);
const TextBox1959Cb = useTextBox1959Cb()
const TextBox1960Props = useStore((state)=>state["datadash-product-design"]["TextBox1960"]);
const TextBox1960IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1960"]);
const TextBox1960Cb = useTextBox1960Cb()
const TextBox1961Props = useStore((state)=>state["datadash-product-design"]["TextBox1961"]);
const TextBox1961IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1961"]);
const TextBox1961Cb = useTextBox1961Cb()
const TextBox1962Props = useStore((state)=>state["datadash-product-design"]["TextBox1962"]);
const TextBox1962IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1962"]);
const TextBox1962Cb = useTextBox1962Cb()
const TextBox1963Props = useStore((state)=>state["datadash-product-design"]["TextBox1963"]);
const TextBox1963IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1963"]);
const TextBox1963Cb = useTextBox1963Cb()
const TextBox1952Props = useStore((state)=>state["datadash-product-design"]["TextBox1952"]);
const TextBox1952IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1952"]);
const TextBox1952Cb = useTextBox1952Cb()
const TextBox1940Props = useStore((state)=>state["datadash-product-design"]["TextBox1940"]);
const TextBox1940IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1940"]);
const TextBox1940Cb = useTextBox1940Cb()
const TextBox1941Props = useStore((state)=>state["datadash-product-design"]["TextBox1941"]);
const TextBox1941IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1941"]);
const TextBox1941Cb = useTextBox1941Cb()
const TextBox1942Props = useStore((state)=>state["datadash-product-design"]["TextBox1942"]);
const TextBox1942IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1942"]);
const TextBox1942Cb = useTextBox1942Cb()
const TextBox1943Props = useStore((state)=>state["datadash-product-design"]["TextBox1943"]);
const TextBox1943IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1943"]);
const TextBox1943Cb = useTextBox1943Cb()
const TextBox1944Props = useStore((state)=>state["datadash-product-design"]["TextBox1944"]);
const TextBox1944IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1944"]);
const TextBox1944Cb = useTextBox1944Cb()
const TextBox1945Props = useStore((state)=>state["datadash-product-design"]["TextBox1945"]);
const TextBox1945IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1945"]);
const TextBox1945Cb = useTextBox1945Cb()
const TextBox1946Props = useStore((state)=>state["datadash-product-design"]["TextBox1946"]);
const TextBox1946IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1946"]);
const TextBox1946Cb = useTextBox1946Cb()
const TextBox1947Props = useStore((state)=>state["datadash-product-design"]["TextBox1947"]);
const TextBox1947IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1947"]);
const TextBox1947Cb = useTextBox1947Cb()
const TextBox1948Props = useStore((state)=>state["datadash-product-design"]["TextBox1948"]);
const TextBox1948IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1948"]);
const TextBox1948Cb = useTextBox1948Cb()
const TextBox1949Props = useStore((state)=>state["datadash-product-design"]["TextBox1949"]);
const TextBox1949IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1949"]);
const TextBox1949Cb = useTextBox1949Cb()
const TextBox1950Props = useStore((state)=>state["datadash-product-design"]["TextBox1950"]);
const TextBox1950IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1950"]);
const TextBox1950Cb = useTextBox1950Cb()
const TextBox1951Props = useStore((state)=>state["datadash-product-design"]["TextBox1951"]);
const TextBox1951IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1951"]);
const TextBox1951Cb = useTextBox1951Cb()
const Image495Props = useStore((state)=>state["datadash-product-design"]["Image495"]);
const Image495IoProps = useIoStore((state)=>state["datadash-product-design"]["Image495"]);
const Image495Cb = useImage495Cb()
const TextBox1964Props = useStore((state)=>state["datadash-product-design"]["TextBox1964"]);
const TextBox1964IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1964"]);
const TextBox1964Cb = useTextBox1964Cb()
const TextBox1965Props = useStore((state)=>state["datadash-product-design"]["TextBox1965"]);
const TextBox1965IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1965"]);
const TextBox1965Cb = useTextBox1965Cb()
const TextBox1966Props = useStore((state)=>state["datadash-product-design"]["TextBox1966"]);
const TextBox1966IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1966"]);
const TextBox1966Cb = useTextBox1966Cb()
const TextBox1967Props = useStore((state)=>state["datadash-product-design"]["TextBox1967"]);
const TextBox1967IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1967"]);
const TextBox1967Cb = useTextBox1967Cb()
const TextBox1968Props = useStore((state)=>state["datadash-product-design"]["TextBox1968"]);
const TextBox1968IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1968"]);
const TextBox1968Cb = useTextBox1968Cb()
const TextBox1969Props = useStore((state)=>state["datadash-product-design"]["TextBox1969"]);
const TextBox1969IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1969"]);
const TextBox1969Cb = useTextBox1969Cb()
const Image498Props = useStore((state)=>state["datadash-product-design"]["Image498"]);
const Image498IoProps = useIoStore((state)=>state["datadash-product-design"]["Image498"]);
const Image498Cb = useImage498Cb()
const TextBox1976Props = useStore((state)=>state["datadash-product-design"]["TextBox1976"]);
const TextBox1976IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1976"]);
const TextBox1976Cb = useTextBox1976Cb()
const TextBox1977Props = useStore((state)=>state["datadash-product-design"]["TextBox1977"]);
const TextBox1977IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1977"]);
const TextBox1977Cb = useTextBox1977Cb()
const TextBox1978Props = useStore((state)=>state["datadash-product-design"]["TextBox1978"]);
const TextBox1978IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1978"]);
const TextBox1978Cb = useTextBox1978Cb()
const TextBox1979Props = useStore((state)=>state["datadash-product-design"]["TextBox1979"]);
const TextBox1979IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1979"]);
const TextBox1979Cb = useTextBox1979Cb()
const TextBox1975Props = useStore((state)=>state["datadash-product-design"]["TextBox1975"]);
const TextBox1975IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1975"]);
const TextBox1975Cb = useTextBox1975Cb()
const Image497Props = useStore((state)=>state["datadash-product-design"]["Image497"]);
const Image497IoProps = useIoStore((state)=>state["datadash-product-design"]["Image497"]);
const Image497Cb = useImage497Cb()
const TextBox1971Props = useStore((state)=>state["datadash-product-design"]["TextBox1971"]);
const TextBox1971IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1971"]);
const TextBox1971Cb = useTextBox1971Cb()
const TextBox1972Props = useStore((state)=>state["datadash-product-design"]["TextBox1972"]);
const TextBox1972IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1972"]);
const TextBox1972Cb = useTextBox1972Cb()
const TextBox1973Props = useStore((state)=>state["datadash-product-design"]["TextBox1973"]);
const TextBox1973IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1973"]);
const TextBox1973Cb = useTextBox1973Cb()
const TextBox1974Props = useStore((state)=>state["datadash-product-design"]["TextBox1974"]);
const TextBox1974IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1974"]);
const TextBox1974Cb = useTextBox1974Cb()
const Image496Props = useStore((state)=>state["datadash-product-design"]["Image496"]);
const Image496IoProps = useIoStore((state)=>state["datadash-product-design"]["Image496"]);
const Image496Cb = useImage496Cb()
const TextBox1970Props = useStore((state)=>state["datadash-product-design"]["TextBox1970"]);
const TextBox1970IoProps = useIoStore((state)=>state["datadash-product-design"]["TextBox1970"]);
const TextBox1970Cb = useTextBox1970Cb()

  return (<>
  <Flex9 className="p-datadash-product-design Flex1758 bpt" {...Flex1758Props} {...Flex1758Cb} {...Flex1758IoProps}>
<Flex9 className="p-datadash-product-design Flex1757 bpt" {...Flex1757Props} {...Flex1757Cb} {...Flex1757IoProps}>
<Image10 className="p-datadash-product-design Image498 bpt" {...Image498Props} {...Image498Cb} {...Image498IoProps}/>
<Flex9 className="p-datadash-product-design Flex1756 bpt" {...Flex1756Props} {...Flex1756Cb} {...Flex1756IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1979 bpt" {...TextBox1979Props} {...TextBox1979Cb} {...TextBox1979IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1976 bpt" {...TextBox1976Props} {...TextBox1976Cb} {...TextBox1976IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1977 bpt" {...TextBox1977Props} {...TextBox1977Cb} {...TextBox1977IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1978 bpt" {...TextBox1978Props} {...TextBox1978Cb} {...TextBox1978IoProps}/>
<Flex9 className="p-datadash-product-design Flex1754 bpt" {...Flex1754Props} {...Flex1754Cb} {...Flex1754IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1975 bpt" {...TextBox1975Props} {...TextBox1975Cb} {...TextBox1975IoProps}/>
<Image10 className="p-datadash-product-design Image497 bpt" {...Image497Props} {...Image497Cb} {...Image497IoProps}/>
</Flex9>
</Flex9>
<Menu9 className="p-datadash-product-design Menu28 bpt" {...Menu28Props} {...Menu28Cb} {...Menu28IoProps}>
<Flex9 className="p-datadash-product-design Flex1755 bpt" {...Flex1755Props} {...Flex1755Cb} {...Flex1755IoProps}>
<Flex9 className="p-datadash-product-design Flex1753 bpt" {...Flex1753Props} {...Flex1753Cb} {...Flex1753IoProps}>
<Flex9 className="p-datadash-product-design Flex1752 bpt" {...Flex1752Props} {...Flex1752Cb} {...Flex1752IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1971 bpt" {...TextBox1971Props} {...TextBox1971Cb} {...TextBox1971IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1974 bpt" {...TextBox1974Props} {...TextBox1974Cb} {...TextBox1974IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1973 bpt" {...TextBox1973Props} {...TextBox1973Cb} {...TextBox1973IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1972 bpt" {...TextBox1972Props} {...TextBox1972Cb} {...TextBox1972IoProps}/>
<Flex9 className="p-datadash-product-design Flex1751 bpt" {...Flex1751Props} {...Flex1751Cb} {...Flex1751IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1970 bpt" {...TextBox1970Props} {...TextBox1970Cb} {...TextBox1970IoProps}/>
<Image10 className="p-datadash-product-design Image496 bpt" {...Image496Props} {...Image496Cb} {...Image496IoProps}/>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
</Menu9>
</Flex9>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1750 bpt" {...Flex1750Props} {...Flex1750Cb} {...Flex1750IoProps}>
<Flex9 className="p-datadash-product-design Flex1749 bpt" {...Flex1749Props} {...Flex1749Cb} {...Flex1749IoProps}>
<Flex9 className="p-datadash-product-design Flex1746 bpt" {...Flex1746Props} {...Flex1746Cb} {...Flex1746IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1968 bpt" {...TextBox1968Props} {...TextBox1968Cb} {...TextBox1968IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1969 bpt" {...TextBox1969Props} {...TextBox1969Cb} {...TextBox1969IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1745 bpt" {...Flex1745Props} {...Flex1745Cb} {...Flex1745IoProps}>
<Flex9 className="p-datadash-product-design Flex1742 bpt" {...Flex1742Props} {...Flex1742Cb} {...Flex1742IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1965 bpt" {...TextBox1965Props} {...TextBox1965Cb} {...TextBox1965IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1964 bpt" {...TextBox1964Props} {...TextBox1964Cb} {...TextBox1964IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1743 bpt" {...Flex1743Props} {...Flex1743Cb} {...Flex1743IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1966 bpt" {...TextBox1966Props} {...TextBox1966Cb} {...TextBox1966IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1967 bpt" {...TextBox1967Props} {...TextBox1967Cb} {...TextBox1967IoProps}/>
</Flex9>
</Flex9>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1748 bpt" {...Flex1748Props} {...Flex1748Cb} {...Flex1748IoProps}>
<Image10 className="p-datadash-product-design Image495 bpt" {...Image495Props} {...Image495Cb} {...Image495IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1747 bpt" {...Flex1747Props} {...Flex1747Cb} {...Flex1747IoProps}>
<Flex9 className="p-datadash-product-design Flex1744 bpt" {...Flex1744Props} {...Flex1744Cb} {...Flex1744IoProps}>
<Flex9 className="p-datadash-product-design Flex1741 bpt" {...Flex1741Props} {...Flex1741Cb} {...Flex1741IoProps}>
<Flex9 className="p-datadash-product-design Flex1740 bpt" {...Flex1740Props} {...Flex1740Cb} {...Flex1740IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1955 bpt" {...TextBox1955Props} {...TextBox1955Cb} {...TextBox1955IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1954 bpt" {...TextBox1954Props} {...TextBox1954Cb} {...TextBox1954IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1956 bpt" {...TextBox1956Props} {...TextBox1956Cb} {...TextBox1956IoProps}/>
<Flex9 className="p-datadash-product-design Flex1736 bpt" {...Flex1736Props} {...Flex1736Cb} {...Flex1736IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1952 bpt" {...TextBox1952Props} {...TextBox1952Cb} {...TextBox1952IoProps}/>
</Flex9>
<TextBox9 className="p-datadash-product-design TextBox1960 bpt" {...TextBox1960Props} {...TextBox1960Cb} {...TextBox1960IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1961 bpt" {...TextBox1961Props} {...TextBox1961Cb} {...TextBox1961IoProps}/>
<Flex9 className="p-datadash-product-design Flex1738 bpt" {...Flex1738Props} {...Flex1738Cb} {...Flex1738IoProps}>
<Flex9 className="p-datadash-product-design Flex1735 bpt" {...Flex1735Props} {...Flex1735Cb} {...Flex1735IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1950 bpt" {...TextBox1950Props} {...TextBox1950Cb} {...TextBox1950IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1951 bpt" {...TextBox1951Props} {...TextBox1951Cb} {...TextBox1951IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1734 bpt" {...Flex1734Props} {...Flex1734Cb} {...Flex1734IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1949 bpt" {...TextBox1949Props} {...TextBox1949Cb} {...TextBox1949IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1948 bpt" {...TextBox1948Props} {...TextBox1948Cb} {...TextBox1948IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1733 bpt" {...Flex1733Props} {...Flex1733Cb} {...Flex1733IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1947 bpt" {...TextBox1947Props} {...TextBox1947Cb} {...TextBox1947IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1946 bpt" {...TextBox1946Props} {...TextBox1946Cb} {...TextBox1946IoProps}/>
</Flex9>
</Flex9>
<TextBox9 className="p-datadash-product-design TextBox1957 bpt" {...TextBox1957Props} {...TextBox1957Cb} {...TextBox1957IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1962 bpt" {...TextBox1962Props} {...TextBox1962Cb} {...TextBox1962IoProps}/>
<Flex9 className="p-datadash-product-design Flex1737 bpt" {...Flex1737Props} {...Flex1737Cb} {...Flex1737IoProps}>
<Flex9 className="p-datadash-product-design Flex1730 bpt" {...Flex1730Props} {...Flex1730Cb} {...Flex1730IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1941 bpt" {...TextBox1941Props} {...TextBox1941Cb} {...TextBox1941IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1940 bpt" {...TextBox1940Props} {...TextBox1940Cb} {...TextBox1940IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1731 bpt" {...Flex1731Props} {...Flex1731Cb} {...Flex1731IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1942 bpt" {...TextBox1942Props} {...TextBox1942Cb} {...TextBox1942IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1943 bpt" {...TextBox1943Props} {...TextBox1943Cb} {...TextBox1943IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1732 bpt" {...Flex1732Props} {...Flex1732Cb} {...Flex1732IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1944 bpt" {...TextBox1944Props} {...TextBox1944Cb} {...TextBox1944IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1945 bpt" {...TextBox1945Props} {...TextBox1945Cb} {...TextBox1945IoProps}/>
</Flex9>
</Flex9>
<TextBox9 className="p-datadash-product-design TextBox1958 bpt" {...TextBox1958Props} {...TextBox1958Cb} {...TextBox1958IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1963 bpt" {...TextBox1963Props} {...TextBox1963Cb} {...TextBox1963IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1959 bpt" {...TextBox1959Props} {...TextBox1959Cb} {...TextBox1959IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1739 bpt" {...Flex1739Props} {...Flex1739Cb} {...Flex1739IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1953 bpt" {...TextBox1953Props} {...TextBox1953Cb} {...TextBox1953IoProps}/>
<Image10 className="p-datadash-product-design Image494 bpt" {...Image494Props} {...Image494Cb} {...Image494IoProps}/>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1729 bpt" {...Flex1729Props} {...Flex1729Cb} {...Flex1729IoProps}>
<Flex9 className="p-datadash-product-design Flex1728 bpt" {...Flex1728Props} {...Flex1728Cb} {...Flex1728IoProps}>
<Flex9 className="p-datadash-product-design Flex1727 bpt" {...Flex1727Props} {...Flex1727Cb} {...Flex1727IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1939 bpt" {...TextBox1939Props} {...TextBox1939Cb} {...TextBox1939IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1938 bpt" {...TextBox1938Props} {...TextBox1938Cb} {...TextBox1938IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1726 bpt" {...Flex1726Props} {...Flex1726Cb} {...Flex1726IoProps}>
<Flex9 className="p-datadash-product-design Flex1724 bpt" {...Flex1724Props} {...Flex1724Cb} {...Flex1724IoProps}>
<Image10 className="p-datadash-product-design Image493 bpt" {...Image493Props} {...Image493Cb} {...Image493IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1931 bpt" {...TextBox1931Props} {...TextBox1931Cb} {...TextBox1931IoProps}/>
<Flex9 className="p-datadash-product-design Flex1722 bpt" {...Flex1722Props} {...Flex1722Cb} {...Flex1722IoProps}>
<Image10 className="p-datadash-product-design Image492 bpt" {...Image492Props} {...Image492Cb} {...Image492IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1930 bpt" {...TextBox1930Props} {...TextBox1930Cb} {...TextBox1930IoProps}/>
</Flex9>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1723 bpt" {...Flex1723Props} {...Flex1723Cb} {...Flex1723IoProps}>
<Flex9 className="p-datadash-product-design Flex1719 bpt" {...Flex1719Props} {...Flex1719Cb} {...Flex1719IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1923 bpt" {...TextBox1923Props} {...TextBox1923Cb} {...TextBox1923IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1921 bpt" {...TextBox1921Props} {...TextBox1921Cb} {...TextBox1921IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1922 bpt" {...TextBox1922Props} {...TextBox1922Cb} {...TextBox1922IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1721 bpt" {...Flex1721Props} {...Flex1721Cb} {...Flex1721IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1929 bpt" {...TextBox1929Props} {...TextBox1929Cb} {...TextBox1929IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1928 bpt" {...TextBox1928Props} {...TextBox1928Cb} {...TextBox1928IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1927 bpt" {...TextBox1927Props} {...TextBox1927Cb} {...TextBox1927IoProps}/>
</Flex9>
<Flex9 className="p-datadash-product-design Flex1720 bpt" {...Flex1720Props} {...Flex1720Cb} {...Flex1720IoProps}>
<TextBox9 className="p-datadash-product-design TextBox1926 bpt" {...TextBox1926Props} {...TextBox1926Cb} {...TextBox1926IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1925 bpt" {...TextBox1925Props} {...TextBox1925Cb} {...TextBox1925IoProps}/>
<TextBox9 className="p-datadash-product-design TextBox1924 bpt" {...TextBox1924Props} {...TextBox1924Cb} {...TextBox1924IoProps}/>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
</Flex9>
  </>);
}
