import { ChangeEvent, useState } from 'react'
import MazeControl from './MazeControl'

export default function MazeConfig() {
  const [width, setWidth] = useState('30')
  const [height, setHeight] = useState('20')
  // allows consistent reload with the setState functions
  const [seed, setSeed] = useState(0)

  function handleWidth(e: ChangeEvent<HTMLInputElement>) {
    setWidth(e.target.value)
  }

  function handleHeight(e: ChangeEvent<HTMLInputElement>) {
    setHeight(e.target.value)
  }

  function handleRedraw() {
    function changeSeed(seed: number) {
      const newSeed = seed + 1
      return newSeed
    }
    setSeed(changeSeed)
  }
  // convert HTMLInputElements (strings) to numbers
  const widthNumber = Number(width)
  const heightNumber = Number(height)
  const showControl = widthNumber > 0 && heightNumber > 0
  const controlView = showControl && (
    <MazeControl
      width={widthNumber}
      height={heightNumber}
    />
  )

  return (
    <div className='maze-container'>
      <form>
        <div className='size-inputs'>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            placeholder='2-100'
            id="width"
            value={width}
            onChange={handleWidth}
          />
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            placeholder="2-100"
            id="height"
            value={height}
            onChange={handleHeight}
          />
        </div>
      </form>
      {/* make sure zeros don't break the maze render and call <MazeControl /> */}
      {controlView}
      <div className="button-container">
        <input className="button button-outline" type="button" value="Redraw" onClick={handleRedraw} />
      </div>
    </div>
  )

}