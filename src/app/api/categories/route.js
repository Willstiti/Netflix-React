import { connexion } from "@/tools/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await connexion.query("SELECT * FROM categories;");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Erreur DB:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}