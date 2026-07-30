// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3691
// source=src/components/cards/CardGuide.tsx
// component=CardGuide
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<CardGuide />`,
  imports: ['import { CardGuide } from "../components/cards/CardGuide"'],
  id: 'card-guide',
  metadata: { nestable: true },
}
