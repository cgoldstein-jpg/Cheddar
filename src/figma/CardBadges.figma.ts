// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3868
// source=src/components/cards/CardBadges.tsx
// component=CardBadges
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  'Finance Nerd': 'finance-nerd',
  'Double Down': 'double-down',
  'Stack Master': 'stack-master',
})

export default {
  example: figma.code`<CardBadges variant="${variant}" />`,
  imports: ['import { CardBadges } from "../components/cards/CardBadges"'],
  id: 'card-badges',
  metadata: { nestable: true },
}
