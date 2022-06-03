import { NoteStyle } from './NoteStyle'

export const Note = ({ text }: { text: string }) => {
  return (
    <NoteStyle>
      <span>Note:</span>
      <p>{text}</p>
    </NoteStyle>
  )
}
