export default function Home() {
  return (
    <>
      {/* Acá comienza Hero Section */}
      <section className="bg-gray-900 text-white" id="hero-section">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Enfócate en lo que sabes,
              <span className="sm:block"> nosotros en el resto. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Concéntrate en la parte operativa de tu negocio. Nosotros en las
              redes, publicidad, aspectos legales y contables, optimización de
              procesos, y más.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-purple-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="https://wa.link/p644nq"
                target="_blank"
              >
                Comenzar Ahora
              </a>

              {/* <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#faqs"
              >
                Información
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Acá comienza descripción del servicio y CTA */}
      <section className="bg-gray-900 text-white" id="services">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl pb-4">
              Potenciá tu negocio
            </h2>

            <p className="mb-8 font-light lg:mb-16 sm:text-xl text-gray-400">
              Con nuestros servicios podrás enfocar tus esfuerzos en el
              desarrollo de tu actividad mientras delegas en nosotros tareas
              complementarias, lo que permitirá que tengas un crecimiento
              acelerado.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-700 hover:shadow-purple-700/15"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">Branding</h2>

              <p className="mt-1 text-sm text-gray-300">
                Investigación de mercado, definición de identidad y nombre de
                marca, diseño de logo, creación de identidad visual, desarrollo
                e implementación de marca.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-700 hover:shadow-purple-700/15"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">
                Presencia en Línea
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Gestión de redes sociales, calendario de contenidos y clientes,
                creación de catálogos, diseño de Landing Page y/o E-Commerce.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-700 hover:shadow-purple-700/15"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">
                Marketing Digital y Tradicional
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                E-mail marketing, campañas publicitarias en Google y Meta Ads,
                publicidad en revistas, folletos y diarios, banners
                publicitarios, eventos, promociones en punto de venta y
                merchandising.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-700 hover:shadow-purple-700/15"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">
                Consultoría Legal y Contable
              </h2>
              {/* 
              <p className="mt-1 text-sm text-gray-300">
              </p> */}
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-700 hover:shadow-purple-700/15"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">Auditoría</h2>

              {/* <p className="mt-1 text-sm text-gray-300">
              </p> */}
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-700 hover:shadow-purple-700/15"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">
                Optimización de Procesos
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Revisión de objetivos empresariales a corto, mediano y largo
                plazo, optimización y documentación de procesos clave, monitoreo
                de avances con Indicadores de Performance (KPIs).
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.link/p644nq"
              target="_blank"
              className="inline-block rounded bg-purple-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-900 focus:outline-none focus:ring focus:ring-blue-800"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      </section>
      {/* -------------------- */}

      {/* Acá comienza Testimonials */}
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonios
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              El éxito de nuestros clientes es nuestra mejor publicidad, y su
              autorrealización nos enorgullece, lo que nos impulsa a dar un
              servicio de excelencia.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Speechless with how easy this was to integrate
                </h3>
                <p className="my-4">
                  "I recently got my hands on Flowbite Pro, and holy crap, I'm
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme.
                </p>
                <p className="my-4">
                  Flowbite has code in one place and I'm not joking when I say
                  it took me a matter of minutes to copy the code, customise it
                  and integrate within a Laravel + Vue application.
                </p>
                <p className="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p className="my-4">
                  "FlowBite provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework. From
                  the most used UI components like forms and navigation bars to
                  the whole app screens designed both for desktop and mobile,
                  this UI kit provides a solid foundation for any project.
                </p>
                <p className="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!"
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow and variants
                </h3>
                <p className="my-4">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with FlowBite my mind was 🤯.
                </p>
                <p className="my-4">
                  Everything is so well structured and simple to use (I've
                  learnt so much about Figma by just using the toolkit).
                </p>
                <p className="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p className="my-4">
                  "This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </p>
                <p className="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section> */}
      {/* -------------------- */}

      {/* Acá comienza Pricing */}
      <section className="bg-gray-900" id="pricing">
        <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto py-4 max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Diseñado para cumplir con tus necesidades
            </h2>
            <p className="mb-5 font-light sm:text-xl text-gray-400">
              Ofrecemos tres opciones de contratación para simplificarte la
              vida, aunque si lo precisas podemos dar una solución a medida.
            </p>
          </div>
          <div className="space-y-8 pt-4 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* <!-- Pricing Card STANDARD --> */}
            <div className="flex flex-col h-full p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-600 xl:p-8 bg-gray-800 text-white shadow-xl transition hover:border-purple-700 hover:shadow-purple-700">
              <div className="mb-4 min-h-[160px]">
                <h3 className="mb-4 text-2xl font-semibold">STANDARD</h3>
                <p className="font-light sm:text-lg text-gray-400">
                  {/* "Tengo en claro que hacer, pero me vendría bien un poco de
            ayuda." */}{" "}
                  Una opción accesible para quienes desean comenzar a tener
                  presencia profesional sin una gran inversión
                </p>
              </div>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$100.000</span>
                <span className="text-2xl text-gray-400">/mes</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left flex-1">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>4 posteos mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>10 historias mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    1 reel mensual
                    {/* {" "}
              <span className="font-semibold"></span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Optimización de perfil básica{" "}
                    {/* <span className="font-semibold">1h c/u</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Ideas y creación de contenido{" "}
                    {/*<span className="font-semibold">1h c/u</span>*/}
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.link/lh8lim"
                target="_blank"
                className="bg-purple-700 hover:bg-purple-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white focus:ring-primary-900"
              >
                Contratar
              </a>
            </div>

            {/* <!-- Pricing Card PREMIUM --> */}
            <div className="relative -z-3 flex flex-col h-full p-6 mx-auto max-w-lg text-center rounded-lg border border-purple-500 xl:p-8 bg-gray-800 text-white shadow-2xl transition hover:border-purple-700 hover:shadow-purple-700 lg:-translate-y-2 lg:scale-[1.02]">
              <span className="absolute -top-4 left-4 font-light text-2xl italic text-purple-200">
                más elegido
              </span>
              <div className="mb-4 min-h-[160px]">
                <h3 className="mb-4 text-2xl font-semibold">PREMIUM</h3>
                <p className="font-light sm:text-lg text-gray-400">
                  {/*Tengo noción a grandes rasgos pero necesito que me acompañen.*/}{" "}
                  Ideal para marcas que están comenzando o buscan mantener
                  presencia constante en redes
                </p>
              </div>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$175.000</span>
                <span className=" text-2xl text-gray-400">/mes</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left flex-1">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>8 posteos mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>25 historias mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    2 reel mensuales{" "}
                    {/* <span className="font-semibold">3h/día *</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Diseño de historias destacadas{" "}
                    {/* <span className="font-semibold">3h</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Optimización del perfil{" "}
                    {/* <span className="font-semibold">3h c/u</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Calendario de contenido + estrategia mensual. Ideas y
                    creación de contenido{" "}
                    {/* <span className="font-semibold">3h c/u</span> */}
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.link/5j29hd"
                target="_blank"
                className="bg-purple-700 hover:bg-purple-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white  focus:ring-primary-900"
              >
                Contratar
              </a>
            </div>

            {/* <!-- Pricing Card ELITE --> */}
            <div className="flex flex-col h-full p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-600 xl:p-8 bg-gray-800 text-white shadow-xl transition hover:border-purple-700 hover:shadow-purple-700">
              <div className="mb-4 min-h-[160px]">
                <h3 className="mb-4 text-2xl font-semibold">ELITE</h3>
                <p className="font-light sm:text-lg text-gray-400">
                  {/* "Tengo una idea pero no se por donde comenzar ni que hacer." */}{" "}
                  Pensado para marcas que quieren potenciar su crecimiento,
                  aumentar su alcance y generar mayor conexión con su audiencia
                </p>
              </div>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$250.000</span>
                <span className="text-2xl text-gray-400">/mes</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left flex-1">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>12 posteos mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>40 historias mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    6 reel mensuales{" "}
                    {/* <span className="font-semibold">3h/día *</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Diseño de historias destacadas{" "}
                    {/* <span className="font-semibold">3h</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Optimización del perfil{" "}
                    {/* <span className="font-semibold">3h c/u</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Calendario de contenido + estrategia mensual. Ideas y
                    creación de contenido{" "}
                    {/* <span className="font-semibold">3h c/u</span> */}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Asesoramiento en tendencias y mejores prácticas{" "}
                    {/* <span className="font-semibold">3h c/u</span> */}
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.link/37z4w2"
                target="_blank"
                className="bg-purple-700 hover:bg-purple-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white focus:ring-primary-900"
              >
                Contratar
              </a>
            </div>
          </div>
          <div className="mt-16 py-8 text-center">
            <a
              href="https://wa.link/57d9yf"
              target="_blank"
              className="inline-block rounded border border-blue-600 bg-transparent px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-blue-800"
            >
              Plan Personalizado
            </a>
          </div>
        </div>
      </section>

      {/* -------------------- */}

      {/* Acá comienza El Equipo */}
      {/*  <section className="bg-gray-900" id="our-team">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Nuestro Equipo
            </h2>
            <p className="font-light sm:text-xl text-gray-400">
              Un equipo altamente diversificado en su formación pero con la
              misma vocación y visión.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="imagenAna.jpeg"
                alt="Ana Bortel"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                Ana Bortel
              </h3>
              <p>Community Manager</p>
            </div>
            <div className="text-center text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="imagenFacu.jpg"
                alt="Facundo Adaro"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                Facundo Adaro
              </h3>
              <p>Ingeniero Industrial | Desarrollador</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Flavia Nobile"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Flavia Nobile
              </h3>
              <p>Contadora</p>
            </div>
            <div className="text-center text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="imagenAntonella.jpeg"
                alt="Antonella Stancado"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                Antonella Stancado
              </h3>
              <p>Lic. en Publicidad</p>
            </div>
            <div className="text-center text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="imagenFer.jpeg"
                alt="Fernando Petrillo"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                Fernando Petrillo
              </h3>
              <p>Diseñador</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                alt="Martina Godoy"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Martina Godoy</a>
              </h3>
              <p>Abogada</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Michael Avatar"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Michael Gough</a>
              </h3>
              <p>React Developer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                alt="Neil Avatar"
              ></img>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Neil Sims</a>
              </h3>
              <p>Vue.js Developer</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Acá comienzan FAQs */}
      {/* <section className="bg-white dark:bg-gray-900" id="faqs">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
            Consultas Frecuentes
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What do you mean by "Figma assets"?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You will have access to download the full Figma project
                  including all of the pages, the components, responsive pages,
                  and also the icons, illustrations, and images included in the
                  screens.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What does "lifetime access" exactly mean?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Once you have purchased either the design, code, or both
                  packages, you will have access to all of the future updates
                  based on the roadmap, free of charge.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How does support work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're aware of the importance of well qualified support, that
                  is why we decided that support will only be provided by the
                  authors that actually worked on this project.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and we'll help you out as soon as we can.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  I want to build more than one project. Is that allowed?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You can use Windster for an unlimited amount of projects,
                  whether it's a personal website, a SaaS app, or a website for
                  a client. As long as you don't build a product that will
                  directly compete with Windster either as a UI kit, theme, or
                  template, it's fine.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What does "free updates" include?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The free updates that will be provided is based on the{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    roadmap
                  </a>{" "}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What does the free version include?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    free version
                  </a>{" "}
                  of Windster includes a minimal style guidelines, component
                  variants, and a dashboard page with the mobile version
                  alongside it.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is the difference between Windster and Tailwind UI?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Although both Windster and Tailwind UI are built for
                  integration with Tailwind CSS, the main difference is in the
                  design, the pages, the extra components and UI elements that
                  Windster includes.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Additionally, Windster is a project that is still in
                  development, and later it will include both the application,
                  marketing, and e-commerce UI interfaces.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Can I use Windster in open-source projects?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generally, it is accepted to use Windster in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to Windster itself.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* -------------------- */}
    </>
  );
}
