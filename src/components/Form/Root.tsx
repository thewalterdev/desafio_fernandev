import styled from "styled-components"

export default function Root({children}: {children: React.ReactNode}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 320px;
    padding: 20px 10px;
    background-color: white;
    border-radius: 10px;
`