// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3849
// source=src/components/cards/CardGoalFinished.tsx
// component=CardGoalFinished
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  Finished: 'skateboard',
  Variant2: 'camera',
  Variant3: 'art-book',
})

export default {
  example: figma.code`<CardGoalFinished variant="${variant}" />`,
  imports: ['import { CardGoalFinished } from "../components/cards/CardGoalFinished"'],
  id: 'card-goal-finished',
  metadata: { nestable: true },
}
