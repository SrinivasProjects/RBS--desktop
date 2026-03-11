const deps = [
  'react',
  'react-dom',
  'vite',
  'tailwindcss',
  'axios',
  'zustand',
  'better-sqlite3',
  'electron',
  'electron-vite'
]

const results = {}
deps.forEach(name => {
  try {
    require.resolve(name)
    results[name] = 'found'
  } catch (err) {
    results[name] = 'missing'
  }
})

console.log('Dependency check results:')
Object.entries(results).forEach(([k, v]) => console.log(`${k}: ${v}`))

const missing = Object.values(results).some(v => v === 'missing')
process.exit(missing ? 1 : 0)
