import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function apiPlugin() {
  return {
    name: 'petabytz-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // 1. Contact
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const name = data.name || data.fullName;
              const email = data.email || data.workEmail;
              if (!name || !email || !data.message) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Missing required fields (name, email, message).' }));
                return;
              }
              console.log('[LEAD RECEIVED VIA VITE API]', data);
              res.statusCode = 201;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                message: 'Thank you for contacting PetaBytz Technologies. Our architecture team will be in touch shortly.',
                leadId: `INQ-${Date.now()}`
              }));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON body' }));
            }
          });
          return;
        }

        // 2. Newsletter
        if (req.url === '/api/newsletter' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              if (!data.email || !data.email.includes('@')) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Invalid email address.' }));
                return;
              }
              console.log('[NEWSLETTER SUBSCRIBER VIA VITE API]', data.email);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Subscribed to PetaBytz Monthly Tech Bulletin.' }));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON body' }));
            }
          });
          return;
        }

        // 3. Whitepaper Download
        if (req.url === '/api/whitepaper-download' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const name = data.name || data.fullName;
              const email = data.email || data.workEmail;
              if (!name || !email) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Name and email are required.' }));
                return;
              }
              console.log('[WHITEPAPER DOWNLOAD VIA VITE API]', data);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                message: 'Whitepaper download authorized.', 
                downloadUrl: `/whitepapers/${data.whitepaperId || 'default'}.pdf` 
              }));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON body' }));
            }
          });
          return;
        }

        // 4. Careers
        if (req.url === '/api/careers' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const name = data.name || data.fullName;
              const email = data.email || data.workEmail;
              const jobId = data.jobId || data.position || data.title;
              if (!name || !email || !jobId) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Name, email, and position are required.' }));
                return;
              }
              console.log('[CAREER APPLICATION VIA VITE API]', data);
              res.statusCode = 201;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                message: 'Your application has been received. Our talent acquisition team will review your profile.',
                applicationId: `APP-${Date.now()}`
              }));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON body' }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    apiPlugin()
  ],
  server: {
    host: true,
    port: 2819,
    strictPort: true,
    open: false
  }
})
