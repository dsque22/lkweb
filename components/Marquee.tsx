interface Props {
  text: string
  className?: string
  style?: React.CSSProperties
  speed?: number
}

export function Marquee({ text, className = '', style, speed = 40 }: Props) {
  const repeated = `${text}     ${text}`
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="animate-marquee"
        style={{ animationDuration: `${speed}s`, ...style }}
      >
        <span>{repeated}</span>
      </div>
    </div>
  )
}
