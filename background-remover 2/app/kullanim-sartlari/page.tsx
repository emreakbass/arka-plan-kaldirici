import { Footer } from '../components/footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">Kullanım Şartları</h1>
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30">
          <p className="text-white/90 mb-4">
            Arka Planı Kaldır hizmetini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş olursunuz:
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Hizmet Kullanımı</h2>
          <p className="text-white/90 mb-4">
            Hizmetimizi yalnızca yasal amaçlar için kullanmalısınız. Telif hakkı ihlali, yasadışı içerik veya zararlı yazılım içeren görselleri yüklemek yasaktır.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Sorumluluk Reddi</h2>
          <p className="text-white/90 mb-4">
            Arka Planı Kaldır, hizmetin kesintisiz veya hatasız olacağını garanti etmez. Hizmetin kullanımından doğabilecek herhangi bir zarardan sorumlu değiliz.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Telif Hakkı</h2>
          <p className="text-white/90 mb-4">
            Yüklediğiniz görsellerin telif haklarına sahip olduğunuzdan veya kullanım izniniz olduğundan emin olmalısınız. Telif hakkı ihlallerinden kullanıcı sorumludur.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Değişiklikler</h2>
          <p className="text-white/90">
            Bu kullanım şartları zaman zaman güncellenebilir. Değişiklikler olduğunda, bu sayfada duyurulacaktır. Hizmeti kullanmaya devam ederek, güncellenmiş şartları kabul etmiş sayılırsınız.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

