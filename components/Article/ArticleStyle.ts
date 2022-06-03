import styled from 'styled-components'
import { Container } from '../Common/CommonStyle'

export const ArticleContainer = styled(Container)`
	max-width: 720px;
	padding-bottom: 2rem;

	img {
		max-width: 100%;
		padding: 2rem 0;
	}

	small {
		display: block;
		padding-top: 3rem;
	}

	ul {
		padding-left: 1.8rem;
		li {
			list-style-type: disc;
			padding: 0.2rem 0;
		}
	}

	h1 {
		font-size: 2.3rem;
		text-align: center;
		margin-top: 1rem;
		padding-bottom: 2rem;
	}

	h2 {
		margin: 3.5rem 0 2.5rem;
	}

	h3 {
		margin: 2.5rem 0 2rem;
	}

	p {
		font-size: 1.125rem;
		line-height: 1.9rem;
	}

	.intro {
		font-size: 1.3rem;
		line-height: 2rem;
		font-weight: 300;
	}

	a {
		text-decoration: underline;
		color: black;
	}

	a:active {
		color: black;
	}

	hr {
		display: block;
		height: 1px;
		border: 0;
		border-top: 1px solid #ccc;
		margin: 2em 0;
		padding: 0;
	}

	blockquote {
		padding-left: 1em;
		font-style: italic;
		margin: 3rem 0;
		color: black;
		border-left: 5px solid #ccc;
	}

	.giscus {
		padding-top: 80px;
	}
`
