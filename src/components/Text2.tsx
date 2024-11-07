import { useState } from "react"
import TextScramble from "@twistezo/react-text-scramble"
import "./Example.css"

const scrambleTexts = [
  "Departmental Magazine",
 
]

const Example2 = () => {
  const [pause, ] = useState(false)

  return (
    <>
      <div className="Example">
        <span className="Example__blinker"></span>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={10}
          nextLetterSpeed={100}
          pauseTime={5500}
          paused={pause}
        />
      </div>

      
    </>
  )
}

export default Example2

