import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // ✅ FIX

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.project.findMany();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch data" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
