import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename
  const filePath = join(process.cwd(), 'public', filename)

  try {
    const fileBuffer = await readFile(filePath)
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 404 })
  }
}

