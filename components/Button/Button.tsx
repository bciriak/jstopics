import styles from './Button.module.scss'

type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  label: string
  buttonStyle?: 'primary' | 'inverse'
  disabled?: boolean
}

export default function Button({
  buttonStyle = 'primary',
  disabled,
  label,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} 
      ${buttonStyle === 'primary' ? `${styles.primary}` : ''} 
      ${buttonStyle === 'inverse' ? `${styles.inverse}` : ''}
      `}
    >
      {label}
    </button>
  )
}
