import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import FeedbackList from './components/FeedbackList/FeedbackList'
import FeedbackStat from './components/FeedbackStat/FeedbackStat'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import Post from './components/Post/Post'
import AboutLinkIcon from './components/AboutLinkIcon/AboutLinkIcon'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStat />
									<FeedbackList />
									<AboutLinkIcon />
								</>
							}
						></Route>
						<Route exact path='/about' element={<AboutPages />}></Route>
						<Route exact path='/post/:rating/:text' element={<Post />}></Route>
					</Routes>
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
