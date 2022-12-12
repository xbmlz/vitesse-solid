import { useNavigate } from 'solid-start'
import NameInput from '~/components/NameInput'

export default function Home() {
  const [t] = useI18n()
  const navigate = useNavigate()
  let inputRef: any
  const go = () => {
    if (inputRef.value) navigate(`/hi/${encodeURIComponent(inputRef.value)}`)
  }

  return (
    <div>
      <div text-4xl>
        <div i-carbon-campsite inline-block />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
          Vitesse for Solid
        </a>
      </p>
      <p>
        <em text-sm opacity-75>
          {t('intro_desc')}
        </em>
      </p>

      <div py-4 />

      <NameInput
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') go()
        }}
      />

      <div>
        <button class="btn m-3 text-sm" onClick={go}>
          {t('btn_go')}
        </button>
      </div>
    </div>
  )
}
