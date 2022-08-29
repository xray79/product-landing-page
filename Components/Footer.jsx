import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LogoSearchContainer = styled.div`
  margin-top: 5rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60rem;
`;

const NewsletterContainer = styled.div`
  & p {
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }

  & input {
    width: 70%;
    background-color: #e5e4e2;
    border: none;
    border-radius: 5rem;
    padding: 1rem;
    margin-right: 1rem;
  }

  & button {
    cursor: pointer;
    border: none;
    border-radius: 5rem;
    padding: 1rem 3rem;
    background-color: black;
    color: white;
  }
`;

const PrivacyList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 40rem;
  font-size: 1.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;
  margin-right: 5rem;
  font-size: 1.5rem;
  color: #bab9b8;
  max-width: 40rem;

  & li {
    list-style: none;
    margin-bottom: 0.2rem;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15rem;

  & ul {
    margin-right: 5rem;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const InfoText = styled.p`
  color: black;
`;

const CopyrightContainer = styled.div`
  width: 100%;
  margin-bottom: 7rem;
`;

const Footer = () => {
  return (
    <>
      <MainContainer>
        <LogoSearchContainer>
          <div>
            <img src="./footer-logo.svg" alt="" />
          </div>
          <NewsletterContainer>
            <p>Subscribe to our newsletter</p>
            <input type="text" placeholder="john@doe.com" />
            <button>Subscribe</button>
          </NewsletterContainer>

          <PrivacyList>
            <li>Imprint</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </PrivacyList>
        </LogoSearchContainer>
        <LinksContainer>
          <ListContainer>
            <ul>
              <li>Manifesto</li>
              <li>Our story</li>
              <li>Jobs</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Lang Menu</li>
            </ul>
          </ListContainer>
          <CopyrightContainer>
            <InfoText>
              *Water contributes to the maintenance of normal physical and
              cognitive function, when consumed at least 2,0 L per day.
            </InfoText>
            <Copyright>
              <p>All Rights reserved.</p>
              <p>© Copyright. 2022</p>
            </Copyright>
          </CopyrightContainer>
        </LinksContainer>
      </MainContainer>
    </>
  );
};
export default Footer;
