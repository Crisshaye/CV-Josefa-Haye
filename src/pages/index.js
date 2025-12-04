import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { 
  Mail, Phone, MapPin, BookOpen, GraduationCap, Users, 
  HeartHandshake, Globe, Award, Laptop, MessageCircle
} from "lucide-react"

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* HEADER */}
        <header className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white p-10 text-center relative">
          <div className="absolute top-6 right-6 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm">
            Disponible
          </div>
          <StaticImage
            src="../images/foto_principal.jpg"
            alt="Josefa Cote Haye"
            width={160}
            height={160}
            className="rounded-full ring-8 ring-white/40 mx-auto mb-6 shadow-xl"
            placeholder="blurred"
          />
          <h1 className="text-4xl md:text-5xl font-black mb-2">Josefa Haye</h1>
          <p className="text-xl md:text-2xl opacity-90">Tutora de Tesis & Mentora Académica</p>
          <div className="flex justify-center gap-8 mt-6 text-lg">
            <a href="mailto:pbarroscorrea@gmail.com" className="flex items-center gap-2 hover:scale-110 transition">
              <Mail className="w-5 h-5" /> cote.haye@gmail.com
            </a>
            <a href="tel:+56977297414" className="flex items-center gap-2 hover:scale-110 transition">
              <Phone className="w-5 h-5" /> +56 9 7729 7414
            </a>
            <div className="flex items-center gap-2 opacity-90">
              <MapPin className="w-5 h-5" /> Chile · Remoto / Presencial
            </div>
          </div>
          <a href="https://instagram.com/cote.tech" target="_blank" rel="noopener" className="inline-block mt-4 text-sm opacity-80 hover:opacity-100">
            📸 @cote.tech
          </a>
        </header>

        <div className="grid md:grid-cols-3 gap-8 p-10">
          {/* COLUMNA 1 - EXPERIENCIA DESTACADA */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-teal-700" /> Experiencia Clave
            </h2>
            <div className="space-y-5 text-sm">
              <div>
                <p className="font-bold text-gray-900">Tutora de Tesis</p>
                <p className="text-teal-700">ImpulsaTESIS · 2023 – Actualidad</p>
                <p className="text-gray-600 text-xs">Acompañamiento personalizado en tesis y memorias</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Tutora CEA · Facultad de Ciencias Agronómicas</p>
                <p className="text-teal-700">U. de Chile · 2023 – 2024</p>
                <p className="text-gray-600 text-xs">Apoyo a estudiantes en riesgo de eliminación</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Tutora Integral Par · Botánica General</p>
                <p className="text-teal-700">U. de Chile · 2019 – 2022</p>
              </div>
            </div>
          </section>

          {/* COLUMNA 2 - FORMACIÓN */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-emerald-700" /> Formación
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold text-gray-900">Ingeniera Agrónoma</p>
                <p className="text-emerald-700">Universidad de Chile · 2016 – 2022</p>
                <p className="text-gray-600 text-xs">Tesis: Efecto del estrés hídrico en especies frutales</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Diplomado Metodología de la Investigación</p>
                <p className="text-emerald-700">Líderes Latinoamérica · 2024</p>
                <p className="text-gray-600 text-xs">Cuali + Cuanti con apoyo IA</p>
              </div>
            </div>
          </section>

          {/* COLUMNA 3 - COMPETENCIAS */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <HeartHandshake className="w-7 h-7 text-cyan-700" /> Competencias
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {["Tutoría de Tesis", "Metodología Investigación", "Apoyo Psicoeducativo", "Diseño Cursos Online", "Gamificación Educativa", "Botánica y Ecofisiología", "Gestión Emocional", "Community Manager", "Redacción Académica", "Scout (Liderazgo Infantil)"].map(skill => (
                <span key={skill} className="bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 px-3 py-2 rounded-full text-xs font-medium text-center">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER PERSONAL + CTA */}
        <footer className="bg-gradient-to-r from-teal-700 to-emerald-800 text-white p-8 text-center">
          <div className="flex justify-center gap-12 text-5xl mb-4">
            <Laptop className="hover:animate-pulse transition" />
            <Users className="hover:animate-bounce transition" />
            <MessageCircle className="hover:animate-pulse transition" />
          </div>
          <p className="text-lg mb-6 italic">
            Acompaño a estudiantes en su última milla académica con empatía, rigurosidad y estrategias efectivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:cote.haye@gmail.com" className="bg-white text-teal-700 font-bold py-4 px-10 rounded-full hover:scale-105 transition shadow-xl">
              Enviar Correo
            </a>
            <a href="https://wa.me/56977297414" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition shadow-xl">
              WhatsApp +56 9 7729 7414
            </a>
            <a href="https://instagram.com/cote.tech" target="_blank" rel="noopener" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition shadow-xl">
              Instagram @cote.tech
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Josefa Cote Haye - Tutora de Tesis y Mentora Académica</title>
    <meta name="description" content="Tutora de tesis y memorias | Ingeniera Agrónoma U. Chile | Acompañamiento personalizado con enfoque psicoeducativo" />
  </>
)