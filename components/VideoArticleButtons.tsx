import React from 'react'

type Props = {
  setIsVideoVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VideoArticleButtons({ setIsVideoVisible }: Props) {
  return (
    <div className="flex justify-center bg-amber-100">
      <button onClick={() => setIsVideoVisible(true)}>Give me video</button>
      <button onClick={() => setIsVideoVisible(false)}>Give me article</button>
    </div>
  )
}
