import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const folders = [
    {
      title: "Policy PDFs",
      description: "View and download company policy documents.",
      icon: "📄", // Folder icon (you can use icons from a library like FontAwesome or Material Icons)
    },
    {
      title: "Training PPTs",
      description: "Access training PowerPoint presentations.",
      icon: "📂",
    },
    {
      title: "Training Videos",
      description: "Watch training videos for better understanding.",
      icon: "🎥",
    },
  ];

  return (
    <Container fluid className="py-4">
      <h1 className="text-center mb-4">Dashboard</h1>
      <Row className="g-4">
        {folders.map((folder, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <div
                  className="mb-3"
                  style={{
                    fontSize: "3rem",
                  }}
                >
                  {folder.icon}
                </div>
                <Card.Title>{folder.title}</Card.Title>
                <Card.Text>{folder.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <a href={`/${folder.title.toLowerCase().replace(/\s/g, '-')}`} className="btn btn-primary">
                  Open Folder
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
