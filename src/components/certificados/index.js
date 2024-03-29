import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CertificateList = () => {
  const certificates = [
    {
      title: 'Front-End Development Libraries',
      imageUrl: 'https://i.ibb.co/9yYw2PZ/Captura-de-tela-2024-01-09-094908.png',
      link: 'https://www.freecodecamp.org/certification/fccd9852319-c758-4155-a2ef-a8ffb02a5519/front-end-development-libraries',
    },
    {
      title: 'Responsive Web Design',
      imageUrl: 'https://i.ibb.co/6bvPGYh/Captura-de-tela-2024-01-09-094410.png',
      link: 'https://www.freecodecamp.org/certification/fccd9852319-c758-4155-a2ef-a8ffb02a5519/responsive-web-design',
    },
    {
      title: 'Javascript Algorithms and Data Structures',
      imageUrl: 'https://i.ibb.co/MN4d5G3/Fire-Shot-Capture-004-www-freecodecamp-org.png',
      link: 'https://www.freecodecamp.org/certification/fccd9852319-c758-4155-a2ef-a8ffb02a5519/javascript-algorithms-and-data-structures',
    },
    {
      title: 'Javascript CodinGame Certified',
      imageUrl: 'https://i.ibb.co/FqxJzZC/Fire-Shot-Capture-007-Codin-Game-Certification-www-codingame-com.png',
      link: 'https://www.codingame.com/certification/OGtKttmWNic14xNvidPPGA',
    },
    // Adicione mais objetos de certificado conforme necessário
  ];

  return (
    <div className="certificates-container mt-2">
      <h2 className='column'>Meus Certificados</h2>
      <Row className="justify-content-center">
        {certificates.map((certificate, index) => (
          <Col key={index} className="mt-4" md={4}>
            <h3 className='column'>{certificate.title}</h3>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img src={certificate.imageUrl} alt={certificate.title} className="certificate-image column" />
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CertificateList;
