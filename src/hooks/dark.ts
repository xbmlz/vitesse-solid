import { usePrefersDark } from '@solid-primitives/media'
import { createStorageSignal } from '@solid-primitives/storage'

const prefersDark = usePrefersDark()

const useDark = () => {
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
  // TODO use createEffect to update html classList
  // createEffect(() => {
  //   console.log('prefersDark', prefersDark())
  //   if (dark() === 'auto') {
  //     toggleDark()
  //   }
  // }, [prefersDark])
  return { dark, toggleDark }
}

export default useDark
