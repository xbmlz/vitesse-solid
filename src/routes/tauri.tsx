import { Button, HStack, VStack } from '@hope-ui/core'
import toast, { Toaster } from 'solid-toast'
// import { invoke } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'

export default function () {
  const [t] = useI18n()
  // @ts-expect-error __TAURI__ is injected by Tauri
  const isTauri = typeof window !== 'undefined' && window.__TAURI__ !== undefined

  const callRustMethods = async () => {
    const res = await invoke<string>('my_custom_command')
    toast.success(res, {
      duration: 5000,
      position: 'bottom-center',
    })
  }

  onMount(() => {
    if (!isTauri) {
      toast.error(t('not_in_tauri'), {
        duration: 5000,
        position: 'bottom-center',
      })
    }
  })

  return (
    <VStack spacing={4}>
      <Toaster />
      <h1 class="text-2xl">Tauri App Demo Pages</h1>
      <HStack>
        <Button variant="solid" size="sm" isDisabled={!isTauri} onClick={callRustMethods}>
          {t('call_rust_methods')}
        </Button>
      </HStack>
    </VStack>
  )
}
