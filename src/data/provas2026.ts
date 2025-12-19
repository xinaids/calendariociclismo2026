// =====================
// TIPOS
// =====================

export type Modalidade = "estrada" | "mtb";

export type Campeonato =
  | "Campeonato Gaúcho"
  | "Campeonato Noroeste"
  | "Circuito Tchê"
  | "Circuito Planalto Médio"
  | "Circuito Avulso";

export type Prova = {
  nome: string;
  data: string; // YYYY-MM-DD
  pais: string;
  descricao: string;
  modalidade: Modalidade;
  campeonato: Campeonato;
};

// =====================
// PROVAS 2026
// =====================

export const provas2026: Prova[] = [

  // =====================================================
  // ESTRADA — CAMPEONATO GAÚCHO
  // =====================================================

  { nome: "Campo Bom", data: "2026-01-31", pais: "Brasil", descricao: "Etapa Campo Bom.", modalidade: "estrada", campeonato: "Campeonato Gaúcho" },
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

  { nome: "Horizontina", data: "2026-03-08", pais: "Brasil", descricao: "Etapa Horizontina – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Santo Ângelo", data: "2026-04-19", pais: "Brasil", descricao: "Etapa Santo Ângelo – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Três Passos", data: "2026-05-17", pais: "Brasil", descricao: "Etapa Três Passos – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Cândido Godói", data: "2026-08-02", pais: "Brasil", descricao: "Etapa Cândido Godói – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Santiago", data: "2026-09-06", pais: "Brasil", descricao: "Etapa Santiago – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },
  { nome: "Ijuí", data: "2026-11-15", pais: "Brasil", descricao: "Etapa Ijuí – Circuito Tchê MTB.", modalidade: "mtb", campeonato: "Circuito Tchê" },

  // =====================================================
  // MTB — CIRCUITO PLANALTO MÉDIO
  // =====================================================

  { nome: "Paraí", data: "2026-01-25", pais: "Brasil", descricao: "Etapa Paraí – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Carazinho", data: "2026-02-08", pais: "Brasil", descricao: "Etapa Carazinho – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Marau", data: "2026-03-22", pais: "Brasil", descricao: "Etapa Marau – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Sananduva", data: "2026-08-31", pais: "Brasil", descricao: "Etapa Sananduva – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Tapejara", data: "2026-09-13", pais: "Brasil", descricao: "Etapa Tapejara – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Erechim", data: "2026-10-18", pais: "Brasil", descricao: "Etapa Erechim – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },
  { nome: "Passo Fundo", data: "2026-11-01", pais: "Brasil", descricao: "Etapa Passo Fundo – Circuito Planalto Médio MTB.", modalidade: "mtb", campeonato: "Circuito Planalto Médio" },

  // =====================================================
  // AVULSAS (fora de circuito)
  // =====================================================

  // { nome: "Festival de Ciclismo", data: "2026-06-14", pais: "Brasil", descricao: "Evento avulso, sem pontuação.", modalidade: "estrada", campeonato: "Circuito Avulso" },
  // { nome: "Desafio MTB Serrano", data: "2026-07-19", pais: "Brasil", descricao: "Prova única MTB.", modalidade: "mtb", campeonato: "Circuito Avulso" },

];
