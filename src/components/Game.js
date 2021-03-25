import React from 'react'
//Styling and animations
import styled from 'styled-components'
import { motion } from 'framer-motion'
//REDUX
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/gameDetailAction'

//react router dom
import { Link } from 'react-router-dom'

import { imageResize } from '../util'

const Game = ({ game }) => {
	const {
		name,
		released,
		background_image,
		id,
		short_screenshots,
	} = game

	//convert id to string
	const stringID = id.toString()

	//Load details
	const dispatch = useDispatch()
	const loadDetailHandler = () => {
		dispatch(loadDetail(id, short_screenshots))
	}
	return (
		<GameStyle
			layoutId={stringID}
			onClick={loadDetailHandler}
		>
			<Link to={`/games/${id}`}>
				<motion.h3 layoutId={`title ${stringID}`}>
					{name}
				</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringID}`}
					src={imageResize(background_image, 640)}
					alt={name}
				/>
			</Link>
		</GameStyle>
	)
}

const GameStyle = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: fit;
		border-radius: 1rem;
	}
	cursor: pointer;
`

export default Game
