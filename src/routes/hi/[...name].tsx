import { A } from '@solidjs/router'
import { For, Show } from 'solid-js'
import { useNavigate, useParams } from 'solid-start'

export default function () {
  const params = useParams()
  const navigate = useNavigate()
  const [names, setNames] = createStore<string[]>([])

  const goBack = () => navigate(-1)
  const [t] = useI18n()

  if (params.name && !names.includes(params.name)) {
    setNames([...names, params.name])
  }

  return (
    <div>
      <div text-4xl>
        <div i-carbon-pedestrian inline-block />
      </div>

      <p>{t('intro_hi', { name: params.name })}</p>

      <p text-sm opacity-75>
        <em>{t('intro_dynamic_route')}</em>
      </p>

      <div>
        <button class="btn m-3 mt-6 text-sm" onClick={goBack}>
          {t('btn_back')}
        </button>
      </div>

      <Show when={names}>
        <p text-sm mt-4>
          <span opacity-75>{t('intro_aka')}:</span>
          <ul>
            <For each={names}>
              {(item) => (
                <li>
                  <A href={`/hi/${item}`}>{item}</A>
                </li>
              )}
            </For>
          </ul>
        </p>
      </Show>
    </div>
  )
}
