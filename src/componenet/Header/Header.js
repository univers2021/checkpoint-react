import logo from '../../assets/images/logo.png'
const Header = () => {
  return (
    <>
      <header className="bg-black w-full h-16 box-border cursor-pointer">
        <div className="bg-transparente container mx-auto flex justify-between items-center  px-0 md:px-20 ">
          <img className="w-20 "src={logo} alt="" />
          <ul className="flex w-3/5 justify-end items-center text-base font-bold uppercase text-orange-400 hidden sm:flex" >
            <li>
              <a className="p-5  hover:border-t-2 border-t-orange-400 border-solid hover:text-white"  href="#" >home</a>
            </li>
            <li>
              <a className="p-5  hover:border-t-2 border-t-orange-400 border-solid hover:text-white" href="#">contact</a>
            </li>
            <li>
              <a  className="p-5  hover:border-t-2 border-t-orange-400 border-solid hover:text-white" href="#">info</a>
            </li>
            <li >
              <a className="p-5  hover:border-t-2 border-t-orange-400 border-solid hover:text-white"href="#">apropos</a>
            </li>
          </ul>
          {/* =============icon-menu======= */}
          <div className="w-8 h-5 bg-black relative mx-6 flex sm:hidden cursor-pointer  " >
            <span className="w-full bg-orange-500 h-1 absolute top-0 "></span>
            <span className="w-full bg-orange-500 h-1 absolute top-2"></span>
            <span className="w-full bg-orange-500 h-1 absolute top-4 "></span>
          </div>
          {/* =============sub-menu======= */}
          <div className="absolute  hidden sm:hidden w-full auto bg-black top-16 right-0 border-t-2 border-t-orange-400 border-solid">
            <ul className="flex flex-col my-3">
              <li className="text-orange-500 uppercase px-10 py-2 border-b-2 border-b-orange-500"><a href="#home"></a>home</li>
              <li className="text-orange-500 uppercase px-10 py-2 border-b-2 border-b-orange-500"><a href="#contact"></a>contact</li>
              <li className="text-orange-500 uppercase px-10 py-2 border-b-2 border-b-orange-500"><a href="#info"></a>info</li>
              <li className="text-orange-500 uppercase px-10 py-2 "><a href="#apropos"></a>apropos</li>
            </ul>

          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
