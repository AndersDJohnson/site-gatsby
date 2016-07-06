import MarkdownIt from 'markdown-it'

const markdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

export default markdownIt.render.bind(markdownIt)
