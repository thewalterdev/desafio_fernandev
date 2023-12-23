import { keyframes, styled } from "styled-components";
import { FaCheckCircle } from "react-icons/fa"
import { useEffect, useState } from "react";


export default function SuccessNotification() {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
            window.location.href="https://www.linkedin.com/in/walterdev/"
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Container style={{
            opacity: visible ? 1 : 0
        }}>
            <Header>
                <Icon />
                <Title>Sucesso</Title>
            </Header>
            <Body>
                <Description>Você foi inscrito(a) com sucesso.<br/>Redirecionando à página do dev...</Description>
            </Body>
        </Container>
    )
}

const fadein = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 320px;
  padding: 10px 0;

  margin-top: 20px;
  border-radius: 10px;

  background: white;

    transition: opacity .5s;

  animation: ${fadein} 1s linear;
`

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 10px;
    align-items: center;
    width: 100%;

    column-gap: 5px;
`

const Icon = styled(FaCheckCircle)`
    font-size: 18px;
    color: #09a809;
`

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #09a809;
`

const Body = styled.div`
    padding: 0 10px;
`

const Description = styled.p`
    color: black;
`