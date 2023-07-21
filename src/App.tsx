import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCarousel from './components/MyCarousel'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className='text-red-300'> this is red text</div>
			<MyCarousel></MyCarousel>
		</>
	)
}

export default App
