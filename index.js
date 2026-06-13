const { addonBuilder } = require('stremio-addon-sdk');
const express = require('express');
require('dotenv').config();

const manifest = require('./manifest');

const app = express();
const builder = new addonBuilder(manifest);

// Meta handler - anime detayları
builder.defineMetaHandler(async ({ type, id }) => {
  console.log(`meta request: ${type} ${id}`);
  return { meta: { id, type, name: 'Placeholder' } };
});

// Catalog handler - anime listesi
builder.defineCatalogHandler(async ({ type, id, extra }) => {
  console.log(`catalog request: ${type} ${id}`, extra);
  return { metas: [] };
});

// Stream handler - video linkleri
builder.defineStreamHandler(async ({ type, id }) => {
  console.log(`stream request: ${type} ${id}`);
  return { streams: [] };
});

// Addon interface
const addonInterface = builder.getInterface();

app.use(addonInterface.middleware);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`AnimeCiX Stremio Addon running on port ${PORT}`);
  console.log(`Access at: http://localhost:${PORT}/manifest.json`);
});
