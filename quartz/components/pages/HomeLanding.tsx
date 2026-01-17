import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import LandingPage from "../LandingPage"

interface Options {
  name: string
  title: string
  subtitle: string
  socialLinks: {
    github?: string
    twitter?: string
    linkedin?: string
    email?: string
  }
}

export default ((opts?: Options) => {
  const LandingComponent = LandingPage(opts)

  const HomeLandingContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, tree } = props
    const isIndex = fileData.slug === "index"

    if (isIndex) {
      return <LandingComponent {...props} />
    }

    // For non-index pages, render normal content
    const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
    const classes: string[] = fileData.frontmatter?.cssclasses ?? []
    const classString = ["popover-hint", ...classes].join(" ")
    return <article class={classString}>{content}</article>
  }

  HomeLandingContent.css = LandingComponent.css
  HomeLandingContent.afterDOMLoaded = LandingComponent.afterDOMLoaded

  return HomeLandingContent
}) satisfies QuartzComponentConstructor
