import {GiHamburgerMenu} from 'react-icons/gi'
import HeaderContainer from '../../UI/HeaderContainer';
  
import Logo from '../../Assets/img/spotify-logo.png';
import Nav from './Nav/Nav';

export default function Header(){
  return(
    <header>
      <HeaderContainer>
        <div className="container flex items-center mx-auto">
          <div>
            <a href="#">
              <img
                src={Logo}
                alt="Spotify"
                className="w-20 md:w-125px"/>
            </a>
          </div>
          <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
            <GiHamburgerMenu />
          </div>
          <div className="items-end flex-1 text-white font-bold hidden md:flex">
            <Nav />
          </div>
        </div>
      </HeaderContainer>
    </header>
  );
}