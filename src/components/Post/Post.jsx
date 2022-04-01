import { useParams } from 'react-router-dom'
import Card from '../../Shared/Card'
import { NumRandom } from '../../function/NumRandom.js'
import { randomColor } from '../../function/NumRandom.js'
const Post = () => {
	const arraySmile = ['🤓', '👺', '👀', '👾', '😂', '😇', '🤯', '🫥']

	const params = useParams()

	return (
		<Card>
			<h1 className='rating'>
				Post Rating: {params.rating}{' '}
				<span style={{ paddingLeft: '20px' }}>{NumRandom(arraySmile)}</span>
			</h1>
			<p
				style={{
					fontSize: '20px',
					fontWeight: '600',
					color: `${randomColor()}`,
				}}
			>
				Post text: {params.text}
			</p>
		</Card>
	)
}

export default Post
