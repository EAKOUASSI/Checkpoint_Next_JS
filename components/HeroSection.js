export default function HeroSection() {
return (
    <section
        id="accueil"
        className="h-[90vh] bg-cover bg-center text-white text-center p-8"
        style={{ backgroundImage: "url('/Images/image_kea.jpg')" }}
        >
        <h2 className="text-4xl font-bold text-gray-900">Bienvenue sur mon portfolio</h2>
        <p className="mt-4 font-bold text-white">
            Apprenant projet E2C en Informatique spécialité &quot;Développeur D&apos;application&quot;
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-4">
            <a href="/cv.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Télécharger mon CV
            </a>
        </div>
    </section>
    );
    }
