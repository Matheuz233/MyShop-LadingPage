import { LadingPage } from "@/templates/lading-page/lading-page"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>My Shop</title>
        <meta
          name="description"
          content="An online store for a variety of products. Fast, secure and easy shopping experience. Access our app and start shopping today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <LadingPage />
    </>
  )
}
