import React from 'react'
import bannerImg from '../../../assets/coffee-cover.jpg'
import AppStoreImg from '../../../assets/app_store.png'
import PlayStoreImg from '../../../assets/play_store.png'
import { motion } from 'framer-motion'

const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
}

export default function AppBanner() {
    return (
        <div className='container my-14'>
            <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
                <div>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                            className='text-2xl text-center sm:text-4xl font-semibold'>Download The App</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }}
                            className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi omnis {" "}</motion.p>
                        {/* Images links */}
                        <div
                            className='flex justify-center items-center gap-4'>
                            <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                                <motion.img
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
                                    src={AppStoreImg} alt="" />
                            </a>
                            <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                                <motion.img
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
                                    src={PlayStoreImg} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
