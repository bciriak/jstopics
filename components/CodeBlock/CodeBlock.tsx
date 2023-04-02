import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from './CodeBlockStyle.module.scss'

type CodeBlockProps = {
  text: string
  language: string
  fileName: string
  lineNumbers: boolean
  startingLineNumber: number
  enableScroll: boolean
}

export function CodeBlock({
  text,
  language,
  fileName,
  lineNumbers = true,
  startingLineNumber = 1,
  enableScroll = false,
}: CodeBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.codeHeader}>
        <span>{fileName}</span>
        <span>{language}</span>
      </div>
      <div className={enableScroll ? styles.content : ''}>
        <SyntaxHighlighter
          language={language}
          showLineNumbers={lineNumbers}
          startingLineNumber={startingLineNumber}
          style={vscDarkPlus}
        >
          {text}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
