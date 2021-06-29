import {Link} from 'react-router-dom';

function Landing() {
    return(
	<div className='bg-banner'>
	    {/*<header>
		<p className='text-left'>Create<span>Notes.</span></p>
		<div>
		    <Link to='/'>Home</Link>
		    <Link to='/login'>Login</Link>
		    <Link>
		</div>
		</header>*/}
	    <div className='land-container'>
		<p className='text-center land-intro'>EASY LEARNING WITH OUR NOTES</p>
		<div className='container'>
		    <Link to='/login' role='button' className='btn py-2 my-2 mr-4 btn-c'>Login</Link>
		    <Link to='/register' role='button' className='btn btn-cf my-2 py-2'>Become a member</Link>
		</div>
	    </div>
	</div>
    )
}
export default Landing;
