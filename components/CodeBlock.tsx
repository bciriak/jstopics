import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeBlockProps = {
	text: string
	language: string
}

export default function CodeBlock({ text, language }: CodeBlockProps) {
	return (
		<div className='relative'>
			<div className='absolute right-3 text-white bg-blue-300 -top-3 p-2'>
				{language}
			</div>
			<SyntaxHighlighter
				language={language}
				showLineNumbers={true}
				style={vscDarkPlus}
			>
				{text}
			</SyntaxHighlighter>
		</div>
	)
}
