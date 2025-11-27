import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      ok: true,
      message: "Connected to MongoDB successfully!",
      collections: collections.map((c) => c.name),
    });
  } catch (error: any) {
    console.error("DB error:", error);
    return NextResponse.json(
      { ok: false, error: error.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
