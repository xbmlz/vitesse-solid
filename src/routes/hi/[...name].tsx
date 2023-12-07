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
      <div class="text-4xl i-carbon-pedestrian inline-block" />

      <p>{t('intro_hi', { name: params.name })}</p>

      <p class="text-sm opacity-75">
        <em>{t('intro_dynamic_route')}</em>
      </p>

      <button onClick={goBack}>{t('btn_back')}</button>

      <Show when={names.length}>
        <div class="mt-4 text-sm">
          <span class="opacity-75">{t('intro_aka')}:</span>
          <ul>
            <For each={names}>
              {(name) => (
                <li>
                  <A href={`/hi/${name}`}>{name}</A>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </div>
  )
}
