/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../Assets/img/spotify-logo.png';
import {FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

export default function Footer(){
  return(
    <footer>
      <div class="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
      <div class="md:col-span-1 pt-10 md:pt-0">
        <a href="#">
          <img src={Logo} alt="Spotify" class="w-20 md:w-132px" />
        </a>
      </div>
      <div class="md:col-span-1 pt-10 md:pt-4">
        <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Empresa</h3>
        <ul>
          <li class="mb-5">
            <a href="#">Sobre</a>
          </li>
          <li class="mb-5">
            <a href="#">Empregos</a>
          </li>
          <li class="mb-5">
            <a href="#">For the Record</a>
          </li>
        </ul>
      </div>
      <div class="md:col-span-1 pt-10 md:pt-4">
        <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Comunidades</h3>
        <ul>
          <li class="mb-5">
            <a href="#">Para Artistas</a>
          </li>
          <li class="mb-5">
            <a href="#">Desenvolvedores</a>
          </li>
          <li class="mb-5">
            <a href="#">Publicidade</a>
          </li>
          <li class="mb-5">
            <a href="#">Investidores</a>
          </li>
          <li class="mb-5">
            <a href="#">Fornecedores</a>
          </li>
        </ul>
      </div>
      <div class="md:col-span-1 pt-10 md:pt-4">
        <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Links Úteis</h3>
        <ul>
          <li class="mb-5">
            <a href="#">Ajuda</a>
          </li>
          <li class="mb-5">
            <a href="#">Player da Web</a>
          </li>
          <li class="mb-5">
            <a href="#">Aplicativo móvel grátis</a>
          </li>
        </ul>
      </div>
      <div class="md:col-span-2 pt-10 md:pt-4">
        <ul class="flex md:justify-end">
          <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
            <a href="#"><FaInstagram /></a>
          </li>
          <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
            <a href="#"><FaTwitter /></a>
          </li>
          <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
            <a href="#"><FaFacebookF /></a>
          </li>
        </ul>
      </div>
      <div class="md:col-span-4 mt-20">
        <ul>
          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Legal</a>
          </li>
          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Centro de Privacidade</a>
          </li>
          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Política de Privacidade</a>
          </li>
          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Cookies</a>
          </li>
          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Sobre anúncios</a>
          </li>
        </ul>
      </div>
      <div class="md:col-span-2 mt-20">
        <p class="flex justify-end text-gray-500 text-xs">&copy; 2020 Spotify AB</p>
      </div>
    </div>
    </footer>
  );
}