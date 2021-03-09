import React from 'react'
import { Box, Text, Button, Flex, Image, Spacer } from '@chakra-ui/react'
import { Link } from 'gatsby'

const Hero = () => (
  <div>
    <Box bg="#DEE1F7" p="20">
      <Flex direction="row">
      <Box ml={100}>
        <Box>
          <Text fontSize="lg" textAlign="left">girl genius x command tech</Text>
          <Text fontSize="6xl" fontWeight="extrabold">InnovatHer</Text>
          <Text fontSize="2xl" fontWeight="extrabold">community highlights</Text>
        </Box><br />
          <Box>
            <Link to="/guidelines"><Button mr={5} color="white" bg="#72A1FF" borderRadius="20px" _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 5px 0px gray", }}>Get Started</Button></Link>
            {/* <Button color="#5991FF" borderColor="#72A1FF" bg="white" borderWidth="2px" borderRadius="20px" _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 5px 0px gray", }}>Get Started</Button> */}
          </Box>
      </Box>
      <Spacer />
        <Box overflow="hidden" h={200} mr={40}>
          <Image src="https://cloud-5ydsuceme-hack-club-bot.vercel.app/1women_in_stem_history_transparent.png" alt="Women in Stem History" w={200} mt="-100px" justifyContent="flex-end" />
        </Box>
        </Flex>
    </Box>
  </div>
)

export default Hero