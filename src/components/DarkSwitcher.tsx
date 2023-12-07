import { createPrefersDark } from '@solid-primitives/media'
import { createEffect } from 'solid-js'

export function DarkSwitcher() {
  const prefersDark = createPrefersDark()

  createEffect(() => {
    document.documentElement.classList.toggle('dark', prefersDark())
  })

  const toggleDark = () => {
    const docEl = document.documentElement
    docEl.classList.toggle('dark')
    const isDark = docEl.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }
  return <button class="icon-btn dark:i-carbon-moon i-carbon:sun" onClick={toggleDark} />
}
