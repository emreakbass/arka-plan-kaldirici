import { Footer } from '../components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">Hakkımızda</h1>
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30">
          <p className="text-white/90 mb-4">
            Arka Planı Kaldır, fotoğraflarınızdan kolayca arka planı kaldırmanıza olanak sağlayan yenilikçi bir web uygulamasıdır. Amacımız, kullanıcılarımıza basit, hızlı ve etkili bir şekilde görsellerini düzenleme imkanı sunmaktır.
          </p>
          <p className="text-white/90 mb-4">
            Ekibimiz, görüntü işleme ve web teknolojileri konusunda uzman kişilerden oluşmaktadır. Sürekli olarak hizmetimizi geliştirmek ve kullanıcı deneyimini iyileştirmek için çalışıyoruz.
          </p>
          <p className="text-white/90">
            Arka Planı Kaldır'ı kullanarak, profesyonel görünümlü görseller oluşturabilir, sosyal medya paylaşımlarınızı geliştirebilir veya kişisel projeleriniz için yaratıcı çözümler üretebilirsiniz.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

