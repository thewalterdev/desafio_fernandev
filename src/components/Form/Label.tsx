import { LabelHTMLAttributes } from "react"
import styled from "styled-components"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    innerText: string
}

export default function Label({innerText, ...props}: LabelProps) {
    return (
        <Text {...props}>{innerText}</Text>
    )
}

const Text = styled.label`
    font-weight: 600;
`