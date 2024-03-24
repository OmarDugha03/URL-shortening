import { connectMongoDB } from '@/lib/connectMongoDB'
import Link from '@/models/link'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { link, userId } = await request.json()
  await connectMongoDB()
  await Link.create({ link, author: userId })
  return NextResponse.json({ message: 'Link Registered' }, { status: 201 })
}
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Link.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Link deleted' }, { status: 200 })
}

export async function GET() {
  await connectMongoDB()
  const links = await Link.find()
  return NextResponse.json({ links })
}
