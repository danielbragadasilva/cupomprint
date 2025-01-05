"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Printer, QrCode, MessageSquare, Settings, Cloud, Lock, HelpCircle, ChevronRight, Menu, X, Star, CheckCircle2 } from 'lucide-react'
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <QrCode className="h-6 w-6" />
            <span className="font-bold text-xl text-primary">PuPrint</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm hover:text-primary">
              Recursos
            </Link>
            <Link href="#pricing" className="text-sm hover:text-primary">
              Planos
            </Link>
            <Link href="#faq" className="text-sm hover:text-primary">
              FAQ
            </Link>
            <Link href="#support" className="text-sm hover:text-primary">
              Suporte
            </Link>
            <Link
              href="/login"
              className="text-sm px-4 py-2 rounded-md hover:bg-muted"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Contratar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-b bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link
                href="#pricing"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </Link>
              <Link
                href="#faq"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#support"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Suporte
              </Link>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/login"
                  className="text-sm px-4 py-2 rounded-md hover:bg-muted text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-center"
                >
                  Contratar
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Floating Icons */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <QrCode className="h-12 w-12 text-primary/20" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float-delayed">
              <Printer className="h-12 w-12 text-primary/20" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float">
              <MessageSquare className="h-12 w-12 text-primary/20" />
            </div>
          </div>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Gere QR code com mensagens para sua
                <span className="text-primary"> Impressora Térmica</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crie códigos QR e mensagens personalizadas para sua impressora térmica de 80 mm. Perfeito para recibos, etiquetas e muito mais.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg">
                  Contratar <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Assita nossa demonstração
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-4 bg-muted/50"
          aria-label="Features"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Recursos poderosos</h2>
              <p className="text-muted-foreground">
              Tudo que você precisa para criar e gerar códigos QR  com mensagens para sua impressora térmica
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <QrCode className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Geração de código QR</CardTitle>
                  <CardDescription>
                  Crie códigos QR personalizados com sua marca e conteúdo
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Printer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Suporte para impressora térmica</CardTitle>
                  <CardDescription>
                  Compatível com impressoras térmicas padrão de 80 mm e 58 mm
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Mensagens personalizadas</CardTitle>
                  <CardDescription>
                  Adicione mensagens personalizadas e branding às suas impressões
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Settings className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Configurações simples</CardTitle>
                  <CardDescription>
                  Personalize as configurações de impressão e os parâmetros do código QR
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Cloud Storage</CardTitle>
                  <CardDescription>
                  Armazene e gerencie seus códigos QR na nuvem
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Plataforma Segura</CardTitle>
                  <CardDescription>
                  Segurança de nível empresarial para seus dados com certificado SSL
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4" aria-label="Pricing">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Preço Simples</h2>
              <p className="text-muted-foreground">
              Escolha o plano que melhor se adapta às suas necessidades
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfeito para pequenas empresas</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$9,00</span>
                    <span className="text-muted-foreground">/mensal</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      100 códigos QR/mês
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Personalização básica
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Suporte por e-mail
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contratar</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pro</CardTitle>
                    <span className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                      Popular
                    </span>
                  </div>
                  <CardDescription>Para empresas em crescimento</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$29,00</span>
                    <span className="text-muted-foreground">/mensal</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Códigos QR ilimitados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Personalização avançada
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Suporte prioritário
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Painel de análise
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contratar</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Para grandes organizações</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$99,00</span>
                    <span className="text-muted-foreground">/mensal</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Tudo ilimitado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Integração personalizada
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Suporte via WhatsApp
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Garantia de SLA
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contratar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-muted/50" aria-label="FAQ">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
              Perguntas frequentes
              </h2>
              <p className="text-muted-foreground">
              Encontre respostas para perguntas comuns sobre nosso serviço
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                Que tipo de impressoras térmicas são suportadas?
                </AccordionTrigger>
                <AccordionContent>
                Oferecemos suporte a todas as impressoras térmicas padrão de 80 mm que são compatíveis
                  com comandos ESC/POS. Isso inclui marcas mais populares como
                  Epson, Elgin, Generic e modelos semelhantes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                Posso personalizar o design do código QR?
                </AccordionTrigger>
                <AccordionContent>
                Sim! Você pode personalizar o tamanho do código QR, nível de correção de erros,
                  e adicione seu logotipo ou elementos de marca ao centro do código QR.
                  Os planos Pro e Enterprise oferecem opções adicionais de personalização.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Como funciona o pagamento?</AccordionTrigger>
                <AccordionContent>
                Oferecemos opções de pagamento mensal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                Existe um limite para a geração de códigos QR?
                </AccordionTrigger>
                <AccordionContent>
                O plano Starter inclui 100 códigos QR por mês. Pró e
                  Os planos empresariais oferecem geração ilimitada de códigos QR. QR não utilizado
                  os códigos não passam para o mês seguinte.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-20 px-4" aria-label="Support">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Precisar de ajuda?</h2>
              <p className="text-muted-foreground">
              Nossa equipe de suporte está aqui para ajudá-lo
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <HelpCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Documentação</CardTitle>
                  <CardDescription>
                  Guias detalhados e documentação da API
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Em breve
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Chat</CardTitle>
                  <CardDescription>
                  Converse com nossa equipe de suporte em tempo real
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Iniciar Atendimento
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Communidade</CardTitle>
                  <CardDescription>
                  Participe da nossa comunidade para dicas e truques
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                  Junte-se a comunidade
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Vagas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Termos de uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Segurança
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} PuPrint. Todos os direitos reservados.
            </p>
            <p className="text-center text-[1.5vh] text-muted-foreground">

              Desenvolvido por{" "}
              <a
                href="https://danielbragadasilva.github.io/projeto/"
                target="_blank"
                className="font-bold underline"
              >
                Daniboy
              </a>
              <a href="">🔷</a>

            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

