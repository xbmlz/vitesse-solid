import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <div>
      <div class="i-carbon-dicom-overlay text-4xl" />
      <div class="text-2xl">About</div>
      <button class="btn my-4" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
    </div>
  )
}
