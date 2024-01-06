'use client'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="085216398875"
        accountName="Ashandi Leonadi"
        chatMessage="Hi!"
        chatboxClassName="whatsapp-chatbox-container"
      />
    </div>
  )
}

export default Whatsapp
