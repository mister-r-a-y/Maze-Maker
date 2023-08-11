import { 
  Box, 
  Container, 
  Stack, 
  Text
} 
  from '@chakra-ui/react'

export default function SmallWithNavigation() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6x1'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" _hover={{color: 'green'}} href={'#'}>
            About
          </Box>
          <Box as="a" _hover={{color: 'green'}} href={'#'}>
            Contact
          </Box>
        </Stack>
        <Text>made by Michael Blackmon</Text>
      </Container>
    </Box>
  )
}
