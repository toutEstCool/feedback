import Card from '../Shared/Card'
import { Link } from 'react-router-dom'

const AboutPages = () => {
	return (
		<Card>
			<h1>About This Project</h1>
			<p>This is a React App to leave feedback for a product or service...</p>
			<p>Version: 1.0.0</p>
			<Link to='/'>Back Home</Link>
		</Card>
	)
}

export default AboutPages
