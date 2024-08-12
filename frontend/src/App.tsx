import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Intent } from './types';

const intents: Intent[] = [
  { id: 'start', question: '\\start', answer: 'Xin chào 🥳 Tôi là trợ lý ảo của bạn 📚 Tôi có thể giúp gì cho bạn?' },
  { id: 'defaultFallback', question: 'defaultFallback', answer: 'Bạn có thể vui lòng diễn đạt lại câu hỏi của mình...' },
  { id: '0_lam_cach_nao_de_cap_nhat_the_tin_dung_cua_toi', question: 'Làm cách nào để cập nhật thẻ tín dụng của tôi?', answer: 'Bạn có thể cập nhật thông tin...' },
  { id: '1_lam_cach_nao_de_thay_doi_email_cua_toi', question: 'Làm cách nào để thay đổi email của tôi?', answer: 'Chọn nút Thay đổi email...' },
  { id: '3_noi_chuyen_voi_cham_soc_vien', question: 'Nói chuyện với Chăm sóc viên', answer: 'Nói chuyện với Chăm sóc viên' },
];

const App: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light p-3">
          <h5>Intents</h5>
          <ListGroup>
            {intents.map((intent, index) => (
              <ListGroup.Item key={index}>
                {intent.id}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={10} className="p-3">
          <h5>Edit BOT</h5>
          <Button variant="primary" className="mb-3">+ Add intent</Button>
          <Button variant="secondary" className="mb-3 ml-2">Upload from CSV</Button>
          <Button variant="secondary" className="mb-3 ml-2">Export to CSV</Button>
          <div>
            <h6>Intents</h6>
            <ListGroup>
              {intents.map((intent, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Intent name:</strong> {intent.id}<br />
                    <strong>Question:</strong> {intent.question}<br />
                    <strong>Answer:</strong> {intent.answer}
                  </div>
                  <div>
                    <Button variant="warning" className="mr-2">✎</Button>
                    <Button variant="danger">✘</Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
