import logoAsset from "@/assets/branding/logo.asset.json";
import logoPngAsset from "@/assets/branding/logo_final_oro_v3.png.asset.json";
import logoPrincipalAsset from "@/assets/branding/logo_final_oro_v3.png.asset.json";
import heroMainAsset from "@/assets/hero/hero_main.asset.json";
import heroPremiumDoctoraAsset from "@/assets/hero/a02_consultorio_premium_con_doctora.asset.json";
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
import craftsmanshipPulidoAsset from "@/assets/craftsmanship/a23_pulido_artesanal_de_carillas.asset.json";
import craftsmanshipEsculturaAsset from "@/assets/craftsmanship/a24_escultura_artesanal_sobre_modelo_dental.asset.json";
import craftsmanshipDetalladoAsset from "@/assets/craftsmanship/a25_detallado_con_pincel_sobre_protesis_ceramica.asset.json";
import technologyComputadoraAsset from "@/assets/technology/a26_planificacion_dental_en_computadora.asset.json";
import referenceTabletaAsset from "@/assets/references_new/a27_referencia_de_diseno_de_sonrisa_en_tableta.asset.json";
import referenceManualAsset from "@/assets/references_new/a28_referencia_de_trabajo_manual_con_pieza_dental.asset.json";
import doctoraSentadaAsset from "@/assets/extras/doctora_sentada.asset.json";
import intraoralArcadaAsset from "@/assets/extras/intraoral_arcada.asset.json";
import labiosAntesDespuesAsset from "@/assets/extras/labios_antes_despues.asset.json";

export const nisadoAssets = {
  branding: {
    logo: logoAsset.url,
    logoPng: logoPngAsset.url,
    logoPrincipal: logoPrincipalAsset.url,
  },
  hero: {
    main: heroMainAsset.url,
    premiumDoctora: heroPremiumDoctoraAsset.url,
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
    labiosAntesDespues: labiosAntesDespuesAsset.url,
  },
  references: {
    dsdModern: dsdInfographicAsset.url,
    tableta: referenceTabletaAsset.url,
    manual: referenceManualAsset.url,
  },
  craftsmanship: {
    pulido: craftsmanshipPulidoAsset.url,
    escultura: craftsmanshipEsculturaAsset.url,
    detallado: craftsmanshipDetalladoAsset.url,
  },
  technology: {
    computadora: technologyComputadoraAsset.url,
  },
  extras: {
    veneerMockup: veneerMockupAsset.url,
    lateralBeforeAfter: beforeAfterLateralAsset.url,
    doctoraSentada: doctoraSentadaAsset.url,
    intraoralArcada: intraoralArcadaAsset.url,
  }
};
