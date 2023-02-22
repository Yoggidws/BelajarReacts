import './header.css'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

	return (
		<div className='header'>
			<div className="headerTitle">
				<h1>Maha Knowledge Base</h1>
				<p>Your one-stop portal for digital support and solution in Maha</p>
				<div className="searchBars">
					<form action="">
						<input type="text" name="" placeholder='konci' />
						<button>Search</button>
					</form>
				</div>
				<p className='greeting'>How Can We Help You Today?</p>
			</div>
			<div className='cardContainer'>
				<div className="card">
					<img src={require('../../components/img/sapb1.jpg')} alt="" />
					<Link to="/cats/?cat=SAP">
						<h3 className='card-footer'>SAP B1</h3>
					</Link>
				</div>
				<div className="card">
					<img src={require('../../components/img/Bitrix24.jpg')} alt="" />
					<Link to="/cats/?cat=Bitrix">
						<h3 className='card-footer'>Bitrix24</h3>
					</Link>
				</div>
				<div className="card">
					<img src={require('../../components/img/troubleshoot.jpg')} alt="" />
					<Link to="/cats/?cat=TROUBLESHOOT">
						<h3 className='card-footer'>Troubleshoot</h3>
					</Link>
				</div>
			</div>
		</div>
	)
}
