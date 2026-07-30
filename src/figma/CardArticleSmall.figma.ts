// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3802
// source=src/components/cards/CardArticleSmall.tsx
// component=CardArticleSmall
import figma from 'figma'
const instance = figma.selectedInstance

const topic = instance.getEnum('Content', {
  Credit: 'credit',
  Expenses: 'expenses',
  '50/30': '5030',
  Emergency: 'emergency',
})

export default {
  example: figma.code`<CardArticleSmall topic="${topic}" />`,
  imports: ['import { CardArticleSmall } from "../components/cards/CardArticleSmall"'],
  id: 'card-article-small',
  metadata: { nestable: true },
}
