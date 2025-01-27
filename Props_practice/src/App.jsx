import Products from './Components/products'
import './App.css'

function App() {


  return (
    <>
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
     <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
     </div>
      <Products username="Black T-shirt" img="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"/>
      <Products username="White T- Shirt" img="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg"/>

    </>
  )
}

export default App
