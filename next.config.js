module.exports = {
    images: {
      domains: ['img.icons8.com'], // Adicione qualquer domínio que você precisa usar
    },
    // Configuração para permitir o carregamento de imagens de origens cruzadas
    crossOrigin: 'anonymous',
    allowedDevOrigins: ["app.localhost:3000", "*.localhost:3000,local-origin.dev","*.local-origin.dev"],// Permitir origens de desenvolvimento específicas
    // Configuração para permitir ações do servidor de origens específicas
    experimental: {
    serverActions: {
      allowedOrigins: ["app.localhost:3000", "*.localhost:3000"],
    },
  },

  };
