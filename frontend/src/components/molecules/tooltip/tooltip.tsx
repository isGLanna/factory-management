import * as Tooltip from "@radix-ui/react-tooltip"
import "./tooltip-style.scss"

interface Prop {
  content: string
  children: React.ReactNode
}

export function InfoTooltip({content, children}: Prop) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content className="tooltip" side="right">
            {content}
            <Tooltip.Arrow className="tooltip-arrow"/>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
