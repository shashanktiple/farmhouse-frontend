import { Link } from 'react-scroll'
import './drop-down.scss'
export default function dropdown() {
  return (
    <div className='container-dropdown' id='dropdown'>
      <div className='wrapper-dropdown'>
        
        <nav id="nav-link-wrap" className='elements global-border-radius'>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                  <span className='scale'>My Profile</span>
              </Link>
              <Link activeClass="active" to="categories" spy={true} smooth={true} duration={500}>
                  <span className='scale'>Orders</span>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                  <span className='scale'>Wishlist</span>
              </Link>
            </nav>
      </div>
    </div>
  )
}