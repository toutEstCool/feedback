import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackStat = () => {
	const { feedback } = useContext(FeedbackContext)

	// Calc Rating
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating
		}, 0) / feedback.length

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
		</div>
	)
}

export default FeedbackStat
