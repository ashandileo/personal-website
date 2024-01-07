'use client'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="6285216398875"
        accountName="Ashandi Leonadi"
        chatMessage="Hi! Ada yang bisa saya bantu?"
        chatboxClassName="whatsapp-chatbox-container"
        avatar="/static/images/ashandi.JPG"
        statusMessage="Online"
      />
    </div>
  )
}

export default Whatsapp
