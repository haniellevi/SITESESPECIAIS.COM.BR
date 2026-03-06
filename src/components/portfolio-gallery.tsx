'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from 'lucide-react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

type Project = {
  id: string
  title: string
  desc: string
  link: string
  thumbnail: string
  gallery: string[]
}

const projects: Project[] = [
  {
    id: 'fiel-alimentos',
    title: 'Fiel Alimentos',
    desc: 'Indústria alimentícia com presença nacional.',
    link: 'https://www.fielalimentos.com.br/',
    thumbnail: '/images/fiel.png',
    gallery: ['/images/fiel.png'],
  },
  {
    id: 'emcorr',
    title: 'EmCorr',
    desc: 'Corretora de seguros especializada em benefícios.',
    link: 'https://emcorr.com.br/',
    thumbnail: '/images/emcorr.png',
    gallery: ['/images/emcorr.png'],
  },
  {
    id: 'clinica-pinheiro',
    title: 'Clínica Pinheiro',
    desc: 'Centro médico de referência regional.',
    link: 'https://clinicapinheiro.com/',
    thumbnail: '/images/clinica_pinheiro.png',
    gallery: ['/images/clinica_pinheiro.png'],
  },
]

export function PortfolioGallery() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const openModal = (index: number) => {
    setSelectedProjectIndex(index)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = useCallback(() => {
    setSelectedProjectIndex(null)
    document.body.style.overflow = 'auto'
  }, [])

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null

  const nextProject = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setSelectedProjectIndex((prev) =>
      prev === null || prev === projects.length - 1 ? 0 : prev + 1,
    )
    setCurrentImageIndex(0)
  }, [])

  const prevProject = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setSelectedProjectIndex((prev) =>
      prev === null || prev === 0 ? projects.length - 1 : prev - 1,
    )
    setCurrentImageIndex(0)
  }, [])

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation()
      if (!selectedProject) return
      if (selectedProject.gallery.length <= 1) {
        nextProject(e)
        return
      }
      setCurrentImageIndex((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1))
    },
    [selectedProject, nextProject],
  )

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation()
      if (!selectedProject) return
      if (selectedProject.gallery.length <= 1) {
        prevProject(e)
        return
      }
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1))
    },
    [selectedProject, prevProject],
  )

  // Esc keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeModal, nextImage, prevImage])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  }

  const modalContent = (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-8 bg-black/98 backdrop-blur-3xl"
          onClick={closeModal}
        >
          {/* Botão Fechar no Topo Direito (Fora do container principal) */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-3 bg-white/10 hover:bg-red-500 rounded-full text-white transition-all scale-100 hover:scale-110 active:scale-90"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Conteúdo do Modal */}
          <motion.div
            key={selectedProject.id}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Projeto */}
            <div className="flex items-center justify-between p-6 md:px-10 md:py-8 border-b border-white/5 bg-gradient-to-r from-[#0a0a0b] to-[#141416] relative z-20">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-luxota-accent font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    Projeto {(selectedProjectIndex ?? 0) + 1} de {projects.length}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base mt-2 max-w-xl font-light">
                  {selectedProject.desc}
                </p>
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-8 py-4 bg-luxota-accent text-white text-sm font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(var(--luxota-accent-rgb),0.5)] hover:scale-105 active:scale-95"
              >
                Visitar site <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Área Central (Imagem + Navegação INTERNA) */}
            <div className="relative flex-1 bg-black/40 overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh] p-4 md:p-8">
              {/* Botões de Troca de Projeto DENTRO do Modal */}
              <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-50 pointer-events-none">
                <button
                  onClick={prevProject}
                  className="pointer-events-auto p-4 md:p-5 bg-white/5 hover:bg-luxota-accent text-white rounded-full backdrop-blur-xl transition-all border border-white/10 group shadow-2xl"
                  title="Projeto Anterior"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={nextProject}
                  className="pointer-events-auto p-4 md:p-5 bg-white/5 hover:bg-luxota-accent text-white rounded-full backdrop-blur-xl transition-all border border-white/10 group shadow-2xl"
                  title="Próximo Projeto"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedProject.id}-${currentImageIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full flex items-center justify-center p-4"
                >
                  <div className="relative group">
                    {/* Moldura sutil ao redor da imagem */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl blur-sm opacity-50"></div>
                    <Image
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.title}`}
                      width={1200}
                      height={800}
                      className="relative w-auto h-auto max-w-full max-h-[50vh] md:max-h-[55vh] object-contain rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rodapé Mobile */}
            <div className="md:hidden p-6 border-t border-white/5 bg-[#0a0a0b]">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 w-full px-4 py-5 bg-luxota-accent text-white text-base font-bold rounded-2xl transition-all shadow-xl active:scale-95"
              >
                Ver site em tempo real <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={fadeIn}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/3] bg-[#050507] cursor-pointer"
            onClick={() => openModal(idx)}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-40 group-hover:opacity-70 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-luxota-accent/20 backdrop-blur-md rounded-full p-4 border border-luxota-accent/50 text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                <ZoomIn className="w-8 h-8" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl text-white font-medium mb-2">{project.title}</h3>
              <p className="text-luxota-dim text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {mounted && typeof document !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  )
}
