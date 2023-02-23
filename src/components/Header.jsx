export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="navtop flex md:block w-full md:w-44 justify-between">
        <div className=" text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span>
        </div>
        <div className="block md:hidden">
          <button className="flex items-center px-3 py-2 border  rounded text-white ">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden flex-grow md:flex md:items-center md:justify-between md:w-auto">
        <ul className="text-sm md:flex justify-between">
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200  mr-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200  mr-4"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-200  mr-4"
            >
              Blog
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
