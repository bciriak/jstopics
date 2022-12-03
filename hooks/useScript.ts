import { useEffect, RefObject } from 'react'

export const useScript = (url: string, ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true
    script.setAttribute('data-repo', 'bciriak/jstopics')
    script.setAttribute('data-repo-id', 'R_kgDOHV9ZQA')
    script.setAttribute('data-category', 'Announcements')
    script.setAttribute('data-category-id', 'DIC_kwDOHV9ZQM4CPITS')
    script.setAttribute('data-mapping', 'url')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', 'light')
    script.setAttribute('data-lang', 'en')
    script.crossOrigin = 'anonymous'

    // data-repo="bciriak/jstopics"
    // data-repo-id=""
    // data-category="Announcements"
    // data-category-id="DIC_kwDOHV9ZQM4CPITS"
    // data-mapping="url"
    // data-reactions-enabled="1"
    // data-emit-metadata="0"
    // data-input-position="bottom"
    // data-theme="light"
    // data-lang="en"
    // crossOrigin="anonymous"
    // async

    if (ref.current) {
      ref.current.appendChild(script)
    }

    return () => {
      if (ref.current) {
        ref.current.removeChild(script)
      }
    }
  }, [url, ref])
}
