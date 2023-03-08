import { useTextAnimation } from '@danpoj/use-animation-text'

useTextAnimation
function App() {
  const text = useTextAnimation('hello, my name is danpoj!', 30, 1)

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default App
