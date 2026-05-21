const CACHE='roteiro-cancun-pagamentos-v4';
const FILES=['./','./index.html','./manifest.json','./service-worker.js','./painel_vivo_viagem_playa_cancun_2026_pagamentos_v2.xlsx'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>null)));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
