<script>
    let person = {
        name: "David",
        cargo: "Programador Principal de Sistemas",
        email: "soporte@surfactan.com.ar",
        phone: "1142875462",
        interno: "102",
    };

    let company = {
        name: "SURFACTAN SA",
        address: "Malvinas Argentinas 4495 - Victoria",
        phone: "+54 - 1147144085/97",
        email: "www.surfactan.com.ar",
    };
</script>

<main>
    <div id="content">
        <div id="info-container">
            <h2>Información Personal</h2>
            <ul>
                <li>
                    <i class="fa-solid fa-user"></i>
                    {person.name}
                </li>
                <li>
                    <i class="fa-solid fa-briefcase"></i>
                    {person.cargo}
                </li>
                <li>
                    <i class="fa-regular fa-envelope"></i>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                </li>
                <li>
                    <i class="fa-brands fa-whatsapp"></i>
                    <a
                        href="https://wa.me/541140286735?text=Hola,%20Este%20mensaje%20es%20para%20que%20se%20guarde%20mi%20contacto%20de%20Surfactan%20S.A%20Muchas%20Gracias!%20Daniel%20Rodriguez%20"
                        target="_blank">1140286735</a
                    >
                </li>
            </ul>
            <div id="company-info">
                <h2>Información de la Empresa</h2>
                <ul>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        {company.address}
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        {company.phone} // Interno {person.interno}
                    </li>

                    <li>
                        <i class="fa-solid fa-globe"></i>
                        <a href={`https://www.surfactan.com.ar/es`}
                            >{company.email}</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div id="image-container">
            <img src="david.jpg" alt="Foto de la persona" />
        </div>
    </div>
</main>

<style>
    body {
        font-family: "Arial", sans-serif;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #f4f4f4;
        padding: 20px;
    }

    main {
        text-align: center;
    }

    #content {
        display: flex;
        flex-direction: column;

        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }

    #info-container {
        padding: 20px;
        text-align: left;
    }

    #image-container img {
        width: 250px;
        height: auto;
        object-fit: cover;
        margin-top: 20px;
        border-radius: 15px;
        border: 2px solid #000;
    }

    h2 {
        color: #333;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    #company-info a {
        color: #007bff;
        text-decoration: underline;
    }

    #company-info li a {
        color: #007bff;
        text-decoration: underline;
    }
    @media screen and (min-width: 768px) {
        #content {
            flex-direction: row;
        }

        #info-container {
            flex: 1;
        }

        #image-container {
            flex: 1;
        }
    }

    strong {
        margin-right: 10px;
    }

    i {
        font-size: 20px;
        margin-right: 5px;
    }
</style>
