
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const addToCartHandler = () => {};

  return (
     <div className="home">
      <section></section>
      <h1>Latest Products <Link to="/search" className="findmore"/>More</h1>
      <main>
        <ProductCard 
         productId='adsafdas'
         name="Macbook"
         price={4545}
         stock={4435} 
         handler={addToCartHandler}
         photo='https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg'/>
        <ProductCard 
         productId='adsafdas'
         name="Macbook"
         price={4545}
         stock={4435} 
         handler={addToCartHandler}
         photo='https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg'/>
        <ProductCard 
         productId='adsafdas'
         name="Macbook"
         price={4545}
         stock={4435} 
         handler={addToCartHandler}
         photo='https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg'/>
      </main>
     </div>
  )
}

export default Home  