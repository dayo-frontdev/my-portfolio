import logo from '../assets/chef.png'
import '../App.css'

function Header(){
    return(
        <>
        <header className='head'>
       <img className='logo' src={logo} alt="logo" />
       <h1 className='head-text'>Chef Claude</h1>
        </header>
        </>
    )
}

export default Header