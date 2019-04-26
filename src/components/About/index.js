import React from "react";
import style from "./Style.module.css"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const About =({ props })=> (
    
    <StaticQuery
    query={graphql`
    fragment AboutSiteImages on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    query{
    imageFirst: file(relativePath: { eq: "about.png" }) {
      ...AboutSiteImages
    }
  

      }
    `}
      render ={data => (
          <div className={style.container}>
              <div>
             
              </div>
              <div className={style.wrapper}>
              <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.about}
          />
          <div className={style.aboutwrap}>
          <div className={style.titlewrap}><p className={style.title}>About </p><p className={style.dsc}> DSC</p></div> 
              <div className={style.underline}></div>
              <p className={style.content}>The Developer Student Clubs (DSC) program is a grassroots channel through which we provide development 
              skills for students, towards employability. In addition to workshops, we also provide an opportunity for students to apply their newly 
              gained skills to develop solutions for local organizations, and then provide visibility via showcases.
          </p>
          <div className={style.buttonspace}><button className={style.aboutbutton}>Learn More</button></div>
          </div>
             

              </div>
              

          </div>
      )}


/>
);

export default About;
