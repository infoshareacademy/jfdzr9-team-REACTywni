import { FooterField, FooterNavField, LinkFooter, LogoField, LogoFooter } from "./Footer.styled";
import { Link } from "react-router-dom";
//import logo
import LogoSign from "./../../assets/logos/find-a-designer-logo-sign-white.svg";

const Footer = () => {
  return (
    <FooterField>
      <LogoField>
        <Link to={`/`}>
          <LogoFooter src={LogoSign} />
        </Link>
        <p>©2023 - Find a Designer | All right reserved</p>
      </LogoField>
      <FooterNavField>
        <LinkFooter to={`/howfreelancer`}>Freelancer</LinkFooter>
        <LinkFooter to={`/howclient`}>Klient</LinkFooter>
        <LinkFooter to={`/privacy-policy`}>Polityka prywatności</LinkFooter>
        <LinkFooter to={`/statute`}>Regulamin</LinkFooter>
      </FooterNavField>
    </FooterField>
  );
};

export default Footer;
