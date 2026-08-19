import logoPng from "@/assets/branding/logo_final_oro_v4.png";
import logoPrincipal from "@/assets/branding/a01_logo_transparente_principal.webp";

import heroMain from "@/assets/hero/a02_consultorio_premium_con_doctora.webp";
import heroPremiumDoctora from "@/assets/hero/a02_consultorio_premium_con_doctora.webp";
import doctoraSillon from "@/assets/cutouts/a03_doctora_junto_a_sillon_dental_recorte.webp";
import procedureViolet from "@/assets/cutouts/a04_procedimiento_con_luz_violeta_recorte.webp";
import procedureClinical from "@/assets/cutouts/a05_procedimiento_clinico_en_consulta_recorte.webp";
import sketchToSmile from "@/assets/concepts/a06_de_boceto_a_sonrisa.webp";
import blueprint from "@/assets/concepts/a07_blueprint_de_una_sonrisa.webp";
import whitening from "@/assets/comparisons/a08_blanqueamiento_antes_y_despues.webp";
import labialGeometry from "@/assets/comparisons/a09_antes_y_despues_con_geometria_labial.webp";
import geometricAnalysis from "@/assets/comparisons/a10_analisis_geometrico_editorial.webp";
import overlayTechnical from "@/assets/comparisons/a11_overlay_tecnico_de_sonrisa_png_transparente.webp";
import dsdInfographic from "@/assets/references/a12_infografia_moderna_de_digital_smile_design.webp";
import veneerMockup from "@/assets/extras/a16_mockup_de_carillas_sonrisa_modelo.webp";
import beforeAfterLateral from "@/assets/extras/a15_caso_extra_01_antes_despues_lateral.webp";

// Crafted dental images from uploaded assets
import craftsmanshipPulido from "@/assets/craftsmanship/a23_pulido_artesanal_de_carillas.webp";
import craftsmanshipEscultura from "@/assets/craftsmanship/a24_escultura_artesanal_sobre_modelo_dental.webp";
import craftsmanshipDetallado from "@/assets/craftsmanship/a25_detallado_con_pincel_sobre_protesis_ceramica.webp";

import technologyComputadora from "@/assets/references/a12_infografia_moderna_de_digital_smile_design.webp";
import referenceTableta from "@/assets/references/a13_referencia_tecnica_de_sonrisa_simetrica.webp";
import referenceManual from "@/assets/references/a14_referencia_dsd_original.webp";
import esenciaPrincipal from "@/assets/consultorio/doctora_paciente_consultorio.png";
import doctoraSentada from "@/assets/extras/a18_doctora_sentada_en_consultorio.webp";
import intraoralArcada from "@/assets/extras/a21_caso_extra_05_arcada_intraoral.webp";
import labiosAntesDespues from "@/assets/extras/a20_caso_extra_04_labios_antes_despues.webp";
import result1 from "@/assets/extras/a15_caso_extra_01_antes_despues_lateral.webp";
import result2 from "@/assets/extras/a17_caso_extra_02_intraoral_antes_despues.webp";
import result3 from "@/assets/extras/a19_caso_extra_03_sonrisa_lateral_con_rehabilitacion.webp";
import result4 from "@/assets/extras/a22_caso_extra_06_caso_clinico_adicional.webp";
import result5 from "@/assets/extras/a16_mockup_de_carillas_sonrisa_modelo.webp";
import iconSalud from "@/assets/icons/01_salud_primero.webp";
import iconEstetica from "@/assets/icons/02_estetica_natural.webp";
import iconAtencion from "@/assets/icons/03_atencion_personalizada.webp";

import serviceUrgencias from "@/assets/servicios/01_urgencias_dentales.webp.asset.json";
import serviceCirugia from "@/assets/servicios/02_cirugia_dental.webp.asset.json";
import serviceAlinear from "@/assets/servicios/03_alinear_mejorar_mordida.webp.asset.json";
import serviceRestaurar from "@/assets/servicios/04_restaurar_mis_dientes.webp.asset.json";
import serviceMejorar from "@/assets/servicios/05_mejorar_mi_sonrisa.webp.asset.json";
import serviceCuidar from "@/assets/servicios/06_cuidar_y_prevenir.webp.asset.json";

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
    salud: iconSalud,
    estetica: iconEstetica,
    atencion: iconAtencion,
  },
  services: {
    urgencias: serviceUrgencias.url,
    cirugia: serviceCirugia.url,
    alinear: serviceAlinear.url,
    restaurar: serviceRestaurar.url,
    mejorar: serviceMejorar.url,
    cuidar: serviceCuidar.url,
  }
};
