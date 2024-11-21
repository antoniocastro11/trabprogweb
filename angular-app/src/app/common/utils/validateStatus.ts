import { StatusArtigo } from 'src/app/artigo/artigo.model';

export const validateApprovedOrAnalysisStatus = (status: StatusArtigo) => {
  return status === StatusArtigo.APROVADO || status === StatusArtigo.EM_ANALISE;
};
export const validateRepprovedStatus = (status: StatusArtigo) => {
  return status === StatusArtigo.REPROVADO;
};
