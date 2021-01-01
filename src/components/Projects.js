import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import styled from "styled-components"
import Image from "gatsby-image"
import SearchButtons from "./SearchButtons"
const Projects = ({ projects: data, title, page, id }) => {
  const [projects, setProjects] = React.useState(data)

  const setBackToAll = () => {
    setProjects(data)
  }
  return (
    <Wrapper className="section">
      <Title title={title || "projects"} />
      {page && (
        <SearchButtons
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
      )}
      <div className="section-center">
        {projects.map(item => {
          const { id } = item
          const { name, type } = item.data
          const fluid = item.data.image.localFiles[0].childImageSharp.fluid
          return (
            <article key={id}>
              <div className="container">
                <Image fluid={fluid} className="img" />
                <div className="item-info">
                  <header>                 
                  <p>{name} -</p>
                  <h4>{type}</h4>
                  {/* <Link to={`/products/${id}`}></Link> */}
                  </header>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      {!page && (
        <Link to="/projects" className="btn">
          all projects
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 20rem;
      border-radius: var(--radius);
      transition: var(--transition);
      border: 2px solid darkgoldenrod;
    }
    .item-info header {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px dotted var(--clr-grey-5);
      background-color: white;
    }
    
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 1;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 0;
      }
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`
export default Projects
