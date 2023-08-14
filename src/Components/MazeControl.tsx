import MazeManager from './MazeManager'

interface MazeControlProps {
  width: number
  height: number
}

export default function MazeControl(props: MazeControlProps) {

  MazeManager.initialize(props.width, props.height)

  const elements = [];

  // Top border.
  for (let i = 0; i <= MazeManager.grid[0].length * 2; i++) {
    elements.push(<div className='cell closed'></div>);
  }

  elements.push(<div className='clear'></div>);

  // Main grid
  for (let y = 0; y < MazeManager.grid.length; y++) {
    const passageRow = [];

    // Left border column
    elements.push(<div className='cell closed'></div>);
    passageRow.push(<div className='cell closed'></div>);

    // Rooms
    for (let x = 0; x < MazeManager.grid[0].length; x++) {
      // Add a cell to room
      elements.push(<div className='cell open'></div>);

      if ((MazeManager.grid[y][x] & MazeManager.DIRECTION.BOTTOM) === MazeManager.DIRECTION.BOTTOM) {
        // Open passage to the south
        passageRow.push(<div className='cell open'></div>);
      }
      else {
        // Close passage to the south
        passageRow.push(<div className='cell closed'></div>);
      }

      // Add closed passage to next row between rooms.
      passageRow.push(<div className='cell closed'></div>);

      if ((MazeManager.grid[y][x] & MazeManager.DIRECTION.RIGHT) === MazeManager.DIRECTION.RIGHT) {
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