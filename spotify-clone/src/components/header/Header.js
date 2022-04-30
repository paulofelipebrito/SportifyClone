import {GiHamburgerMenu} from 'react-icons/gi'

export default function Header(){
  return(
    <header>
      <div>
        <div>
          <a href="#">
            <img src="./Assets/img/spotify-logo.pnd" alt="Spotify" />
          </a>
        </div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
}