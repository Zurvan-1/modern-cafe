import React from 'react'
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,

} from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import CreditCards from '../../../assets/credit-cards.webp'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* Company Details Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='space-y-6'>
                        <h1 className='text-3xl font-bold uppercase'>
                            Coders Cafe
                        </h1>
                        <p className='text-sm max-w-[300px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium ex temporibus. Molestias, repudiandae odit!
                        </p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone />
                                +1 (123) 456-7890
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                {" "}
                                <FaMapLocation /> Noida, Uttar Pradesh
                            </p>
                        </div>
                    </motion.div>
                    {/* Footer Links Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            {/* First Column Section */}
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            {/* Second Column Section */}
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* Social Links Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="space-y-6">
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                            <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                            <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                            <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
                            <img src={CreditCards} alt="Credit-Cards" className='w-[80%]' />
                        </div>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <p
                    className='text-white text-center mt-8 pt-8 border-t-2'>
                    Copyright &copy; 2024 Company Name. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}
