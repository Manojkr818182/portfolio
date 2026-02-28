import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contacts = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get In
                    <span className='text-orange'> Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Feel free to get in touch with me for collaboration, freelance projects, or full-time opportunities. I'm always open to discussing new ideas and exciting projects. Let’s build something amazing together!.
                </p>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className='flex items-start'>
                            <div className='text-orange text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p>Varanasi, Uttar Pradesh</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-orange text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p>manoj818182@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-orange text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p>+91 8181820106</p>
                            </div>
                        </div>

                    </div>
                    <div className='pt-4 text-center'>
                        <h3 className='text-lg font-semibold mb-4'>Follow me</h3>
                        <div className="flex  md:flex-row justify-center gap-12">
                            <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>

                            <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition duration-300'>
                                <FaLinkedin />
                            </a>

                            <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
             
            </div>
        </motion.div>
    )
}

export default Contacts