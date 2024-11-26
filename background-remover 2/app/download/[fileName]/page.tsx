import Link from 'next/link'

export default function DownloadPage({ params }: { params: { fileName: string } }) {
  const imageUrl = `/processed-images/${params.fileName}`

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">İşlenmiş Resim</h1>
      <div className="mb-4">
        <img src={imageUrl} alt="Arka planı kaldırılmış resim" className="max-w-full h-auto rounded-lg" />
      </div>
      <div className="flex justify-between">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Yeni Resim Yükle
        </Link>
        <a
          href={imageUrl}
          download
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          İndir
        </a>
      </div>
    </div>
  )
}

