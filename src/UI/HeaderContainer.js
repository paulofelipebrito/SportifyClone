export default function HeaderContainer(props){
  return (
    <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
      {props.children}
    </div>
  )
}