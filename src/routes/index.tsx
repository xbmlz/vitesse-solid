import { useNavigate } from 'solid-start'
import Input from '~/components/input'

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
          Vitesse
        </a>
      </p>
      <p>
        <em text-sm opacity-75>
          {t('intro_desc')}
        </em>
      </p>

      <div py-4 />

      <Input ref={inputRef} />

      <div>
        <button class="btn" m-3 text-sm onClick={go}>
          {t('btn_go')}
        </button>
      </div>
    </div>
  )
}
