
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://4leixo.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6480, hash: 'f2b7fecbcbd62cebf6ffc5e8412e97ae3036170b900324171e0b34f3f909f490', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '483c4c71e2beece080445246236cdc2ef47eaa2b310e2f50abc9c39f350cf0f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35439, hash: '0929277611e1cf4a2c18a29ee27abee996e85dd7cd048e887033360417682059', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKXNZ443.css': {size: 11904, hash: 'rAed5OjJmUY', text: () => import('./assets-chunks/styles-QKXNZ443_css.mjs').then(m => m.default)}
  },
};
