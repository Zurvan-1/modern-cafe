import React from 'react'
import { motion } from 'framer-motion'
import coffee1 from '../../../assets/coffee1.png'
import coffee2 from '../../../assets/coffee2.png'
import coffee3 from '../../../assets/coffee3.png'

const servicesData = [
    {
        id: 1,
        image: coffee1,
        title: 'Black Coffee',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 2,
        image: coffee3,
        title: 'Hot Coffee',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        image: coffee2,
        title: 'Cold Coffee',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
]

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            ease: 'easeInOut',
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4
        }
    }
}

export default function Services() {
    return (
        <div className='container my-16 space-y-4'>
            {/* Header Section */}
            <div className='text-center max-w-lg mx-auto space-y-2'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2
                    }}
                    className='text-3xl font-bold text-lightGray'>
                    Fresh and <span className='text-primary'>Tasty Coffee</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.6
                    }}
                    className='text-sm opacity-50'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi vero, saepe eveniet maxime nulla quod assumenda officiis in ea labore.
                </motion.p>
            </div>
            {/* Card Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.8, }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => (
                        <motion.div
                            variants={cardVariants}
                            className='text-center p-4 space-y-6'>
                            <img src={service.image} alt="" className='img-shadow2 w-full max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                                <p className='text-darkGray'>{service.subtitle}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}
