// src/app/api/teste/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ mensagem: 'API funcionando!' })
}
