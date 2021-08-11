import fs from 'fs/promises';
import path from 'path'
import Link from 'next/link'

function HomePage(props) {
  const {products} = props

  return (
    <ul>
      {products
        .filter((product, index) => index < 2)
        .map(product => <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>)}
    </ul>
  );
}

export default HomePage;

// SSR: Static Render Dynamic content only at build time - (what gatsby does)
// CODE THAT IS NEVER VISIBLE ON THE CLIENT SIDE, ONLY SSR

export async function getStaticProps(context){
  // must always return an object with PROPS key
  // console.log('regenerate')
  // console.log('context', context)

  // Get our static file using node because we are on the server side here in this function
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  // console.log('filePath', filePath)

  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  if(!data){
    return {
      redirect: {
        destination: '/new-page'
      } // could redirect based on something
    }
  }

  return {
    props: {
      products: data?.products || []
    },
    revalidate: 60, // regenerate at most once every 10 seconds, test using npm run build, start
    notFound: false, // used if data not found, switch to true to return 404

  }
}
