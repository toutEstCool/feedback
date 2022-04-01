import { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../../context/FeedbackContext'
import Button from '../../Shared/Button'
import Card from '../../Shared/Card'
import RatingSelect from '../RatingSelect/RatingSelect'

const FeedbackForm = () => {
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState(10)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])

	const handleTextChange = e => {
		if (text.trim() === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text.trim() !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 character')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}
			setText('')
		}
	}
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us ?</h2>
				<RatingSelect select={rating => setRating(rating)} />
				<div className='input-group'>
					<input
						placeholder='Write a review'
						onChange={handleTextChange}
						value={text}
						type='text'
					/>
					<Button type='submit' version='secondary' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
