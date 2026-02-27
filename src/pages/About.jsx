import { motion } from 'framer-motion';
import mnj from '../assets/manoj.png';
import { aboutInfo } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-orange'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get
                    to know more about my background and passion</p>

                {/* image + my journey */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={mnj} alt="Profile" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-grey-300 mb-6 '>
                                I’m a passionate Full-Stack Developer with 4+ years of professional experience building scalable, 
                                high-performance web applications. I specialize in turning ideas into reliable digital solutions that deliver real business value.
                            </p>
                            <p className='text-grey-300 mb-6 '>
                                My journey began with simple HTML and CSS websites and has grown into developing complex,
                                 full-stack applications using modern frameworks and cloud technologies.                              solved real-world problems, and continuously improved my technical and problem-solving skillss.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 
                                            rounded-2xl p-6 transition-transform 
                                            duration-300 hover:-translate-y-2 
                                            cursor-pointer'>
                                            <div className='text-orange text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About