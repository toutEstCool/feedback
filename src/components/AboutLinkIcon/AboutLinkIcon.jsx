import { BiComment } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AboutLinkIcon = () => {
	return (
		<div className='about-link'>
			<Link to='/about'>
				<BiComment size={30} />
			</Link>
		</div>
	)
}

export default AboutLinkIcon
