import { useNavigate, useParams } from 'solid-start'

export default function () {
  const params = useParams()
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  const [t] = useI18n()
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

      <div>
        <p text-sm mt-4>
          <span opacity-75>{t('intro_aka')}:</span>
          {/* <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            // <RouterLink :to="`/hi/${otherName}`" replace>
            //   {{ otherName }}
            // </RouterLink>
          </li>
        </ul> */}
        </p>
      </div>
    </div>
  )
}
