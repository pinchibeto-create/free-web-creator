import logoV5 from "@/assets/branding/logo_final_oro_v5.png";
import logoPrincipalV2 from "@/assets/branding/logo_principal_v2.png";

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
import result1 from "@/assets/results/01_resultado_sonrisa.webp";
import result2 from "@/assets/results/02_antes_despues_ortodoncia.webp";
import result3 from "@/assets/results/03_antes_despues_sonrisa.webp";
import result4 from "@/assets/results/04_antes_despues_sonrisa_masculina.webp";
import result5 from "@/assets/results/05_antes_despues_estetica.webp";
import iconSalud from "@/assets/icons/01_salud_primero.webp";
import iconEstetica from "@/assets/icons/02_estetica_natural.webp";
import iconAtencion from "@/assets/icons/03_atencion_personalizada.webp";

import serviceUrgencias from "@/assets/servicios/01_urgencias_dentales.webp";
import serviceCirugia from "@/assets/servicios/02_cirugia_dental.webp";
import serviceAlinear from "@/assets/servicios/03_alinear_mejorar_mordida.webp";
import serviceRestaurar from "@/assets/servicios/04_restaurar_mis_dientes.webp";
import serviceMejorar from "@/assets/servicios/05_mejorar_mi_sonrisa.webp";
import serviceCuidar from "@/assets/servicios/06_cuidar_y_prevenir.webp";

import designSillon from "@/assets/recortes/01_doctora_paciente_sillon.webp";
import designConversando from "@/assets/recortes/02_doctora_conversando_paciente.webp";

export const nisadoAssets = {
  branding: {
    logoPng: logoV5,
    logoPrincipal: logoPrincipalV2,
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
    result1, // 01_resultado_sonrisa
    result3, // 03_antes_despues_sonrisa
    result5, // 05_antes_despues_estetica
    result2, // 02_antes_despues_ortodoncia
    result4, // 04_antes_despues_sonrisa_masculina
  ],
  icons: {
    salud: iconSalud,
    estetica: iconEstetica,
    atencion: iconAtencion,
  },
  services: {
    urgencias: serviceUrgencias,
    cirugia: serviceCirugia,
    alinear: serviceAlinear,
    restaurar: serviceRestaurar,
    mejorar: serviceMejorar,
    cuidar: serviceCuidar,
  },
  customDesign: {
    sillon: designSillon,
    conversando: designConversando,
  }
};
