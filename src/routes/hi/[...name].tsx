import { A } from '@solidjs/router'
import { For, Show } from 'solid-js'
import { useNavigate, useParams } from 'solid-start'
import { names, setNames } from '~/store/user'

export default function () {
  const params = useParams()
  const navigate = useNavigate()

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

      <Show when={names.length}>
        <p class="text-sm mt-4">
          <span class="opacity-75">{t('intro_aka')}:</span>
          {/* <ul> */}
          <For each={names}>
            {(name) => (
              <li>
                <A href={`/hi/${name}`}>{name}</A>
              </li>
            )}
          </For>
          {/* </ul> */}
        </p>
      </Show>
    </div>
  )
}
