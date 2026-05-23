const CACHE='roteiro-cancun-v6-voos-custos';
const FILES=['./','./index.html','./manifest.json','./service-worker.js','./painel_vivo_v6_voos_custos_atualizados.xlsx'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>null)));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
