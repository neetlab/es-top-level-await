import { promises as fs } from 'fs';

const dir = await fs.readdir('../src');
console.log(dir);

await fs.writeFile('./text', 'Hello', { encoding: 'utf-8' });
const data = await fs.readFile('./text', 'utf-8');
console.log(data);
