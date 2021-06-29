import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
	<nav className='navbar bg-dark'>
	    <div className='left'>
		<Link to='/'>Easy<span className='span'>Notes.</span></Link>
	    </div>
	    <ul>
		<li>
		    <Link to='/mynotes'className='nav-link'>Notes</Link>
		</li>
		<li>
		    <Link to='/login' className='nav-link'>Login</Link>
		</li>
		<li>
		    <Link to='/register'  className='nav-link'>Register</Link>
		</li>
	    </ul>
	</nav>
    );
}
