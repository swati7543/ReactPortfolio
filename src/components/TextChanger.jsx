import React, { useEffect, useState } from 'react'

const TextChanger = ({ texts , speed = 100 }) => {
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopIndex, setLoopIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[loopIndex % texts.length]

            if (isDeleting) {
                setCurrentText(fullText.substring(0, charIndex - 1))
                setCharIndex(prev => prev - 1)
            } else {
                setCurrentText(fullText.substring(0, charIndex + 1))
                setCharIndex(prev => prev + 1)
            }

            // Pause before start deleting
            if (!isDeleting && charIndex === fullText.length) {
                setTimeout(() => setIsDeleting(true), 800)
            }

            // Move to next word
            if (isDeleting && charIndex === 0) {
                setIsDeleting(false)
                setLoopIndex(prev => prev + 1)
            }
        }

        const typingSpeed = isDeleting ? speed / 2 : speed
        const typingInterval = setTimeout(handleTyping, typingSpeed)

        return () => clearTimeout(typingInterval)
    }, [charIndex, isDeleting, loopIndex, texts, speed])

    return (
        <div className="transition ease duration-300">
            {currentText}
            <span className="animate-pulse">|</span>
        </div>
    )
}

export default TextChanger
