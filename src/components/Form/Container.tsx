import { styled } from "styled-components";

export default function Container({children}: {children: React.ReactNode}) {
    return (
        <Box>
            {children}
        </Box>
    )
}

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 2px;
`