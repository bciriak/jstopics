import { TodoItem } from './TodoStyle'

export const Todo = ({ text }: { text: string }) => {
  return (
    <TodoItem>
      <b>TODO:</b> {text}
    </TodoItem>
  )
}
