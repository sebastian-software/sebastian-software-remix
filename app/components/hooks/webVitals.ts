import { useEffect } from "react"
import type { Metric } from "web-vitals"

export interface AnalyticsData {
  page: string
  href: string
  metric: Metric
}

async function sendToAnalytics(metric: Metric) {
  const data: AnalyticsData = {
    page: window.location.pathname,
    href: window.location.href,
    metric
  }
  const body = JSON.stringify(data)

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/analytics", body)
  } else {
    await fetch("/analytics", { body, method: "POST", keepalive: true })
  }
}

export function useWebVitals() {
  useEffect(() => {
    async function handleWebVitals() {
      const {
        onCLS: onCls,
        onINP: onInp,
        onLCP: onLcp,
        onFCP: onFcp,
        onTTFB: onTtfb
      } = await import("web-vitals")

      onCls(sendToAnalytics)
      onInp(sendToAnalytics)
      onLcp(sendToAnalytics)
      onFcp(sendToAnalytics)
      onTtfb(sendToAnalytics)
    }

    const idleRunner = () => {
      handleWebVitals().catch((error: unknown) => {
        console.error("Failed to load web-vitals", error)
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (window.requestIdleCallback) {
      window.requestIdleCallback(idleRunner)
    } else {
      setTimeout(idleRunner, 1)
    }
  }, [])
}
