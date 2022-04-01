import PropType from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ text, bgColor, textColor }) => {
	const headerStyle = {
		background: bgColor,
		color: textColor,
	}
	return (
		<header style={headerStyle}>
			<div className='container'>
				<Link style={{ color: textColor }} to='/'>
					<h2>{text}</h2>
				</Link>
			</div>
		</header>
	)
}

Header.defaultProps = {
	text: 'Feedback UI App',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95',
}

Header.propTypes = {
	text: PropType.string,
	bgColor: PropType.string,
	textColor: PropType.string,
}

export default Header
