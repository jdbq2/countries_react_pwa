if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let b=Promise.resolve();return r[e]||(b=new Promise(async b=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=b}else importScripts(e),b()})),b.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},b=(b,r)=>{Promise.all(b.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(b)};self.define=(b,c,i)=>{r[b]||(r[b]=Promise.resolve().then(()=>{let r={};const f={uri:location.origin+b.slice(1)};return Promise.all(c.map(b=>{switch(b){case"exports":return r;case"module":return f;default:return e(b)}})).then(e=>{const b=i(...e);return r.default||(r.default=b),r})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"africa.2bd4f61b.jpg",revision:"9b3e29ea3b7401f6b4001b91b408c5b9"},{url:"africa.540f47ba.jpg",revision:"9b3e29ea3b7401f6b4001b91b408c5b9"},{url:"all.b5f37a30.jpg",revision:"0b7bce295e0f12964ed053c90e2cc150"},{url:"all.f534676c.jpg",revision:"0b7bce295e0f12964ed053c90e2cc150"},{url:"americas.b68085ba.jpg",revision:"2cfbb8c5cf545067790833595af5c604"},{url:"americas.b8975bf3.jpg",revision:"2cfbb8c5cf545067790833595af5c604"},{url:"asia.4c832fa2.jpg",revision:"e301abb6718d612390c4957147764bed"},{url:"asia.cb39de83.jpg",revision:"e301abb6718d612390c4957147764bed"},{url:"europe.2805175b.jpg",revision:"fa55c9846b7af233f9412bba25569e47"},{url:"europe.af2dbb20.jpg",revision:"fa55c9846b7af233f9412bba25569e47"},{url:"favicon.62acfe51.ico",revision:"e9dd229d5d57b1165167856e6f7a9d6e"},{url:"favicon.fc8f03bc.ico",revision:"e9dd229d5d57b1165167856e6f7a9d6e"},{url:"index.html",revision:"936f3afc5bdafed2c562bb86ed8e7184"},{url:"logo192.57f821b3.png",revision:"cec506d4fe518faeb8906231d0bdb937"},{url:"logo192.a18143b7.png",revision:"cec506d4fe518faeb8906231d0bdb937"},{url:"logo512.efc2dc99.png",revision:"eb7fc0ac8924f18ff425f5beedb1b850"},{url:"logo512.f7cd245b.png",revision:"eb7fc0ac8924f18ff425f5beedb1b850"},{url:"manifest.webmanifest",revision:"d6a39bb7f4c6bb599ef938afa398d463"},{url:"oceania.41077bfc.jpg",revision:"31443b016806e4007d6fadae40c5b77a"},{url:"oceania.462483e3.jpg",revision:"31443b016806e4007d6fadae40c5b77a"},{url:"src.080eb411.js",revision:"2613694c80558ca3ff3bc63433700b84"},{url:"src.080eb411.js.map",revision:"9d003d466e25076103e8426636945698"},{url:"src.d9fb87bb.css",revision:"a889824b2a51d86c49bc7f3c4c512cfc"},{url:"src.d9fb87bb.css.map",revision:"95805c7d5abfddc05dbf117ee747ecd2"},{url:"src.e31bb0bc.css",revision:"11c6327ba09d97ea821b65470f5b736e"},{url:"src.e31bb0bc.css.map",revision:"0417668f452149c6fa0921e255abb65d"},{url:"src.e31bb0bc.js",revision:"fec708e0ff4fcac0648bd3c060e77f7c"}],{})}));
//# sourceMappingURL=service-worker.js.map
