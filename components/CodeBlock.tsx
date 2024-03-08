import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
    <div className="my-10">
      <div className="flex -mb-1.5 px-4 py-2 justify-between rounded-t-md bg-gray-200 text-sm">
        <span>{fileName}</span>
        <span>{language}</span>
      </div>
      <div
        className={`${
          enableScroll ? 'max-h-80 overflow-y-scroll' : ''
        } selection:bg-gray-600`}
      >
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
