// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3530
// source=src/components/cards/CardGoal.tsx
// component=CardGoal
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  Headphones: 'headphones',
  Sneakers: 'sneakers',
  'Ski Trip': 'ski-trip',
  'Goal reached': 'goal-reached',
})

export default {
  example: figma.code`<CardGoal variant="${variant}" />`,
  imports: ['import { CardGoal } from "../components/cards/CardGoal"'],
  id: 'card-goal',
  metadata: { nestable: true },
}
