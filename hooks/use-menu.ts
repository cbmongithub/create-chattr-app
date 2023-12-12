import { useState } from 'react'

export default function useMenu(): {
  isOpen: boolean
  toggle: () => void
} {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return {
    isOpen,
    toggle,
  }
}
