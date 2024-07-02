import Image from 'next/image'
import classes from './page.module.scss'
import { Card, Grid, GridCol, Group, Text, Title } from '@mantine/core'

export default function Home() {
  return (
    <main className={classes.main}>
      <Card className={classes.description} withBorder radius="lg" shadow="sm">
        <Text size="sm">
          Get started by editing&nbsp;
          <code className={classes.code}>src/app/page.tsx</code>
        </Text>
      </Card>

      <Group className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Title size="h1">/</Title>
        <Image
          className={classes.logo}
          src="/mantine.svg"
          alt="Mantine Logo"
          width={180}
          height={37}
          priority
        />
      </Group>

      <Grid>
        <GridCol span={{ xs: 12, md: 3 }}>
          <Card
            withBorder
            shadow="sm"
            radius="md"
            component="a"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <Title size="h2">
              Next.js Docs <span>-&gt;</span>
            </Title>
            <Text>
              Find in-depth information about Next.js features and API.
            </Text>
          </Card>
        </GridCol>

        <GridCol span={{ xs: 12, md: 3 }}>
          <Card
            withBorder
            shadow="sm"
            radius="md"
            component="a"
            href="https://mantine.dev/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <Title size="h2">
              Mantine Docs <span>-&gt;</span>
            </Title>
            <Text>
              Read more about Mantine and all the components it offers.
            </Text>
          </Card>
        </GridCol>

        <GridCol span={{ xs: 12, md: 3 }}>
          <Card
            withBorder
            shadow="sm"
            radius="md"
            component="a"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <Title size="h2">
              Templates <span>-&gt;</span>
            </Title>
            <Text>Explore starter templates for Next.js.</Text>
          </Card>
        </GridCol>
        <GridCol span={{ xs: 12, md: 3 }}>
          <Card
            withBorder
            shadow="sm"
            radius="md"
            component="a"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <Title size="h2">
              Deploy <span>-&gt;</span>
            </Title>
            <Text>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </Text>
          </Card>
        </GridCol>
      </Grid>
    </main>
  )
}
