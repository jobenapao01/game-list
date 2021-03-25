import axios from 'axios'
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api'

//ACTION CREATOR
export const loadGames = () => async dispatch => {
	dispatch({
		type: 'LOADING_GAMES',
	})
	//FETCH POPULAR GAMES DATA
	const popularGamesData = await axios.get(popularGamesURL())
	const newGamesData = await axios.get(newGamesURL())
	const upcomingGamesData = await axios.get(upcomingGamesURL())

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popularGames: popularGamesData.data.results,
			newGames: newGamesData.data.results,
			upcomingGames: upcomingGamesData.data.results,
		},
	})
}
