import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BanhCoMay',

  projectId: process.env.SANITY_PROJECT_ID ?? "your_project_id",
  dataset: process.env.DATASET ?? "your_dataset",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
