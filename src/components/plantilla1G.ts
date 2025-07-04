export function plantilla1G(
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
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${nombreEmpresa}</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
        }

        /* Estilos generales del nav */
        .nav {
            background-color: #111827;
            /* gris oscuro */
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 2rem;
            font-family: system-ui, sans-serif;
            position: relative;
            z-index: 50;
        }

        /* Título */
        .titleBS {
            font-size: 1.5rem;
            font-weight: 700;
        }

        /* Sección de la lista (desktop) */
        .section-list {
            display: flex;
        }

        .navList {
            list-style: none;
            display: flex;
            gap: 2rem;
            margin: 0;
            padding: 0;
        }

        .navList li {
            cursor: pointer;
            color: #9ca3af;
            /* gris claro */
            transition: color 0.3s ease;
        }

        .navList li:hover {
            color: white;
        }

        .navList li a {
            cursor: pointer;
            color: #9ca3af;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        html {
            scroll-behavior: smooth;
        }

        .navList li a:hover {
            color: white;
        }

        /* Botón hamburguesa */
        .menu {
            background: none;
            border: none;
            cursor: pointer;
            display: none;
        }

        /* Menú mobile */
        .section-list-mobile {
            background-color: #111827;
            padding: 1rem 2rem;
        }

        .navList-mobile {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 0;
            padding: 0;
        }

        .navList-mobile li {
            cursor: pointer;
            color: #9ca3af;
            transition: color 0.3s ease;
        }

        .navList-mobile li:hover {
            color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .section-list {
                display: none;
            }

            .menu {
                display: block;
            }
        }


        /* Layout base */
        .hero-section {
            min-height: calc(100vh - 80px);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            background: linear-gradient(to bottom right, #ebf8ff, #ffffff, #f3e8ff);
            font-family: system-ui, sans-serif;
            text-align: center;
            padding: 0 1.5rem;
        }

        /* Grid pattern background with low opacity */
        .bg-grid-pattern {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.05;
            pointer-events: none;
            z-index: 1;
        }

        /* Container */
        .container {
            max-width: 1024px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        /* Fade in animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-in {
            animation: fadeIn 1s ease forwards;
        }

        /* Title */
        .title {
            font-size: 3rem;
            /* 48px */
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(to right, #2563eb, #7c3aed);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .titleBS {
            background: linear-gradient(to right, #2563eb, #7c3aed);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.1;
        }

        /* Responsive title font */
        @media (min-width: 768px) {
            .title {
                font-size: 4.5rem;
                /* 72px */
            }
        }

        /* Subtitle */
        .subtitle {
            font-size: 1.25rem;
            /* 20px */
            color: #4b5563;
            /* gray-600 */
            margin-bottom: 2rem;
            max-width: 48rem;
            /* approx 768px */
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
        }

        /* Buttons container */
        .buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: center;
        }

        /* Buttons horizontal on wider screens */
        @media (min-width: 640px) {
            .buttons {
                flex-direction: row;
            }
        }

        /* Base button styles */
        .btn {
            font-size: 1.125rem;
            /* 18px */
            padding: 1rem 2rem;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4), 0 4px 6px -2px rgba(37, 99, 235, 0.3);
            border: none;
            user-select: none;
        }

        /* Primary button */
        .btn-primary {
            background-color: #2563eb;
            /* blue-600 */
            color: white;
        }

        .btn-primary:hover {
            background-color: #1e40af;
            /* blue-700 */
            transform: scale(1.05);
        }

        /* Arrow inside primary button */
        .arrow-right {
            margin-left: 0.5rem;
            font-weight: bold;
            font-size: 1.25rem;
            line-height: 1;
        }

        /* Outline button */
        .btn-outline {
            background-color: transparent;
            color: #2563eb;
            border: 2px solid #2563eb;
            box-shadow: none;
        }

        .btn-outline:hover {
            background-color: #2563eb;
            color: white;
            transform: scale(1.05);
        }

        /* Scroll indicator container */
        .scroll-indicator {
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
            z-index: 10;
        }

        /* Bounce animation */
        @keyframes bounce {

            0%,
            100% {
                transform: translateX(-50%) translateY(0);
            }

            50% {
                transform: translateX(-50%) translateY(-10px);
            }
        }

        /* Scroll mouse shape */
        .scroll-mouse {
            width: 24px;
            height: 40px;
            border: 2px solid #2563eb;
            border-radius: 9999px;
            display: flex;
            justify-content: center;
            position: relative;
        }

        /* Scroll wheel inside mouse */
        .scroll-wheel {
            width: 4px;
            height: 12px;
            background-color: #2563eb;
            border-radius: 9999px;
            margin-top: 8px;
        }


        @media (max-width: 768px) {
            .menu {
                display: block;
                background-color: transparent;
                border: none;
                cursor: pointer;
            }

            .section-list {
                display: none;
            }

            .section-list-mobile {
                width: 100%;
                overflow: hidden;
                max-height: 0;
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .section-list-mobile.open {
                max-height: 500px;
                opacity: 1;
                visibility: visible;
            }

            .navList-mobile {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 14px;
                margin-top: 14px;
            }

            .navList-mobile li {
                cursor: pointer;
            }

        }

        .services-section {
            padding: 5rem 1.5rem;
            /* py-20 */
            background-color: white;
            font-family: system-ui, sans-serif;
            color: #1f2937;
            /* gray-900 */
        }

        .container {
            max-width: 1024px;
            margin: 0 auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        /* Header texto centrado */
        .header {
            margin-bottom: 4rem;
            /* mb-16 */
        }

        .title {
            font-size: 2.25rem;
            /* text-4xl */
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1f2937;
        }

        @media (min-width: 768px) {
            .title {
                font-size: 3rem;
                /* text-5xl */
            }
        }

        .subtitle {
            font-size: 1.25rem;
            /* text-xl */
            color: #4b5563;
            /* gray-600 */
            max-width: 40rem;
            /* max-w-2xl */
            margin-left: auto;
            margin-right: auto;
        }

        /* Grid para los cards */
        .services-grid {
            display: grid;
            gap: 2rem;
            max-width: 1536px;
            /* max-w-6xl */
            margin-left: auto;
            margin-right: auto;
        }

        @media (min-width: 768px) {
            .services-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* Card */
        .card {
            background: linear-gradient(to bottom right, #ffffff, #f9fafb);
            /* from-white to-gray-50 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: none;
            border-radius: 0.5rem;
            padding: 2rem 1.5rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
                0 10px 10px -5px rgba(0, 0, 0, 0.1);
            transform: scale(1.05);
        }

        /* Card header */
        .card-header {
            padding-bottom: 1rem;
        }

        /* Icon circle */
        .icon-circle {
            width: 64px;
            height: 64px;
            background: linear-gradient(to bottom right, #2563eb, #7c3aed);
            /* blue-600 to purple-600 */
            border-radius: 9999px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 1rem auto;
        }

        /* Icon svg */
        .icon {
            width: 32px;
            height: 32px;
            fill: white;
        }

        /* Card title */
        .card-title {
            font-size: 1.5rem;
            /* text-2xl */
            font-weight: 700;
            color: #1f2937;
        }

        /* Card content */
        .card-content {
            text-align: center;
        }

        .card-description {
            color: #4b5563;
            line-height: 1.6;
        }

        .about-section {
            padding: 5rem 1.5rem;
            /* py-20 */
            background: linear-gradient(to bottom right, #f9fafb, #ebf8ff);
            /* from-gray-50 to-blue-50 */
            font-family: system-ui, sans-serif;
            color: #1f2937;
            /* gray-900 */
        }

        .container {
            max-width: 1024px;
            margin: 0 auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .about-grid {
            display: grid;
            gap: 3rem;
            /* gap-12 */
            align-items: center;
            max-width: 1536px;
            /* max-w-6xl */
            margin-left: auto;
            margin-right: auto;
        }

        @media (min-width: 1024px) {
            .about-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .about-title {
            font-size: 2.25rem;
            /* text-4xl */
            font-weight: 700;
            margin-bottom: 1.5rem;
            /* mb-6 */
            color: #1f2937;
        }

        @media (min-width: 768px) {
            .about-title {
                font-size: 3rem;
                /* text-5xl */
            }
        }

        .about-paragraph {
            font-size: 1.125rem;
            /* text-lg */
            color: #4b5563;
            /* gray-600 */
            margin-bottom: 1.5rem;
            /* mb-6 */
            line-height: 1.75;
            padding-right: 1.5rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            /* gap-8 */
            text-align: center;
            margin-top: 2rem;
        }

        .stat-item .stat-value {
            font-size: 1.875rem;
            /* text-3xl */
            font-weight: 700;
            color: #2563eb;
            /* blue-600 */
            margin-bottom: 0.5rem;
        }

        .stat-item .stat-label {
            color: #4b5563;
            /* gray-600 */
            font-size: 1rem;
        }

        /* Caja misión */
        .mission-box {
            position: relative;
            background: linear-gradient(to bottom right, #2563eb, #7c3aed);
            /* from-blue-600 to-purple-600 */
            border-radius: 1rem;
            /* rounded-2xl */
            padding: 2rem;
            /* p-8 */
            color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            /* shadow-2xl */
        }

        .mission-title {
            font-size: 1.5rem;
            /* text-2xl */
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .mission-text {
            color: #bfdbfe;
            /* text-blue-100 */
            line-height: 1.75;
        }

        .contact-section {
            padding: 5rem 1.5rem;
            background: linear-gradient(to bottom right, #2563eb, #7c3aed);
            color: white;
            font-family: system-ui, sans-serif;
        }

        .container {
            max-width: 1024px;
            margin: 0 auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        /* Header */
        .section-header {
            max-width: 640px;
            margin: 0 auto 4rem auto;
            text-align: center;
        }

        .section-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
            .section-title {
                font-size: 3rem;
            }
        }

        .section-subtitle {
            font-size: 1.25rem;
            color: #bfdbfe;
        }

        /* Grid */
        .contact-grid {
            display: grid;
            gap: 3rem;
            max-width: 1536px;
            margin: 0 auto;
        }

        @media (min-width: 1024px) {
            .contact-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Contact Info */
        .contact-info-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .contact-items {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            gap: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: start;

        }

        .icon-circle {
            width: 24px;
            height: 24px;
            margin-right: 1rem;
            color: #dbeafe;
        }

        .contact-label {
            font-weight: 600;
        }

        .contact-text {
            color: #bfdbfe;
        }

        /* Form */
        .contact-form-box {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 1rem;
            padding: 2rem;
        }

        .contact-form-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .form-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .form-input,
        .form-textarea {
            background-color: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.375rem;
            padding: 0.75rem 1rem;
            color: white;
            width: 100%;
            font-size: 1rem;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        .form-input.full {
            grid-column: span 2;
        }

        .form-textarea {
            resize: vertical;
        }

        .form-button {
            background-color: white;
            color: #2563eb;
            font-weight: 600;
            padding: 0.75rem;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

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
    <nav class="nav">
        <section class="titleBS">${nombreEmpresa}</section>
        <section class="section-list">
            <ul class="navList">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </section>
        <button class="menu" id="menu" hidden>
            <svg width="30" height="30" viewBox="0 0 100 80" fill="black">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
            </svg>
        </button>
    </nav>

    <section class="section-list-mobile" id="menu-mobile" hidden>
        <ul class="navList-mobile">
            <li><a href="#inicio" onclick="closeMenu()">Inicio</a></li>
            <li><a href="#servicios" onclick="closeMenu()">Servicios</a></li>
            <li><a href="#sobre-nosotros" onclick="closeMenu()">Sobre Nosotros</a></li>
            <li><a href="#contacto" onclick="closeMenu()">Contacto</a></li>
        </ul>
    </section>

    <section class="hero-section" id="inicio">
        <div class="bg-grid-pattern"></div>
        <div class="container">
            <div class="content animate-fade-in">
                <h1 class="title">${nombreEmpresa}</h1>
                <p class="subtitle">
                    ${dCorta}
                </p>
                <div class="buttons">
                    <a href="#contacto">
                        <button class="btn btn-primary">
                            Empecemos
                            <span class="arrow-right">→</span>
                        </button>
                    </a>
                    <a href="#servicios">
                        <button class="btn btn-outline">
                            Leer mas
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="scroll-mouse">
                <div class="scroll-wheel"></div>
            </div>
        </div>
    </section>

    <section class="services-section" id="servicios">
        <div class="container">
            <div class="header text-center">
                <h2 class="title">Nuestros servicios</h2>
                <p class="subtitle">
                    Ofrecemos soluciones integrales diseñadas para elevar su negocio al siguiente nivel
                </p>
            </div>

            <div class="services-grid">
                <div class="card">
                    <div class="card-header">
                        <div class="icon-circle">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                width="32" height="32">
                            </svg>
                        </div>
                        <h3 class="card-title">Estrategia</h3>
                    </div>
                    <div class="card-content">
                        <p class="card-description">
                            ${estrategia}
                        </p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="icon-circle">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                width="32" height="32">
                            </svg>
                        </div>
                        <h3 class="card-title">Solucion</h3>
                    </div>
                    <div class="card-content">
                        <p class="card-description">
                            ${solucion}
                        </p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="icon-circle">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                width="32" height="32">
                            </svg>
                        </div>
                        <h3 class="card-title">Servicios de consultoría</h3>
                    </div>
                    <div class="card-content">
                        <p class="card-description">
                            Orientación y asesoramiento de expertos para afrontar retos y oportunidades empresariales
                            complejos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-section" id="sobre-nosotros">
        <div class="container">
            <div class="about-grid">

                <!-- Texto principal -->
                <div class="about-content">
                    <h2 class="about-title">Sobre la compañia</h2>
                    <p class="about-paragraph">
                        ${dLarga}
                    </p>

                    <!-- Estadísticas -->
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">500+</div>
                            <div class="stat-label">Projects Completed</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">98%</div>
                            <div class="stat-label">Client Satisfaction</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">10+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>

                <!-- Caja de misión -->
                <div class="mission-box">
                    <h3 class="mission-title">Nuestra mision</h3>
                    <p class="mission-text">
                        ${mision}
                    </p>
                </div>

            </div>
        </div>
    </section>

    <section class="contact-section" id="contacto">
        <div class="container">

            <!-- Header -->
            <div class="section-header">
                <h2 class="section-title">Listo para transformar tu negocio?</h2>
                <p class="section-subtitle">
                    !Contacta con nosotros¡
                </p>
            </div>

            <!-- Grid: Contact info + Form -->
            <div class="contact-grid">

                <!-- Contact Information -->
                <div class="contact-info">
                    <h3 class="contact-info-title">Información</h3>
                    <div class="contact-items">
                        <div class="contact-item">
                            <div class="icon-circle">
                                <!-- icon: Mail -->
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 24 24" width="24" height="24">
                                    <!-- tu icono aquí -->
                                </svg>
                            </div>
                            <div>
                                <div class="contact-label">Email</div>
                                <div class="contact-text">${email}</div>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon-circle">
                                <!-- icon: Phone -->
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 24 24" width="24" height="24">
                                    <!-- tu icono aquí -->
                                </svg>
                            </div>
                            <div>
                                <div class="contact-label">Telefono</div>
                                <div class="contact-text">${telefono}</div>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon-circle">
                                <!-- icon: Building -->
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 24 24" width="24" height="24">
                                    <!-- tu icono aquí -->
                                </svg>
                            </div>
                            <div>
                                <div class="contact-label">Dirección</div>
                                <div class="contact-text">
                                    ${direction}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-box">
                    <h3 class="contact-form-title">Envianos un mensaje</h3>
                    <form class="contact-form">
                        <div class="form-row">
                            <input type="text" placeholder="Nombre" class="form-input" />
                            <input type="text" placeholder="Apellido" class="form-input" />
                        </div>
                        <input type="email" placeholder="Email" class="form-input full" />
                        <input type="text" placeholder="Compañia" class="form-input full" />
                        <textarea placeholder="Hablanos sobre tu proyecto..." rows="4" class="form-textarea"></textarea>
                        <button type="submit" class="form-button">Enviar mensaje</button>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-grid">

            <!-- Columna 1 -->
            <div>
                <h2 class="footer-title">We Do Websites</h2>
                <p class="footer-text">Creamos páginas web personalizadas, rápidas y optimizadas para tu negocio.</p>
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
        let menuOpen = false;

        const openMenu = () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                menuMobile.classList.add('open');
            } else {
                menuMobile.classList.remove('open');
            }
        }

        menu.addEventListener('click', openMenu);
    </script>
</body>

</html>
    `;
}
