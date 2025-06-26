import Header from "@/components/Layout/Header"

export default function SpecificCategorie({ categorie, films }) {
  return (
    <div className="content">
      <Header/>
      <main className="categories-content">
            <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-4">Catégorie : {categorie.nom}</h1>

            {films.length > 0 ? (
                <ul className="space-y-2">
                {films.map((film) => (
                    <li
                    key={film.id}
                    className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 transition"
                    >
                    <h2 className="text-xl font-semibold">{film.titre}</h2>
                    <p className="text-sm text-gray-400">{film.description}</p>
                    </li>
                ))}
                </ul>
            ) : (
                <p>Aucun film dans cette catégorie.</p>
            )}
            </div>
        </main>
    </div>
  );
}
