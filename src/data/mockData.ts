import { Funcionario } from '../types/rrhh';

export const INITIAL_FUNCIONARIOS: Funcionario[] = [
  {
    id: 'f-001-mpppa',
    fechaRegistro: '2023-02-15',
    fechaUltimaActualizacion: '2026-03-10',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '17.432.890',
      tipoRif: 'V',
      rif: '17432890-4',
      nombres: 'Carolina Mercedes',
      apellidos: 'Bermúdez Salazar',
      fechaNacimiento: '1984-06-22',
      lugarNacimiento: 'Cumaná, Estado Sucre',
      genero: 'F',
      estadoCivil: 'CASADO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'O+',
      tallaCamisa: 'M',
      tallaPantalon: '32',
      tallaCalzado: '38'
    },
    contacto: {
      telefonoMovil: '0414-7894512',
      telefonoHabitacion: '0293-4318899',
      emailInstitucional: 'cbermudez@pesca.gob.ve',
      emailPersonal: 'carolina.bermudez.biol@gmail.com',
      estado: 'Sucre',
      municipio: 'Sucre',
      parroquia: 'Altagracia',
      sector: 'Los Chaimas',
      calleCasa: 'Avenida Cancamure, Res. Costa Azul, Torre A, Apto 4-B'
    },
    situacionLaboral: {
      condicion: 'FIJO',
      codigoNomina: 'EMP-00421',
      cargoNominal: 'Biólogo Marino Investigador Principal',
      cargoFuncional: 'Directora de Línea de Evaluación de Recursos Hidrobiológicos',
      unidadAdministrativa: 'Dirección General de Recursos Pesqueros y Acuícolas',
      sedeRegion: 'Sede Regional Sucre / Oriente',
      fechaIngresoMinisterio: '2016-04-01',
      anosServicioPrevioAPN: 6,
      banco: 'Banco de Venezuela (0102)',
      cuentaNomina: '01020345670100123456'
    },
    perfilAcademico: {
      nivelInstruccion: 'MAESTRIA',
      profesionOficio: 'Bióloga Marina',
      tituloObtenido: 'Magíster Scientiarum en Ciencias Marinas',
      institucion: 'Universidad de Oriente (UDO) - Instituto Oceanográfico',
      anoGraduacion: 2012,
      cursosCertificaciones: [
        {
          id: 'c-1',
          nombreCurso: 'Evaluación y Monitoreo de Pesquerías de Sardina y Pepino de Mar',
          institucion: 'FAO - Centro de Investigaciones Pesqueras',
          ano: 2021,
          horasAcademicas: 120
        },
        {
          id: 'c-2',
          nombreCurso: 'Sistemas de Información Geográfica Aplicada a Zonas Costeras',
          institucion: 'CENIPA / Escuela Venezolana de Planificación',
          ano: 2023,
          horasAcademicas: 80
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'PROPIA',
      observacionesVivienda: 'Apartamento adquirido por crédito habitacional BANAVIH',
      familiares: [
        {
          id: 'fam-1',
          parentesco: 'HIJO',
          nombres: 'Diego Alejandro',
          apellidos: 'Rivas Bermúdez',
          cedula: '32.114.550',
          fechaNacimiento: '2012-09-14',
          genero: 'M',
          estudia: true,
          discapacidad: false
        },
        {
          id: 'fam-2',
          parentesco: 'HIJA',
          nombres: 'Valentina Sofía',
          apellidos: 'Rivas Bermúdez',
          fechaNacimiento: '2018-03-05',
          genero: 'F',
          estudia: true,
          discapacidad: false
        },
        {
          id: 'fam-3',
          parentesco: 'CONYUGE',
          nombres: 'Carlos Eduardo',
          apellidos: 'Rivas Marval',
          cedula: '16.992.410',
          fechaNacimiento: '1982-11-03',
          genero: 'M',
          estudia: false,
          discapacidad: false
        }
      ]
    },
    salud: {
      alergias: 'Penicilina y Mariscos crustáceos',
      patologiasCronicas: 'Ninguna conocida',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Antialérgico estacional (Loratadina 10mg)',
      contactoEmergenciaNombre: 'Carlos Eduardo Rivas',
      contactoEmergenciaParentesco: 'Cónyuge',
      contactoEmergenciaTelefono: '0412-3329910'
    },
    expedienteDigital: [
      {
        id: 'doc-1',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad Ampliada',
        nombreArchivo: 'CI_V17432890_Bermudez.pdf',
        tamanoKb: 450,
        fechaCarga: '2023-02-15',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-2',
        tipo: 'RIF',
        titulo: 'Comprobante de Registro Único de Información Fiscal (RIF)',
        nombreArchivo: 'RIF_V174328904_SENIAT.pdf',
        tamanoKb: 380,
        fechaCarga: '2024-01-10',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-3',
        tipo: 'FONDO_NEGRO_TITULO',
        titulo: 'Fondo Negro Certificado del Título de Bióloga',
        nombreArchivo: 'Titulo_UDO_Bermudez_FondoNegro.pdf',
        tamanoKb: 1240,
        fechaCarga: '2023-02-16',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-4',
        tipo: 'SINTESIS_CURRICULAR',
        titulo: 'Síntesis Curricular Actualizada con Soportes',
        nombreArchivo: 'CV_Bermudez_Carolina_2025.pdf',
        tamanoKb: 890,
        fechaCarga: '2025-06-12',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-5',
        tipo: 'ANTECEDENTES_FP023',
        titulo: 'Constancia de Antecedentes de Servicios en APN (FP-023)',
        nombreArchivo: 'FP023_MinEcosocialismo_Bermudez.pdf',
        tamanoKb: 710,
        fechaCarga: '2023-03-01',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-6',
        tipo: 'PARTIDA_NACIMIENTO',
        titulo: 'Partidas de Nacimiento Hijos (Carga Familiar)',
        nombreArchivo: 'Partidas_Hijos_Rivas_Bermudez.pdf',
        tamanoKb: 1150,
        fechaCarga: '2023-03-05',
        verificado: true,
        obligatorio: false
      }
    ],
    notasAuditoria: 'Expediente auditado y conforme por la DGRRHH en el Censo Nacional Pesquero 2024.'
  },
  {
    id: 'f-002-mpppa',
    fechaRegistro: '2021-08-10',
    fechaUltimaActualizacion: '2026-02-18',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '14.882.109',
      tipoRif: 'V',
      rif: '14882109-1',
      nombres: 'José Gregorio',
      apellidos: 'Figuera Marcano',
      fechaNacimiento: '1979-11-17',
      lugarNacimiento: 'Punto Fijo, Estado Falcón',
      genero: 'M',
      estadoCivil: 'CASADO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'A+',
      tallaCamisa: 'L',
      tallaPantalon: '34',
      tallaCalzado: '42'
    },
    contacto: {
      telefonoMovil: '0424-6512300',
      telefonoHabitacion: '0269-2471188',
      emailInstitucional: 'jfiguera@pesca.gob.ve',
      emailPersonal: 'josegfiguera79@hotmail.com',
      estado: 'Falcón',
      municipio: 'Carirubana',
      parroquia: 'Norte',
      sector: 'Banco Obrero',
      calleCasa: 'Calle Comercio con Girardot, Casa N° 12'
    },
    situacionLaboral: {
      condicion: 'FIJO',
      codigoNomina: 'INSP-00108',
      cargoNominal: 'Inspector de Puertos y Sanidad Pesquera I',
      cargoFuncional: 'Jefe de Inspección Portuaria y Trazabilidad',
      unidadAdministrativa: 'Oficina de Vigilancia y Control Pesquero (INSOPESCA)',
      sedeRegion: 'Sede Regional Falcón / Paraguaná',
      fechaIngresoMinisterio: '2014-01-15',
      anosServicioPrevioAPN: 9,
      banco: 'Banco Bicentenario del Pueblo (0175)',
      cuentaNomina: '01750112440199882233'
    },
    perfilAcademico: {
      nivelInstruccion: 'TSU',
      profesionOficio: 'TSU en Tecnología Pesquera y Acuicultura',
      tituloObtenido: 'Técnico Superior Universitario en Tecnología Pesquera',
      institucion: 'IUTAG - Universidad Politécnica Territorial Alonso Gamero',
      anoGraduacion: 2002,
      cursosCertificaciones: [
        {
          id: 'c-3',
          nombreCurso: 'Inspección Sanitaria de Plantas Procesadoras y Cavas Frigoríficas',
          institucion: 'INSOPESCA Central',
          ano: 2022,
          horasAcademicas: 60
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'PROPIA',
      observacionesVivienda: 'Vivienda unifamiliar',
      familiares: [
        {
          id: 'fam-4',
          parentesco: 'CONYUGE',
          nombres: 'Mariela del Carmen',
          apellidos: 'Gómez de Figuera',
          cedula: '15.602.810',
          fechaNacimiento: '1981-05-19',
          genero: 'F',
          estudia: false,
          discapacidad: false
        },
        {
          id: 'fam-5',
          parentesco: 'HIJA',
          nombres: 'Camila Andreína',
          apellidos: 'Figuera Gómez',
          cedula: '31.440.119',
          fechaNacimiento: '2008-01-20',
          genero: 'F',
          estudia: true,
          discapacidad: false
        }
      ]
    },
    salud: {
      alergias: 'Ninguna conocida',
      patologiasCronicas: 'Hipertensión arterial controlada',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Losartán Potásico 50mg diario',
      contactoEmergenciaNombre: 'Mariela Gómez (Esposa)',
      contactoEmergenciaParentesco: 'Cónyuge',
      contactoEmergenciaTelefono: '0416-5667788'
    },
    expedienteDigital: [
      {
        id: 'doc-7',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_V14882109_Figuera.pdf',
        tamanoKb: 390,
        fechaCarga: '2021-08-10',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-8',
        tipo: 'RIF',
        titulo: 'Comprobante RIF Vigente',
        nombreArchivo: 'RIF_Figuera_SENIAT.pdf',
        tamanoKb: 310,
        fechaCarga: '2024-03-02',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-9',
        tipo: 'FONDO_NEGRO_TITULO',
        titulo: 'Título TSU Tecnología Pesquera',
        nombreArchivo: 'Titulo_TSU_Figuera_IUTAG.pdf',
        tamanoKb: 980,
        fechaCarga: '2021-08-12',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-10',
        tipo: 'FE_DE_VIDA',
        titulo: 'Constancia de Fe de Vida 2026',
        nombreArchivo: 'FeDeVida_2026_Figuera.pdf',
        tamanoKb: 410,
        fechaCarga: '2026-01-15',
        verificado: true,
        obligatorio: false
      }
    ],
    notasAuditoria: 'Próximo a régimen de jubilación por antigüedad acumulada en APN (21 años en total).'
  },
  {
    id: 'f-003-mpppa',
    fechaRegistro: '2024-01-20',
    fechaUltimaActualizacion: '2026-01-14',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '19.224.605',
      tipoRif: 'V',
      rif: '19224605-8',
      nombres: 'Yolimar Coromoto',
      apellidos: 'Pernía Chacón',
      fechaNacimiento: '1990-08-04',
      lugarNacimiento: 'San Cristóbal, Estado Táchira',
      genero: 'F',
      estadoCivil: 'SOLTERO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'B+',
      tallaCamisa: 'S',
      tallaPantalon: '30',
      tallaCalzado: '37'
    },
    contacto: {
      telefonoMovil: '0412-8874123',
      telefonoHabitacion: '0212-5091200',
      emailInstitucional: 'ypernia@pesca.gob.ve',
      emailPersonal: 'yolimar.pernia.agro@gmail.com',
      estado: 'Caracas (Distrito Capital)',
      municipio: 'Libertador',
      parroquia: 'Altagracia',
      sector: 'Avenida Baralt',
      calleCasa: 'Esquinas de Cuartel Viejo a Pineda, Edif. Ministerial MPPPA, Piso 7'
    },
    situacionLaboral: {
      condicion: 'CONTRATADO',
      codigoNomina: 'CTR-00892',
      cargoNominal: 'Especialista en Acuicultura Continental',
      cargoFuncional: 'Coordinadora de Granjas Piscícolas de Aguas Cálidas',
      unidadAdministrativa: 'Dirección General de Acuicultura Continental y Marina',
      sedeRegion: 'Sede Central Caracas',
      fechaIngresoMinisterio: '2024-01-15',
      anosServicioPrevioAPN: 2,
      banco: 'Banco del Tesoro (0163)',
      cuentaNomina: '01630200880122334455'
    },
    perfilAcademico: {
      nivelInstruccion: 'UNIVERSITARIO',
      profesionOficio: 'Ingeniera de Producción Animal',
      tituloObtenido: 'Ingeniero de Producción Agropecuaria y Acuícola',
      institucion: 'Universidad Nacional Experimental del Táchira (UNET)',
      anoGraduacion: 2015,
      cursosCertificaciones: [
        {
          id: 'c-4',
          nombreCurso: 'Nutrición y Balance de Alimentos Concentrados para Tilapia y Cachama',
          institucion: 'FONPESCA / INIA',
          ano: 2024,
          horasAcademicas: 45
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'ALQUILADA',
      observacionesVivienda: 'Residencia en Caracas por asignación de funciones técnicas',
      familiares: [
        {
          id: 'fam-6',
          parentesco: 'MADRE',
          nombres: 'Ana Rosa',
          apellidos: 'Chacón de Pernía',
          cedula: '7.890.112',
          fechaNacimiento: '1955-03-12',
          genero: 'F',
          estudia: false,
          discapacidad: false
        }
      ]
    },
    salud: {
      alergias: 'Polvo y ácaros',
      patologiasCronicas: 'Rinitis alérgica',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Cetirizina según sintomatología',
      contactoEmergenciaNombre: 'Ana Rosa Chacón (Madre)',
      contactoEmergenciaParentesco: 'Madre',
      contactoEmergenciaTelefono: '0426-9871144'
    },
    expedienteDigital: [
      {
        id: 'doc-11',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_Pernia_Yolimar.pdf',
        tamanoKb: 420,
        fechaCarga: '2024-01-20',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-12',
        tipo: 'RIF',
        titulo: 'Registro de Información Fiscal',
        nombreArchivo: 'RIF_Pernia_SENIAT.pdf',
        tamanoKb: 340,
        fechaCarga: '2024-01-20',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-13',
        tipo: 'FONDO_NEGRO_TITULO',
        titulo: 'Fondo Negro Título Ingeniero',
        nombreArchivo: 'Titulo_UNET_Pernia.pdf',
        tamanoKb: 1100,
        fechaCarga: '2024-01-22',
        verificado: false,
        obligatorio: true
      }
    ],
    notasAuditoria: 'Expediente al 85%, pendiente validación formal del Fondo Negro de Título por DGRRHH.'
  },
  {
    id: 'f-004-mpppa',
    fechaRegistro: '2019-05-02',
    fechaUltimaActualizacion: '2026-03-01',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '11.340.590',
      tipoRif: 'V',
      rif: '11340590-7',
      nombres: 'Wladimir Alexis',
      apellidos: 'Torres Valera',
      fechaNacimiento: '1970-04-18',
      lugarNacimiento: 'Maracaibo, Estado Zulia',
      genero: 'M',
      estadoCivil: 'CASADO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'O-',
      tallaCamisa: 'XL',
      tallaPantalon: '36',
      tallaCalzado: '43'
    },
    contacto: {
      telefonoMovil: '0414-6129845',
      telefonoHabitacion: '0261-7914422',
      emailInstitucional: 'wtorres@pesca.gob.ve',
      emailPersonal: 'wladimir.torres.pesca@gmail.com',
      estado: 'Zulia',
      municipio: 'Maracaibo',
      parroquia: 'Santa Lucía',
      sector: 'El Milagro',
      calleCasa: 'Avenida 2 El Milagro, Edif. Torre del Puerto, Piso 3'
    },
    situacionLaboral: {
      condicion: 'ALTO_NIVEL',
      codigoNomina: 'DIR-00045',
      cargoNominal: 'Director General de Línea',
      cargoFuncional: 'Director General de Pesca Artesanal y Flota Mayor',
      unidadAdministrativa: 'Despacho del Viceministerio de Producción Primaria Pesquera',
      sedeRegion: 'Sede Regional Zulia / Lago de Maracaibo',
      fechaIngresoMinisterio: '2019-04-15',
      anosServicioPrevioAPN: 18,
      banco: 'Banco de Venezuela (0102)',
      cuentaNomina: '01020888990111223344'
    },
    perfilAcademico: {
      nivelInstruccion: 'DOCTORADO',
      profesionOficio: 'Oceanógrafo / Abogado Marítimo',
      tituloObtenido: 'Doctor en Gestión y Derecho de los Espacios Acuáticos',
      institucion: 'Universidad Marítima del Caribe (UMC)',
      anoGraduacion: 2018,
      cursosCertificaciones: [
        {
          id: 'c-5',
          nombreCurso: 'Derecho del Mar y Zonas Económicas Exclusivas',
          institucion: 'Tribunal Internacional del Derecho del Mar',
          ano: 2020,
          horasAcademicas: 180
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'PROPIA',
      observacionesVivienda: 'Casa propia en Maracaibo',
      familiares: [
        {
          id: 'fam-7',
          parentesco: 'CONYUGE',
          nombres: 'Eliana del Valle',
          apellidos: 'Brito de Torres',
          cedula: '12.890.312',
          fechaNacimiento: '1973-10-08',
          genero: 'F',
          estudia: false,
          discapacidad: false
        }
      ]
    },
    salud: {
      alergias: 'Ninguna',
      patologiasCronicas: 'Diabetes Mellitus Tipo 2 controlada',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Metformina 850mg diario',
      contactoEmergenciaNombre: 'Eliana Brito (Esposa)',
      contactoEmergenciaParentesco: 'Cónyuge',
      contactoEmergenciaTelefono: '0414-6332211'
    },
    expedienteDigital: [
      {
        id: 'doc-14',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_Torres_Wladimir.pdf',
        tamanoKb: 480,
        fechaCarga: '2019-05-02',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-15',
        tipo: 'RIF',
        titulo: 'Comprobante RIF Vigente',
        nombreArchivo: 'RIF_Torres_SENIAT.pdf',
        tamanoKb: 310,
        fechaCarga: '2024-05-10',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-16',
        tipo: 'FONDO_NEGRO_TITULO',
        titulo: 'Fondo Negro Doctorado en Derecho Marítimo',
        nombreArchivo: 'Doctorado_UMC_Torres.pdf',
        tamanoKb: 1350,
        fechaCarga: '2019-05-15',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-17',
        tipo: 'ANTECEDENTES_FP023',
        titulo: 'Antecedentes de Servicios FP-023 (INEA / MinTransporte)',
        nombreArchivo: 'FP023_Torres_Valera_INEA.pdf',
        tamanoKb: 920,
        fechaCarga: '2019-05-20',
        verificado: true,
        obligatorio: true
      }
    ],
    notasAuditoria: 'Cumple tiempo y edad reglamentaria para jubilación especial de la APN (25 años de servicio acumulados).'
  },
  {
    id: 'f-005-mpppa',
    fechaRegistro: '2020-09-15',
    fechaUltimaActualizacion: '2025-11-20',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '16.120.940',
      tipoRif: 'V',
      rif: '16120940-2',
      nombres: 'Yraida Josefina',
      apellidos: 'Rondón Marcano',
      fechaNacimiento: '1983-02-14',
      lugarNacimiento: 'Porlamar, Estado Nueva Esparta',
      genero: 'F',
      estadoCivil: 'SOLTERO',
      lateralidad: 'ZURDO',
      tipoSangre: 'AB+',
      tallaCamisa: 'M',
      tallaPantalon: '32',
      tallaCalzado: '37'
    },
    contacto: {
      telefonoMovil: '0416-7954120',
      telefonoHabitacion: '0295-2634411',
      emailInstitucional: 'yrondon@pesca.gob.ve',
      emailPersonal: 'yraida.rondon.insopesca@gmail.com',
      estado: 'Nueva Esparta',
      municipio: 'Mariño',
      parroquia: 'Porlamar',
      sector: 'Genovés',
      calleCasa: 'Calle Igualdad, Conjunto Residencial Las Garzas, Casa 8'
    },
    situacionLaboral: {
      condicion: 'FIJO',
      codigoNomina: 'TEC-00331',
      cargoNominal: 'Técnico Especialista en Sanidad Acuícola',
      cargoFuncional: 'Supervisora de Sanidad e Inocuidad en Muelles Pesqueros',
      unidadAdministrativa: 'Oficina de Sanidad Pesquera y Acuícola (INSOPESCA)',
      sedeRegion: 'Sede Regional Nueva Esparta / Insular',
      fechaIngresoMinisterio: '2015-11-01',
      anosServicioPrevioAPN: 4,
      banco: 'Banco de Venezuela (0102)',
      cuentaNomina: '01020441990123998811'
    },
    perfilAcademico: {
      nivelInstruccion: 'UNIVERSITARIO',
      profesionOficio: 'Médico Veterinario especialista en Patología Acuícola',
      tituloObtenido: 'Médico Veterinario',
      institucion: 'Universidad Central de Venezuela (UCV) - Campus Maracay',
      anoGraduacion: 2007,
      cursosCertificaciones: [
        {
          id: 'c-6',
          nombreCurso: 'Detección Rápida de Virus de la Mancha Blanca en Granjas de Camarón',
          institucion: 'OIE / FONPESCA',
          ano: 2023,
          horasAcademicas: 90
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'PROPIA',
      observacionesVivienda: 'Propiedad familiar',
      familiares: [
        {
          id: 'fam-8',
          parentesco: 'HIJO',
          nombres: 'Santiago Andrés',
          apellidos: 'Rondón Marcano',
          cedula: '33.991.020',
          fechaNacimiento: '2016-07-28',
          genero: 'M',
          estudia: true,
          discapacidad: false
        }
      ]
    },
    salud: {
      alergias: 'Ninguna conocida',
      patologiasCronicas: 'Ninguna',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Ninguno',
      contactoEmergenciaNombre: 'Gladys Marcano (Madre)',
      contactoEmergenciaParentesco: 'Madre',
      contactoEmergenciaTelefono: '0414-7890123'
    },
    expedienteDigital: [
      {
        id: 'doc-18',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_Rondon_Yraida.pdf',
        tamanoKb: 430,
        fechaCarga: '2020-09-15',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-19',
        tipo: 'RIF',
        titulo: 'RIF Digital Actualizado',
        nombreArchivo: 'RIF_Rondon_Yraida.pdf',
        tamanoKb: 360,
        fechaCarga: '2024-02-11',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-20',
        tipo: 'FONDO_NEGRO_TITULO',
        titulo: 'Fondo Negro Médico Veterinario UCV',
        nombreArchivo: 'Titulo_UCV_Rondon_FondoNegro.pdf',
        tamanoKb: 1400,
        fechaCarga: '2020-09-18',
        verificado: true,
        obligatorio: true
      }
    ],
    notasAuditoria: 'Expediente al 100% verificado por la Coordinación de Personal de la Región Insular.'
  },
  {
    id: 'f-006-mpppa',
    fechaRegistro: '2017-03-10',
    fechaUltimaActualizacion: '2026-01-25',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '12.441.879',
      tipoRif: 'V',
      rif: '12441879-0',
      nombres: 'Ramón Antonio',
      apellidos: 'Guanipa Castillo',
      fechaNacimiento: '1972-09-03',
      lugarNacimiento: 'Barinas, Estado Barinas',
      genero: 'M',
      estadoCivil: 'CONCUBINATO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'O+',
      tallaCamisa: 'L',
      tallaPantalon: '34',
      tallaCalzado: '41'
    },
    contacto: {
      telefonoMovil: '0426-5784119',
      telefonoHabitacion: '0273-5321099',
      emailInstitucional: 'rguanipa@pesca.gob.ve',
      emailPersonal: 'ramonguanipa72@gmail.com',
      estado: 'Barinas',
      municipio: 'Barinas',
      parroquia: 'Rómulo Betancourt',
      sector: 'Punta Gorda',
      calleCasa: 'Carretera Nacional Vía San Silvestre, Fundo Estación FONPESCA'
    },
    situacionLaboral: {
      condicion: 'FIJO',
      codigoNomina: 'OBR-00512',
      cargoNominal: 'Obrero Especialista en Piscicultura y Mantenimiento',
      cargoFuncional: 'Capataz de Estanque de Reproducción de Cachama y Bagre',
      unidadAdministrativa: 'FONPESCA - Estación Piscícola Los Llanos',
      sedeRegion: 'Sede Regional Barinas / Los Llanos',
      fechaIngresoMinisterio: '2010-06-01',
      anosServicioPrevioAPN: 5,
      banco: 'Banco Agrícola de Venezuela (0166)',
      cuentaNomina: '01660100450188992211'
    },
    perfilAcademico: {
      nivelInstruccion: 'BACHILLER',
      profesionOficio: 'Técnico Agropecuario Práctico',
      tituloObtenido: 'Bachiller Agrícola y Pecuario',
      institucion: 'Escuela Técnica Agropecuaria Robinsoniana de Barinas',
      anoGraduacion: 1991,
      cursosCertificaciones: [
        {
          id: 'c-7',
          nombreCurso: 'Manejo Reproductivo y Desove Artificial de Especies Dulceacuícolas',
          institucion: 'CENIPA Los Llanos',
          ano: 2018,
          horasAcademicas: 40
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'FAMILIAR',
      observacionesVivienda: 'Vivienda rural en predio adyacente a estación piscícola',
      familiares: [
        {
          id: 'fam-9',
          parentesco: 'CONYUGE',
          nombres: 'Doris María',
          apellidos: 'Vargas de Guanipa',
          cedula: '13.990.412',
          fechaNacimiento: '1975-01-19',
          genero: 'F',
          estudia: false,
          discapacidad: false
        },
        {
          id: 'fam-10',
          parentesco: 'HIJO',
          nombres: 'Jesús Ramón',
          apellidos: 'Guanipa Vargas',
          cedula: '29.881.040',
          fechaNacimiento: '2004-11-12',
          genero: 'M',
          estudia: true,
          discapacidad: false
        }
      ]
    },
    salud: {
      alergias: 'Picaduras de avispa',
      patologiasCronicas: 'Lumbalgia mecánica ocupacional',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Complejo B y antiinflamatorios según crisis',
      contactoEmergenciaNombre: 'Doris Vargas (Esposa)',
      contactoEmergenciaParentesco: 'Cónyuge',
      contactoEmergenciaTelefono: '0426-5789900'
    },
    expedienteDigital: [
      {
        id: 'doc-21',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_Guanipa_Ramon.pdf',
        tamanoKb: 405,
        fechaCarga: '2017-03-10',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-22',
        tipo: 'RIF',
        titulo: 'RIF Digital',
        nombreArchivo: 'RIF_Guanipa_SENIAT.pdf',
        tamanoKb: 310,
        fechaCarga: '2023-10-14',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-23',
        tipo: 'ANTECEDENTES_FP023',
        titulo: 'Antecedentes FP-023 del Ministerio de Agricultura',
        nombreArchivo: 'FP023_Guanipa_MAT.pdf',
        tamanoKb: 650,
        fechaCarga: '2017-04-01',
        verificado: true,
        obligatorio: true
      }
    ],
    notasAuditoria: 'Beneficiario de dotación de botas pantaneras y uniforme especial de faena acuícola.'
  },
  {
    id: 'f-007-mpppa',
    fechaRegistro: '2022-04-11',
    fechaUltimaActualizacion: '2026-03-05',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '18.774.230',
      tipoRif: 'V',
      rif: '18774230-6',
      nombres: 'Génesis Patricia',
      apellidos: 'Vargas Albornoz',
      fechaNacimiento: '1988-12-05',
      lugarNacimiento: 'Caracas, Distrito Capital',
      genero: 'F',
      estadoCivil: 'SOLTERO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'A-',
      tallaCamisa: 'S',
      tallaPantalon: '28',
      tallaCalzado: '36'
    },
    contacto: {
      telefonoMovil: '0414-2218844',
      telefonoHabitacion: '0212-4819920',
      emailInstitucional: 'gvargas@pesca.gob.ve',
      emailPersonal: 'genesis.vargas.rrhh@gmail.com',
      estado: 'Miranda',
      municipio: 'Sucre',
      parroquia: 'Petare',
      sector: 'La California Norte',
      calleCasa: 'Avenida Francisco de Miranda, Residencias El Parque, Apto 11-C'
    },
    situacionLaboral: {
      condicion: 'FIJO',
      codigoNomina: 'ADM-00620',
      cargoNominal: 'Analista de Gestión Humana III',
      cargoFuncional: 'Coordinadora de Nómina y Beneficios Socioeconómicos',
      unidadAdministrativa: 'Dirección General de Recursos Humanos',
      sedeRegion: 'Sede Central Caracas',
      fechaIngresoMinisterio: '2018-09-01',
      anosServicioPrevioAPN: 3,
      banco: 'Banco de Venezuela (0102)',
      cuentaNomina: '01020110440155667788'
    },
    perfilAcademico: {
      nivelInstruccion: 'ESPECIALIZACION',
      profesionOficio: 'Licenciada en Relaciones Industriales',
      tituloObtenido: 'Especialista en Gerencia Pública y Derecho del Trabajo',
      institucion: 'Universidad Católica Andrés Bello (UCAB)',
      anoGraduacion: 2017,
      cursosCertificaciones: [
        {
          id: 'c-8',
          nombreCurso: 'Régimen de Jubilaciones y Pensiones de la Función Pública',
          institucion: 'Superintendencia de Seguridad Social (SISS)',
          ano: 2023,
          horasAcademicas: 60
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'PROPIA',
      observacionesVivienda: 'Adquirida por crédito bancario',
      familiares: [
        {
          id: 'fam-11',
          parentesco: 'MADRE',
          nombres: 'Gladys Albornoz',
          apellidos: 'de Vargas',
          cedula: '6.450.119',
          fechaNacimiento: '1952-06-20',
          genero: 'F',
          estudia: false,
          discapacidad: true
        }
      ]
    },
    salud: {
      alergias: 'Ninguna',
      patologiasCronicas: 'Miopía y astigmatismo',
      discapacidadCertificada: false,
      tratamientoPermanente: 'Uso de lentes correctivos',
      contactoEmergenciaNombre: 'Gladys Albornoz (Madre)',
      contactoEmergenciaParentesco: 'Madre',
      contactoEmergenciaTelefono: '0212-4819920'
    },
    expedienteDigital: [
      {
        id: 'doc-24',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_Vargas_Genesis.pdf',
        tamanoKb: 410,
        fechaCarga: '2022-04-11',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-25',
        tipo: 'RIF',
        titulo: 'RIF Vigente',
        nombreArchivo: 'RIF_Vargas_Genesis_SENIAT.pdf',
        tamanoKb: 320,
        fechaCarga: '2025-01-18',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-26',
        tipo: 'FONDO_NEGRO_TITULO',
        titulo: 'Fondo Negro Licenciada Relaciones Industriales',
        nombreArchivo: 'Titulo_UCAB_Vargas.pdf',
        tamanoKb: 1280,
        fechaCarga: '2022-04-15',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-27',
        tipo: 'SINTESIS_CURRICULAR',
        titulo: 'Síntesis Curricular',
        nombreArchivo: 'CV_Genesis_Vargas_2025.pdf',
        tamanoKb: 850,
        fechaCarga: '2025-02-10',
        verificado: true,
        obligatorio: true
      }
    ],
    notasAuditoria: 'Expediente digital auditado al 100%. Analista responsable de la carga del SIGEF-RRHH.'
  },
  {
    id: 'f-008-mpppa',
    fechaRegistro: '2016-01-15',
    fechaUltimaActualizacion: '2026-02-01',
    identificacion: {
      fotoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400',
      tipoCedula: 'V',
      cedula: '6.980.440',
      tipoRif: 'V',
      rif: '06980440-3',
      nombres: 'Carmen Elena',
      apellidos: 'Brito de Navarro',
      fechaNacimiento: '1961-05-14',
      lugarNacimiento: 'La Guaira, Estado La Guaira',
      genero: 'F',
      estadoCivil: 'VIUDO',
      lateralidad: 'DIESTRO',
      tipoSangre: 'O+',
      tallaCamisa: 'XL',
      tallaPantalon: '36',
      tallaCalzado: '39'
    },
    contacto: {
      telefonoMovil: '0414-3112233',
      telefonoHabitacion: '0212-3329988',
      emailInstitucional: 'cbrito@pesca.gob.ve',
      emailPersonal: 'carmenbrito.jubilada@gmail.com',
      estado: 'La Guaira',
      municipio: 'Vargas',
      parroquia: 'Maiquetía',
      sector: 'Pariata',
      calleCasa: 'Calle Real de Pariata, Quinta Los Naranjos'
    },
    situacionLaboral: {
      condicion: 'JUBILADO',
      codigoNomina: 'JUB-00012',
      cargoNominal: 'Jefe de División de Planificación y Presupuesto',
      cargoFuncional: 'Servidora Pública Jubilada de la APN',
      unidadAdministrativa: 'Oficina de Gestión Estratégica y Presupuesto',
      sedeRegion: 'Sede Central Caracas',
      fechaIngresoMinisterio: '2016-01-10',
      anosServicioPrevioAPN: 24,
      banco: 'Banco de Venezuela (0102)',
      cuentaNomina: '01020001880199001122'
    },
    perfilAcademico: {
      nivelInstruccion: 'UNIVERSITARIO',
      profesionOficio: 'Economista',
      tituloObtenido: 'Licenciada en Economía',
      institucion: 'Universidad Central de Venezuela (UCV)',
      anoGraduacion: 1985,
      cursosCertificaciones: [
        {
          id: 'c-9',
          nombreCurso: 'Presupuesto Público por Proyectos y Acciones Centralizadas',
          institucion: 'ONAPRE',
          ano: 2019,
          horasAcademicas: 100
        }
      ]
    },
    cargaFamiliar: {
      tipoVivienda: 'PROPIA',
      observacionesVivienda: 'Vivienda cancelada',
      familiares: []
    },
    salud: {
      alergias: 'Sulfas',
      patologiasCronicas: 'Artritis reumatoide e hipertensión',
      discapacidadCertificada: true,
      codigoConapdis: 'CONAPDIS-2023-LG-00912',
      tratamientoPermanente: 'Enalapril 20mg y analgesia prescrita',
      contactoEmergenciaNombre: 'Patricia Navarro (Hija)',
      contactoEmergenciaParentesco: 'HIJA',
      contactoEmergenciaTelefono: '0414-2224455'
    },
    expedienteDigital: [
      {
        id: 'doc-28',
        tipo: 'CEDULA',
        titulo: 'Cédula de Identidad',
        nombreArchivo: 'CI_Brito_Carmen.pdf',
        tamanoKb: 430,
        fechaCarga: '2016-01-15',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-29',
        tipo: 'RIF',
        titulo: 'RIF Digital',
        nombreArchivo: 'RIF_Brito_SENIAT.pdf',
        tamanoKb: 310,
        fechaCarga: '2024-04-12',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-30',
        tipo: 'FE_DE_VIDA',
        titulo: 'Constancia de Fe de Vida 2026 para Jubilados',
        nombreArchivo: 'FeDeVida_2026_CarmenBrito.pdf',
        tamanoKb: 520,
        fechaCarga: '2026-01-10',
        verificado: true,
        obligatorio: true
      },
      {
        id: 'doc-31',
        tipo: 'CERTIFICADO_CONAPDIS',
        titulo: 'Certificado de Discapacidad CONAPDIS',
        nombreArchivo: 'Certificado_CONAPDIS_Brito.pdf',
        tamanoKb: 680,
        fechaCarga: '2023-08-14',
        verificado: true,
        obligatorio: false
      }
    ],
    notasAuditoria: 'Jubilada en nómina especial con Fe de Vida 2026 consignada y validada.'
  }
];
