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

const entries: GalleryEntry[] = [
  { file: 'turma-com-a-professora.jpg', alt: 'Professora Meire em pé, sorrindo, cercada por alunos com cadernos e livros', caption: 'Um ambiente de confiança', wide: true },
  { file: 'aula-individual.png', alt: 'Professora Meire acompanhando uma aluna que escreve no caderno', caption: 'Atenção individual' },
  { file: 'aluna-escrevendo.jpg', alt: 'Aluna sorridente escrevendo em seu caderno na sala de aula', caption: 'Aprender sem pressão' },
  { file: 'explicacao-individual.jpg', alt: 'Professora Meire explicando um exercício no caderno para um aluno', caption: 'Explicação com calma', wide: true },
  { file: 'apoio-adolescente.jpg', alt: 'Professora Meire conversando com um adolescente durante a atividade', caption: 'Apoio também para adolescentes', wide: true },
  { file: 'professora-e-alunos.jpeg', alt: 'Professora Meire ao lado de dois alunos que estudam em frente ao quadro', caption: 'Estudo em dupla' },
];

/** Mostra o aviso "imagens ilustrativas" abaixo da galeria. Mude para false quando todas as fotos forem reais. */
export const galleryHasIllustrativeImages = true;

export const gallerySection = {
  title: 'Um pouco do nosso dia a dia',
  intro: 'Momentos de estudo, atenção e descoberta. Clique em uma foto para ampliar.',
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
