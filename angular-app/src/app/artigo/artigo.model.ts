export interface Artigo{
    status: boolean;
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