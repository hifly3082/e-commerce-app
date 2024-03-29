import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
`

const Logo = styled.h1`
  color: var(--color-grey-800);
`

const Description = styled.p`
  color: var(--color-grey-800);
  margin: 1.4rem 0;
  width: 80%;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialIcon = styled.div`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: var(--color-grey-500);

  &:hover {
    transform: scale(1.05);
    color: var(--color-main-500);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`

const SiteMap = styled.div`
  flex: 1;
  padding: 1.4rem;
`

const Title = styled.h3`
  margin-bottom: 2rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const ListItem = styled.li`
  width: 30%;
  margin-bottom: 1.4rem;
  cursor: pointer;
`

const Contacts = styled.div`
  flex: 1;
  padding: 1.4rem;
`

const ContactItem = styled.div`
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.6rem;
  }
`

const Footer = () => {
  return (
    <Container>
      <Info>
        <Logo>MAV</Logo>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          delectus fuga. Ut accusantium, provident tenetur iure incidunt
          repudiandae porro aut veritatis quasi laboriosam rem quo iste
          necessitatibus illo recusandae quos perspiciatis.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaFacebook />
          </SocialIcon>
          <SocialIcon>
            <FaPinterest />
          </SocialIcon>
        </SocialContainer>
      </Info>
      <SiteMap>
        <Title>Site map</Title>
        <List>
          <ListItem>Clothes</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Account</ListItem>
          <ListItem>Furniture</ListItem>
          <ListItem>Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </SiteMap>
      <Contacts>
        <Title>Contact</Title>
        <ContactItem>
          <HiLocationMarker />
          547 SE. Front St. Rome, NY 13440
        </ContactItem>
        <ContactItem>
          <HiPhone />
          +09 876 543 21 00
        </ContactItem>
        <ContactItem>
          <HiMail />
          maavvakumov@gmail.com
        </ContactItem>
      </Contacts>
    </Container>
  )
}

export default Footer
