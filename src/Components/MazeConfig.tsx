import { Component, ChangeEvent } from 'react'
import MazeControl from './MazeControl'

interface MazeConfigState {
  type: string,
  width: number,
  height: number
}

export default class MazeConfig extends Component<{},MazeConfigState> {
  constructor(props: {}) {
    super(props)
    
    this.state = {
      type: 'grid',
      width:  30,
      height: 20
    }
    
    this.onWidth = this.onWidth.bind(this)
    this.onHeight = this.onHeight.bind(this)
    this.onRedraw = this.onRedraw.bind(this)
  }
  
  onWidth(e: ChangeEvent<HTMLInputElement>) {
    const number = Number(e.target.value)
    this.setState({ width: number })
  
  }
  
  onHeight(e: ChangeEvent<HTMLInputElement>) {
    const number = Number(e.target.value)
    this.setState({ height: number })
  }

  onRedraw() {
    this.setState({ width: this.state.width, height: this.state.height })
  }
  
  render() {
    const showControl = this.state.height > 0 && this.state.width > 0
    const controlView = showControl && <MazeControl width={ this.state.width } height={ this.state.height } type={ this.state.type } />

    return (
      <div className='maze-controller'>
        <form>
          <div className='size-inputs'>
            <label htmlFor="height">Height:</label>
            <input type="text" placeholder="2-100" id="height" value={ this.state.height } onChange={ this.onHeight } />
            <label htmlFor="width">Width:</label>
            <input type="text" placeholder='2-100' id="width" value={ this.state.width } onChange={ this.onWidth } />
          </div>
        </form>
        {controlView}
        <div className="button-container">
          <input className="button button-outline" type="button" value="Redraw" onClick={ this.onRedraw } />
        </div>
      </div>
    )
  }
}