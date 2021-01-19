import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import blogpostStyles from "./blogpost.module.scss"
import PageLayout from "../components/page/PageLayout"
import Head from "../components/head/Head"


export const query = graphql`
query($slug:String!) {
  contentfulArticle(slug: {eq: $slug}) {
    title
    createdAt(formatString: "Do MMMM YYYY")
    image {
      fluid {
        src
        base64
        sizes
      }
    }
    author {
      id
      name
      twitter
      title
      avator {
        fluid {
          src
          base64
          sizes
        }
      }
    }
    category {
      title
      id
    }
  }
}
`

const BlogPost = ({ data }) => {


  return (
    <PageLayout>
      <Head title={data.contentfulArticle.title} />
      <div className={blogpostStyles.container}>

        <br />

        <Img fluid={data.contentfulArticle.image.fluid} alt={data.contentfulArticle.title}
          className={blogpostStyles.image}
        />
        <h1 className={blogpostStyles.title}>{data.contentfulArticle.title}</h1>
        <p className={blogpostStyles.createdAt}>{data.contentfulArticle.createdAt}</p>





        {/* {data.contentfulArticle.category.map(
            item => (
              <div key={item.id} className={blogpostStyles.category}>
                <span className={blogpostStyles.category__title}>
                  {item.title}
                </span>
              </div>
            )
          )} */}

        <div className={blogpostStyles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Blandit aliquam etiam erat velit scelerisque. Sem fringilla ut morbi tincidunt augue interdum velit. Tempus imperdiet nulla malesuada pellentesque. Nisl nisi scelerisque eu ultrices vitae. Sit amet luctus venenatis lectus. Gravida quis blandit turpis cursus in hac habitasse. Magna eget est lorem ipsum dolor sit amet consectetur. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Neque ornare aenean euismod elementum nisi quis. Dui accumsan sit amet nulla facilisi. Et malesuada fames ac turpis egestas maecenas pharetra convallis.
              </p>
          <p>

            Consectetur libero id faucibus nisl tincidunt eget. Nunc mattis enim ut tellus elementum. Aliquam eleifend mi in nulla posuere sollicitudin. Sodales ut eu sem integer vitae justo. Sit amet risus nullam eget felis eget nunc lobortis mattis. Amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim. Mauris a diam maecenas sed enim ut sem viverra aliquet. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Consequat interdum varius sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Egestas diam in arcu cursus euismod. Diam quam nulla porttitor massa. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Quis ipsum suspendisse ultrices gravida dictum. Imperdiet proin fermentum leo vel orci. Nullam vehicula ipsum a arcu.
              </p>
          <p>

            Aliquam sem et tortor consequat id. Id aliquet lectus proin nibh. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Porttitor lacus luctus accumsan tortor posuere ac. Sagittis eu volutpat odio facilisis mauris sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Eget egestas purus viverra accumsan in nisl nisi. Viverra justo nec ultrices dui sapien eget. Odio euismod lacinia at quis risus sed vulputate odio ut. Mauris vitae ultricies leo integer malesuada nunc vel risus. Proin fermentum leo vel orci porta non pulvinar neque. Gravida rutrum quisque non tellus orci. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Sodales ut etiam sit amet. At varius vel pharetra vel turpis nunc eget lorem. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eros donec ac odio tempor orci dapibus ultrices in. Mauris cursus mattis molestie a iaculis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
              </p>
          <p>

            Accumsan tortor posuere ac ut consequat semper viverra nam libero. Mi ipsum faucibus vitae aliquet nec ullamcorper. Proin sed libero enim sed faucibus turpis. Bibendum at varius vel pharetra. Morbi tincidunt ornare massa eget egestas purus viverra. Eros in cursus turpis massa tincidunt dui. Sit amet tellus cras adipiscing enim. Dolor sit amet consectetur adipiscing elit. Urna condimentum mattis pellentesque id nibh tortor id. Sit amet mattis vulputate enim nulla aliquet porttitor. Dui vivamus arcu felis bibendum ut tristique et. Mi quis hendrerit dolor magna eget. Neque convallis a cras semper auctor. Molestie at elementum eu facilisis sed odio morbi. Quam viverra orci sagittis eu volutpat odio. Ipsum dolor sit amet consectetur adipiscing. Faucibus a pellentesque sit amet. Morbi tincidunt ornare massa eget egestas purus viverra.
              </p>
          <p>

            Aliquam nulla facilisi cras fermentum. Gravida arcu ac tortor dignissim convallis aenean. Id leo in vitae turpis massa. Fermentum dui faucibus in ornare. Montes nascetur ridiculus mus mauris vitae. Arcu bibendum at varius vel pharetra vel turpis nunc. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Et malesuada fames ac turpis egestas. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sit amet consectetur adipiscing elit duis. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Adipiscing commodo elit at imperdiet. Venenatis a condimentum vitae sapien pellentesque habitant.
            </p>
        </div>


        <div style={{ display: "flex", marginTop: "1.2rem", marginBottom: "1.2rem", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

          <Img fluid={data.contentfulArticle.author.avator.fluid} alt={data.contentfulArticle.author.name} style={{ width: 150, height: 150, borderRadius: 75, overflow: "hidden" }} />

          <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
            <h2>{data.contentfulArticle.author.name}</h2>
            <p>{data.contentfulArticle.author.title}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default BlogPost