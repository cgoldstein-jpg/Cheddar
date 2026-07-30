// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-858
// source=src/components/cards/CardActivity.tsx
// component=CardActivity
import figma from 'figma'
const instance = figma.selectedInstance

const contents = instance.getSlot('contents')

export default {
  example: figma.code`<CardActivity>${contents}</CardActivity>`,
  imports: ['import { CardActivity } from "../components/cards/CardActivity"'],
  id: 'card-activity',
  metadata: { nestable: true },
}
