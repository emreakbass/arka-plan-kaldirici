'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { removeBackground } from '../actions'

export default function FileUpload() {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsUploading(true)
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const fileName = await removeBackground(formData)
      router.push(`/download/${fileName}`)
    } catch (error) {
      console.error('Upload error:', error)
      setError('Yükleme sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
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
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        <button
          type="submit"
          disabled={isUploading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isUploading ? 'Yükleniyor...' : 'Arka Planı Kaldır'}
        </button>
      </form>
    </div>
  )
}

