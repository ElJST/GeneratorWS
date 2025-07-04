export function plantilla2G(
  nombreEmpresa: string,
  email: string,
  direction: string,
  telefono: string,
  estrategia: string,
  solucion: string,
  dLarga: string,
  mision: string,
  dCorta: string
): string {
  return `
    <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${nombreEmpresa}</title>
    <style>
        /* Reset */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f9;
            color: #222;
            line-height: 1.7;
        }

        /* Navbar */
        .navbar {
            background-color: #151515;
            color: white;
            position: sticky;
            top: 0;
            z-index: 999;
            padding: 1rem 0;
        }

        .navbar-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .navbar-logo {
            font-size: 1.8rem;
            font-weight: bold;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            background-clip: text;
            color: transparent;
        }

        .navbar-links {
            display: flex;
            gap: 1.5rem;
        }

        .navbar-links a {
            color: #ccc;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .navbar-links a:hover {
            color: #00f2fe;
        }

        .menu {
            background: none;
            border: none;
            cursor: pointer;
            display: none;
        }

        /* Menú mobile */
        .section-list-mobile {
            background-color: #151515;
            padding: 1rem 2rem;
            display: none;
            position: sticky;
            top: 101px;
            z-index: 998;
        }

        .section-list-mobile.show {
            display: block;
        }

        .navList-mobile {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 0;
            padding: 0;
        }

        .navList-mobile li a {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .navList-mobile li a:hover {
            color: #00f2fe;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .navbar-links {
                display: none;
            }

            .menu {
                display: block;
            }
        }

        /* Hero */
        .hero {
            background: linear-gradient(to right, #1c1c1c, #343434);
            color: white;
            text-align: center;
            padding: 8rem 1rem;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .hero span {
            display: block;
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            background-clip: text;
            color: transparent;
        }

        .hero p {
            max-width: 700px;
            margin: 1rem auto 2rem;
            font-size: 1.25rem;
            color: #ddd;
        }

        .hero-buttons .btn {
            padding: 0.8rem 2.2rem;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 50px;
            margin: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background: linear-gradient(to right, #4facfe, #00f2fe);
            color: white;
        }

        .btn-primary:hover {
            opacity: 0.9;
        }

        .btn-outline {
            border: 2px solid #00f2fe;
            background: transparent;
            color: #00f2fe;
        }

        .btn-outline:hover {
            background: #00f2fe;
            color: #fff;
        }

        /* Section title */
        .section-title {
            margin-top: 30px;
            font-size: 2rem;
            text-align: center;
            margin-bottom: 1rem;
            color: #333;
        }

        .section-description {
            text-align: center;
            color: #666;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto 3rem;
        }

        /* Cards */
        .cards {
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            padding-right: 45px;
            padding-left: 45px;
        }

        .card {
            background: #fff;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
        }

        .card:hover {
            transform: translateY(-6px);
        }

        .card-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            border-radius: 50%;
            margin: 0 auto 1rem;
        }

        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #111;
        }

        .card-text {
            color: #555;
        }

        /* About */
        .about {
            background: #c5c5c5;
            padding: 6rem 1rem;
            margin-top: 35px;
        }

        .about-text {
            max-width: 700px;
            font-size: 1.1rem;
            color: #555;
            margin: 1rem auto;
            text-align: center;
        }

        /* Contact */
        .contact-info {
            display: grid;
            width: 100%;
            padding-left: 100px;
            padding-right: 100px;
            gap: 1rem;
        }

        .contact-info div {
            background: #f0f0f0;
            padding: 1rem;
            border-radius: 0.5rem;
            color: #444;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .contact-form input,
        .contact-form textarea {
            width: 80%;
            padding: 0.75rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        .contact-form textarea {
            max-width: 80%;
        }

        .contact-form button {
            width: 200px;
            padding: 0.75rem;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 14px;
        }

        .contact-form button:hover {
            opacity: 0.9;
        }

        /* Footer */
        .form-button:hover {
            background-color: #f3f4f6;
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

        @media (max-width: 768px) {
            .navbar-links {
                display: none;
            }
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

    <!-- NAVBAR -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">MiEmpresa</div>
            <div class="navbar-links">
                <a href="#inicio">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#sobre-nosotros">Sobre Nosotros</a>
                <a href="#contacto">Contacto</a>
            </div>
            <button class="menu" id="menu">
                <svg width="30" height="30" viewBox="0 0 100 80" fill="white">
                    <rect width="100" height="15"></rect>
                    <rect y="30" width="100" height="15"></rect>
                    <rect y="60" width="100" height="15"></rect>
                </svg>
            </button>
        </div>
    </nav>

    <!-- MOBILE MENU -->
    <section class="section-list-mobile" id="menu-mobile">
        <ul class="navList-mobile">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </section>

    <!-- HERO SECTION -->
    <section id="inicio" class="hero">
        <h1>Transformamos tus <span>Ideas en Realidad</span></h1>
        <p>
            ${dCorta}
        </p>
        <div class="hero-buttons">
            <a href="#servicios" class="btn btn-primary">Ver Servicios</a>
            <a href="#contacto" class="btn btn-outline">Contáctanos</a>
        </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios">
        <h2 class="section-title">Nuestros Servicios</h2>
        <p class="section-description">
            Ofrecemos una amplia gama de servicios para ayudarte a crecer tu negocio
        </p>
        <div class="cards">
            <div class="card">
                <div class="card-icon"></div>
                <h3 class="card-title">Estrategia</h3>
                <p class="card-text">
                    ${estrategia}
                </p>
            </div>
            <div class="card">
                <div class="card-icon"></div>
                <h3 class="card-title">Solucion</h3>
                <p class="card-text">
                    ${solucion}
                </p>
            </div>
            <div class="card">
                <div class="card-icon"></div>
                <h3 class="card-title">Mision</h3>
                <p class="card-text">
                    ${mision}
                </p>
            </div>
        </div>
    </section>

    <!-- SOBRE NOSOTROS -->
    <section id="sobre-nosotros" class="about">
        <h2 class="section-title">Sobre Nosotros</h2>
        <p class="about-text">
            ${dLarga}
        </p>
    </section>

    <!-- CONTACTO -->
    <section id="contacto">
        <h2 class="section-title">Contacto</h2>
        <p class="section-description">
            ¿Listo para tu próximo proyecto? ¡Contáctanos!
        </p>
        <div class="contact-info">
            <div>Email: ${email}</div>
            <div>Teléfono: ${telefono}</div>
            <div>Dirección: ${direction}</div>
        </div>
        <div class="contact-form" style="margin-top:2rem;">
            <input type="text" placeholder="Tu nombre">
            <input type="email" placeholder="Tu email">
            <textarea rows="4" placeholder="Mensaje"></textarea>
            <button type="submit">Enviar Mensaje</button>
        </div>
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
        const menu = document.getElementById('menu');
        const menuMobile = document.getElementById('menu-mobile');

        menu.addEventListener('click', () => {
            menuMobile.classList.toggle('show');
        });

    </script>

</body>

</html>
    `;
}
