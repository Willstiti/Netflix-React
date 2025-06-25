import { connexion } from "@/tools/database";
import { NextResponse } from "next/server";

// GET: Liste des catégories
export const GET = async () => {
  try {
    const [result] = await connexion.query("SELECT * FROM categories;");
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erreur GET /api/categories:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
};

// POST: Ajouter une catégorie
export const POST = async (req) => {
  try {
    const body = await req.json();

    const [result] = await connexion.execute(
      "INSERT INTO categories (nom) VALUES (?)",
      [body.nom]
    );

    return NextResponse.json({
      message: "Catégorie ajoutée avec succès",
      category: { id: result.insertId, nom: body.nom }
    }, { status: 201 });

  } catch (error) {
    console.error("Erreur POST /api/categories:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
};
