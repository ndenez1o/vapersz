import { FaInstagram, FaLocationArrow, FaMobile, FaTelegram } from 'react-icons/fa';
import LogoFooter from '../../assets/logo-footer.svg'
function Footer() {
  const phoneNumber = '+5492346568711';

    return (
      <footer className="bg-emerald-900 text-slate-100 py-4 px-6 text-center bottom-0 left-0 w-full">
        <div className="container mx-auto">
          <div className=" mx-auto text-left">
            <div className="space-x-6 py-3 flex justify-between flex-wrap">
              {/* Sección Logo Vapersz */}
              <div className="flex-grow max-w-xs">
                <a
                  href="/"
                  className="text-green-500 hover:text-green-700 px-2 py-2 block"
                >
                  <img src={LogoFooter} alt="Logo" style={{ width: '190px', height: 'auto' }} />
                </a>
                <div className="mt-2 ml-4 space-y-2">
                  <p
                    className="text-slate-100 block"
                  >
                    <FaLocationArrow
                      size={20}
                      className="inline-block mr-2"
                    />
                    Buenos Aires, Argentina
                  </p>
                  <a
                    href={`tel:${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    <FaMobile
                      size={20}
                      className="inline-block mr-2"
                    />
                    +54 9 2346 568711
                  </a>
                  <a
                    href="https://www.instagram.com/vapersz_ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    <FaInstagram
                      size={20}
                      className="inline-block mr-2"
                    />
                    @vapersz_ch
                  </a>
                  <a
                    href="/link2"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    <FaTelegram
                      size={20}
                      className="inline-block mr-2"
                    />
                    @vapersz_ch
                  </a>
                </div>
              </div>
  
              {/* Sección Preguntas frecuentes */}
              <div className="flex-grow max-w-xs">
                <p
                  className="text-slate-100 font-bold rounded px-2 py-2 mt-3 block"
                >
                  Ayuda
                </p>
                <div className="mt-2 ml-4 space-y-2">
                  <a
                    href="/preguntas-frecuentes"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    Preguntas frecuentes
                  </a>
                  <a
                    href="/envios"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    Envíos
                  </a>
                  <a
                    href="/faq/link3"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    {/* ¿Un vaporizador es un cigarrillo electrónico? */}
                  </a>
                </div>
              </div>
  
              {/* Sección Quiénes somos */}
              <div className="flex-grow max-w-xs">
                <p
                  className="text-slate-100 font-bold rounded px-2 py-2 mt-3 block"
                >
                  Quiénes somos
                </p>
                <div className="mt-2 ml-4 space-y-2">
                  <a
                    href="/about/link1"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    Nosotros
                  </a>
                  <a
                    href="/about/link2"
                    className="text-slate-100 hover:text-green-400 block"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
  
            {/* Línea divisoria */}
            <hr className="border-t border-white opacity-50 my-6" />
  
            {/* Derechos reservados */}
            <div className="mt-6">
              <p className="text-sm">
                Vapersz © 2024. Todos los derechos reservados.
              </p>
              <p className="text-sm mt-2">
                Desarrollado por{" "}
                <a
                  href="https://portfolio-nd.firebaseapp.com/"
                  className="text-slate-100 hover:text-green-400"
                  target="_blank"
                >
                  Nahuel Denezio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  