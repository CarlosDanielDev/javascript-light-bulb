function createWireAnimator({ wireFill, duration, lampToggler }) {

  // “animate” faz o fio crescer até 100% ou encolher até 0%
  function animate({ isOn }) {
    let start = null

    // Altura inicial (se “vazio”, considera 0)
    const initialHeight = parseFloat(wireFill.style.height) || 0

    // Altura final (0% se for desligar, 100% se for ligar)
    const targetHeight = isOn ? 100 : 0

    // Diferença que precisamos percorrer
    const delta = targetHeight - initialHeight

    // Função que o requestAnimationFrame chamará várias vezes
    function step(timestamp) {

      // Se não temos um start, definimos agora
      if (!start) {
        start = timestamp
      }

      // Quanto tempo passou
      const elapsed = timestamp - start

      // Fator de progresso (0 a 1)
      const progress = Math.min(elapsed / duration, 1)

      // Altura atual = inicial + delta * progresso
      const currentHeight = initialHeight + delta * progress
      wireFill.style.height = currentHeight + '%'

      // Se ainda não terminou, pede outro quadro de animação e sai
      if (progress < 1) {
        requestAnimationFrame(step)
        return
      }

      // Ao chegar no final da animação, ligamos ou desligamos a lâmpada:
      isOn
        ? lampToggler.turnOn()
        : lampToggler.turnOff()
    }

    // Começamos a animação
    requestAnimationFrame(step)
  }

  return { animate }
}

