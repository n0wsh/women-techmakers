import { Box, Container, Stack, Typography } from "@mui/material"
import {
  Album,
  Button,
  CardItem,
  Corprate,
  TabItem,
  Title,
} from "../components"
import React from "react"
import hackethon from "../assets/image/hacketoon.png"
import speaker1 from "../assets/image/speakers1.png"
import speaker2 from "../assets/image/speakers2.png"
import speaker3 from "../assets/image/speakers3.png"
import speaker4 from "../assets/image/speakers4.png"

export const IWD2023 = () => {
  const panelComponent = [
    <Box></Box>,
    <Stack flexDirection="row" gap={2} justifyContent="center" sx={{}}>
      <img src={speaker1} alt="1" />
      <img src={speaker2} alt="2" />
      <img src={speaker3} alt="3" />
      <img src={speaker4} alt="4" />
    </Stack>,
    <Box></Box>,
    <Box></Box>,
  ]
  return (
    <Container>
      <Stack alignItems="center" gap={7}>
        <br />
        <br />
        <br />
        <br />
        <Stack
          sx={{ backgroundColor: "#F4F7FB" }}
          width="100%"
          pb={10}
          pt={10}
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "row",
          }}
        >
          <Stack gap={5}>
            <Typography>
              IWD буюу Олон улсын эмэгтэйчүүдийн эрхийг <br />
              хамгаалах өдрийн хүрээнд жил бүр, дэлхий <br />
              дахинаа уламжлал болгон явуулдаг Women <br />
              Techmakers хөтөлбөрийн томоохон үйл
              <br /> ажиллагаа энэ жил монголд "Women's Online
              <br />
              Safety" сэдэвт хакатон байдлаар амжилттай болж <br />
              өнгөрлөө.
            </Typography>
            <Button
              sx={{
                width: "170px",
                backgroundColor: "#518FF5",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
          <img alt="hackothen" src={hackethon} />
        </Stack>

        <Stack
          width="100%"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
          gap={5}
        >
          <Typography fontSize={{ xs: "20px", sm: "25px" }}>
            Хаана, Хэзээ
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            mt={5}
            alignItems="center"
            flexWrap="wrap"
            gap={4}
          >
            <Stack direction="row" alignItems="center" flexWrap="wrap">
              <img
              alt=""
                src="https://s3-alpha-sig.figma.com/img/3a7d/3a7d/a00b013573376e1245f208a45d95f63a?Expires=1690761600&Signature=qz~BpmuiPgdkvwM4cJK-KTEATKX6Sh-CAi0FFoxuFvOVpCTNEsrIVsyBbHCpkvNKqUEYG5KtPaMIwuYm0ckwVlOlrwZZdeYKHbGot7EJsFwjCXGGevwEsvsmLmvgDd1QUJfzwTHqIYLnOcNUMsc2RoknxwkB6xHgRaoQkofXI5DyFJ8P4D1uTizraWB7GnFh2yQaFDWCXg5p1wDxaV41DkMkdxgAxjX1LsTeOgz1U177FFroJDLedNAhgVn7iHIX3k~SQFvec7YWTRqSE6Xb8tnUC4jP1FUkQ8l3OacRSfAbKordfefo7SONE3zBJA3zVwv7qlpsTysOITVUKomNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="60px"
                height="60px"
              />
              <Typography fontSize={{ xs: "15px", sm: "25px" }}>
                Hub Innovation Center
              </Typography>
            </Stack>
            <Stack
              direction="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <img
              alt=""
                src="https://s3-alpha-sig.figma.com/img/88d0/c7e9/1cf605c82e878025bb81091a95886ed1?Expires=1690761600&Signature=Kni8j4sv1xy~BeBpc4gkfsMd5z2E01aIVw9Ng519wgvaO4IarJTqqT9B2lCQkgkCTplH~8zNP5~cj-XUlErujj3i5Zj8tB1DFozD-55yyl5QwAcZcBZaCg~1t9B64t2qoRKSxW2-1WJfvVJxwduwRQz72pZIrP1Kq8QYQR53WD76i7atAftA-F1UJ7TMq8WWTG0hYwI~tPkkdBqkfDJjlHcG3QC7C0~2IdNf0v~HcEff1gWaZSO6EPQXIrvjdBYCahcyRFCoNhjCs5IG9r2wUwXyku3lf3G7d~rXzq1kkVbKSHlL8Y5x831YfvG2qyggTcNBRuDe5fYlW3-cDD2BZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="100px"
                height="50px"
              />

              <Typography fontSize={{ xs: "15px", sm: "25px" }}>
                3 сарын (8) - 3 сарын (12)
              </Typography>
            </Stack>
            <Stack direction="row">
              <img
              alt=""
                src="https://s3-alpha-sig.figma.com/img/48dd/4593/1ade2c39609251c0499dabd120b3194d?Expires=1690761600&Signature=QNvDR7GdY-wH6brzNFKJizv4krfIorxRZ453Nl7K6sEFlH~COMPQbqi-WCR3RaWX6Qo8jn20fgViEPaiWIAOpMY8cB7YP6rZSXhvUjOdeMdcHafzvmsfpDlWOeRIC9nr3PND2-OcQ-HRAio58ExhAX26S1XkLFsmBTvYBkRxLsbZz2jEjMn9kbacQMoLkmRK7jz6eawAQgA5tl6avgTjHFQ02TPGxhwe38oT0MdfYV9Ha6eVsfWUp3q7XKko6BZ8wgpeocptNnv7T6zszu9Aa0ZAG6Fg4d4TWigzFebcxjEZ~stpvUTs8AbhHMRMVIMMAs0bQAR8GG3UY~Pku9afxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="60px"
                height="45px"
              />

              <Typography fontSize={{ xs: "15px", sm: "25px" }}>
                99892055
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{ pb: 10, backgroundColor: "#F4F7FB", pt: 10 }}
          width="100%"
          alignItems="center"
        >
          <Container>
            <Stack alignItems="center" gap={10}>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={5}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    width: "488px",
                    height: "468px",
                  }}
                />
                <Typography fontSize="20px">
                  Бүх оролцогч, хамтрагч байгууллагууд, шүүгч,
                  <br /> менторууддаа дэлхий дахин дахь эмэгтэйчүүдийн цахим{" "}
                  <br />
                  орчин дахь аюулгүй байдлыг хамгаалахын тулд нэг алхам
                  <br /> хийж, өөрсдийн хувь нэмрээ оруулсанд талархал
                  <br /> илэрхийлье.
                </Typography>
              </Stack>
              <Typography fontSize="20px">
                Технологийг дэмжигч, бүтээгч та бүхний цаашдын ажил үйлсэд өндөр
                амжилт хүсье. <br />
                Хүндэтгэсэн, Google-ийн Women Techmakers хөтөлбөрийн Монгол дахь
                баг хамт олон.
              </Typography>
            </Stack>
          </Container>
        </Stack>
        <TabItem panel={panelComponent} />
        <Stack
          sx={{ backgroundColor: "#F4F7FB", pb: 8 }}
          width="100%"
          alignItems="center"
        >
          <Container>
            <Title title="Холбоотой зургууд" />
            <Album />
          </Container>
        </Stack>
        <Corprate />
        <Stack sx={{ mb: 10 }} width="100%">
          <Title title="Сүүлд болсон арга хэмжээ" />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <CardItem />
            <CardItem />
            <CardItem />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}