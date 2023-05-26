import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faCodepen, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';
import CertificateList from './components/certificados/';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  const [language, setLanguage] = useState('portuguese');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'portuguese' ? 'english' : 'portuguese');
  };

  return (
    <div className="resume">
      <div className="background">
        <div className="shape circle"></div>
        <div className="shape trapezoid"></div>
        <div className="shape rhombus"></div>
      </div>
      <Container>
        <div className="text-center mb-3 column">
          <button className="btn btn-primary" onClick={toggleLanguage}>
            {language === 'portuguese' ? 'Switch to English' : 'Alterar para Português'}
          </button>
        </div>
        <Row>
          <Col md={4} className="text-center column">
            <div className="profile-picture skills">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQFtRkm3ypVCpA/profile-displayphoto-shrink_800_800/0/1651606830902?e=1689206400&v=beta&t=gFSgqzv3vg0RuUcrziN3oh2xL68Q2ItheeggTFpBN5I"
                alt="Profile"
                className="img-fluid rounded-circle column"
              />
            </div>
          </Col>
          <Col md={8} className="col column skills">
            <div className="personal-details column">
              <h2>{language === 'portuguese' ? 'Dados Pessoais' : 'Personal Details'}</h2>
              <p>
                <strong>{language === 'portuguese' ? 'Nome:' : 'Name:'}</strong> Hugo Leonardo
              </p>
              <p>
                <strong>{language === 'portuguese' ? 'E-mail:' : 'Email:'}</strong> hugo.leonardo.jobs@gmail.com
              </p>
            </div>
            <div className="education column">
              <h2>{language === 'portuguese' ? 'Educação' : 'Education'}</h2>
              <p>
                <strong>{language === 'portuguese' ? 'Curso:' : 'Course:'}</strong> Bacharelado em Ciência da Computação
              </p>
              <p>
                <strong>{language === 'portuguese' ? 'Instituição:' : 'Institution:'}</strong> Universidade UniCEUB
              </p>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="col">
            <div className="experience column skills">
              <h2>{language === 'portuguese' ? 'Experiência' : 'Experience'}</h2>
              <p>
                <strong>{language === 'portuguese' ? 'Programador Front End - Pleno' : 'Full - Front End Programmer'}</strong>
              </p>
              <p>
                <strong>{language === 'portuguese' ? 'Empresa:' : 'Company:'}</strong> INOVA Comunicação inteligentes
              </p>
              <p>
                <strong>{language === 'portuguese' ? 'Período:' : 'Period:'}</strong> Abril 2018 - Presente
              </p>
              <ul>
                <li>{language === 'portuguese' ? 'Desenvolvimento e manutenção de aplicativos usando React.js' : 'Developing and maintaining applications using React.js'}</li>
                <li>{language === 'portuguese' ? 'Colaboração com a equipe de desenvolvimento no ciclo de vida do projeto' : 'Collaborating with the development team throughout the project lifecycle'}</li>
                <li>{language === 'portuguese' ? 'Resolução de problemas e depuração de código' : 'Troubleshooting and debugging code'}</li>
              </ul>
            </div>
          </Col>
          <Col md={7}>
            <div className="skills column">
              <h2>{language === 'portuguese' ? 'Habilidades Técnicas' : 'Technical Skills'}</h2>
              <Row>
                <Col md={6} className="col">
                  <ul>
                    <li>{language === 'portuguese' ? 'Linguagens: JavaScript, HTML, CSS' : 'Languages: JavaScript, HTML, CSS'}</li>
                    <li>{language === 'portuguese' ? 'Frameworks e Bibliotecas: React.js, Axios, React Router' : 'Frameworks and Libraries: React.js, Axios, React Router'}</li>
                    <li>{language === 'portuguese' ? 'Ferramentas de Desenvolvimento: Visual Studio Code, Git, Webpack' : 'Development Tools: Visual Studio Code, Git, Webpack'}</li>
                    <li>{language === 'portuguese' ? 'Práticas de Desenvolvimento: Design Responsivo, Testes Unitários, Versionamento de Código (Git), Metodologias Ágeis (Scrum)' : 'Development Practices: Responsive Design, Unit Testing, Code Versioning (Git), Agile Methodologies (Scrum)'}</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul>
                    <li>{language === 'portuguese' ? 'Outras Habilidades: Resolução de Problemas, Depuração de Código, Colaboração em Equipe' : 'Other Skills: Troubleshooting, Code Debugging, Team Collaboration'}</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <CertificateList />
        <div className="d-flex justify-content-center mt-4">
          {/* Ícones de mídia social */}
          <div className="m-2 column">
            <a href="https://www.linkedin.com/in/hugo-leonardo-p-a-495a40233/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '40px' }} />
            </a>
          </div>
          <div className="m-2 column">
            <a href="https://codepen.io/huguinho" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCodepen} style={{ fontSize: '40px' }} />
            </a>
          </div>
          <div className="m-2 column">
            <a href="https://github.com/hugolpa/medical_record" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '40px' }} />
            </a>
          </div>
          <div className="m-2 column">
            <a href="https://www.reddit.com/user/huguinho_dev/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faReddit} style={{ fontSize: '40px' }} />
            </a>
          </div>
          <div className="m-2 column">
            <a href="https://www.codingame.com/certification/OGtKttmWNic14xNvidPPGA" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCode} style={{ fontSize: '40px' }} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
