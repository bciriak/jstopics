export const Note = ({ text }: { text: string }) => {
  return (
    <div className="relative px-4 py-2 my-8 bg-gray-100 rounded-lg">
      <span className="bg-amber-200 py-1 px-2 absolute -top-3 text-sm rounded font-bold">
        Note:
      </span>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  )
}
