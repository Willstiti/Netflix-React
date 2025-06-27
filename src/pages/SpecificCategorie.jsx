import Header from "@/components/Layout/Header"

export default function SpecificCategorie({ categorie, films, series }) {
  return (
    <div className="content">
      <Header/>
      <main className="categories-content">
            <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-4">Catégorie : {categorie.nom}</h1>

            {films.length > 0 ? (
              <>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Film</h3>
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
              </>
            ) : (
                <p>Aucun film dans cette catégorie.</p>
            )}

            {series.length > 0 ? (
              <>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Series</h3>
                <ul className="space-y-2">
                {series.map((series) => (
                    <li
                    key={series.id}
                    className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 transition"
                    >
                    <h2 className="text-xl font-semibold">{series.titre}</h2>
                    <p className="text-sm text-gray-400">{series.description}</p>
                    </li>
                ))}
                </ul>
              </>
            ) : (
                <p>Aucune série dans cette catégorie.</p>
            )}
            </div>
        </main>
    </div>
  );
}
