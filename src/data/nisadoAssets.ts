import logoAsset from "@/assets/branding/logo_final_oro_v4.png.asset.json";
const logoPng = logoAsset.url;
const logoPrincipal = logoAsset.url;
import heroMain from "@/assets/hero/hero_main.webp";
import heroPremiumDoctora from "@/assets/hero/a02_consultorio_premium_con_doctora.webp";
import doctoraSillon from "@/assets/cutouts/doctora_sillon.webp";
import procedureViolet from "@/assets/cutouts/procedure_violet.webp";
import procedureClinical from "@/assets/cutouts/procedure_clinical.webp";
import sketchToSmile from "@/assets/concepts/sketch_to_smile.webp";
import blueprint from "@/assets/concepts/blueprint.webp";
import whitening from "@/assets/comparisons/whitening_before_after.webp";
import labialGeometry from "@/assets/comparisons/labial_geometry.webp";
import geometricAnalysis from "@/assets/comparisons/geometric_analysis.webp";
import overlayTechnical from "@/assets/comparisons/overlay_technical.webp";
import dsdInfographic from "@/assets/references/dsd_infographic.webp";
import veneerMockup from "@/assets/extras/veneer_mockup.webp";
import beforeAfterLateral from "@/assets/extras/before_after_lateral.webp";
import craftsmanshipPulido from "@/assets/craftsmanship/a23_pulido_artesanal_de_carillas.webp";
import craftsmanshipEscultura from "@/assets/craftsmanship/a24_escultura_artesanal_sobre_modelo_dental.webp";
import craftsmanshipDetallado from "@/assets/craftsmanship/a25_detallado_con_pincel_sobre_protesis_ceramica.webp";
import technologyComputadora from "@/assets/technology/laptop_tech_1.webp";
import referenceTableta from "@/assets/technology/laptop_tech_2.webp";
import referenceManual from "@/assets/references_new/a28_referencia_de_trabajo_manual_con_pieza_dental.webp";
import essenciaAsset from "@/assets/consultorio/doctora_paciente_consultorio.png.asset.json";
const esenciaPrincipal = essenciaAsset.url;
import doctoraSentada from "@/assets/extras/doctora_sentada.webp";
import intraoralArcada from "@/assets/extras/intraoral_arcada.webp";
import labiosAntesDespues from "@/assets/extras/labios_antes_despues.webp";
import result1 from "@/assets/results/result_1.jpg";
import result2 from "@/assets/results/result_2.jpg";
import result3 from "@/assets/results/result_3.jpg";
import result4 from "@/assets/results/result_4.jpg";
import result5 from "@/assets/results/result_5.jpg";
import iconSalud from "@/assets/icons/01_salud_primero.webp.asset.json";
import iconEstetica from "@/assets/icons/02_estetica_natural.webp.asset.json";
import iconAtencion from "@/assets/icons/03_atencion_personalizada.webp.asset.json";

export const nisadoAssets = {
  branding: {
    logoPng: logoPng,
    logoPrincipal: logoPrincipal,
  },
  hero: {
    main: heroMain,
    premiumDoctora: heroPremiumDoctora,
  },
  cutouts: {
    doctoraSillon: doctoraSillon,
    procedimientoVioleta: procedureViolet,
    procedimientoClinico: procedureClinical,
  },
  concepts: {
    bocetoSonrisa: sketchToSmile,
    blueprint: blueprint,
  },
  comparisons: {
    whitening: whitening,
    labialGeometry: labialGeometry,
    geometricAnalysis: geometricAnalysis,
    technicalOverlay: overlayTechnical,
    labiosAntesDespues: labiosAntesDespues,
  },
  references: {
    dsdModern: dsdInfographic,
    tableta: referenceTableta,
    manual: referenceManual,
    esenciaPrincipal: esenciaPrincipal,
  },
  craftsmanship: {
    pulido: craftsmanshipPulido,
    escultura: craftsmanshipEscultura,
    detallado: craftsmanshipDetallado,
  },
  technology: {
    computadora: technologyComputadora,
  },
  extras: {
    veneerMockup: veneerMockup,
    lateralBeforeAfter: beforeAfterLateral,
    doctoraSentada: doctoraSentada,
    intraoralArcada: intraoralArcada,
  },
  results: [
    result1,
    result2,
    result3,
    result4,
    result5,
  ],
  icons: {
    salud: iconSalud.url,
    estetica: iconEstetica.url,
    atencion: iconAtencion.url,
  }
};
