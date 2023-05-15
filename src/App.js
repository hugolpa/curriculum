import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Resume.css'; // Importe o arquivo CSS para estilização adicional, conforme necessário

const Resume = () => {
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
        

        <div className="text-center mb-3">
          <button className="btn btn-primary" onClick={toggleLanguage}>
            {language === 'portuguese' ? 'Switch to English' : 'Alterar para Português'}
          </button>
        </div>

        <Row>
          <Col md={4} className="text-center column">
            <div className="profile-picture ">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQFtRkm3ypVCpA/profile-displayphoto-shrink_800_800/0/1651606830902?e=1689206400&v=beta&t=gFSgqzv3vg0RuUcrziN3oh2xL68Q2ItheeggTFpBN5I"
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </div>
          </Col>

          <Col className="col gradient-bg column " md={8}>
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
              <p>
                <strong>{language === 'portuguese' ? 'Ano de Conclusão:' : 'Year of Completion:'}</strong> 2012
              </p>
            </div>
          </Col>
        </Row>

        <div className="experience column">
          <h2>{language === 'portuguese' ? 'Experiência' : 'Experience'}</h2>
          <p>
            <strong>{language === 'portuguese' ? 'Programador Júnior' : 'Junior Programmer'}</strong>
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
        <div className="skills column">
          <h2>{language === 'portuguese' ? 'Habilidades Técnicas' : 'Technical Skills'}</h2>
          <Row>
            <Col className="col gradient-bg" md={6}>
              <ul>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li>JavaScript</li>
                <li>GitHub</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
