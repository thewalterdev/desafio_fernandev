import { SelectHTMLAttributes } from "react"
import styled from "styled-components"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode
}

export default function Select({children, ...props}: SelectProps) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

const Container = styled.select`
    width: 100%;
    height: 28px;
    border-radius: 5px;
    outline: none;
`