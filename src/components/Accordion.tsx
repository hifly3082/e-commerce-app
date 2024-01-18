import React, { useState } from 'react'
import styled from 'styled-components'

export interface IAccordion {
  children: React.ReactNode
}

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 25px;
`

const AccordionItem = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  border-top: 4px solid transparent;
  cursor: pointer;
`

const AccordionDetails = styled.div<{ isOpen: boolean }>`
  padding: 0 2rem;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? 'auto' : 0)};
`

const Accordion: React.FC<IAccordion> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AccordionContainer>
      <AccordionItem isOpen={isOpen} onClick={toggleAccordion}></AccordionItem>
      <AccordionDetails isOpen={isOpen}>{children}</AccordionDetails>
    </AccordionContainer>
  )
}

export default Accordion
