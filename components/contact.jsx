import React from 'react'
import Image from 'next/image'
import Projet from '../public/png/projet-1.png'
import Contact from '../public/svg/contact.svg'
import Form from './form'

const contact = () => {
    return (
        <div id='contact'>
        <div className="max-w-6xl mx-auto lg:px-12 px-8 py-2 bg-white">
            <div className='max-w-6xl mx-auto  flex flex-1 flex-col justify-center items-center py-10 lg:py-32'> 
            <div className='mx-auto lg:w-2/5 w-full px-6 lg:px-0'>
            <span className='block text-center '><Image src={Contact} alt='' width='60px' height={60}/> </span> 
            <h1 className='section-title my-5 text-center'> CONTACT</h1>
            <h4 className='section-subtitle my-5 text-center'> RÉSERVEZ VOTRE RENDEZ-VOUS DÈS MAINTENANT</h4>
            <h4 className='section-p my-5 text-center uppercase'>Nous reviendrons vers vous au plus vite.</h4>
            <hr/>
            </div>
          <Form />
            </div>
        </div>
        </div>
    )
}

export default contact
