// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-621
// source=src/components/cards/CardTotalSavings.tsx
// component=CardTotalSavings
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const dollars = findLayerText('$194') ?? '$194'
const cents = findLayerText('.70') ?? '.70'
const amount = Number(`${dollars.replace(/[^0-9]/g, '')}${cents}`)

export default {
  example: figma.code`<CardTotalSavings amount={${amount}} />`,
  imports: ['import { CardTotalSavings } from "../components/cards/CardTotalSavings"'],
  id: 'card-total-savings',
  metadata: { nestable: true },
}
