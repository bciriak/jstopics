import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from './CodeBlockStyle.module.scss'

type CodeBlockProps = {
  text: string
  language: string
  fileName: string
  lineNumbers: boolean
}

export function CodeBlock({
  text,
  language,
  fileName,
  lineNumbers = true,
}: CodeBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.codeHeader}>
        <span>{fileName}</span>
        <span>{language}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={lineNumbers}
        style={vscDarkPlus}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  )
}
