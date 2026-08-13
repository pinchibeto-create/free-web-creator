import logoAsset from "@/assets/branding/logo.asset.json";
import heroMainAsset from "@/assets/hero/hero_main.asset.json";
import doctoraSillonAsset from "@/assets/cutouts/doctora_sillon.asset.json";
import procedureVioletAsset from "@/assets/cutouts/procedure_violet.asset.json";
import procedureClinicalAsset from "@/assets/cutouts/procedure_clinical.asset.json";
import sketchToSmileAsset from "@/assets/concepts/sketch_to_smile.asset.json";
import blueprintAsset from "@/assets/concepts/blueprint.asset.json";
import whiteningAsset from "@/assets/comparisons/whitening_before_after.asset.json";
import labialGeometryAsset from "@/assets/comparisons/labial_geometry.asset.json";
import geometricAnalysisAsset from "@/assets/comparisons/geometric_analysis.asset.json";
import overlayTechnicalAsset from "@/assets/comparisons/overlay_technical.asset.json";
import dsdInfographicAsset from "@/assets/references/dsd_infographic.asset.json";
import veneerMockupAsset from "@/assets/extras/veneer_mockup.asset.json";
import beforeAfterLateralAsset from "@/assets/extras/before_after_lateral.asset.json";

export const nisadoAssets = {
  branding: {
    logo: logoAsset.url,
  },
  hero: {
    main: heroMainAsset.url,
  },
  cutouts: {
    doctoraSillon: doctoraSillonAsset.url,
    procedimientoVioleta: procedureVioletAsset.url,
    procedimientoClinico: procedureClinicalAsset.url,
  },
  concepts: {
    bocetoSonrisa: sketchToSmileAsset.url,
    blueprint: blueprintAsset.url,
  },
  comparisons: {
    whitening: whiteningAsset.url,
    labialGeometry: labialGeometryAsset.url,
    geometricAnalysis: geometricAnalysisAsset.url,
    technicalOverlay: overlayTechnicalAsset.url,
  },
  references: {
    dsdModern: dsdInfographicAsset.url,
  },
  extras: {
    veneerMockup: veneerMockupAsset.url,
    lateralBeforeAfter: beforeAfterLateralAsset.url,
  }
};
