import { useNavigate } from 'solid-start'
import NameInput from '~/components/NameInput'

export default function Home() {
  const [t] = useI18n()
  const navigate = useNavigate()
  let inputRef: any
  const go = () => {
    if (inputRef.value) navigate(`/hi/${encodeURIComponent(inputRef.value)}`)
  }

  onMount(() => {
    inputRef.focus()
  })

  return (
    <div>
      <div class="text-4xl">
        <div class=" i-carbon-campsite inline-block" />
      </div>

      <p>
        <a rel="noreferrer" href="https://github.com/xbmlz/vitesse-solid" target="_blank">
          Vitesse Solid
        </a>
      </p>

      <p my-4>
        <em class="text-sm opacity-75">{t('intro_desc')}</em>
      </p>

      <NameInput
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') go()
        }}
      />

      <label class="hidden" for="input">
        {t('intro.intro_whats_your_name')}
      </label>

      <div>
        <button class="m-3 text-sm btn" onClick={go}>
          {t('btn_go')}
        </button>
      </div>
    </div>
  )
}
