interface BlogMdx {
  frontmatter: Record<string, string>
  summary: string
  default?: React.ElementType
}

export type BlogEntry = BlogMdx & {
  urlPart: string
  datePart: string
  longDatePart: string
}

export type BlogEntryWithContent = BlogEntry & {
  content: React.ElementType
}

const USED_DATE_PARTS = 2;
const USED_LONG_DATE_PARTS = 3;

async function requestPost(urlPart: string, content: Promise<unknown>) {
  const module = await (content as Promise<BlogMdx>)

  const dateOnlySplit = module.frontmatter.date.split(" ")[0].split("-");
  const datePart = dateOnlySplit.slice(0, USED_DATE_PARTS).join("-")
  const longDatePart = dateOnlySplit.slice(0, USED_LONG_DATE_PARTS).join("-")

  return {
    urlPart,
    datePart,
    longDatePart,
    frontmatter: module.frontmatter,
    summary: module.summary,
    content: module.default
  }
}

function blogPostSorter(a: BlogMdx, b: BlogMdx): number {
  return b.frontmatter.date.localeCompare(a.frontmatter.date)
}

export const blogList = async () => {
  const list = await Promise.all([
    requestPost("hochmoderne-bahnstadt-mit-schwachem-internet", import("./2015-03-15-hochmoderne-bahnstadt-mit-schwachem-internet.mdx")),
    requestPost("falsche-farben", import("./2015-06-11-falsche-farben.mdx")),
    requestPost("sommerlektuere-von-bill-gates", import("./2015-06-15-sommerlektuere-von-bill-gates.mdx")),
    requestPost("live-einrichtung-mit-unreal-engine", import("./2015-06-23-live-einrichtung-mit-unreal-engine.mdx")),
    requestPost("rechtschreibung-und-jekyll", import("./2015-07-09-rechtschreibung-und-jekyll.mdx")),
    requestPost("nodejs-applikation-in-einer-datei", import("./2015-07-10-nodejs-applikation-in-einer-datei.mdx")),
    requestPost("powerline-fuer-homeway", import("./2015-08-09-powerline-fuer-homeway.mdx")),
    requestPost("referrer-spam-vermeidung-einer-analyse-muellhalde", import("./2015-08-20-referrer-spam-vermeidung-einer-analyse-muellhalde.mdx")),
    requestPost("internationalisierung-im-frontend", import("./2016-01-25-internationalisierung-im-frontend.mdx")),
    requestPost("senior-frontend-developer", import("./2016-04-14-senior-frontend-developer.mdx"))
  ])

  return list.sort(blogPostSorter)
}



