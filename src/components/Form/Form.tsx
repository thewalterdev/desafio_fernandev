import styled from "styled-components"

export default function FormElement({children}: {children: React.ReactNode}) {
    return (
        <Container>
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