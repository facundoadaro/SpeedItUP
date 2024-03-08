export default function Header() {
  return (
    <nav className="fixed top-0 w-full border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a
          href="#hero-section"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="speedItUpRectangular.png"
            className="h-12"
            alt="Speed It UP Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            type="button"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-purple-700 hover:bg-purple-900 focus:ring-blue-800"
            href="https://wa.link/p644nq"
            target="_blank"
          >
            Comenzar Ahora
          </a>
          {/* <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        {/* Poner hidden acá en este div para que se oculte el menú de navegación en pantallas */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="#services"
                className="block py-2 px-3 md:p-0 rounded md:hover:text-purple-700 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                aria-current="page"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 px-3 md:p-0 rounded md:hover:text-purple-700 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Planes
              </a>
            </li>
            <li>
              <a
                href="#our-team"
                className="block py-2 px-3 md:p-0 rounded md:hover:text-purple-700 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Nuestro Equipo
              </a>
            </li>
            {/* <li>
              <a
                href="#faqs"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-purple-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Consultas Frecuentes
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
