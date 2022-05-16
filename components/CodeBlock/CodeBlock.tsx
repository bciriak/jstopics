import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { Container, CodeHeader } from './CodeBlockStyle'

type CodeBlockProps = {
  text: string
  language: string
  fileName: string
}

export function CodeBlock({ text, language, fileName }: CodeBlockProps) {
  return (
    <Container>
      <CodeHeader>
        <span>{fileName}</span>
        <span>{language}</span>
      </CodeHeader>
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
