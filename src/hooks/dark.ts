import { usePrefersDark } from '@solid-primitives/media'
import { createStorageSignal } from '@solid-primitives/storage'

// TODO: use createEffect to update html classList
const useDark = () => {
  const prefersDark = usePrefersDark()
  const [dark, setDark] = createStorageSignal('color-scheme', 'auto')
  const toggleDark = () => {
    const html = window?.document.querySelector('html')
    if (!html) return
    if (dark() === 'dark' || prefersDark()) {
      html.classList.remove('dark')
      setDark('light')
    } else {
      html.classList.add('dark')
      setDark('dark')
    }
  }
  // createEffect(() => {
  //   console.log('prefersDark', prefersDark())
  //   if (dark() === 'auto') {
  //     toggleDark()
  //   }
  // }, [prefersDark, dark])
  return { dark, toggleDark }
}

export default useDark
