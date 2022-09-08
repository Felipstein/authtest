import { Container } from './styles';

import toast from '../../utils/toast';

import instagramIcon from '../../assets/images/icons/instagram.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import discordIcon from '../../assets/images/icons/discord.svg';
import copyIcon from '../../assets/images/icons/copy.svg';

export default function Footer() {
  function handleEmailCopy() {
    navigator.clipboard.writeText('luisfelipe-oliveira@outlook.com.br');

    toast('E-mail copiado!', 2500);
  }

  return (
    <Container>
      <div className="wrapper">
        <div className="contact">
          <h3>Por Felipe Oliveira</h3>
          <div className="email">
            <span>
              email:
              {' '}
              <strong
                id="copy-email"
                onClick={handleEmailCopy}
              >
                luisfelipe-oliveira@outlook.com.br
              </strong>
            </span>
            <span className="tooltip">
              <img src={copyIcon} alt="Copy" />
              Clique para copiar
            </span>
          </div>
          <span>
            telef.:
            {' '}
            <strong>+55 (44) 99876-6289</strong>
          </span>
        </div>
        <div className="network">
          <h3>Redes Sociais</h3>
          <nav>
            <a href="https://www.instagram.com/luisfeelip/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/feelipeoliveira/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Felipstein" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/luisfeelip/" target="_blank" rel="noreferrer">
              <img src={discordIcon} alt="Discord" />
            </a>
          </nav>
        </div>
      </div>
    </Container>
  );
}
