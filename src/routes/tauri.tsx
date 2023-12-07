import { invoke } from '@tauri-apps/api/tauri'

export default function () {
  const [t] = useI18n()
  const isTauri = typeof window !== 'undefined' && window.__TAURI__ !== undefined

  const callRustMethods = async () => {
    const res = await invoke<string>('my_custom_command')
    console.log(res)
  }

  onMount(() => {
    if (!isTauri) {
      console.warn(t('not_in_tauri'))
    }
  })

  return (
    <div>
      <h1 class="text-2xl mb-4">Tauri App Demo Pages</h1>
      <button class="btn" disabled={!isTauri} onClick={callRustMethods}>
        {t('call_rust_methods')}
      </button>
    </div>
  )
}
