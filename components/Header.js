export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-xl">Edwige Annick KOUASSI</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#accueil" className="hover:text-gray-400">Accueil</a></li>
          <li><a href="#projets" className="hover:text-gray-400">Projets</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
