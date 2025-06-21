const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
require('dotenv').config();


// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // store safely
});

async function generateEmbeddingsFromResume() {
  try {
    // Read the resume.json file
    const filePath = path.join(__dirname, 'resume.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Convert JSON to text for embedding
    const plainText = JSON.stringify(JSON.parse(fileContent), null, 2);

    // Request embedding from OpenAI
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: plainText,
    });

    const embedding = response.data[0].embedding;
    console.log('✅ Embedding vector generated. Sample:', embedding.slice(0, 5));
    
    // Optionally, save to file
    fs.writeFileSync('resume_embedding.json', JSON.stringify(embedding));
    console.log('✅ Embedding saved to resume_embedding.json');
    
  } catch (error) {
    console.error('❌ Error generating embeddings:', error);
  }
}

generateEmbeddingsFromResume();
