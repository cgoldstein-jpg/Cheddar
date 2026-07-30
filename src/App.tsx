import type { ReactNode } from 'react'
import {
  ActivityItem,
  CardAccount,
  CardActivity,
  CardArticleLarge,
  CardArticleSmall,
  CardBadges,
  CardCustomerArticle,
  CardGoal,
  CardGoalFinished,
  CardGoalSummary,
  CardGuide,
  CardProfile,
  CardTotalSavings,
  PanelChart,
  SavingsStreak,
} from './components'

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-lg font-semibold text-black/70">{title}</h2>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-maroon">
          Content &amp; Cards
        </h1>
        <p className="mt-2 text-muted">
          Cheddar design system components from Figma
        </p>
      </header>

      <Section title="Savings Overview">
        <CardTotalSavings />
        <CardProfile />
        <SavingsStreak />
      </Section>

      <Section title="Goals">
        <div className="flex w-full max-w-[382px] flex-col gap-3">
          <CardGoal variant="headphones" />
          <CardGoal variant="sneakers" />
          <CardGoal variant="ski-trip" />
          <CardGoal variant="goal-reached" />
        </div>
        <CardGoalSummary />
        <div className="flex gap-3">
          <CardGoalFinished variant="skateboard" />
          <CardGoalFinished variant="camera" />
          <CardGoalFinished variant="art-book" />
        </div>
      </Section>

      <Section title="Activity">
        <ActivityItem
          type="deposit"
          timestamp="Today, 11:17am"
          amount={80}
        />
        <ActivityItem
          type="withdrawal"
          timestamp="Today, 11:17am"
          amount={80}
        />
        <CardActivity />
      </Section>

      <Section title="Account & Badges">
        <CardAccount />
        <div className="flex w-full max-w-[382px] flex-col gap-3">
          <CardBadges variant="finance-nerd" />
          <CardBadges variant="double-down" />
          <CardBadges variant="stack-master" />
        </div>
      </Section>

      <Section title="Articles & Guides">
        <CardArticleLarge />
        <CardGuide />
        <div className="flex flex-wrap gap-3">
          <CardArticleSmall topic="credit" />
          <CardArticleSmall topic="expenses" />
          <CardArticleSmall topic="5030" />
          <CardArticleSmall topic="emergency" />
        </div>
        <div className="flex gap-3">
          <CardCustomerArticle content="credit-card" />
          <CardCustomerArticle content="friends" />
        </div>
      </Section>

      <Section title="Charts">
        <PanelChart type="segmented-bar" />
        <PanelChart type="pie" />
      </Section>
    </div>
  )
}
