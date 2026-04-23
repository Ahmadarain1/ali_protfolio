const path = require('path')
const fs = require('fs/promises')
const sharp = require('sharp')
const pngToIcoModule = require('png-to-ico')
const pngToIco = pngToIcoModule.default || pngToIcoModule

async function generateFavicons() {
  const root = process.cwd()
  const inputSvg = path.join(root, 'public', 'icon.svg')
  const outDir = path.join(root, 'public')

  const outputs = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ]

  for (const output of outputs) {
    const outputPath = path.join(outDir, output.name)
    await sharp(inputSvg).resize(output.size, output.size).png().toFile(outputPath)
  }

  const icoBuffer = await pngToIco([
    path.join(outDir, 'favicon-16x16.png'),
    path.join(outDir, 'favicon-32x32.png'),
  ])
  await fs.writeFile(path.join(outDir, 'favicon.ico'), icoBuffer)
}

generateFavicons().catch((error) => {
  console.error('Failed to generate favicons:', error)
  process.exit(1)
})
