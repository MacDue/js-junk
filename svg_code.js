const fs = require('fs')
const shiki = require('shiki')
const { getSVGRenderer } = require('shiki-renderer-svg')

;(async () => {
  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus'
  })

  const svgRenderer = await getSVGRenderer({
    bg: '#1e1e1e',
    fontFamily: 'IBM Plex Mono',
    fontSize: 20,
    bgSideCharPadding: 2,
    bgVerticalCharPadding: 1,
  })

  const code = fs.readFileSync('examples/questions.mank', 'utf-8')

  const tokens = highlighter.codeToThemedTokens(code, 'mank')
  const out = svgRenderer.renderToSVG(tokens)

  fs.writeFileSync('questions.svg', out)

  console.log('done: svg.svg')
})()
