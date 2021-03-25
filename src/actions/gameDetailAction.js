import axios from 'axios'
import { gameDetailsURL } from '../api.js'

export const loadDetail = (id, short_screenshots) => async dispatch => {
	dispatch({
		type: 'LOADING_DETAIL',
	})

	const gameDetailsData = await axios.get(gameDetailsURL(id))
	//const gameScreenshotsData = await axios.get(gameScreenshotURL(id))

	dispatch({
		type: 'FETCH_GAME_DETAIL',
		payload: {
			game: gameDetailsData.data,
			screenshots: short_screenshots,
		},
	})
}
