import awsLite from "@aws-lite/client"
import awsDynamoDB from "@aws-lite/dynamodb"
import type { ActionFunctionArgs } from "@remix-run/node"
import { Resource } from "sst"

import type { AnalyticsData } from "~/components/hooks/webVitals"
import { getSstRuntime } from "~/utils/sst"

interface DatabaseAnalyticsData extends AnalyticsData {
  id: string
  createdAt: string
}

export async function action({ request }: ActionFunctionArgs) {
  const sstRuntime = getSstRuntime()

  if (!sstRuntime || sstRuntime.stage !== "production") {
    // RUM analytics of Web Core Vitals is only collected in production
    return new Response("No SST environment", { status: 200 })
  }

  const aws = await awsLite({
    region: "eu-central-1",
    plugins: [awsDynamoDB]
  })

  const data = (await request.json()) as AnalyticsData

  const entry: DatabaseAnalyticsData = {
    ...data,
    id: data.metric.id,
    createdAt: new Date().toISOString()
  }

  try {
    // eslint-disable-next-line new-cap
    await aws.DynamoDB.PutItem({
      TableName: Resource.WebVitals.name,
      Item: entry
    })
  } catch (error) {
    return new Response(`Error saving data: ${error as string}`, {
      status: 500
    })
  }

  return new Response("", { status: 204 })
}
