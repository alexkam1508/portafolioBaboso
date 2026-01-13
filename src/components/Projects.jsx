import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
    {
        id: 1,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        tech: ['React', 'C#', '.NET', 'SQL Server'],
        repoUrl: '#',
        demoUrl: '#'
    },
    {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        tech: ['C#', '.NET', 'Entity Framework'],
        repoUrl: '#',
        demoUrl: null
    },
    {
        id: 3,
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        repoUrl: '#',
        demoUrl: '#'
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section
            ref={ref}
            id="projects"
            className="min-h-screen flex flex-col px-8 md:px-12 lg:px-24 pb-16 border-b border-[#1a1a1a]"
        >
            {/* Espaciador para posicionar el título a 1/4 de la pantalla */}
            <div className="h-[20vh] md:h-[25vh]"></div>

            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
                className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#f5f5f5] text-center mb-16 md:mb-20"
            >
                Proyectos
            </motion.h2>

            {/* Cards centradas en el espacio restante */}
            <div className="flex-1 flex items-center justify-center">
                <div className="max-w-4xl w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-10"
                    >
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                variants={itemVariants}
                                className="group p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-[#f5f5f5] active:bg-[#f5f5f5]"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-[#555555] text-sm font-mono transition-colors duration-300 group-hover:text-[#888888] group-active:text-[#888888]">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#f5f5f5] transition-colors duration-300 group-hover:text-[#0a0a0a] group-active:text-[#0a0a0a]">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <p className="text-[#888888] text-sm md:text-base mb-4 md:ml-10 transition-colors duration-300 group-hover:text-[#555555] group-active:text-[#555555]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 md:ml-10">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[#555555] text-xs px-2 py-1 transition-colors duration-300 group-hover:text-[#0a0a0a] group-active:text-[#0a0a0a]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 md:ml-6 mt-4 md:mt-0">
                                        <a
                                            href={project.repoUrl}
                                            className="text-[#888888] text-sm px-4 py-2 transition-colors duration-300 group-hover:text-[#0a0a0a] group-active:text-[#0a0a0a] hover:underline"
                                        >
                                            Repositorio
                                        </a>
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                className="text-[#888888] text-sm px-4 py-2 transition-colors duration-300 group-hover:text-[#0a0a0a] group-active:text-[#0a0a0a] hover:underline"
                                            >
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Botón Ver certificados - posicionado en la parte inferior */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center mt-16 md:mt-20"
            >
                <a
                    href="https://mustysix66.github.io/Portafolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#888888] px-8 py-4 text-sm tracking-wider uppercase transition-all duration-300 hover:text-[#f5f5f5]"
                >
                    Ver certificados
                </a>
            </motion.div>

            {/* Espaciador inferior para simetría con el título */}
            <div className="h-[10vh] md:h-[15vh]"></div>
        </section>
    )
}
