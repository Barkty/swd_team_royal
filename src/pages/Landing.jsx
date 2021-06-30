import {Link} from 'react-router-dom';
import Navbar from '../components/notes/navbar';

function Landing() {
    return(
	<div className='bg-banner'>
	    <Navbar />
	    <div className='land-container'>
		<p className='text-center land-intro'>EASY LEARNING WITH OUR NOTES</p>
		<div className='btn-container'>
		    <Link to='/login' role='button' className='btn py-2 my-2 mr-4 btn-c'>Login</Link>
		    <Link to='/register' role='button' className='btn btn-cf my-2 py-2'>Register</Link>
		</div>
	    </div>
	</div>
    )
}
export default Landing;
