import React from 'react';
import article from './img/Article.svg'
import eBook from './img/E-Book.svg'
import newsletter from './img/Newsletter.svg'
import press from './img/Press.svg'
import productDescription from './img/Product-Description.svg'
import script from './img/Script.svg'
import socialMedia from './img/Social-Media.svg'
import blogPost from './img/blogPost.svg'
import Card from './components/Card';


const Content = () => {

  const data = [{
    path: blogPost,
    title: "Blog Post"
  },
  {
    path: article,
    title: "Article"
  },
  {
    path: press,
    title: "Press Release"
  },
  {
    path: script,
    title: "Script"
  },
  {
    path: productDescription,
    title: "Product Description"
  },
  {
    path: socialMedia,
    title: "Social Media Post"
  },
  {
    path: newsletter,
    title: "Email Newsletter"
  },
  {
    path: eBook,
    title: "E-Book"
  },];

  return (
    <div class="parent vh-100  pt-4">
      <h1 class="fw-bolder fs-2">Content Creation</h1>
      <div class="d-flex gap-5 justify-content-between flex-wrap mt-4">
        {data.map((item, index) => {
          return <Card key={index} title={item.title} path={item.path} />
        })}
      </div>
    </div>
  )
}

export default Content