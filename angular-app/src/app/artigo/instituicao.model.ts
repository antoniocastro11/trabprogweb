export interface Instituicao {
    id: number,
    nome: string;
    sigla: string;
    pais: string;
    cnpj: string;
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    numero: number;
    complemento?: string;
    status: boolean;
    uf: string;
}