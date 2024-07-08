'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import JoinUs from '../Banner/JoinUs';

export default function CallToActionWithVideo() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const videoUrl = 'https://youtu.be/e6bEpjUR7Eg?si=06tQlJMTTUQhmroo';

  return (
    <Container maxW={'7xl'}  id="nous">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#0D4CAC',
                zIndex: -1,
              }}>
             C&apos;est quoi 
            </Text>
            <br />
            <Text as={'span'} color={'#418D3E'}>
             A&apos;Numérique ?
            </Text>
          </Heading>
          <Text color={'gray.500'}>
                    A&apos;Numerique est une association à but non lucratif qui accompagne individuellement, à domicile, les personnes confrontées à la fracture numérique. 
          En tant qu&apos;association dédiée à l&apos;inclusion numérique et sociale, nous sommes également engagés dans la prévention et la lutte contre l&apos;analphabétisme et l&apos;illettrisme, deux problématiques majeures qui contribuent à l&apos;illectronisme et à l&apos;exclusion sociale.
          Notre vision est de construire une société numériquement et socialement inclusive où règne la fraternité et la solidarité. 
          Nous offrons grace à notre reseau de mentor,  des accompagnements à domicile à raison de 2h par semaine. 
          Nous proposons aussi des formations collectives.
          </Text>
          
          <Stack spacing={{ base: 6, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  background={'#0D4CAC'}
                  color={'#FFF'}
                  // paddingTop={1.25}
                  // paddingBottom={ 1.25}
                  // paddingLeft={2}
                  // paddingRight={2}
                  // marginRight={2}
                  leftIcon={<PlayIcon h={4} w={4} color={'#FFF'} />}>
                  Comment ca marche ?
                </Button>
                
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'100%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            {/* <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
              onClick={onOpen}
            /> */}
            <iframe width="660" height="315" src="https://www.youtube.com/embed/e6bEpjUR7Eg?si=06tQlJMTTUQhmroo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Box>
        </Flex>
      </Stack>
      
      {/* Modal pour la vidéo 
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <iframe width="460" height="290" src="https://www.youtube.com/embed/e6bEpjUR7Eg?si=06tQlJMTTUQhmroo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>*/}
       
      

      
      <VStack paddingTop="10px" marginBottom="20px" spacing="2" alignItems="flex-start" id="mentor">
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              color={'#0D4CAC'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                // bg: '#0D4CAC',
                zIndex: -1,
              }}>
             Notre programme de  Mentorat/Bénévolat
            </Text>
            <br />
            <Text as={'span'} color={'#418D3E'}>
             C&apos;est quoi ?
            </Text>
          </Heading>

          <Text as="p" fontSize="lg">
          Notre programme d'aide à A&apos;numérique est conçu pour créer des liens enrichissants entre desbénévoles desireux d'aider  , suivis par des  mentors expérimentés et des adhérents désireux de progresser tant sur le plan personnel que professionnel. Nous sommes convaincus que le mentorat est un outil puissant, capable de catalyser le succès en offrant une voie privilégiée pour l&apos;acquisition de connaissances, l&apos;obtention de conseils pratiques et la réception d&apos;une guidance personnalisée.

          À travers ce programme, nous mettons à votre disposition des bénévoles motivés pour vous suivre dans l&apos;evolution de votre apprentissage. Ils sont prêts à partager leur riche expérience et leur savoir-faire, dans le but d&apos;aider les adhérents à surmonter les défis spécifiques auxquels ils sont confrontés et à atteindre leurs objectifs. L'aide proposé chez A&apos;numérique est donc une opportunité unique de bénéficier d&apos;un accompagnement sur mesure, qui facilite le partage d&apos;expériences et encourage la croissance personnelle et professionnelle..
        </Text>
      </VStack>

      <Accordion defaultIndex={[0]} allowMultiple  marginTop={10}  marginBottom={20}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='2' textAlign='left'>
                <Heading as="h3">Comment Profiter du Suivis et des Cours</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <p>Pour tirer parti de notre programme  et faire un pas vers votre inclusion numérique, suivez ces étapes simples :</p>
            <p>- Cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot; disponibles sur la page.</p>
            <p>- Sélectionnez l&apos;objet correspondant à votre demande et envoyez-nous un message.</p>
            <p>Nous nous engageons à répondre dans un délai de moins de 24 heures. Nous vous attendons avec impatience !</p>
          </AccordionPanel>

          </AccordionItem>

          

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading as="h3">Comment Devenir un Bénévole ?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <p>Si vous souhaitez devenir Bénévole et aider des personnes  :</p>
            <p>- Accédez à notre page et cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot;.</p>
            <p>- Choisissez l&apos;objet qui correspond à votre intention de devenir bénévole et envoyez un message, en précisant vos disponibilités pour un entretien.</p>
            <p>- Un entretien sera programmé selon vos disponibilités, pouvant se dérouler en présentiel ou en ligne.</p>
          </AccordionPanel>

          </AccordionItem>
          

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading as="h3">Comment Devenir un mentor ?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <p>Si vous souhaitez devenir mentor et partager votre expertise :</p>
            <p>- Accédez à notre page et cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot;.</p>
            <p>- Choisissez l&apos;objet qui correspond à votre intention de devenir mentor et envoyez un message, en précisant vos disponibilités pour un entretien.</p>
            <p>- Un entretien sera programmé selon vos disponibilités, pouvant se dérouler en présentiel ou en ligne.</p>
          </AccordionPanel>

          </AccordionItem>
        </Accordion>

        
    </Container>
  )
}


const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}