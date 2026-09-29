import type { ImageMetadata } from 'astro';
import poster1 from '../assets/images/videos/capa-video-1.jpg';
import poster2 from '../assets/images/videos/capa-video-2.jpg';

/**
 * VÍDEOS
 * Para adicionar um vídeo:
 *  1. Coloque o arquivo em public/videos/ (prefira .mp4 em H.264; .webm também funciona)
 *  2. (Opcional) Coloque uma imagem de capa em src/assets/images/videos/ e importe acima.
 *  3. Adicione um item nesta lista.
 * Se a lista ficar vazia, a seção de vídeos não aparece.
 */
export type VideoItem = {
  title: string;
  description?: string;
  src: string;
  type?: 'video/mp4' | 'video/webm' | 'video/quicktime';
  poster?: ImageMetadata;
};

export const videosSection = {
  eyebrow: 'Vídeos',
  title: 'Veja um pouco do nosso trabalho',
  /** Quantidade exibida antes do botão "Ver mais vídeos". */
  initialCount: 2,
};

export const videos: VideoItem[] = [
  {
    title: 'Aprendizado em sala',
    description: 'A rotina de estudos com atenção a cada aluno.',
    src: '/videos/video-2.mp4',
    type: 'video/mp4',
    poster: poster2,
  },
  {
    title: 'Acompanhamento de perto',
    description: 'Leitura, escrita e exercícios com orientação da professora.',
    src: '/videos/video-1.mp4',
    type: 'video/mp4',
    poster: poster1,
  },
];
