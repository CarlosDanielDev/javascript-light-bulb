function createMagicApp({ wireAnimator, toggleSwitch }) {
  function init() {
    // Inicialmente, deixa o fio em 0% e a lâmpada apagada
    wireAnimator.animate({ isOn: false })

    // Escuta o checkbox “ligar/desligar”
    toggleSwitch.addEventListener('change', (event) => {
      const isOn = event.target.checked
      wireAnimator.animate({ isOn })
    })
  }

  return { init }
}



