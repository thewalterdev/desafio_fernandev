import styled from "styled-components"
import Form from "./components/Form"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import SuccessNotification from "./components/SuccessNotification"

interface Data {
  fullname: string
  email: string
  maritalStatus: string
}

export default function App() {

  const [data, setData] = useState<Data>({
    fullname: "",
    email: "",
    maritalStatus: ""
  })

  const [progress, setProgress] = useState<number>(0)

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setProgress(0)
    setData({
      fullname: "",
      email: "",
      maritalStatus: ""
    })
  }

  useEffect(() => {

    let total: number = 0

    if (data.fullname) {
      const splittedFullname = data.fullname.split(' ')
      
      if (splittedFullname.length >= 2) {
        total += 50
      }
    }

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (emailRegex.test(data.email)) {
        total += 25
      }

    }

    if (data.maritalStatus) {
      if (data.maritalStatus !== '- selecione...') {
        total += 25
      }
    }

    setProgress(total)
  }, [data])

  return (
    <Container>
      {formSubmitted ? <SuccessNotification /> : <></>}
      <Info>
        <Title href="https://www.youtube.com/watch?v=ngcH4e2RTUM" target="_blank">progresso do formulário - desafio</Title>
      </Info>
      <Form.Root>
        <ProgressBarContainer>
          <ProgressBar style={{width: `${progress}%`}} />
        </ProgressBarContainer>
        <Form.Form onSubmit={handleSubmit}>
          <Form.Input
          name="fullname"
          id="fullname"
          onChange={handleChange}
          value={data.fullname}
          type="text">
            <Form.Label innerText="Nome Completo" htmlFor="fullname" />
          </Form.Input>
          <Form.Input
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email} 
            type="email"
          >
            <Form.Label innerText="E-mail" htmlFor="email" />
          </Form.Input>
          <Form.Container>
            <Form.Label innerText="Estado Civil:"/>
            <Form.Select onChange={handleChange} name="maritalStatus">
              <option value=''>- selecione...</option>
              <option value='solteiro'>Solteiro</option>
              <option value='casado'>Casado</option>
              <option value='divorciado'>Divorciado</option>
            </Form.Select>
          </Form.Container>
          <Form.Submit
            type="submit"
            style={{
              cursor: progress === 100 ? 'pointer' : 'not-allowed',
              background: progress === 100 ? 'green' : '#50505050',
              transition: '.2s background, .2s color',
              fontWeight: '600',
              color: progress === 100 ? 'white' : 'black'
            }}
            disabled={progress === 100 ? false : true}
          />
        </Form.Form>
      </Form.Root>
      <Footer>
            <FooterIcon href="https://github.com/thewalterdev" target="_blank">
              <FaGithub  />
            </FooterIcon>
            <FooterIcon href="https://www.linkedin.com/in/walterdev/" target="_blank">
              <FaLinkedin  />
            </FooterIcon>
      </Footer>
    </Container>
  )
}

const Info = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`

const Title = styled.a`
  font-size: 20px;
  color: black;
  font-weight: 600;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #52525250;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background: #50505050;
  margin-bottom: 15px;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: green;

  transition: .5s width ;
`

const Footer = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 10px;

  bottom: 0;
`

const FooterIcon = styled.a`
  font-size: 24px;
  color: white;
`