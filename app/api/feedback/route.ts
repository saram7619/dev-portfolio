import { NextResponse } from "next/server"
import prisma from "../../lib/prismadb"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  const feedback = await prisma.feedback.create({
    data: {
      name,
      email,
      message,
    },
  })
  return NextResponse.json(feedback)
}
