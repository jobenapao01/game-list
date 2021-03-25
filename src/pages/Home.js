import React, { useEffect } from 'react'
//Redux
import {
	useDispatch,
	useSelector,
} from 'react-redux'
import { loadGames } from '../actions/gamesAction'
//Components
import Game from '../components/Game'
//Styling and animations
import styled from 'styled-components'
import {
	motion,
	AnimatePresence,
	AnimateSharedLayout,
} from 'framer-motion'
import GameDetail from '../components/GameDetail'
//React router dom
import {
	useLocation,
	useHistory,
} from 'react-router-dom'

//components

const Home = () => {
	//get the current location
	const location = useLocation()
	const pathID = location.pathname.split('/')[2]
	const history = useHistory()

	//FETCH GAMES
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadGames())
	}, [dispatch])

	const {
		popularGames,
		newGames,
		upcomingGames,
		isLoading,
	} = useSelector(state => state.games)

	const gameDetail = useSelector(
		state => state.detail.game.name
	)

	//Get history
	useEffect(() => {
		if (history.location.pathname === '/') {
			return (document.body.style.overflow =
				'auto')
		} else {
			return (document.body.style.overflow =
				'hidden')
		}
	}, [pathID, history.location.pathname])

	return (
		<>
			{!isLoading && (
				<GameListStyle>
					<AnimateSharedLayout type='crossfade'>
						<AnimatePresence>
							{pathID && gameDetail && (
								<GameDetail
									layoutId={pathID}
									pathID={pathID}
								/>
							)}
						</AnimatePresence>
						<h2>Upcoming Games</h2>
						<GamesStyle>
							{upcomingGames.map(game => (
								<Game game={game} key={game.id} />
							))}
						</GamesStyle>

						<h2>Popular Games</h2>
						<GamesStyle>
							{popularGames.map(game => (
								<Game game={game} key={game.id} />
							))}
						</GamesStyle>

						<h2>New Games</h2>
						<GamesStyle>
							{newGames.map(game => (
								<Game game={game} key={game.id} />
							))}
						</GamesStyle>
					</AnimateSharedLayout>
				</GameListStyle>
			)}
		</>
	)
}

const GameListStyle = styled(motion.div)`
	padding: 0rem 5rem;
	overflow: hidden;
	h2 {
		padding: 5rem 0rem;
	}
`

const GamesStyle = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(500px, 1fr)
	);
	grid-column-gap: 3rem;
	grid-row-gap: 2rem;
`
export default Home
