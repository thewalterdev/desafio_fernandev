import { InputHTMLAttributes } from "react";
import { styled } from "styled-components"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
  }

export default function FormInput({children, ...props}: FormInputProps) {
    return (
        <Container>
            {children}
            <Input {...props} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 2px;
`

const Input = styled.input`
    width: 100%;
    border: 1px solid #505050;
    border-radius: 5px;
    height: 28px;
    padding: 0px 10px;
    outline: none;
`