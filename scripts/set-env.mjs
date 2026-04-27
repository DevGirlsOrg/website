import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const envPath = resolve(root, '.env');
const env = {};

try {
  readFileSync(envPath, 'utf-8')
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .forEach(line => {
      const [key, ...rest] = line.split('=');
      env[key.trim()] = rest.join('=').trim();
    });
} catch {
  console.warn('⚠️  Fichier .env introuvable — utilise .env.example comme modèle.');
}

const content = `// Ce fichier est généré automatiquement par scripts/set-env.mjs — ne pas modifier manuellement
export const environment = {
  emailjs: {
    publicKey: '${env['EMAILJS_PUBLIC_KEY'] ?? ''}',
    serviceId: '${env['EMAILJS_SERVICE_ID'] ?? ''}',
    templateId: '${env['EMAILJS_TEMPLATE_ID'] ?? ''}',
  },
};
`;

mkdirSync(resolve(root, 'src/environments'), { recursive: true });
writeFileSync(resolve(root, 'src/environments/environment.ts'), content);
console.log('✅ src/environments/environment.ts généré depuis .env');
