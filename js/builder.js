function appBuilder({
  createLampToggler,
  createWireAnimator,
  createMagicApp,
  magicWall,
  toggleSwitch,
  wireFill,
  lampContainer,
  options,
}) {

  function applyTheme(themeObject) {
    const root = document.documentElement
    Object.entries(themeObject).forEach(([varName, varValue]) => {
      root.style.setProperty(varName, varValue)
    })
  }

  async function start() {
    // Criamos a fábrica lampToggler com as dependências
    const lampToggler = await createLampToggler({
      magicWall,
      lampContainer,
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

  return { start, applyTheme }
}
