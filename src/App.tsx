import { useState, useEffect } from 'react'
import './App.css'
import { playPirateSound, initializeBackgroundMusic, stopBackgroundMusic } from './audio'

function App() {
  const letters = 'ABCDEFGHIJKL'
  const [coordinates, setCoordinates] = useState<{ letter: string; number: number } | null>(null)

  useEffect(() => {
    initializeBackgroundMusic()
    
    return () => {
      stopBackgroundMusic()
    }
  }, [])

  const generateCoordinates = () => {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)]
    const randomNumber = Math.floor(Math.random() * 18) + 1
    setCoordinates({ letter: randomLetter, number: randomNumber })
    // playPirateSound()
  }

  return (
    <>
      <div className="card">
        <h1>Plunder</h1>
        <button onClick={generateCoordinates}>
          Generate Coordinates
        </button>
        {coordinates && (
          <p className="coordinates">
            {coordinates.letter}{coordinates.number}
          </p>
        )}
      </div>
    </>
  )
}

export default App
