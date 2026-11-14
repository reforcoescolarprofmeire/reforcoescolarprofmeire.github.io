import type { ImageMetadata } from 'astro';

/**
 * GALERIA
 * Para adicionar uma foto:
 *  1. Coloque o arquivo em src/assets/images/galeria/
 *  2. Adicione um item nesta lista com `file` igual ao nome do arquivo e um `alt` descritivo.
 * Para remover, basta apagar o item. A ordem da lista é a ordem de exibição.
 * `wide: true` faz a foto ocupar duas colunas no computador.
 */
type GalleryEntry = { file: string; alt: string; caption?: string; wide?: boolean };

/** As imagens geradas por IA foram retiradas em 14/11/2026. Cadastre aqui só fotos reais. */
const entries: GalleryEntry[] = [];

/** Mostra o aviso "imagens ilustrativas" abaixo da galeria. Mude para false quando todas as fotos forem reais. */
export const galleryHasIllustrativeImages = false;

export const gallerySection = {
  eyebrow: 'Galeria',
  title: 'Um pouco do nosso dia a dia',
  intro: 'Momentos de estudo, atenção e descoberta. Toque em uma foto para ampliar; no celular, deslize para o lado.',
};

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/galeria/*.{jpg,jpeg,png,webp,avif}', { eager: true });

export const gallery = entries
  .map((entry) => {
    const mod = files[`../assets/images/galeria/${entry.file}`];
    if (!mod) {
      console.warn(`[galeria] Arquivo não encontrado: ${entry.file}`);
      return null;
    }
    return { ...entry, src: mod.default };
  })
  .filter((item): item is GalleryEntry & { src: ImageMetadata } => item !== null);
