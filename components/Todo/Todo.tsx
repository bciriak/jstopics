import styles from './TodoStyle.module.scss'

export const Todo = ({ text }: { text: string }) => {
  return (
    <div className={styles.todoItem}>
      <b>TODO:</b> {text}
    </div>
  )
}
