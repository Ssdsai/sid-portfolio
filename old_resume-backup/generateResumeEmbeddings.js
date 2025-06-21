// // generateResumeEmbeddings.ts
// import fs from 'fs';
// import path from 'path';
// import pdf from 'pdf-parse';
// import { config } from 'dotenv';
// import { OpenAI } from 'openai';

// config();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// interface ResumeChunk {
//   section: string;
//   organization?: string;
//   role?: string;
//   duration?: string;
//   content: string;
//   input?: string;
//   embedding?: number[];
// }

// const clean = (text: string) => text.replace(/\s+/g, ' ').trim();

// const parseSummary = (lines: string[]): ResumeChunk[] => [
//   { section: 'Summary', content: clean(lines.join(' ')) }
// ];

// const parseSkills = (lines: string[]): ResumeChunk[] => [
//   { section: 'Skills', content: clean(lines.join(' ')) }
// ];

// const parseWorkExperience = (lines: string[]): ResumeChunk[] => {
//   const chunks: ResumeChunk[] = [];
//   let current: Partial<ResumeChunk> = { section: 'Work Experience' };
//   let buffer: string[] = [];

//   for (const line of lines) {
//     if (/^(Software Developer|Research Intern)/i.test(line)) {
//       current.role = line;
//       continue;
//     }
//     if (line.includes('Capgemini') || line.includes('La Trobe')) {
//       if (buffer.length) {
//         chunks.push({ ...current, content: clean(buffer.join(' ')) } as ResumeChunk);
//         buffer = [];
//       }
//       current = {
//         section: 'Work Experience',
//         organization: line.replace(/\s*[-–]\s*Remote.*$/, '').trim(),
//         duration: line.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).*?\d{4}/gi)?.join(' - ')
//       };
//     } else {
//       buffer.push(line);
//     }
//   }

//   if (buffer.length) {
//     chunks.push({ ...current, content: clean(buffer.join(' ')) } as ResumeChunk);
//   }

//   return chunks;
// };

// const parseProjects = (lines: string[]): ResumeChunk[] => {
//   const chunks: ResumeChunk[] = [];
//   let buffer: string[] = [];
//   let current: Partial<ResumeChunk> = { section: 'Projects' };

//   for (const line of lines) {
//     const match = line.match(/^([A-Za-z\s]+)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\s*-\s*(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}$/i);
//     if (match) {
//       if (buffer.length) {
//         chunks.push({ ...current, content: clean(buffer.join(' ')) } as ResumeChunk);
//         buffer = [];
//       }
//       current = {
//         section: 'Projects',
//         organization: match[1].trim(),
//         duration: `${match[2]} - ${match[3]}`,
//       };
//     } else {
//       buffer.push(line);
//     }
//   }

//   if (buffer.length) {
//     chunks.push({ ...current, content: clean(buffer.join(' ')) } as ResumeChunk);
//   }

//   return chunks;
// };

// const parseEducation = (_: string[]): ResumeChunk[] => [
//   {
//     section: 'Education',
//     organization: 'Illinois Institute of Technology, Chicago, IL',
//     duration: 'August 2023 - May 2025',
//     role: "Master's in Computer Science",
//     content: ''
//   },
//   {
//     section: 'Education',
//     organization: 'Presidency University, Bengaluru, Karnataka, India',
//     duration: 'August 2019 - June 2023',
//     role: 'Bachelor of Engineering in Computer Science',
//     content: ''
//   }
// ];

// const parseLinesBySection = (text: string): ResumeChunk[] => {
//   const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
//   const sections: { [key: string]: string[] } = {};
//   let currentSection = 'Unknown';

//   for (const line of lines) {
//     if (/^SUMMARY$/i.test(line)) currentSection = 'Summary';
//     else if (/^SKILLS$/i.test(line)) currentSection = 'Skills';
//     else if (/^WORK EXPERIENCE$/i.test(line)) currentSection = 'Work Experience';
//     else if (/^PROJECTS$/i.test(line)) currentSection = 'Projects';
//     else if (/^EDUCATION$/i.test(line)) currentSection = 'Education';

//     if (!sections[currentSection]) sections[currentSection] = [];
//     sections[currentSection].push(line);
//   }

//   return [
//     ...parseSummary(sections['Summary'] || []),
//     ...parseSkills(sections['Skills'] || []),
//     ...parseWorkExperience(sections['Work Experience'] || []),
//     ...parseProjects(sections['Projects'] || []),
//     ...parseEducation(sections['Education'] || [])
//   ];
// };

// const formatInputText = (chunk: ResumeChunk): string => {
//   return [
//     `Section: ${chunk.section}`,
//     chunk.organization ? `Organization: ${chunk.organization}` : '',
//     chunk.role ? `Role: ${chunk.role}` : '',
//     chunk.duration ? `Duration: ${chunk.duration}` : '',
//     chunk.content ? `Content: ${chunk.content}` : ''
//   ].filter(Boolean).join('\n');
// };

// const embedChunks = async (chunks: ResumeChunk[]): Promise<ResumeChunk[]> => {
//   const results: ResumeChunk[] = [];
//   for (const chunk of chunks) {
//     const input = formatInputText(chunk);
//     const response = await openai.embeddings.create({
//       model: 'text-embedding-3-small',
//       input
//     });
//     results.push({
//       ...chunk,
//       input,
//       embedding: response.data[0].embedding
//     });
//     console.log(`✅ Embedded: ${chunk.section} - ${chunk.organization || chunk.role || 'n/a'}`);
//   }
//   return results;
// };

// const run = async () => {
//   const pdfPath = path.join('./src/assets', 'SAI_DHANUSH_SOMA_CV.pdf');
//   const chunksPath = path.join('./src', 'resume_chunks.json');
//   const outputPath = path.join('./public', 'resume_embeddings.json');

//   if (!fs.existsSync(pdfPath)) {
//     console.error('❌ PDF file not found at:', pdfPath);
//     process.exit(1);
//   }

//   const buffer = fs.readFileSync(pdfPath);
//   const data = await pdf(buffer);

//   const chunks = parseLinesBySection(data.text);
//   fs.writeFileSync(chunksPath, JSON.stringify(chunks, null, 2));
//   console.log(`✅ Extracted ${chunks.length} chunks to resume_chunks.json`);

//   const embedded = await embedChunks(chunks);
//   fs.writeFileSync(outputPath, JSON.stringify(embedded, null, 2));
//   console.log(`✅ All embeddings saved to resume_embeddings.json`);
// };

// run();



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
