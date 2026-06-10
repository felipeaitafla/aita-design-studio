import { defineField, defineType, defineArrayMember } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projeto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Projeto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'segment',
      title: 'Segmento',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Ano',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'galleryVideo',
      title: 'Vídeo da galeria',
      description: 'Caminho de um vídeo estático servido em /public (ex: /projetos/startech-scroll.mp4). Exibido após o thumbnail.',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
