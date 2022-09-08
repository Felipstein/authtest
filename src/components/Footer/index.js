import { Container } from './styles';

import instagramIcon from '../../assets/images/icons/instagram.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import discordIcon from '../../assets/images/icons/discord.svg';

export default function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <div className="contact">
          <h3>Por Felipe Oliveira</h3>
          <span>
            email:
            {' '}
            <strong>luisfelipe-oliveira@outlook.com.br</strong>
          </span>
          <span>
            telef.:
            {' '}
            <strong>+55 (44) 99876-6289</strong>
          </span>
        </div>
        <div className="network">
          <h3>Redes Sociais</h3>
          <nav>
            <img src={instagramIcon} alt="Instagram" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={githubIcon} alt="GitHub" />
            <img src={discordIcon} alt="Discord" />
          </nav>
        </div>
      </div>
    </Container>
  );
}
