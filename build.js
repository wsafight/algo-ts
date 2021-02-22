require('esbuild').buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  mainFields: ['module', 'main'],
  outfile: 'out.js',
})