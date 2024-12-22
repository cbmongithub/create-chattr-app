export default function useScroll(messages: Chattr.ChattrMessageProps[]) {
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight
        }
    }, [messages])

    return ref
}
