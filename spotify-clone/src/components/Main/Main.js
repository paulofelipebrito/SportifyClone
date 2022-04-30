/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Main(){
  return (
    <main>
      <div 
        className="
          flex 
          flex-col 
          justify-center 
          text-center 
          bg-spotify-theme-mobile 
          md:bg-spotify-theme 
          bg-banner-mobile 
          md:bg-banner 
          bg-185% 
          md:bg-175% 
          bg-purple-main 
          text-green-main 
          h-screen
          py-40 
          px-4">
        <h1 className="
          text-5xl 
          md:text-7xl 
          mb-10 
          font-bold 
          max-w-4xl 
          mx-auto
        ">
          Escutar muda tudo
        </h1>
        <p className="
          text-md 
          md:text-lg
          mb-10 
        ">
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
        <a href="#" className="
          bg-green-main
          hover:bg-white
          text-purple-main
          text-sm
          rounded-full
          px-10
          py-3
          uppercase
          font-bold
          max-w-xl
          mx-auto
          tracking-widest
          transition duration-500">
            Obtenha o Spotify Free</a>
      </div>
    </main>
  );
}