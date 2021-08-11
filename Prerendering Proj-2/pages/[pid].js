// pid = productID
// a dynamic page

// Alternatively could create a folder called [pid], and inside would be index.js

import path from 'path'
import fs from 'fs/promises'

function ProductDetailPage(props){
  const{product} = props
  return(
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  )

}
export async function getStaticPaths(){
  // const data = await getData()
  // const ids = data.products.map(product => product.id)
  // const params = ids.map(id => ({params:{pid: id}}))
  // console.log('getStaticPaths data', params)

  return{
    // paths: params,
    paths: [
      {
        params:{pid: 'p1'}
      }
    ],
    fallback: "blocking"
  }
}

async function getData(){
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  return JSON.parse(jsonData)
}

export async function getStaticProps(context){
  const {params} = context
  const productID = params.pid

  const data = await getData()

  const newProduct = data.products.find(product => product.id === productID)

  return {
    props:{
      product: newProduct
    },
    revalidate: 60
  }
}
export default ProductDetailPage
