import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'C#', category: 'Backend' },
    { name: '.NET', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'SQL Server', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'REST APIs', category: 'Tools' },
]

export default function TechStack() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section
            ref={ref}
            id="skills"
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
                Habilidades Técnicas
            </motion.h2>

            {/* Cards centradas en el espacio restante */}
            <div className="flex-1 flex items-center justify-center">
                <div className="max-w-4xl w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {technologies.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={itemVariants}
                                className="group border border-[#333333] p-4 md:p-6 cursor-pointer transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#f5f5f5] active:bg-[#f5f5f5] active:border-[#f5f5f5]"
                            >
                                <p className="text-[#f5f5f5] text-sm md:text-base font-medium transition-colors duration-300 group-hover:text-[#0a0a0a] group-active:text-[#0a0a0a]">
                                    {tech.name}
                                </p>
                                <p className="text-[#888888] text-xs mt-1 uppercase tracking-wider transition-colors duration-300 group-hover:text-[#555555] group-active:text-[#555555]">
                                    {tech.category}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
