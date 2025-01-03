
import LandingPage from '@/components/landing-page';
import ThermalReceipt from '@/components/thermal-receipt';
import Image from 'next/image'


export default function Page() {
  return (
    <main className="min-h-screen py-8 bg-sky-">
                <LandingPage />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
          {/* <Image
      src="./logo.png"
      width={100}
      height={100}
      alt="PuPrint"
    />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">PuPrint</h1>
            <p className="text-gray-600 mt-2">
              Gere códigos QR e mensagens personalizadas para sua impressora
              térmica
            </p> */}
          </div>

          {/* <ThermalReceipt /> */}



          <div className="flex justify-center pt-2">
            <footer>
              Desenvolvido por{" "}
              <a
                href="https://danielbragadasilva.github.io/projeto/"
                target="_blank"
                className="font-bold underline"
              >
                Daniboy
              </a>
              <a href="">🔷</a>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
