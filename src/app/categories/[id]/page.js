import SpecificCategorie from "@/pages/SpecificCategorie";
import { connexion } from "@/tools/database";

export default async function SpecificCategoriePage({ params }) {
    const { id } = params;

    const [catRows] = await connexion.execute("SELECT * FROM categories WHERE id = ?", [id]);
    const categorie = catRows[0];

    if (!categorie) {
        return <div className="text-white p-6">Catégorie introuvable</div>;
    }

    const [films] = await connexion.execute(
        "SELECT * FROM movies WHERE idCategory = ?",
        [id]
    );
    return <SpecificCategorie categorie={categorie} films={films} />;
}