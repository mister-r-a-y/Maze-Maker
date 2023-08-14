import { initialize, DIRECTION } from '../service/maze'

interface MazeControlProps {
  width: number
  height: number
}

export default function MazeControl(props: MazeControlProps) {

  const grid = initialize(props.width, props.height)

  const elements = [];

  // Top border.
  for (let i = 0; i <= grid[0].length * 2; i++) {
    elements.push(<div className='cell closed'></div>);
  }

  elements.push(<div className='clear'></div>);

  // Main grid
  for (let y = 0; y < grid.length; y++) {
    const passageRow = [];

    // Left border column
    elements.push(<div className='cell closed'></div>);
    passageRow.push(<div className='cell closed'></div>);

    // Rooms
    for (let x = 0; x < grid[0].length; x++) {
      // Add a cell to room
      elements.push(<div className='cell open'></div>);

      if ((grid[y][x] & DIRECTION.BOTTOM) === DIRECTION.BOTTOM) {
        // Open passage to the south
        passageRow.push(<div className='cell open'></div>);
      }
      else {
        // Close passage to the south
        passageRow.push(<div className='cell closed'></div>);
      }

      // Add closed passage to next row between rooms.
      passageRow.push(<div className='cell closed'></div>);

      if ((grid[y][x] & DIRECTION.RIGHT) === DIRECTION.RIGHT) {
        // Open passage to the east.
        elements.push(<div className='cell open'></div>);
      }
      else {
        // Close passage to the east.
        elements.push(<div className='cell closed'></div>);
      }
    }

    elements.push(<div className='clear'></div>);
    passageRow.push(<div className='clear'></div>);

    // Append passages row to elements
    elements.push.apply(elements, passageRow);
  }

  return (
    <div className='maze' id='printable-div'>
      <div>
        {elements}
      </div>
    </div>
  );
}