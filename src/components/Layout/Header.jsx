const Header = () =>{
    return(
        <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Mon Site</h1>
                <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-gray-400">Accueil</a></li>
                    <li><a href="#" className="hover:text-gray-400">À propos</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header