import { VStack } from '@hope-ui/core'
import { useNavigate } from 'solid-start'

export default function () {
  const [t] = useI18n()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <VStack>
      <h1>{t('not_found')}</h1>
      <div text-4xl>
        <div i-carbon-warning inline-block />
      </div>
      <div>
        <button class="btn text-sm m-3 mt-8" onClick={goBack}>
          {t('btn_back')}
        </button>
      </div>
    </VStack>
  )
}
