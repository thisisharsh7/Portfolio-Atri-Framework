import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import BookCall from "./pages/BookCall.jsx";
import DesignTipsForDesigners from "./pages/Design-tips-for-designers.jsx";
import HowToBuildRapport from "./pages/How-to-build-rapport.jsx";
import FreeWebsiteTools from "./pages/Free-website-tools.jsx";
import LogoDesignTrendsToAvoid from "./pages/Logo-design-trends-to-avoid.jsx";
import BestUiDesignTools from "./pages/Best-UI-design-tools.jsx";
import Pic from "./pages/Pic.jsx";
import SoulfulRebrand from "./pages/Soulful-rebrand.jsx";
import DatadashProductDesign from "./pages/Datadash-product-design.jsx";
import MaizeWebsiteDesign from "./pages/Maize-website-design.jsx";
import GorillaXBranding from "./pages/GorillaX-branding.jsx";
import JoggrWebsiteDesign from "./pages/Joggr-website-design.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/Blog" element={<Blog />} />
<Route path="/BookCall" element={<BookCall />} />
<Route path="/Blog/design-tips-for-designers" element={<DesignTipsForDesigners />} />
<Route path="/Blog/how-to-build-rapport" element={<HowToBuildRapport />} />
<Route path="/Blog/free-website-tools" element={<FreeWebsiteTools />} />
<Route path="/Blog/logo-design-trends-to-avoid" element={<LogoDesignTrendsToAvoid />} />
<Route path="/Blog/best-UI-design-tools" element={<BestUiDesignTools />} />
<Route path="/pic" element={<Pic />} />
<Route path="/Projects/soulful-rebrand" element={<SoulfulRebrand />} />
<Route path="/Projects/datadash-product-design" element={<DatadashProductDesign />} />
<Route path="/Projects/maize-website-design" element={<MaizeWebsiteDesign />} />
<Route path="/Projects/gorillaX-branding" element={<GorillaXBranding />} />
<Route path="/Projects/joggr-website-design" element={<JoggrWebsiteDesign />} />
    </Routes>
  );
}
