// Helper functions for SST

interface SstResourceApp {
  name: string
  stage: string
}

export function getSstRuntime(): SstResourceApp | undefined {
  try {
    if (!process.env.SST_RESOURCE_App) {
      return
    }

    const environment = process.env
    const sstResouceApp = environment.SST_RESOURCE_App ?? ""
    return JSON.parse(sstResouceApp) as SstResourceApp
  } catch {
    // NOOP
  }
}
