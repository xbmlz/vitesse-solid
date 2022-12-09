import type { Component, JSX } from 'solid-js'

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [t] = useI18n()
  return (
    <input
      {...props}
      id="input"
      type="text"
      placeholder={t('intro_whats_your_name')}
      class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none"
    />
  )
}

export default Input
