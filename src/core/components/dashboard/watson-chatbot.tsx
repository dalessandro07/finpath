'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    watsonAssistantChatOptions: {
      integrationID: string
      region: string
      serviceInstanceID: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onLoad: (instance: any) => Promise<void>
      clientVersion?: string
    }
  }
}

const WatsonChatbot = () => {
  useEffect(() => {
    // Configurar las opciones del chatbot
    window.watsonAssistantChatOptions = {
      integrationID: process.env.NEXT_PUBLIC_INTEGRATION_ID ?? '',
      region: process.env.NEXT_PUBLIC_REGION ?? '',
      serviceInstanceID: process.env.NEXT_PUBLIC_SERVICE_INSTANCE_ID ?? '',
      onLoad: async (instance) => {
        await instance.render()
      }
    }

    // Cargar el script del chatbot
    const loadChatbot = () => {
      const script = document.createElement('script')
      script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`
      script.async = true
      document.head.appendChild(script)
    }

    // Cargar el script después de un pequeño delay
    const timeoutId = setTimeout(loadChatbot, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      // Remover el script si existe
      const existingScript = document.querySelector('script[src*="WatsonAssistantChatEntry.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null // Este componente no renderiza nada visualmente
}

export default WatsonChatbot
