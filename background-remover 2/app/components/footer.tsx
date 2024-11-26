import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Arka Plan Kaldırıcı</h2>
            <p className="text-sm">Fotoğraflarınızdan kolayca arka planı kaldırın.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-600 hover:underline">Ana Sayfa</Link></li>
              <li><Link href="/about" className="text-blue-600 hover:underline">Hakkımızda</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:underline">İletişim</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Yasal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-blue-600 hover:underline">Gizlilik Politikası</Link></li>
              <li><Link href="/terms" className="text-blue-600 hover:underline">Kullanım Şartları</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-md font-semibold mb-2">İletişim</h3>
            <p className="text-sm">E-posta: <a href="mailto:arkaplankaldir@gmail.com" className="text-blue-600 hover:underline">arkaplankaldir@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Arka Plan Kaldırıcı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

