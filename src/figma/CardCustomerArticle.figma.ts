// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3775
// source=src/components/cards/CardCustomerArticle.tsx
// component=CardCustomerArticle
import figma from 'figma'
const instance = figma.selectedInstance

const content = instance.getEnum('Content', {
  'Credit Card': 'credit-card',
  Friends: 'friends',
})

export default {
  example: figma.code`<CardCustomerArticle content="${content}" />`,
  imports: ['import { CardCustomerArticle } from "../components/cards/CardCustomerArticle"'],
  id: 'card-customer-article',
  metadata: { nestable: true },
}
