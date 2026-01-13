import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section
            ref={ref}
            id="about"
            className="min-h-screen flex items-center justify-center px-8 md:px-12 lg:px-24 border-b border-[#1a1a1a]"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#f5f5f5] mb-12">
                        La Carta
                    </h2>

                    <div className="space-y-6 text-[#888888] text-base md:text-lg leading-relaxed text-justify">
                        <p>
                            Estimado visitante,
                        </p>

                        <p className="text-[#f5f5f5]">
                            Me complace presentarme como un desarrollador apasionado por el arte de crear
                            soluciones digitales que no solo funcionen, sino que transmitan calidad en cada
                            línea de código. Mi enfoque se centra en la intersección entre la funcionalidad
                            robusta y la experiencia de usuario excepcional.
                        </p>

                        <p>
                            A lo largo de mi formación, he cultivado una profunda apreciación por las
                            arquitecturas limpias, el código mantenible y las prácticas de desarrollo que
                            priorizan tanto la eficiencia como la elegancia. Creo firmemente que el
                            desarrollo de software es tanto un oficio técnico como una disciplina creativa.
                        </p>

                        <p>
                            Mi compromiso es entregar trabajo del más alto estándar, manteniendo una
                            comunicación clara y una ética profesional impecable. Cada proyecto representa
                            una oportunidad para demostrar dedicación y excelencia.
                        </p>

                        <p className="text-[#f5f5f5] italic font-['Playfair_Display'] text-xl mt-8">
                            Atentamente,<br />
                            <span className="not-italic">El Baboso</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
