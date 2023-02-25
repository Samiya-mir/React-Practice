export default function Header(props) {
  function handleClick(e) {
    console.log(props);
    console.log(e.target);
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="nav flex md:block w-full md:w-44 justify-between">
        <div className=" text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            {props.title}
          </span>
        </div>
        <div className="block md:hidden">
          <button className="flex items-center px-3 py-2 border  rounded text-white ">
            <span onClick={handleClick}>X</span>
          </button>
        </div>
      </div>

      <div className="hidden  md:flex md:items-center md:w-auto">
        <ul className="text-sm md:flex justify-between">
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200  px-3 text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200  px-3 text-lg"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200  px-3 text-lg"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200 px-3 text-lg"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
