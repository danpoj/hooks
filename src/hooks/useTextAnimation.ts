import { useEffect, useRef, useState } from 'react'

export const useTextAnimation = (
  initialText: string,
  interval: number,
  intervalPerLetter: number
) => {
  const [text, setText] = useState(initialText)
  const originalText = useRef(initialText)
  const letters = useRef('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const count = useRef(0)

  useEffect(() => {
    const intervalInstance = setInterval(() => {
      setText((prevText) =>
        [...prevText]
          .map((value, index) => {
            if (!value.match(/[a-z]/i)) {
              return value
            }

            if (index + 1 < count.current) {
              return originalText.current[index]
            }

            return letters.current[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      count.current += 1 / intervalPerLetter

      if (count.current > initialText.length) clearInterval(intervalInstance)
    }, interval)

    return () => {
      clearInterval(intervalInstance)
    }
  }, [])

  return text
}
