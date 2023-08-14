import { initialize } from '../service/maze'

interface MazeControlProps {
  width: number
  height: number
}

export default function MazeControl(props: MazeControlProps) {

  const gridNumbers = initialize(props.width, props.height)
  
  // clear = 0
  // cell closed = 1
  // cell open = 2

  const gridElements = gridNumbers.map((gridNumber, index) => {
    switch (gridNumber) {
      case 0: {
        return <div className='clear' key={index} />
      }
      case 1: {
        return <div className='cell closed' key={index} />
      }
      case 2: {
        return <div className='cell open' key={index} />
      }
      default: {
        throw new Error(`Invalid grid number: ${gridNumber}`)
      }
    }
  })

  return (
    <div className='maze' id='printable-div'>
      <div>
        {gridElements}
      </div>
    </div>
  );
}