// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3578
// source=src/components/cards/ActivityItem.tsx
// component=ActivityItem
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const type = instance.getEnum('Type', {
  Deposit: 'deposit',
  Withdrawal: 'withdrawal',
})

const timestamp =
  findLayerText('Today, 11:17am') ??
  findLayerText('Mon, 8:22am') ??
  'Today, 11:17am'

const amountText = findLayerText('$80.00') ?? '$80.00'
const amount = Number(amountText.replace(/[^0-9.]/g, ''))

export default {
  example: figma.code`<ActivityItem type="${type}" timestamp="${timestamp}" amount={${amount}} />`,
  imports: ['import { ActivityItem } from "../components/cards/ActivityItem"'],
  id: 'activity-item',
  metadata: { nestable: true },
}
