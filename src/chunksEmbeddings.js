// src/chunksEmbeddings.js
import fs from 'fs/promises';
import path from 'path';
import { OpenAIEmbeddings } from '@langchain/openai';
import * as dotenv from 'dotenv';
dotenv.config();

const CHUNKS_PATH = path.resolve('public', 'chunked_resume.json');
const OUTPUT_PATH = path.resolve('public', 'resume_embedding.json');

async function generateEmbeddings() {
  try {
    const file = await fs.readFile(CHUNKS_PATH, 'utf-8');
    const chunkedInputs = JSON.parse(file);

    const texts = chunkedInputs.map((entry) => entry.input?.trim()).filter(Boolean);
    const embeddingsModel = new OpenAIEmbeddings();

    const vectors = await embeddingsModel.embedDocuments(texts);

    const output = vectors.map((embedding, i) => ({
      embedding,
      text: texts[i],
    }));

    await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
    console.log('✅ Embeddings generated and saved to:', OUTPUT_PATH);
  } catch (err) {
    console.error('❌ Error generating embeddings:', err);
  }
}

generateEmbeddings();
