// =====================================================================
// main.js — builds the page from data.js. Normally you do not need to edit this file.
// =====================================================================

const NAV_ITEMS = ["about", "skills", "projects", "experience", "education", "contact"]

const LINK_TYPES = [
  { key: "code", icon: "github" },
  { key: "demo", icon: "externalLink" },
  { key: "video", icon: "play" },
]

// Shared Tailwind class sets
const CLS = {
  container: "mx-auto max-w-6xl px-6",
  card: "rounded-xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none",
  chip: "rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  btnPrimary: "inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400",
  btnSecondary: "inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400",
  iconButton: "rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400",
  navLink: "text-sm text-slate-600 transition hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400",
  accent: "text-amber-600 dark:text-amber-400",
  heading: "text-slate-900 dark:text-white",
  muted: "text-slate-600 dark:text-slate-400",
}

const ICONS = {
  sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  externalLink: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  play: '<path d="m6 3 14 9-14 9V3z"/>',
  mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
}

const state = {
  lang: readStorage("lang", ["en", "id"], "en"),
  theme: readStorage("theme", ["dark", "light"], "dark"),
  menuOpen: false,
}

// ---------- Helpers ----------

function readStorage(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key)
    return allowed.includes(value) ? value : fallback
  } catch (error) {
    return fallback
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch (error) {
    console.warn("[main.js] writeStorage(): storage unavailable -", error)
  }
}

// Returns text for the active language. Accepts a plain string or { en, id }.
function t(value) {
  if (value == null) {
    return ""
  }

  if (typeof value === "string") {
    return value
  }

  return value[state.lang] ?? value.en ?? ""
}

