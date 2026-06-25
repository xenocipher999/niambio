// Static-hosting SPA fallback.
//
// `python -m http.server` (and other dumb static servers) return 404 when you
// refresh a client-side route like /contact, because no such file exists on
// disk. This copies dist/index.html to dist/<route>/index.html for every route
// so a real file is found at each path. Runs automatically after `npm run build`.

import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexHtml = join(dist, 'index.html')

// Keep in sync with the <Route> paths in src/App.jsx.
const routes = [
    'consulting',
    'podcast',
    'innovation',
    'team',
    'contact',
    'blog',
    'news',
    'resources',
    // dynamic /blog/:slug — known posts from src/pages/BlogPostDetail.jsx
    'blog/future-of-diagnostics-2026',
    'blog/supply-chain-resilience-life-sciences',
    'blog/digital-transformation-biotech',
]

if (!existsSync(indexHtml)) {
    console.error('spa-fallback: dist/index.html not found — run `npm run build` first.')
    process.exit(1)
}

for (const route of routes) {
    const dir = join(dist, route)
    mkdirSync(dir, { recursive: true })
    copyFileSync(indexHtml, join(dir, 'index.html'))
}

// Ensure the Apache SPA-fallback .htaccess is in dist (Vite is
// inconsistent about copying dotfiles from public/).
const htaccessSrc = join(root, 'public', '.htaccess')
if (existsSync(htaccessSrc)) {
    copyFileSync(htaccessSrc, join(dist, '.htaccess'))
}

// Generate dist/api/config.php from .env so the PHP mail handler has
// credentials. .env stays the single source of truth and is never deployed.
const envPath = join(root, '.env')
if (existsSync(envPath)) {
    const env = {}
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
        const t = line.trim()
        if (!t || t.startsWith('#') || !t.includes('=')) continue
        const i = t.indexOf('=')
        env[t.slice(0, i).trim()] = t.slice(i + 1).trim()
    }
    const keys = ['TENANT_ID', 'CLIENT_ID', 'CLIENT_SECRET', 'MAILBOX', 'MAIL_FROM_NAME', 'MAIL_TO']
    // PHP single-quoted string: only \ and ' need escaping (no $ interpolation).
    const phpStr = (v) => `'${String(v ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
    const phpEntries = keys.map((k) => `    '${k}' => ${phpStr(env[k])},`).join('\n')
    mkdirSync(join(dist, 'api'), { recursive: true })
    writeFileSync(
        join(dist, 'api', 'config.php'),
        `<?php\n// Auto-generated from .env by scripts/spa-fallback.mjs. Do not edit by hand.\nreturn [\n${phpEntries}\n];\n`
    )
}

console.log(`spa-fallback: wrote index.html for ${routes.length} routes + .htaccess + api/config.php.`)
