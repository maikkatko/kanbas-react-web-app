import BootstrapGridSystem from "./BootstrapGridSystem";
import BootstrapResponsiveDramatic from "./BootstrapResponsiveDramatic";
import BootstrapResponsiveGrids from "./BootstrapResponsiveGrids";
import CssBackgroundColors from "./CssBackgroundColors";
import CssBorders from "./CssBorders";
import CssClassSelectors from "./CssClassSelectors";
import CssColors from "./CssColors";
import CssCorners from "./CssCorners";
import CssDimensions from "./CssDimensions";
import CssDocumentStructure from "./CssDocumentStructure";
import CssFlex from "./CssFlex";
import CssGridLayout from "./CssGridLayout";
import CssHyperlinkLists from "./CssHyperlinkList";
import CssIdSelectors from "./CssIdSelectors";
import CssMargins from "./CssMargins";
import CssNavigatingWithCards from "./CssNavigatingWithCards";
import CssNavigatingWithTabs from "./CssNavigatingWithTabs";
import CssPaddings from "./CssPaddings";
import CssPositionAbsolute from "./CssPositionAbsolute";
import CssPositionFixed from "./CssPositionFixed";
import CssPositionRelative from "./CssPositionRelative";
import CssResponsiveFormsOne from "./CssResponsiceFormsOne";
import CssResponsiveFormsTwo from "./CssResponsiveFormsTwo";
import CssResponsiveTables from "./CssResponsiveTables";
import CssStylingAddOns from "./CssStylingAddons";
import CssStylingDropdowns from "./CssStylingDropdowns";
import CssStylingForms from "./CssStylingForms";
import CssStylingLists from "./CssStylingLists";
import CssStylingRangeAndSliders from "./CssStylingRangeAndSliders";
import CssStylingSwitches from "./CssStylingSwitches";
import CssStylingTables from "./CssStylingTables";
import FloatDivs from "./FloatDivs";
import ReactIconsSampler from "./ReactIconsSampler";
import ScreenSizeLabel from "./ScreenSizeLabel";
import ZIndex from "./ZIndex";
import "./index.css";

export default function Lab2() {
  return (
    <div className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <CssIdSelectors />
      <CssClassSelectors />
      <CssDocumentStructure />
      <CssColors />
      <CssBackgroundColors />
      <CssBorders />
      <CssPaddings />
      <CssMargins />
      <CssCorners />
      <CssDimensions />
      <CssPositionRelative />
      <CssPositionAbsolute />
      <CssPositionFixed />
      <ZIndex />
      <FloatDivs />
      <CssGridLayout />
      <CssFlex />
      <ReactIconsSampler />
      <h2>Bootstrap</h2>
      <BootstrapGridSystem />
      <BootstrapResponsiveGrids />
      <BootstrapResponsiveDramatic />
      <CssStylingTables />
      <CssResponsiveTables />
      <CssStylingLists />
      <CssHyperlinkLists />
      <CssStylingForms />
      <CssStylingDropdowns />
      <CssStylingSwitches />
      <CssStylingRangeAndSliders />
      <CssStylingAddOns />
      <CssResponsiveFormsOne />
      <CssResponsiveFormsTwo />
      <CssNavigatingWithTabs />
      <CssNavigatingWithCards />
      <ScreenSizeLabel />
    </div>
  );
}