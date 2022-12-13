import { Button, VStack } from '@hope-ui/core'
import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <VStack spacingY={2}>
      <div class="i-carbon-dicom-overlay text-4xl" />
      <div class="text-2xl">About</div>
      <Button variant="solid" size="sm" class="my-4" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </Button>
    </VStack>
  )
}
