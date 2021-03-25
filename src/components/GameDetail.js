import React from 'react'
//Styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
//Redux
import { useSelector } from 'react-redux'
//react router dom
import { useHistory } from 'react-router-dom'

import { imageResize } from '../util'

const GameDetail = ({ pathID }) => {
	//useHistory
	const history = useHistory()

	//exit view handler
	const exitViewHandler = e => {
		const element = e.target
		if (
			(element.classList.contains = 'card-shadow')
		) {
			history.push('/')
		}
	}

	//data
	const {
		game,
		screenshots,
		isLoading,
	} = useSelector(state => state.detail)
	return (
		<>
			{!isLoading && (
				<CardShadowStyle
					className='card-shadow'
					onClick={exitViewHandler}
				>
					<DetailStyle layoutId={pathID}>
						<StatsStyle>
							<div className='rating'>
								<motion.h3>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
							</div>
							<InfoStyle>
								<h3>Platforms</h3>
								<PlatformStyle>
									{game.platforms &&
										game.platforms.map(data => (
											<h4 key={data.platform.id}>
												{data.platform.name}
											</h4>
										))}
								</PlatformStyle>
							</InfoStyle>
						</StatsStyle>
						<MediaStyle>
							<motion.img
								layoutId={`image ${pathID}`}
								src={imageResize(
									game.background_image,
									1280
								)}
								alt='game'
							/>
						</MediaStyle>

						<DescriptionStyle>
							<h3>Description</h3>
							<p>{game.description_raw}</p>
						</DescriptionStyle>

						<div className='gallery'>
							<h3>Screenshots</h3>
							{screenshots &&
								screenshots.map(screenshot => (
									<motion.img
										layoutId={`image ${pathID}`}
										src={imageResize(
											screenshot.image,
											1280
										)}
										key={screenshot.id}
										alt={screenshot.image}
									/>
								))}
						</div>
					</DetailStyle>
				</CardShadowStyle>
			)}
		</>
	)
}

const CardShadowStyle = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	position: fixed;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background: #158bc2;
		border-radius: 1rem;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`

const DetailStyle = styled(motion.div)`
	width: 80%;
	position: absolute;
	left: 10%;
	padding: 2rem 2rem;
	background: white;
	color: black;
	img {
		width: 100%;
		padding: 1rem 0rem 0.05rem 0rem;
		border-radius: 3rem;
	}

	p {
		font-size: 1rem;
	}
`

const StatsStyle = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const InfoStyle = styled(motion.div)`
	text-align: center;
`

const PlatformStyle = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`

const MediaStyle = styled(motion.div)`
	img {
		width: 100%;
	}
`
const DescriptionStyle = styled(motion.div)`
	margin: 2rem 0rem;
`
export default GameDetail
