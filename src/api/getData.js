import axios from 'axios'

export const getTips = async (state, num) => {
	const peticion = await axios.get(`https://api.adviceslip.com/advice/${num}`)
	state(peticion.data.slip)
}
