import fs from 'fs';
import path from 'path';
import { TextChunk } from '../types';

export const pdfDirectory = path.resolve(__dirname, '../pdfs');

export function loadPDFs(): Promise<TextChunk[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(pdfDirectory, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
      const textChunks: TextChunk[] = [];

      pdfFiles.forEach(file => {
        const filePath = path.join(pdfDirectory, file);
        const data = fs.readFileSync(filePath, 'utf-8');
        // Assuming each line in the PDF file represents a text chunk
        const chunks = data.split('\n').map(chunk => ({ text: chunk, file }));
        textChunks.push(...chunks);
      });

      resolve(textChunks);
    });
  });
}