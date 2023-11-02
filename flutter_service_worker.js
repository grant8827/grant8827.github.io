'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dd91075eb7b69f38eecb806fc1ca32e3",
"index.html": "dba6a69cbcb8822a4fc24e65b7506194",
"/": "dba6a69cbcb8822a4fc24e65b7506194",
"main.dart.js": "7f5c602e485610edb4d408f5e0a4d8d4",
"flutter.js": "7a1d76a8729d1add7a6ce2a4b4db043f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "211dc964c2573dbf726624d37b9d8802",
"assets/AssetManifest.json": "ce6ad79da33f72a9ef198427fa3e0a9b",
"assets/NOTICES": "7f54c227f16803f69fcd90e6f9649311",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "73c35bd5cf1a8b1efe6b0fdb26017d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "9a269b8dbf49791f61a6c1290dfa6866",
"assets/fonts/MaterialIcons-Regular.otf": "0720d5a17b934bd06813a9feacb453dc",
"assets/assets/images/mobiledev.png": "97b9329905296581780a6e213df4bdac",
"assets/assets/images/xcode.png": "41c78400514b81fb2a66b7d9213c9dbc",
"assets/assets/images/cmsweb.png": "ecddd4cf557c09f5b3a84d3e1d5d5880",
"assets/assets/images/Screenshot%25202023-11-02%2520at%252011.13.33%2520AM%25202.png": "d35d8c63d9060f2926b124d4e6de51c3",
"assets/assets/images/codeweb.png": "43408c3aa924bd812a955e27511cf321",
"assets/assets/images/Screenshot%25202023-11-02%2520at%252011.16.28%2520AM%25202.png": "bd434541a185059e54dbf89d4c53c744",
"assets/assets/images/mobileapp4.png": "6c3a25104a3dbaa2c2b41093edf57451",
"assets/assets/images/Screenshot%25202023-11-02%2520at%252011.18.30%2520AM%25202.png": "3771d605e8bc0009ec53477a92b0b13c",
"assets/assets/images/Screenshot.png": "37b5258e5a0458467c30b95b21071349",
"assets/assets/images/Screenshot%25202023-11-02%2520at%252011.17.24%2520AM%25202.png": "3daa0e31dfb7bbd7ac40780eabe9e596",
"assets/assets/images/wordpresswebpic.png": "33bdf00572cb6296e35a7d8b054ab4d6",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25203.54.48%2520PM%25202.png": "1c645f85c50cb92d578f2ea629f837ad",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25203.59.28%2520PM%25202.png": "db0b4ef136a32b02ccaed3e8c155d6f8",
"assets/assets/images/Screenshot%25202023-11-02%2520at%252012.30.43%2520PM.png": "2b6ca9805132a5fcf9d67ef238a09a5f",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25203.57.54%2520PM%25202.png": "c79d538fd2dda702ce340e6d5edb3bb7",
"assets/assets/images/mobileapp3.png": "8e52ada9b520befdff6a305f1d09c2ce",
"assets/assets/images/vscode.png": "72c9dd1f7886f26bb7d4f08518adb014",
"assets/assets/images/Screenshot%25202023-11-02%2520at%252011.15.25%2520AM%25202.png": "5ef7360958adf3885e469d7d3e0c885c",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25201.15.45%2520PM%25202.png": "162873ea7008ed3e3258d9cc01ace913",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25201.01.52%2520PM.png": "c812af0bbb30a735173b7a5dfaad9fa7",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25203.50.44%2520PM%25202.png": "3b33b823472895e17431ef3d25ab3596",
"assets/assets/images/Screenshot%25202023-11-02%2520at%25203.46.32%2520PM%25202.png": "2edd15b7a865890131f1a79653cc8c3b",
"assets/assets/images/mobile.png": "da9ef28f3dbe2e478360c23741625a63",
"assets/assets/images/logo-png%2520(4).png": "9803e59d1c7c785c15f5675f29966785",
"assets/assets/images/Screenshot%25202023-09-29%2520at%25202.02.48%2520PM.png": "41c78400514b81fb2a66b7d9213c9dbc",
"assets/assets/images/androidstudio.png": "cc4ea6759e9c24056da8d46efcdfc056",
"assets/assets/images/codedweb2.png": "48aeae808097578d769f8735b7f181da",
"assets/assets/images/codedweb3.png": "f717c1c75ffa348bf17446af054fe256",
"assets/assets/images/codedwebpic.png": "47b7cab36ec25a8f355cc455a332f43d",
"assets/assets/images/codedweb4.png": "454e7b7034937fa95fd15804720a4135",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "86834d7954c09cba05933cff7912c27a",
"canvaskit/canvaskit.js.symbols": "97d5c0c18bfa047af35a200db5406461",
"canvaskit/skwasm.wasm": "215858bd8abc892f97abc7ece4ec28c6",
"canvaskit/chromium/canvaskit.js.symbols": "a346c5abe852cbb2931b773e74abfc64",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.wasm": "7a7c1184df7b03b56118b494552614e9",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.wasm": "0a74a643c01ba4fe55115f54ce4dc8fa",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
