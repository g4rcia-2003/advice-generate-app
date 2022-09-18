import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { getTips } from './api/getData'
import {
	Button,
	Card,
	Container,
	GlobalStyles,
	Picture,
	Theme,
} from './styled-components'

function App() {
	const [tips, setTips] = useState('')
	const [num, setNum] = useState(1)

	const numAlet = () => {
		let number = Math.floor(Math.random() * 200)
		setNum(number)
	}

	console.log(num)

	useEffect(() => {
		getTips(setTips, num)
	}, [num])

	return (
		<>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<Container>
					<Card>
						<h1>Advice #{tips.id}</h1>
						<p>"{tips.advice}"</p>
						<Picture />
						<Button onClick={numAlet}>
							<img src='../public/images/icon-dice.svg' />
						</Button>
					</Card>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
