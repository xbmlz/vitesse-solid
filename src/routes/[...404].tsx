import { useNavigate } from 'solid-start'

export default function () {
  const [t] = useI18n()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <main class="px-4 py-10 text-center text-sky-800 dark:text-gray-200">
      <h1>{t('not_found')}</h1>
      <div text-4xl>
        <div i-carbon-warning inline-block />
      </div>
      <div>
        <button class="btn text-sm m-3 mt-8" onClick={goBack}>
          {t('btn_back')}
        </button>
      </div>
    </main>
  )
}
