import {
  location,
  phone,
  mail,
  instagram,
  facebook,
  pinterest
} from '../assets/icons/index'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
`

const Logo = styled.h1``

const Description = styled.p`
  margin: 1.4rem 0;
  width: 80%;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialBg = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background-color: #c8d1cc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.4rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #dee7e2;
  }
`

const SocialIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
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
  display: flex;
  flex-wrap: wrap;
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
`

const ContactIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.6rem;
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
          necessitatibus illo recusandae quos perspiciatis ad aspernatur. Dicta
          provident ad quae aspernatur alias, nostrum officia est optio vitae
          quis consectetur sequi rem commodi qui.
        </Description>
        <SocialContainer>
          <SocialBg>
            <SocialIcon alt='instagram' src={instagram} />
          </SocialBg>
          <SocialBg>
            <SocialIcon alt='pinterest' src={pinterest} />
          </SocialBg>
          <SocialBg>
            <SocialIcon alt='facebook' src={facebook} />
          </SocialBg>
        </SocialContainer>
      </Info>
      <SiteMap>
        <Title>Site map</Title>
        <List>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Account</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>

          <ListItem>Terms</ListItem>
        </List>
      </SiteMap>
      <Contacts>
        <Title>Contact</Title>
        <ContactItem>
          <ContactIcon alt='location' src={location} />
          547 SE. Front St. Rome, NY 13440
        </ContactItem>
        <ContactItem>
          <ContactIcon alt='phone' src={phone} />
          +98 765 4321
        </ContactItem>
        <ContactItem>
          <ContactIcon alt='mail' src={mail} />
          maavvakumov@gmail.com
        </ContactItem>
      </Contacts>
    </Container>
  )
}

export default Footer
