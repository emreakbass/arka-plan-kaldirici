import { Footer } from '../components/footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">Gizlilik Politikası</h1>
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30">
          <p className="text-white/90 mb-4">
            Arka Planı Kaldır olarak, gizliliğinize önem veriyoruz. Bu gizlilik politikası, hizmetimizi kullanırken toplanan, işlenen ve saklanan bilgilerinizi nasıl koruduğumuzu açıklar.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Bilgi Toplama ve Kullanımı</h2>
          <p className="text-white/90 mb-4">
            Hizmetimizi kullanırken, yalnızca arka planı kaldırılacak görselleri geçici olarak işleriz. Bu görseller, işlem tamamlandıktan hemen sonra sunucularımızdan silinir.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Çerezler</h2>
          <p className="text-white/90 mb-4">
            Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Bu çerezler, kişisel bilgilerinizi içermez ve istediğiniz zaman tarayıcı ayarlarınızdan devre dışı bırakılabilir.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">Güvenlik</h2>
          <p className="text-white/90 mb-4">
            Bilgilerinizin güvenliğini sağlamak için çeşitli güvenlik önlemleri uyguluyoruz. Tüm veriler şifrelenir ve güvenli sunucularda saklanır.
          </p>
          <p className="text-white/90">
            Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler olduğunda, bu sayfada duyurulacaktır.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

