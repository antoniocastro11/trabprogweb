export interface ArtigoInterface {
  id: number;

  titulo_artigo: string;

  data_publicacao: Date;

  nome_autor: string;

  curso_autor: string;

  orientador: string;

  resumo_artigo: string;

  numero_pg: number;

  idioma: string;

  status: StatusArtigo;
}

export enum StatusArtigo{
  EM_ANALISE = 'Em análise',
  APROVADO = 'Aprovado',
  REPROVADO = 'Reprovado'
}