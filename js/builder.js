function appBuilder({
  createLampToggler,
  createWireAnimator,
  createMagicApp,
  magicWall,
  lampOff,
  lampOn,
  toggleSwitch,
  wireFill,
  options
}) {

  function start() {
    // Criamos a fábrica lampToggler com as dependências
    const lampToggler = createLampToggler({
      lampOff,
      lampOn,
      magicWall,
      options,
    })

    // Criamos a fábrica wireAnimator, passando o tempo de 2s e lampToggler
    const wireAnimator = createWireAnimator({
      wireFill,
      duration: 2000,
      lampToggler
    })

    // Criamos a app que junta tudo: 
    const magicApp = createMagicApp({
      lampToggler,
      wireAnimator,
      toggleSwitch
    })

    // Iniciamos a app
    magicApp.init()

    // definimos que o padrão quando a aplicação carregar, vai ser com a lampada apagada: 
    lampToggler.turnOff()
  }

  return { start }
}
