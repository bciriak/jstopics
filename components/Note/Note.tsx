import styles from './NoteStyle.module.scss'

export const Note = ({ text }: { text: string }) => {
  return (
    <div className={styles.noteStyle}>
      <span>Note:</span>
      <p>{text}</p>
    </div>
  )
}
