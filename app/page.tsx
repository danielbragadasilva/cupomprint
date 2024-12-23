import ThermalReceipt from "@/components/thermal-receipt";


export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-8">
          Gerador de Fidelização
        </h1>
        <ThermalReceipt />
      </div>
    </main>
  )
}
