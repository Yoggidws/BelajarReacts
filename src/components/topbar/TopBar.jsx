import './topbar.css'
import logo from './logowhite.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome's
// import { faSearch } from '@fortawesome/free-solid-svg-icons's

export default function TopBar() {
	const { user, dispatch } = useContext(Context)
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	}
	return (
		<div className="top">
			<div className="topLeft">
				<Link to="/" className='badgeKB'>
					<img className='kblogo' src={logo} alt="logo" width={50} />
					<p className="logoName">Knowledge Base</p>
				</Link>
			</div>
			<div className="topRight">
				<ul className='topList'>
					<li className='topListItem'> <Link to="/login"> {
						!user && "Login"
					}  </Link></li>
					<li className='topListItem'> <Link to="/">HOME</Link></li>
					<li className='topListItem'> <Link to="/cats/?cat=SAP">SAP</Link></li>
					<li className='topListItem'> <Link to="/cats/?cat=Bitrix">Bitrix</Link></li>
					<li className='topListItem'> <Link to="/cats/?cat=Troubleshoot">Troubleshoot</Link></li>
					<li className='topListItem'> <Link to="/write"> {
						user && "Write"
					}  </Link></li>
					<li className='topListItem' onClick={handleLogout}> <Link to="/"> {
						user && "Logout"
					}  </Link></li>
				</ul>
			</div>
		</div>
	)
}