//Base URL
const base_URL = 'https://api.rawg.io/api/'

//Get current month
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1
	if (month < 10) {
		return `0${month}`
	} else {
		return month
	}
}

//get current day
const getCurrentDay = () => {
	const day = new Date().getDate()
	if (day < 10) {
		return `0${day}`
	} else {
		return day
	}
}

//Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular games
const popular_games = `games?key=1d98db94e038472c8f65dfefbf2301ed&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

const new_games = `games?key=1d98db94e038472c8f65dfefbf2301ed&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

const upcoming_games = `games?key=1d98db94e038472c8f65dfefbf2301ed&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`

//const game_screenshot = `games?key=1d98db94e038472c8f65dfefbf2301ed/`

export const popularGamesURL = () => `${base_URL}${popular_games}`

export const newGamesURL = () => `${base_URL}${new_games}`

export const upcomingGamesURL = () => `${base_URL}${upcoming_games}`

export const gameDetailsURL = game_id => `${base_URL}games/${game_id}`

//export const gameScreenshotURL = game_id => `${base_URL}games/${game_id}/screenshots`
