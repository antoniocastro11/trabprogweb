export interface Artigo{
    status: StatusArtigo;
    id: number;
    titulo_artigo: string;  
    data_publicacao: Date;
    nome_autor: string;  
    curso_autor: string;
    orientador: string;
    numero_pg: number;
    idioma: string;
    resumo_artigo: string;
}

export enum StatusArtigo{
    EM_ANALISE = 'Em análise',
    APROVADO = 'Aprovado',
    REPROVADO = 'Reprovado'
}