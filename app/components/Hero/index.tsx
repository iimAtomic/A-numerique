"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function CallToActionWithVideo() {
  const videoUrl =
    "https://www.youtube.com/embed/e6bEpjUR7Eg?si=06tQlJMTTUQhmroo";

  // Ajout de variables responsives
  const headingSize = useBreakpointValue({
    base: "2xl",
    md: "3xl",
    lg: "4xl",
    xl: "6xl",
  });
  const textSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const stackSpacing = useBreakpointValue({ base: 4, md: 8, lg: 10 });

  return (
    <Container maxW={"7xl"} id="nous">
      <Stack
        align={"center"}
        spacing={stackSpacing}
        py={{ base: 10, md: 20, lg: 28 }}
        direction={{ base: "column", lg: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={headingSize}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#0D4CAC",
                zIndex: -1,
              }}
            >
              C&apos;est quoi
            </Text>
            <br />
            <Text as={"span"} color={"#418D3E"}>
              A&apos;Numérique ?
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={textSize}>
            A&apos;Numerique est une association à but non lucratif qui
            accompagne individuellement, à domicile, les personnes confrontées à
            la fracture numérique. En tant qu&apos;association dédiée à
            l&apos;inclusion numérique et sociale, nous sommes également engagés
            dans la prévention et la lutte contre l&apos;analphabétisme et
            l&apos;illettrisme, deux problématiques majeures qui contribuent à
            l&apos;illectronisme et à l&apos;exclusion sociale. Notre vision est
            de construire une société numériquement et socialement inclusive où
            règnent la fraternité et la solidarité. Nous offrons grâce à notre
            réseau de mentors des accompagnements à domicile à raison de 2h par
            semaine. Nous proposons aussi des formations collectives.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          mt={{ base: 10, lg: 0 }}
        >
          <Box
            position={"relative"}
            height={{ base: "200px", md: "300px" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Box>
        </Flex>
      </Stack>

      <VStack
        paddingTop={{ base: 8, md: 10 }}
        marginBottom={{ base: 10, md: 20 }}
        spacing="4"
        alignItems="flex-start"
        id="mentor"
      >
        <Heading lineHeight={1.1} fontWeight={600} fontSize={headingSize}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "#0D4CAC",
              zIndex: -1,
            }}
          >
            C&apos;est quoi
          </Text>
          <br />
          <Text as={"span"} color={"#418D3E"}>
            Notre programme de Mentorat/Bénévolat ?
          </Text>
        </Heading>

        <Text as="p" fontSize={textSize}>
          Notre programme d&apos;aide à A&apos;Numerique est conçu pour créer
          des liens enrichissants entre des bénévoles désireux d&apos;aider,
          suivis par des mentors expérimentés, et des adhérents désireux de
          progresser tant sur le plan personnel que professionnel. Nous sommes
          convaincus que le mentorat est un outil puissant, capable de catalyser
          le succès en offrant une voie privilégiée pour l&apos;acquisition de
          connaissances, l&apos;obtention de conseils pratiques et la réception
          d&apos;une guidance personnalisée. À travers ce programme, nous
          mettons à votre disposition des bénévoles motivés pour vous suivre
          dans l&apos;évolution de votre apprentissage. Ils sont prêts à
          partager leur riche expérience et leur savoir-faire, dans le but
          d&apos;aider les adhérents à surmonter les défis spécifiques auxquels
          ils sont confrontés et à atteindre leurs objectifs. L&apos;aide
          proposée chez A&apos;Numerique est donc une opportunité unique de
          bénéficier d&apos;un accompagnement sur mesure, qui facilite le
          partage d&apos;expériences et encourage la croissance personnelle et
          professionnelle.
        </Text>
      </VStack>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        marginTop={10}
        marginBottom={20}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="2" textAlign="left">
                <Heading as="h3">
                  Comment Profiter du Suivis et des Cours ?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              Pour tirer parti de notre programme et faire un pas vers votre
              inclusion numérique, suivez ces étapes simples :
            </p>
            <p>
              - Cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot;
              disponibles sur la page.
            </p>
            <p>
              - Sélectionnez l&apos;objet correspondant à votre demande et
              envoyez-nous un message.
            </p>
            <p>
              Nous nous engageons à répondre dans un délai de moins de 24
              heures. Nous vous attendons avec impatience !
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3">Comment Devenir un Bénévole ?</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>Si vous souhaitez devenir bénévole et aider des personnes :</p>
            <p>
              - Accédez à notre page et cliquez sur l&apos;un des boutons
              &quot;Rejoignez-nous&quot;.
            </p>
            <p>
              - Choisissez l&apos;objet qui correspond à votre intention de
              devenir bénévole et envoyez un message, en précisant vos
              disponibilités pour un entretien.
            </p>
            <p>
              - Un entretien sera programmé selon vos disponibilités, pouvant se
              dérouler en présentiel ou en ligne.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3">Comment Devenir un mentor ?</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              Si vous souhaitez devenir mentor et partager votre expertise :
            </p>
            <p>
              - Accédez à notre page et cliquez sur l&apos;un des boutons
              &quot;Rejoignez-nous&quot;.
            </p>
            <p>
              - Choisissez l&apos;objet qui correspond à votre intention de
              devenir mentor et envoyez un message, en précisant vos
              disponibilités pour un entretien.
            </p>
            <p>
              - Un entretien sera programmé selon vos disponibilités, pouvant se
              dérouler en présentiel ou en ligne.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
