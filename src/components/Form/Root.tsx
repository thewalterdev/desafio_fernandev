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
    padding: 20px 15px;
`