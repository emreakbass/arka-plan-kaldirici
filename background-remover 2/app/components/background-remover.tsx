'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { removeBackground } from '../actions'

export default function BackgroundRemover() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const { pending } = useFormStatus()

  async function handleSubmit(formData: FormData) {
    try {
      const result = await removeBackground(formData)
      setImageUrl(result)
    } catch (error) {
      console.error('Hata:', error)
      alert('Bir hata oluştu. Lütfen tekrar deneyin.')
    }
  }

  return (
    <div className="w-full max-w-md">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Resim Seçin
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {pending ? 'İşleniyor...' : 'Arka Planı Kaldır'}
        </button>
      </form>
      {imageUrl && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">İşlenmiş Resim</h2>
          <img src={imageUrl} alt="Arka planı kaldırılmış resim" className="max-w-full h-auto" />
          <a
            href={imageUrl}
            download
            className="mt-4 inline-block py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            İndir
          </a>
        </div>
      )}
    </div>
  )
}

