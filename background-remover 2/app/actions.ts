'use server'

import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function removeBackground(formData: FormData) {
  const file = formData.get('file') as File
  const buffer = Buffer.from(await file.arrayBuffer())

  const response = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.REMOVE_BG_API_KEY || '',
    },
    body: buffer,
  })

  if (!response.ok) {
    throw new Error('Arka plan kaldırma işlemi başarısız oldu')
  }

  const data = await response.arrayBuffer()
  const fileName = `bg-removed-${Date.now()}.png`
  const filePath = join(process.cwd(), 'public', fileName)

  await writeFile(filePath, Buffer.from(data))

  return `/api/images/${fileName}`
}

