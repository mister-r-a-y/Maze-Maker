import { ChangeEvent, useState } from 'react'
import MazeControl from './MazeControl'

import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
}
  from '@chakra-ui/react'

import '../styles/Button.css'

export default function MazeConfig() {
  const [width, setWidth] = useState('30')
  const [height, setHeight] = useState('10')
  // allows consistent reload with the setState functions
  const [seed, setSeed] = useState(0)
  console.log('seed error patch', seed)


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
    <div className='container'>
      <div className='header'>
        <div className='header-effect'>
          <div className='header-effect-text'>Create a Maze</div>
        </div>
      </div>

      <Box>
        <Container
          as={Stack}
          maxW={'6x1'}
          py={4}
          direction={{ base: 'column', sm: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <InputGroup>
              <InputLeftAddon children='Width:' />
              <Input
                value={width}
                onChange={handleWidth}
                placeholder='Enter value between 2-80'
                focusBorderColor='none'
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children='Height:' />
              <Input
                value={height}
                onChange={handleHeight}
                placeholder='Enter value between 2-80'
                focusBorderColor='none'
              />
            </InputGroup>
          </Stack>
        </Container>
      </Box>
      {controlView}
      <div className="button-container">
        <input
          className="button button-outline"
          type="button"
          value="Redraw"
          onClick={handleRedraw} />
      </div>
    </div>
  )

}