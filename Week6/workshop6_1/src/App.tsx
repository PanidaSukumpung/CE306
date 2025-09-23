import ProductCard from './components/ProductCard'
import './App.css'

function App() {
const products = [
  {
    imageUrl: 'https://www.arkema.com/files/live/sites/shared_arkema/files/images/markets/Electronics%20electrical/electronics.jpg',
    title: 'Electronics',
    description: 'Lightweight and portable, this laptop handles multitasking with ease.',
    price: 40
  },
  {
    imageUrl: 'https://www.arkema.com/files/live/sites/shared_arkema/files/images/markets/Electronics%20electrical/electronics.jpg',
    title: 'Electronics',
    description: 'Lightweight and portable, this laptop handles multitasking with ease.',
    price: 40
  },
  {
    imageUrl: 'https://www.arkema.com/files/live/sites/shared_arkema/files/images/markets/Electronics%20electrical/electronics.jpg',
    title: 'Electronics',
    description: 'Lightweight and portable, this laptop handles multitasking with ease.',
    price: 40
  },
  {
    imageUrl: 'https://www.arkema.com/files/live/sites/shared_arkema/files/images/markets/Electronics%20electrical/electronics.jpg',
    title: 'Electronics',
    description: 'Lightweight and portable, this laptop handles multitasking with ease.',
    price: 40
  }
]

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
      {products.map((p, index) => (
        <ProductCard
          key={index} 
          imageUrl={p.imageUrl}            
          title={p.title}         
          description={p.description}
          price={p.price}
          onAddToCart={handleAddToCart}
        />
))}

    </div>
  )
}

export default App
