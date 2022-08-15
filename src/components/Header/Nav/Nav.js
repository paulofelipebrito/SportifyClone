/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Nav(){
  return(
    <nav className="flex-1">
      <ul className="flex justify-end flex-1">
        <li className="px-4"><a href="#" className="hover:text-hoverspt text-sm">Premium</a></li>
        <li className="px-4"><a href="#" className="hover:text-hoverspt text-sm">Ajuda</a></li>
        <li className="px-4"><a href="#" className="hover:text-hoverspt text-sm">Baixar</a></li>
        <li className="px-4"><span className="border-r border-white"></span></li>
        <li className="px-4"><a href="#" className="hover:text-hoverspt text-sm">Inscrever-se</a></li>
        <li className="px-4"><a href="#" className="hover:text-hoverspt text-sm">Log In</a></li>
      </ul>
    </nav>
  );
}