import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "files", "Rinaldo.pdf");

    if (!fs.existsSync(filePath)) {
      return new NextResponse("CV tidak ditemukan", {
        status: 404,
      });
    }

    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Rinaldo.pdf"',
        "Content-Length": file.length.toString(),
      },
    });
  } catch (error) {
    console.error("Download CV error:", error);

    return new NextResponse("Gagal mengunduh CV", {
      status: 500,
    });
  }
}
