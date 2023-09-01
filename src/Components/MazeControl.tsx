import { initialize } from '../service/maze'

interface MazeControlProps {
  width: number
  height: number
}

export default function MazeControl(props: MazeControlProps) {

  const gridNumbers = initialize(props.width, props.height)

  // dynamically size maze cells based on size of window
  const cellFactor = 40
  const cellWidth = cellFactor/props.width
  const cellHeight = cellFactor/props.height
  const cellSize = `min(${cellWidth}svw, ${cellHeight}svh)`
  const cellStyles = {width: cellSize, height: cellSize}

    // clear = 0
  // cell closed = 1
  // cell open = 2

  const gridElements = gridNumbers.map((gridNumber, index) => {

    switch (gridNumber) {
      case 0: {
        return <div className='clear' key={index} />
      }
      case 1: {
        return <div className='cell closed' key={index} style={cellStyles} />
      }
      case 2: {
        return <div className='cell open' key={index} style={cellStyles} />
      }
      default: {
        throw new Error(`Invalid grid number: ${gridNumber}`)
      }
    }
  })

  return (
    <div className='maze'>
      <div>
        {gridElements}
      </div>
    </div>
  );
}