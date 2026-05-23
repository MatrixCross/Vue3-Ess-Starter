import { ref, useTemplateRef } from 'vue'
import type { ComponentPublicInstance, Ref } from 'vue'
import type { FormInst } from 'naive-ui'

export function useNaiveForm(key?: string) {
  const formRef: Ref<FormInst | null> = key
    ? useTemplateRef(key)
    : ref(null)

  function setFormRef(ref: Element | ComponentPublicInstance | null) {
    formRef.value = ref as FormInst | null
  }
  async function validate() {
    await formRef.value?.validate()
  }

  async function restoreValidation() {
    formRef.value?.restoreValidation()
  }

  return {
    setFormRef,
    validate,
    restoreValidation,
  }
}
