// =====================
// TIPOS
// =====================

export type Modalidade = "estrada" | "mtb";

export type Campeonato =
  | "Campeonato Gaúcho"
  | "Campeonato Noroeste"
  | "Circuito Tchê"
  | "Circuito Planalto Médio"
  | "Circuito Avulso"
  | "Circuito Centro Norte"
  | "CBC Brasileiro";



export type Prova = {
  nome: string;
  data: string; // YYYY-MM-DD
  pais: string;
  descricao: string;
  modalidade: Modalidade;
  campeonato: Campeonato;
  link?: string; // 👈 NOVO CAMPO (opcional)
};

// =====================
// PROVAS 2026
// =====================

export const provas2026: Prova[] = [

  // =====================================================
  // ESTRADA — CAMPEONATO GAÚCHO
  // =====================================================

  { nome: "Campo Bom", data: "2026-01-31", pais: "Brasil", descricao: "Etapa Campo Bom. Inscrições em: https://app.sprinta.com.br/e/1-etapa-do-campeonato-gaucho-de-ciclismo_1f4b?utm_source=SPRINTA ", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "Gramado", data: "2026-02-22", pais: "Brasil", descricao: "Etapa Gramado.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },

  { nome: "Volta de Porto Alegre", data: "2026-03-20", pais: "Brasil", descricao: "Volta de Porto Alegre – Dia 1.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "Volta de Porto Alegre", data: "2026-03-21", pais: "Brasil", descricao: "Volta de Porto Alegre – Dia 2.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "Volta de Porto Alegre", data: "2026-03-22", pais: "Brasil", descricao: "Volta de Porto Alegre – Dia 3.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },

  { nome: "Volta de Novo Hamburgo", data: "2026-04-18", pais: "Brasil", descricao: "Volta de Novo Hamburgo – Dia 1.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "Volta de Novo Hamburgo", data: "2026-04-19", pais: "Brasil", descricao: "Volta de Novo Hamburgo – Dia 2.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },

  { nome: "Troféu Teutônia", data: "2026-05-30", pais: "Brasil", descricao: "Troféu Teutônia – Dia 1.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "Troféu Teutônia", data: "2026-05-31", pais: "Brasil", descricao: "Troféu Teutônia – Dia 2.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },

  { nome: "Sananduva", data: "2026-10-11", pais: "Brasil", descricao: "Etapa Sananduva.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },

  { nome: "Volta de Vacaria", data: "2026-11-07", pais: "Brasil", descricao: "Volta de Vacaria – Dia 1.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "Volta de Vacaria", data: "2026-11-08", pais: "Brasil", descricao: "Volta de Vacaria – Dia 2.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },

  { nome: "GP Tarumã", data: "2026-11-20", pais: "Brasil", descricao: "GP Tarumã – Dia 1.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "GP Tarumã", data: "2026-11-21", pais: "Brasil", descricao: "GP Tarumã – Dia 2.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
  { nome: "GP Tarumã", data: "2026-11-22", pais: "Brasil", descricao: "GP Tarumã – Dia 3.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },


    // =====================================================
  // MTB — CAMPEONATO GAÚCHO 2026
  // =====================================================

  // ---------- XCM ----------
  {
    nome: "Barra do Ribeiro – XCM",
    data: "2026-03-15",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCM – 1ª Etapa (Barra do Ribeiro).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },
  {
    nome: "Nova Petrópolis – XCM",
    data: "2026-04-26",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCM – 2ª Etapa (Ranking Nacional).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },
  {
    nome: "Garibaldi – XCM",
    data: "2026-10-18",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCM – 3ª Etapa (Garibaldi).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },
  {
    nome: "São Sebastião do Caí – XCM",
    data: "2026-11-01",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCM – 4ª Etapa (Etapa Única).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },

  // ---------- XCO ----------
  {
    nome: "Monte Alverne – XCO",
    data: "2026-05-03",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCO – 1ª Etapa (Monte Alverne).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },
  {
    nome: "Campo Bom – XCO",
    data: "2026-07-05",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCO – 2ª Etapa (Campo Bom).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },
  {
    nome: "Três Coroas – XCO",
    data: "2026-09-27",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCO – 3ª Etapa (Ranking Nacional).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },
  {
    nome: "Porto Alegre – XCO",
    data: "2026-11-29",
    pais: "Brasil",
    descricao: "Campeonato Gaúcho MTB XCO – 4ª Etapa (Etapa Única).",
    modalidade: "mtb",
    campeonato: "Campeonato Gaúcho",
  },

  

  // =====================================================
  // ESTRADA — CAMPEONATO NOROESTE
  // =====================================================

  { nome: "Cruz Alta", data: "2026-03-01", pais: "Brasil", descricao: "Etapa Cruz Alta.", modalidade: "estrada", campeonato: "Campeonato Noroeste" },
  { nome: "Carazinho", data: "2026-03-29", pais: "Brasil", descricao: "Etapa Carazinho.", modalidade: "estrada", campeonato: "Campeonato Noroeste" },
  { nome: "Ijuí", data: "2026-05-03", pais: "Brasil", descricao: "Etapa Ijuí.", modalidade: "estrada", campeonato: "Campeonato Noroeste" },
  { nome: "Panambi", data: "2026-08-23", pais: "Brasil", descricao: "Etapa Panambi.", modalidade: "estrada", campeonato: "Campeonato Noroeste" },
  { nome: "Boa Vista do Incra", data: "2026-09-27", pais: "Brasil", descricao: "Etapa Boa Vista do Incra.", modalidade: "estrada", campeonato: "Campeonato Noroeste" },
  { nome: "Três Passos", data: "2026-10-18", pais: "Brasil", descricao: "Etapa Três Passos.", modalidade: "estrada", campeonato: "Campeonato Noroeste" },

  // =====================================================
  // MTB — CIRCUITO TCHÊ
  // =====================================================

  { nome: "Horizontina", data: "2026-03-08", pais: "Brasil", descricao: "Etapa Horizontina – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê", link: "https://windfit.app/events/8339523221690"},
  { nome: "Santo Ângelo", data: "2026-04-19", pais: "Brasil", descricao: "Etapa Santo Ângelo – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Três Passos", data: "2026-05-17", pais: "Brasil", descricao: "Etapa Três Passos – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Cândido Godói", data: "2026-08-02", pais: "Brasil", descricao: "Etapa Cândido Godói – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Santiago", data: "2026-09-06", pais: "Brasil", descricao: "Etapa Santiago – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Ijuí", data: "2026-11-15", pais: "Brasil", descricao: "Etapa Ijuí – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },

  // =====================================================
  // MTB — CIRCUITO PLANALTO MÉDIO
  // =====================================================

  { nome: "Paraí", data: "2026-01-25", pais: "Brasil", descricao: "Etapa Paraí – Circuito Planalto Médio MTB. Inscrição: https://windfit.app/events/pedalparai ", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Carazinho", data: "2026-02-08", pais: "Brasil", descricao: "Etapa Carazinho – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Marau", data: "2026-03-22", pais: "Brasil", descricao: "Etapa Marau – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Sananduva", data: "2026-08-30", pais: "Brasil", descricao: "Etapa Sananduva – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Tapejara", data: "2026-09-13", pais: "Brasil", descricao: "Etapa Tapejara – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Erechim", data: "2026-10-18", pais: "Brasil", descricao: "Etapa Erechim – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Passo Fundo", data: "2026-11-01", pais: "Brasil", descricao: "Etapa Passo Fundo – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },


    // =====================================================
  // ESTRADA — CBC BRASILEIRO (CALENDÁRIO NACIONAL) 2026
  // =====================================================

  // Campeonato Brasileiro de Estrada e CRI – Categorias de Base
  {
    nome: "Brasileiro de Estrada e CRI – Categorias de Base",
    data: "2026-04-07",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Categorias de Base (Dia 1).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Categorias de Base",
    data: "2026-04-08",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Categorias de Base (Dia 2).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Categorias de Base",
    data: "2026-04-09",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Categorias de Base (Dia 3).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Categorias de Base",
    data: "2026-04-10",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Categorias de Base (Dia 4).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Categorias de Base",
    data: "2026-04-11",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Categorias de Base (Dia 5).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Categorias de Base",
    data: "2026-04-12",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Categorias de Base (Dia 6).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },

  // Campeonato Brasileiro de Estrada e CRI – Elite / Sub23
  {
    nome: "Brasileiro de Estrada e CRI – Elite/Sub23",
    data: "2026-06-26",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Elite/Sub23 (Dia 1).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Elite/Sub23",
    data: "2026-06-27",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Elite/Sub23 (Dia 2).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada e CRI – Elite/Sub23",
    data: "2026-06-28",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Elite/Sub23 (Dia 3).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },

  // Tour do Rio – UCI 2.2
  {
    nome: "Tour do Rio",
    data: "2026-07-29",
    pais: "Brasil",
    descricao: "Tour do Rio – UCI 2.2 (Dia 1).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Tour do Rio",
    data: "2026-07-30",
    pais: "Brasil",
    descricao: "Tour do Rio – UCI 2.2 (Dia 2).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Tour do Rio",
    data: "2026-07-31",
    pais: "Brasil",
    descricao: "Tour do Rio – UCI 2.2 (Dia 3).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Tour do Rio",
    data: "2026-08-01",
    pais: "Brasil",
    descricao: "Tour do Rio – UCI 2.2 (Dia 4).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Tour do Rio",
    data: "2026-08-02",
    pais: "Brasil",
    descricao: "Tour do Rio – UCI 2.2 (Dia 5).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },

  // Campeonato Brasileiro – Masters / Sub30
  {
    nome: "Brasileiro de Estrada – Masters/Sub30",
    data: "2026-09-18",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Masters/Sub30 (Dia 1).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada – Masters/Sub30",
    data: "2026-09-19",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Masters/Sub30 (Dia 2).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Brasileiro de Estrada – Masters/Sub30",
    data: "2026-09-20",
    pais: "Brasil",
    descricao: "Campeonato Brasileiro – Masters/Sub30 (Dia 3).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },

  // Volta Ciclística de Santa Catarina – UCI 2.2
  {
    nome: "Volta Ciclística de Santa Catarina",
    data: "2026-10-07",
    pais: "Brasil",
    descricao: "Volta de SC – UCI 2.2 (Dia 1).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Volta Ciclística de Santa Catarina",
    data: "2026-10-08",
    pais: "Brasil",
    descricao: "Volta de SC – UCI 2.2 (Dia 2).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Volta Ciclística de Santa Catarina",
    data: "2026-10-09",
    pais: "Brasil",
    descricao: "Volta de SC – UCI 2.2 (Dia 3).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Volta Ciclística de Santa Catarina",
    data: "2026-10-10",
    pais: "Brasil",
    descricao: "Volta de SC – UCI 2.2 (Dia 4).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },
  {
    nome: "Volta Ciclística de Santa Catarina",
    data: "2026-10-11",
    pais: "Brasil",
    descricao: "Volta de SC – UCI 2.2 (Dia 5).",
    modalidade: "estrada",
    campeonato: "CBC Brasileiro",
  },

  // Campeonato Noroeste MTB

  { nome: "Entre Ijuís", data: "2026-02-22", pais: "Brasil", descricao: "XCO", modalidade: "mtb", campeonato: "Campeonato Noroeste", link: "https://windfit.app/events/campeonatonoroeste" },
  { nome: "Entre Ijuís", data: "2026-03-22", pais: "Brasil", descricao: "XCM", modalidade: "mtb", campeonato: "Campeonato Noroeste" },
  { nome: "Entre Ijuís", data: "2026-04-26", pais: "Brasil", descricao: "XCO", modalidade: "mtb", campeonato: "Campeonato Noroeste" },
  { nome: "Local a Definir", data: "2026-05-31", pais: "Brasil", descricao: "XCM", modalidade: "mtb", campeonato: "Campeonato Noroeste" },


  // Centro Norte MTB

// =====================================================
// MTB — CIRCUITO CENTRO NORTE 2026
// =====================================================

{
  nome: "Panambi",
  data: "2026-03-15",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Etapa Panambi (10 anos – Special Edition).",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},
{
  nome: "Cruz Alta",
  data: "2026-05-03",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Etapa Cruz Alta.",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},
{
  nome: "Faxinal do Soturno",
  data: "2026-06-07",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Etapa Faxinal do Soturno (Etapa Rainha, Bonificação Extra).",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},
{
  nome: "Ijuí",
  data: "2026-07-12",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Etapa Ijuí.",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},
{
  nome: "Tupanciretã",
  data: "2026-08-16",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Etapa Tupanciretã.",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},
{
  nome: "Não-Me-Toque",
  data: "2026-09-27",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Etapa Não-Me-Toque.",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},
{
  nome: "Quinze de Novembro",
  data: "2026-11-08",
  pais: "Brasil",
  descricao: "Circuito Centro Norte MTB – Final (Bonificação Dobrada).",
  modalidade: "mtb",
  campeonato: "Circuito Centro Norte",
},



  // =====================================================
  // AVULSAS (fora de circuito)
  // =====================================================

  // { nome: "Festival de Ciclismo", data: "2026-06-14", pais: "Brasil", descricao: "Evento avulso, sem pontuação.", modalidade: "estrada", campeonato: "Circuito Avulso" },
  // { nome: "Desafio MTB Serrano", data: "2026-07-19", pais: "Brasil", descricao: "Prova única MTB.", modalidade: "mtb", campeonato: "Circuito Avulso" },

];
