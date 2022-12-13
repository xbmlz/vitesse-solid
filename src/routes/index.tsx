import { Anchor, Button, VStack } from '@hope-ui/core'
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
    <VStack spacingY={5}>
      <div class="text-4xl i-carbon-campsite inline-block" />

      <Anchor href="https://github.com/antfu/vitesse" isExternal>
        Vitesse for Solid
      </Anchor>

      <em class="text-sm opacity-75">{t('intro_desc')}</em>

      <NameInput
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') go()
        }}
      />

      <Button onClick={go} variant="solid" size="sm">
        {t('btn_go')}
      </Button>
    </VStack>
  )
}
