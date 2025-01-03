async function createLampToggler({ magicWall, lampContainer, options }) {
  // carregamos o svg da lampada
  const lampSvg = await loadLampSvg(lampContainer)

  // troca a cor de fundo do svg da lampada
  function changeLampColor(lampSvg, lampOnColor) {
    if (!lampSvg) return
    const fillSvg = lampSvg.querySelector('#lampFill')
    fillSvg.setAttribute('fill', lampOnColor)

    const strokeSvg = lampSvg.querySelector('#lampStroke')
    strokeSvg.setAttribute('stroke', lampOnColor)
  }

  // Acende a lâmpada
  function turnOn() {
    const lampOnColor = options.lampColor || '#ffdd00'
    changeLampColor(lampSvg, lampOnColor)
    magicWall.style.background = options.on
  }

  // Apaga a lâmpada
  function turnOff() {
    const lampOnColor = 'transparent'
    changeLampColor(lampSvg, lampOnColor)
    magicWall.style.background = options.off
  }

  async function loadLampSvg(lampContainer) {
    // Vamos pegar referência a esse <svg> se quisermos manipular
    const lampSvg = lampContainer.querySelector('svg')

    // Por exemplo, podemos atribuir um ID pra facilitar
    lampSvg.setAttribute('id', 'lampSvg')

    return lampSvg
  }

  // Retornamos as duas funções (poderíamos ter mais, se quiséssemos)
  return { turnOn, turnOff, loadLampSvg }
}
