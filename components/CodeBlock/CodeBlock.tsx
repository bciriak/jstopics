import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { Container, Language } from './CodeBlockStyle'

type CodeBlockProps = {
  text: string
  language: string
}

export function CodeBlock({ text, language }: CodeBlockProps) {
  return (
    <Container>
      <Language>{language}</Language>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={true}
        style={vscDarkPlus}
      >
        {text}
      </SyntaxHighlighter>
    </Container>
  )
}
