import React from 'react'

export default function useChattr() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = React.useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return {
        isOpen,
        toggle,
    }
}
