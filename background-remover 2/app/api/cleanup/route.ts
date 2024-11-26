import { unlink, readdir } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const tempDir = join(process.cwd(), 'public', 'temp')
    const files = await readdir(tempDir)
    
    // Delete files older than 1 hour
    const oneHourAgo = Date.now() - 3600000
    
    for (const file of files) {
      const filePath = join(tempDir, file)
      const stats = await fs.stat(filePath)
      
      if (stats.ctimeMs < oneHourAgo) {
        await unlink(filePath)
      }
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

