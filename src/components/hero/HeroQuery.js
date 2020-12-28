import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Hero, Algolia } from "../components"

const HeroQuery = ({ data }) => {
  const {
    allAirtable: { nodes: hero },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects projects={hero}  />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Hero" } }) {
      nodes {
        id
        data {
          date
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`