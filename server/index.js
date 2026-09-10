import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory lead repository (can be connected to MongoDB, PostgreSQL, or CRM)
const leadStore = {
  inquiries: [],
  subscribers: [],
  whitepaperDownloads: []
};

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), service: 'PetaBytz API Gateway' });
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, serviceInterest, message, ndaRequested } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message).' });
  }

  const inquiry = {
    id: `INQ-${Date.now()}`,
    name,
    email,
    phone: phone || '',
    company: company || '',
    serviceInterest: serviceInterest || 'General',
    message,
    ndaRequested: !!ndaRequested,
    receivedAt: new Date().toISOString()
  };

  leadStore.inquiries.push(inquiry);
  console.log('[LEAD RECEIVED]', inquiry);

  res.status(201).json({ 
    success: true, 
    message: 'Thank you for contacting PetaBytz Technologies. Our architecture team will be in touch shortly.',
    leadId: inquiry.id
  });
});

// Newsletter Subscription Endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const sub = { email, subscribedAt: new Date().toISOString() };
  leadStore.subscribers.push(sub);
  console.log('[NEWSLETTER SUBSCRIBER]', sub);

  res.json({ success: true, message: 'Subscribed to PetaBytz Monthly Tech Bulletin.' });
});

// Whitepaper Download Endpoint
app.post('/api/whitepaper-download', (req, res) => {
  const { name, email, company, whitepaperId } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const record = { name, email, company: company || '', whitepaperId, downloadedAt: new Date().toISOString() };
  leadStore.whitepaperDownloads.push(record);
  console.log('[WHITEPAPER DOWNLOAD]', record);

  res.json({ success: true, message: 'Whitepaper download authorized.', downloadUrl: `/whitepapers/${whitepaperId || 'default'}.pdf` });
});

app.listen(PORT, () => {
  console.log(`PetaBytz Node API server running on port ${PORT}`);
});
