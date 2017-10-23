import jesehGlyph from '../assets/Jeseh_glyph.svg'
import skybreakersGlyph from '../assets/Skybreakers_glyph.svg'
import dustbringersGlyph from '../assets/Dustbringers_glyph.svg'

const orders = {
  windrunners: {
    name: 'Order of Windrunners',
    ideals: [
      'Life before death, strength before weakness, journey before destination.',
      'I will protect those who cannot protect themselves.',
      'I will protect even those I hate, so long as it is right.'
    ],
    colour: '#0b437b',
    glyph: jesehGlyph
  },
  skybreakers: {
    name: 'Order of Skybreakers',
    ideals: [
      'Life before death, strength before weakness, journey before destination.',
      'I will put the law before all else.'
    ],
    colour: '#5a4e69',
    glyph: skybreakersGlyph
  },
  dustbringers: {
    name: 'Order of Dustbringers',
    ideals: [
      'Life before death, strength before weakness, journey before destination.'
    ],
    colour: '#8e160a',
    glyph: dustbringersGlyph
  }
}

export default orders
