import { useEffect, useState } from 'react'
import { ActionState } from '.'

export const useShowBanner = (actionState: ActionState) => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (actionState === 'success' && !showBanner) setShowBanner(true)
  }, [actionState, showBanner])

  return { showBanner }
}
