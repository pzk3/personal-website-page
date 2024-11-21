import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mihir Nepal",
  DESCRIPTION: "Welcome my website.",
  AUTHOR: "Mihir Nepal",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "example@example.com",
    HREF: "mailto:example@example.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "example",
    HREF: "https://github.com/example"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "example",
    HREF: "https://www.linkedin.com/in/example/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "example",
    HREF: "https://twitter.com/example",
  },
]
