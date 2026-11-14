import type { ImageMetadata } from 'astro';

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

/** Os vídeos e capas gerados por IA foram retirados em 14/11/2026. Cadastre só vídeos reais. */
export const videos: VideoItem[] = [];
