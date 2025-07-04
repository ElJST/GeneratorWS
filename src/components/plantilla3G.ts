export function plantilla3G(
    nombreEmpresa: string, 
    email: string,
    direction: string,
    telefono: string,
    estrategia: string,
    solucion: string,
    dLarga: string,
    mision: string,
    dCorta: string,
):string {
    return (`
    <!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${nombreEmpresa}</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    html,
    body {
      height: 100%;
      overflow-x: hidden;
      background-color: #f4f4f4;
      scroll-behavior: smooth;
      line-height: 1.6;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #1e1e1e;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .logo {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }

    .nav-links li a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links li a:hover {
      color: #00bcd4;
    }

    section {
      width: 100%;
      min-height: 100vh;
      padding: 3rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .inicio {
      background: linear-gradient(135deg, #00bcd4, #2196f3);
      color: #fff;
      text-align: center;
    }

    .inicio h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .inicio p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      background-color: #fff;
      color: #2196f3;
      border: none;
      text-decoration: none;
      font-weight: bold;
      border-radius: 4px;
    }

    .btn-secondary {
      background-color: transparent;
      color: #fff;
      border: 2px solid #fff;
    }

    .services-section {
      background: #fff;
      color: #1f2937;
    }

    .title {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-align: center;
    }

    @media (min-width: 768px) {
      .title {
        font-size: 3rem;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: #4b5563;
      max-width: 40rem;
      margin: 0 auto 4rem;
      text-align: center;
    }

    .services-grid {
      display: grid;
      gap: 2rem;
      max-width: 1024px;
      margin: auto;
    }

    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .card {
      background: linear-gradient(to bottom right, #fff, #f9fafb);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
      padding: 2rem 1.5rem;
      text-align: center;
      transition: 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
        0 10px 10px -5px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
    }

    .card-description {
      color: #4b5563;
    }

    .section-about .stats {
      display: flex;
      justify-content: center;
      gap: 66px;
      margin: 2rem 0;
      flex-wrap: wrap;
    }

    .card-about {
      background: linear-gradient(45deg, #00bcd4, #2196f3);
      color: #fff;
      padding: 10px;
      border-radius: 0.5rem;
      text-align: center;
      transition: 0.3s ease;
    }

    .card-about:hover {
      transform: scale(1.05);
    }

    .mission-box {
      background: linear-gradient(to bottom right, #00bcd4, #7c3aed);
      padding: 1rem;
      border-radius: 1rem;
      color: #fff;
      max-width: 1024px;
      margin: auto;
      text-align: center;
    }

    .section-contact {
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: #fff;
      align-items: center;
      text-align: center;
    }

    .contact-info {
      background: rgba(255, 255, 255, 0.1);
      padding: 14px;
      border-radius: 8px;
      width: 100%;
      max-width: 600px;
      margin: 0 auto 2rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 600px;
      margin: auto;
    }

    .contact-form input,
    .contact-form textarea {
      padding: 0.75rem;
      border: none;
      border-radius: 6px;
    }

    .contact-form button {
      padding: 0.75rem;
      background: #00bcd4;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-weight: bold;
    }

    .contact-form button:hover {
      background: #0097a7;
    }

    .footer {
            background-color: #111827;
            /* gray-900 */
            color: white;
            padding: 2rem 1rem;
            font-family: system-ui, sans-serif;
        }

        .footer-grid {
            max-width: 1280px;
            /* max-w-7xl */
            margin: 0 auto;
            display: grid;
            gap: 2rem;
        }

        @media (min-width: 768px) {
            .footer-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .footer-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .footer-title {
            font-size: 1.25rem;
            /* text-xl */
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .footer-subtitle {
            font-size: 1.125rem;
            /* text-lg */
            font-weight: 600;
            margin-bottom: 0.75rem;
        }

        .footer-text {
            color: #9ca3af;
            /* gray-400 */
            margin-bottom: 0.5rem;
        }

        .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .footer-links li {
            margin-bottom: 0.5rem;
        }

        .footer-link {
            color: #9ca3af;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-link:hover {
            color: white;
        }

        .flex-gap {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .footer-social {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .footer-icon {
            color: #9ca3af;
            transition: color 0.3s ease;
        }

        .footer-icon:hover {
            color: white;
        }

        .footer-bottom {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.875rem;
            color: #6b7280;
            /* gray-500 */
        }
  </style>
</head>

<body>
  <style>
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1e1e1e;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .logo {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links,
    .nav-links-mobile {
      list-style: none;
      display: flex;
      gap: 1rem;
    }

    .nav-links li a,
    .nav-links-mobile li a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
    }

    .nav-links-mobile li a:hover{
      color: #00bcd4;
    }

    .hamburger {
      display: none;
      font-size: 2rem;
      color: #fff;
      cursor: pointer;
    }

    .section-nav-movile {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(30, 30, 30, 0.95);
      padding: 2rem 1rem;
      z-index: 9999;
    }

    .section-nav-movile.active {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .nav-links-mobile {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .hamburger {
        display: block;
      }
    }

    .btn-close{
      background-color: rgb(209, 47, 47);
      font-size: 1.2rem;
      color: #fff;
      cursor: pointer;
      padding: 14px;
      border: whitesmoke solid 1px;
      border-radius: 15px;
    }
  </style>

  <nav>
    <div class="logo">${nombreEmpresa}</div>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <ul class="nav-links">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <section class="section-nav-movile" id="mobileMenu">
    <ul class="nav-links-mobile">
      <li><a href="#inicio" onclick="toggleMenu()">Inicio</a></li>
      <li><a href="#servicios" onclick="toggleMenu()">Servicios</a></li>
      <li><a href="#sobre-nosotros" onclick="toggleMenu()">Sobre Nosotros</a></li>
      <li><a href="#contacto" onclick="toggleMenu()">Contacto</a></li>
      <button class="btn-close" onclick="toggleMenu()">Cerrar Menu</button>
    </ul>
  </section>

  <section id="inicio" class="inicio">
    <h1>Bienvenido a ${nombreEmpresa}</h1>
    <p>${dCorta}</p>
    <div class="buttons">
      <a href="#contacto" class="btn">Empecemos</a>
      <a href="#servicios" class="btn btn-secondary">Leer más</a>
    </div>
  </section>

  <section id="servicios" class="services-section">
    <h2 class="title">Servicios</h2>
    <p class="subtitle">Ofrecemos soluciones integrales diseñadas para elevar su negocio al siguiente nivel</p>
    <div class="services-grid">
      <div class="card">
        <h3 class="card-title">Estrategia</h3>
        <p class="card-description">${estrategia}</p>
      </div>
      <div class="card">
        <h3 class="card-title">Solución</h3>
        <p class="card-description">${solucion}</p>
      </div>
      <div class="card">
        <h3 class="card-title">Consultoría</h3>
        <p class="card-description">Asesoramiento experto para retos empresariales complejos.</p>
      </div>
    </div>
  </section>

  <section id="sobre-nosotros" class="section-about">
    <h2 class="title">Sobre Nosotros</h2>
    <p class="subtitle">${dLarga}</p>
    <div class="stats">
      <div class="card-about"><strong>150+</strong><br>Proyectos completados</div>
      <div class="card-about"><strong>98%</strong><br>Clientes satisfechos</div>
      <div class="card-about"><strong>10+</strong><br>Años de experiencia</div>
    </div>
    <div class="mission-box">
      <h3>Nuestra Misión</h3>
      <p>${mision}</p>
    </div>
  </section>

  <section id="contacto" class="section-contact">
    <h2>Contáctanos</h2>
    <p>¿Listo para trabajar con nosotros? ¡Hablemos!</p>
    <div class="contact-info">
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Dirección:</strong> ${direction}</p>
    </div>
    <form class="contact-form">
      <input type="text" placeholder="Nombre" required>
      <input type="text" placeholder="Apellido" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Mensaje" rows="5" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- FOOTER -->
    <footer class="footer">
        <div class="footer-grid">

            <!-- Columna 1 -->
            <div>
                <h2 class="footer-title">We Do Websites</h2>
                <p class="footer-text">Creamos páginas web personalizadas, rápidas y optimizadas para tu negocio.
                </p>
            </div>

            <!-- Columna 2 -->
            <div>
                <h3 class="footer-subtitle">Enlaces</h3>
                <ul class="footer-links">
                    <li>
                        <a href="#servicios" class="footer-link">Servicios</a>
                    </li>
                    <li>
                        <a href="#contacto" class="footer-link">Contacto</a>
                    </li>
                </ul>
            </div>

            <!-- Columna 3 -->
            <div>
                <h3 class="footer-subtitle">Contacto</h3>
                <p class="footer-text">Email: contactwdwebsites@gmail.com</p>
                <p class="footer-text">Telefono: +34 643 843 310</p>
                <div class="footer-social">
                    <a href="https://www.tiktok.com/@wdwebsites?lang=es" target="_blank" class="footer-icon">
                        <!-- TikTok Icon (svg o img) -->
                        <svg width="25" height="25"></svg>
                    </a>
                    <a href="https://www.instagram.com/wdwebsites/" target="_blank" class="footer-icon">
                        <!-- Instagram Icon -->
                        <svg width="25" height="25"></svg>
                    </a>
                </div>
            </div>

            <!-- Columna 4 -->
            <div>
                <h3 class="footer-subtitle">Sobre nosotros</h3>
                <ul class="footer-links">
                    <li>
                        <a href="https://www.linkedin.com/in/justin-campuzano-n-5bbb182a3/" target="_blank"
                            rel="noopener noreferrer" class="footer-link flex-gap">
                            Justin Campuzano <svg width="25" height="25"></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="footer-link flex-gap">
                            Estela Pardo <svg width="25" height="25"></svg>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            &copy; 2025 We Do Websites. Todos los derechos reservados.
        </div>
    </footer>
  <script>
    function toggleMenu() {
      document.getElementById("mobileMenu").classList.toggle("active");
    }
  </script>
</body>

</html>
    `)
}