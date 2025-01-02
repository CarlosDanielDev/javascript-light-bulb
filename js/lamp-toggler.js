function createLampToggler({ lampOff, lampOn, magicWall }) {
  // Acende a lâmpada
  function turnOn() {
    lampOff.style.display = options.displayInactive

    lampOn.style.display = options.displayActive

    magicWall.style.background = options.on
  }

  // Apaga a lâmpada
  function turnOff() {
    lampOn.style.display = options.displayInactive

    lampOff.style.display = options.displayActive

    magicWall.style.background = options.off
  }

  // Retornamos as duas funções (poderíamos ter mais, se quiséssemos)
  return { turnOn, turnOff }
}
