import { FormHTMLAttributes } from "react"
import styled from "styled-components"

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
}

export default function FormElement({children, ...props}: FormProps) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 15px;
`