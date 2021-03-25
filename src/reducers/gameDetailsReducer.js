const initState = {
	game: {},
	screenshots: {},
	isLoading: true,
}

const gameDetailsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAME_DETAIL':
			return {
				...state,
				game: action.payload.game,
				screenshots: action.payload.screenshots,
				isLoading: false,
			}
		case 'LOADING_DETAIL':
			return {
				...state,
				isLoading: true,
			}
		default:
			return { ...state }
	}
}

export default gameDetailsReducer
