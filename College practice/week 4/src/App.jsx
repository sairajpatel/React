import './App.css'

function App() {
  const products=[
    {title:'Cabage',isFruit:false,id:1},
    {title:'Apple',isFruit:true,id:2},
    {title:'Banana',isFruit:true,id:3},
  ]

  return (
    
    <>
    <h1>Products List</h1>
    <ul>
      {products.map((product)=>(
        <li key={product.id} style={{ color: product.isFruit ? 'red' : 'green' }}>
        {product.title} {product.isFruit ? 'is a fruit' : 'is a vegetable'}
      </li>
      ))}
    </ul>
    </>
  )
}

export default App
