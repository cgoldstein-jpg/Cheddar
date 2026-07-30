// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3360
// source=src/components/ui/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const variant = instance.getEnum('Variant', {
  Primary: 'primary',
  Secondary: 'secondary-outline',
})

const size = instance.getEnum('Size', {
  Large: 'large',
  Medium: 'large',
  Small: 'medium',
})

const label = findLayerText('Button') ?? findLayerText('Read more') ?? findLayerText('Deposit') ?? 'Button'

export default {
  example: figma.code`<Button variant="${variant}" size="${size}">${label}</Button>`,
  imports: ['import { Button } from "../components/ui/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
