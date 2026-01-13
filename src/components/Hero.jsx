import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-8 md:px-12 lg:px-24 border-b border-[#1a1a1a]">
            <div className="max-w-4xl w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888888] text-sm md:text-base tracking-widest uppercase mb-6"
                >
                    Portfolio 2026
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl text-[#f5f5f5] mb-8 leading-tight"
                >
                    Hola, soy <span className="italic">El baboso</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[#888888] text-lg md:text-xl lg:text-2xl font-light tracking-wide"
                >
                    Junior Full Stack Developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 flex items-center gap-4"
                >
                    <span className="w-12 h-px bg-[#333333]"></span>
                    <span className="text-[#888888] text-sm tracking-wider">Scroll para explorar</span>
                </motion.div>
            </div>
        </section>
    )
}
