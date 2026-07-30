// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3840
// source=src/components/cards/CardProfile.tsx
// component=CardProfile
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = findLayerText('Jamie K.') ?? 'Jamie K.'
const handle = findLayerText('@jamieh') ?? '@jamieh'

export default {
  example: figma.code`<CardProfile name="${name}" handle="${handle}" />`,
  imports: ['import { CardProfile } from "../components/cards/CardProfile"'],
  id: 'card-profile',
  metadata: { nestable: true },
}
