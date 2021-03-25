const initState = {
	popularGames: [],
	newGames: [],
	upcomingGames: [],
	searched: [],
	isLoading: true,
}

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAMES':
			return {
				...state,
				...action.payload,
				isLoading: false,
			}
		case 'LOADING_GAMES':
			return {
				...state,
				isLoading: true,
			}
		default:
			return { ...state }
	}
}

export default gamesReducer
