import { connexion } from "@/tools/database";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    const [result] = await connexion.execute("DELETE FROM categories WHERE id = ?", [id]);
    return NextResponse.json({ message: "Catégorie supprimée", id });
  } catch (error) {
    console.error("Erreur DELETE :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  try {
    const [result] = await connexion.execute("UPDATE categories SET nom = ? WHERE id = ?", [
      body.nom,
      id,
    ]);
    return NextResponse.json({ message: "Catégorie mise à jour", id, newName: body.nom });
  } catch (error) {
    console.error("Erreur PUT :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
