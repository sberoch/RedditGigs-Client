import {
  Box, 
  Heading, 
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Fade,
} from "@chakra-ui/react";

export default function Gig({ gig }) {
  const { title, desc, url, time, sub_img, sub_name } = gig
  
  return (
    <AccordionItem m="2">
      <Fade in>
        <AccordionButton>
          <Avatar size="md" name={sub_name} src={sub_img} />
          <Box ml="5" flex="1" textAlign="left">
            <Heading as="h4" size="sm" as="a" href={url}>
              {title}{' '}
            </Heading>
            <Text fontSize="sm">r/{sub_name} - {timeSince(new Date(time).getTime())}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} pt={3}>
          <Text>{desc}</Text>
        </AccordionPanel>
      </Fade>
    </AccordionItem>
  )
}

function timeSince(timeStamp) {
  var now = new Date().getTime() / 1000;
  const secondsPast = (now - timeStamp);
  if (secondsPast < 60) {
    return parseInt(secondsPast) + 's ago';
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + 'm ago';
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + 'h ago';
  }
  else {
    return 'over 1d ago'
  }
}