function esc(text) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }
  return String(text).replace(/[&<>"']/g, (char) => map[char])
}

// Translated and escaped text, safe to insert into HTML
function tx(value) {
  return esc(t(value))
}

function icon(name, className = "h-5 w-5") {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true">${ICONS[name] ?? ICONS.externalLink}</svg>`
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("")
}

function each(items, render) {
  return (items || []).map(render).join("")
}

function section(id, index, body) {
  return `
    <section id="${id}" class="scroll-mt-16 py-20">
      <div class="${CLS.container}">
        <p class="font-mono text-sm ${CLS.accent}">${index}.</p>
        <h2 class="mt-1 text-3xl font-bold tracking-tight md:text-4xl ${CLS.heading}">${tx(UI.nav[id])}</h2>
        <p class="mt-3 max-w-2xl ${CLS.muted}">${tx(UI.sections[id])}</p>
        <div class="mt-10">${body}</div>
      </div>
    </section>`
}

function renderSocials(extraClass) {
  const socials = CONTENT.profile.socials.filter((social) => social.url)

  if (socials.length === 0) {
    return ""
  }

  return `
    <div class="flex gap-3 ${extraClass}">
      ${each(socials, (social) => `
        <a href="${esc(social.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(social.label)}" title="${esc(social.label)}" class="${CLS.iconButton} p-2.5">
          ${icon(social.icon)}
        </a>`)}
    </div>`
}

// ---------- Sections ----------

function renderNavbar() {
  const langLabel = (code) => {
    const active = state.lang === code
    return `<span class="${active ? "font-semibold " + CLS.accent : "text-slate-400"}">${code.toUpperCase()}</span>`
  }

  const navLinks = (extraClass) => each(NAV_ITEMS, (key) => `
    <li><a href="#${key}" data-action="close-menu" class="${CLS.navLink} ${extraClass}">${tx(UI.nav[key])}</a></li>`)

  const mobileMenu = state.menuOpen
    ? `<ul class="space-y-1 border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">${navLinks("block py-2")}</ul>`
    : ""

  return `
    <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav class="${CLS.container} flex h-16 items-center justify-between">
        <a href="#top" class="font-mono text-lg font-semibold ${CLS.heading}">
          <span class="${CLS.accent}">&lt;</span>${esc(CONTENT.profile.shortName)}<span class="${CLS.accent}">/&gt;</span>
        </a>

        <ul class="hidden items-center gap-6 md:flex">${navLinks("")}</ul>

        <div class="flex items-center gap-2">
          <button data-action="toggle-lang" aria-label="${tx(UI.aria.toggleLang)}" class="rounded-lg border border-slate-300 px-2.5 py-1.5 font-mono text-xs transition hover:border-amber-500 dark:border-slate-700 dark:hover:border-amber-400">
            ${langLabel("en")}<span class="mx-1 text-slate-400">/</span>${langLabel("id")}
          </button>
          <button data-action="toggle-theme" aria-label="${tx(UI.aria.toggleTheme)}" class="${CLS.iconButton}">
            ${icon(state.theme === "dark" ? "sun" : "moon", "h-4 w-4")}
          </button>
          <button data-action="toggle-menu" aria-label="${tx(UI.aria.toggleMenu)}" aria-expanded="${state.menuOpen}" class="${CLS.iconButton} md:hidden">
            ${icon(state.menuOpen ? "x" : "menu", "h-4 w-4")}
          </button>
        </div>
      </nav>
      ${mobileMenu}
    </header>`
}

function renderHero() {
  const profile = CONTENT.profile

  const photo = profile.photo
    ? `<img src="${esc(profile.photo)}" alt="${esc(profile.name)}" class="relative h-48 w-48 rounded-full object-cover ring-4 ring-amber-500/30 md:h-64 md:w-64" />`
    : `<div class="relative flex h-48 w-48 items-center justify-center rounded-full bg-slate-200 font-mono text-5xl font-bold ring-4 ring-amber-500/30 md:h-64 md:w-64 md:text-6xl dark:bg-slate-800 ${CLS.accent}">${esc(getInitials(profile.name))}</div>`

  const location = profile.location
    ? `<p class="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">${icon("mapPin", "h-4 w-4")}${tx(profile.location)}</p>`
    : ""

  const cvButton = profile.cv
    ? `<a href="${esc(profile.cv)}" download class="${CLS.btnSecondary}">${icon("download", "h-4 w-4")}${tx(UI.hero.downloadCv)}</a>`
    : ""

  return `
    <section id="top" class="relative overflow-hidden">
      <div class="grid-pattern fade-mask pointer-events-none absolute inset-0"></div>

      <div class="${CLS.container} relative flex flex-col-reverse items-center gap-12 py-24 md:flex-row md:py-32">
        <div class="flex-1 text-center md:text-left">
          <p class="font-mono text-sm ${CLS.accent}">${tx(UI.hero.greeting)}</p>
          <h1 class="mt-3 text-4xl font-bold tracking-tight md:text-6xl ${CLS.heading}">${esc(profile.name)}</h1>
          <p class="mt-3 text-xl font-medium text-slate-700 md:text-2xl dark:text-slate-300">${tx(profile.role)}</p>
          <p class="mx-auto mt-5 max-w-xl leading-relaxed md:mx-0 ${CLS.muted}">${tx(profile.tagline)}</p>
          ${location}

          <div class="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" class="${CLS.btnPrimary}">${tx(UI.hero.viewProjects)}</a>
            ${cvButton}
            <a href="#contact" class="${CLS.btnSecondary}">${tx(UI.hero.contactMe)}</a>
          </div>

          ${renderSocials("mt-8 justify-center md:justify-start")}
        </div>

        <div class="relative">
          <div class="absolute -inset-3 rounded-full border border-dashed border-amber-500/40"></div>
          ${photo}
        </div>
      </div>
    </section>`
}

function renderAbout() {
  const about = CONTENT.about

  return section("about", "01", `
    <div class="grid gap-10 md:grid-cols-3">
      <div class="space-y-4 leading-relaxed text-slate-600 md:col-span-2 dark:text-slate-300">
        ${each(about.paragraphs, (paragraph) => `<p>${tx(paragraph)}</p>`)}
      </div>

      <div class="grid grid-cols-3 gap-4 md:grid-cols-1">
        ${each(about.highlights, (highlight) => `
          <div class="${CLS.card} p-4 text-center md:text-left">
            <p class="font-mono text-2xl font-bold md:text-3xl ${CLS.accent}">${esc(highlight.value)}</p>
            <p class="mt-1 text-xs md:text-sm ${CLS.muted}">${tx(highlight.label)}</p>
          </div>`)}
      </div>
    </div>`)
}

function renderSkills() {
  return section("skills", "02", `
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${each(CONTENT.skills, (group) => `
        <div class="${CLS.card} p-6">
          <h3 class="font-semibold ${CLS.heading}">${tx(group.category)}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            ${each(group.items, (item) => `<li class="${CLS.chip}">${tx(item)}</li>`)}
          </ul>
        </div>`)}
    </div>`)
}

function renderProjectCard(project) {
  const image = project.image
    ? `<img src="${esc(project.image)}" alt="${tx(project.title)}" loading="lazy" class="h-full w-full object-cover" />`
    : `<div class="grid-pattern flex h-full items-center justify-center text-slate-400 dark:text-slate-600">${icon("cpu", "h-12 w-12")}</div>`

  const links = LINK_TYPES.filter((type) => project.links && project.links[type.key])

  const linkRow = links.length > 0
    ? `
      <div class="mt-5 flex gap-5 border-t border-slate-200 pt-4 dark:border-slate-800">
        ${each(links, (type) => `
          <a href="${esc(project.links[type.key])}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400">
            ${icon(type.icon, "h-4 w-4")}${tx(UI.projects[type.key])}
          </a>`)}
      </div>`
    : ""

  const year = project.year
    ? `<span class="font-mono text-xs text-slate-500">${esc(project.year)}</span>`
    : ""

  return `
    <article class="${CLS.card} flex flex-col overflow-hidden hover:border-amber-500/60 dark:hover:border-amber-400/60">
      <div class="aspect-video bg-slate-100 dark:bg-slate-800/60">${image}</div>

      <div class="flex flex-1 flex-col p-6">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-semibold ${CLS.heading}">${tx(project.title)}</h3>
          ${year}
        </div>
        <p class="mt-3 flex-1 text-sm leading-relaxed ${CLS.muted}">${tx(project.description)}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          ${each(project.tags, (tag) => `<li class="${CLS.chip}">${esc(tag)}</li>`)}
        </ul>
        ${linkRow}
      </div>
    </article>`
}

function renderProjects() {
  return section("projects", "03", `
    <div class="grid gap-6 md:grid-cols-2">
      ${each(CONTENT.projects, renderProjectCard)}
    </div>`)
}

function renderExperience() {
  return section("experience", "04", `
    <ol class="relative ml-2 space-y-10 border-l border-slate-300 dark:border-slate-700">
      ${each(CONTENT.experience, (item) => `
        <li class="relative pl-8">
          <span class="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-50 dark:bg-slate-950"></span>

          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="text-lg font-semibold ${CLS.heading}">${tx(item.role)}</h3>
            <span class="font-mono text-xs text-slate-500">${tx(item.period)}</span>
          </div>
          <p class="text-sm font-medium ${CLS.accent}">${tx(item.org)}</p>

          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm marker:text-slate-400 ${CLS.muted}">
            ${each(item.points, (point) => `<li>${tx(point)}</li>`)}
          </ul>
        </li>`)}
    </ol>`)
}

function renderEducation() {
  const educationCards = each(CONTENT.education, (item) => `
    <div class="${CLS.card} p-6">
      <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 class="text-lg font-semibold ${CLS.heading}">${tx(item.school)}</h3>
        <span class="font-mono text-xs text-slate-500">${tx(item.period)}</span>
      </div>
      <p class="mt-1 text-sm font-medium ${CLS.accent}">${tx(item.degree)}</p>
      ${item.note ? `<p class="mt-3 text-sm ${CLS.muted}">${tx(item.note)}</p>` : ""}
    </div>`)

  const certItems = each(CONTENT.certifications, (cert) => {
    const name = cert.url
      ? `<a href="${esc(cert.url)}" target="_blank" rel="noopener noreferrer" class="font-medium transition hover:text-amber-600 dark:hover:text-amber-400 ${CLS.heading}">${tx(cert.name)}</a>`
      : `<p class="font-medium ${CLS.heading}">${tx(cert.name)}</p>`

    return `
      <li class="${CLS.card} flex items-start gap-4 p-4">
        ${icon("award", "mt-0.5 h-5 w-5 shrink-0 " + CLS.accent)}
        <div>
          ${name}
          <p class="text-sm text-slate-500">${tx(cert.issuer)} · ${esc(cert.year)}</p>
        </div>
      </li>`
  })

  return section("education", "05", `
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="space-y-4">${educationCards}</div>
      <div>
        <h3 class="mb-4 font-mono text-sm uppercase tracking-wider text-slate-500">${tx(UI.sections.certifications)}</h3>
        <ul class="space-y-3">${certItems}</ul>
      </div>
    </div>`)
}

function renderContact() {
  const email = CONTENT.profile.email

  return section("contact", "06", `
    <div class="${CLS.card} mx-auto flex max-w-2xl flex-col items-center p-8 text-center">
      <p class="font-mono text-sm text-slate-500">${esc(email)}</p>
      <a href="mailto:${esc(email)}" class="${CLS.btnPrimary} mt-6">${icon("mail", "h-4 w-4")}${tx(UI.contact.sendEmail)}</a>
      ${renderSocials("mt-6 justify-center")}
    </div>`)
}

function renderFooter() {
  return `
    <footer class="border-t border-slate-200 py-8 dark:border-slate-800">
      <div class="${CLS.container} flex flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row">
        <p>© ${new Date().getFullYear()} ${esc(CONTENT.profile.name)}</p>
        <p class="font-mono text-xs">${tx(UI.footer.builtWith)}</p>
      </div>
    </footer>`
}

// ---------- Rendering ----------

function applyTheme() {
  document.documentElement.classList.toggle("dark", state.theme === "dark")
}

function renderNav() {
  document.getElementById("nav-root").innerHTML = renderNavbar()
}

function renderContent() {
  document.documentElement.lang = state.lang
  document.getElementById("content-root").innerHTML = `
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderExperience()}
      ${renderEducation()}
      ${renderContact()}
    </main>
    ${renderFooter()}`
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]")

  if (!target) {
    return
  }

  const action = target.dataset.action

  if (action === "toggle-lang") {
    state.lang = state.lang === "en" ? "id" : "en"
    writeStorage("lang", state.lang)
    renderNav()
    renderContent()
  } else if (action === "toggle-theme") {
    state.theme = state.theme === "dark" ? "light" : "dark"
    writeStorage("theme", state.theme)
    applyTheme()
    renderNav()
  } else if (action === "toggle-menu") {
    state.menuOpen = !state.menuOpen
    renderNav()
  } else if (action === "close-menu" && state.menuOpen) {
    state.menuOpen = false
    // Defer so the link can scroll to its section before the menu is re-rendered
    setTimeout(renderNav, 0)
  }
})

applyTheme()
renderNav()
renderContent()

// Content is rendered by JavaScript, so scroll to the section in the URL (e.g. #projects) manually
if (location.hash) {
  const targetSection = document.getElementById(location.hash.slice(1))

  if (targetSection) {
    targetSection.scrollIntoView()
  }
}