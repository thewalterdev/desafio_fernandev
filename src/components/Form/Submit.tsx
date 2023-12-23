import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

export default function Submit({...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Container {...props}>
            Enviar
        </Container>
    )
}

const Container = styled.button`
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 8px;
`