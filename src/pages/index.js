import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>A Demo Using static image in Gatsby-plugin-image</h1>
    <h3>StaticImage plugin using photo from local filesystem</h3>
    <StaticImage
      src="../images/beautiful-dog.jpeg"
      placeholder="blurred"
      width={600}
      height={600}
      formats={["auto", "webp", "avif"]}
      alt="A Dog Image"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
    />
    <h3>StaticImage plugin using photo from image URL online</h3>
    <StaticImage
      src="https://res.cloudinary.com/olanetsoft/image/upload/v1554336410/samples/bike.jpg"
      placeholder="blurred"
      width={600}
      height={600}
      formats={["auto", "webp", "avif"]}
      alt="A Dog Image"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
      quality={90}
    />
  </Layout>
)

export default IndexPage
