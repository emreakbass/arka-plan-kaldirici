import { Footer } from '../components/footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">İletişim</h1>
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30">
          <p className="text-white/90 mb-4">
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
          </p>
          <ul className="list-disc list-inside text-white/90 mb-4">
            <li>E-posta: <a href="mailto:arkaplanikaldir@gmail.com" className="underline hover:text-white">arkaplanikaldir@gmail.com</a></li>
          </ul>
          <p className="text-white/90">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bize ulaşmaktan çekinmeyin. En kısa sürede size yanıt vereceğiz.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

