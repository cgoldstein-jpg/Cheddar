// url=https://www.figma.com/design/NDjLraZGjZBdlIHO8AiR2j/Thrive-Z-DESIGN?node-id=1-3602
// source=src/components/cards/PanelChart.tsx
// component=PanelChart
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', {
  'Segmented Bar': 'segmented-bar',
  Pie: 'pie',
})

export default {
  example: figma.code`<PanelChart type="${type}" />`,
  imports: ['import { PanelChart } from "../components/cards/PanelChart"'],
  id: 'panel-chart',
  metadata: { nestable: true },
}
