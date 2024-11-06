import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BanhCoMay',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "yourProjectId",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "yourDataset",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
