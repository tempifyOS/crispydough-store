import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import styled from 'styled-components';
import { paperPlaneOutline } from 'ionicons/icons';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const Article = styled.article`
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  position: relative;
  padding-bottom: 7px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const FormTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #fff; /* White text color */
  text-transform: capitalize;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  color: #fff;
  font-size: var(--fs-6);
  font-weight: var(--fw-400);
  padding: 13px 20px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  outline: none;
  background-color: #333;
  width: calc(50% - 10px);
`;

const PhoneInput = styled(Input)`
  color: #fff;
  font-size: var(--fs-6);
  font-weight: var(--fw-400);
  padding: 13px 20px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  outline: none;
  background-color: #333;
  width: calc(50% - 10px);
`;

const Textarea = styled.textarea`
    color: #fff;
    font-size: var(--fs-6);
    font-weight: var(--fw-400);
    padding: 13px 20px;
    border: 1px solid var(--jet);
    border-radius: 14px;
    outline: none;
    background-color: #333;
    width: calc(100% - 10px);
    margin-bottom: 20px;
`;

const ContactButton = styled.button`
  position: relative;
  margin-top: 15px;
  width: 100%;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 14px;
  font-size: var(--fs-6);
  text-transform: capitalize;
  box-shadow: var(--shadow-3);
  z-index: 1;
  transition: var(--transition-1);

  ion-icon {
    margin-right: 10px;
    font-size: 24px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    items: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const checkFormValidity = () => {
    const isValid = Object.values(formData).every(value => value.trim() !== '');
  };

  const sendEmail = () => {
    emailjs.send('service_m4jbl1h', 'template_w736hgp', {
      from_name: formData.fullname,
      items: formData.items,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message
    }, 'KB76v7jFBRC9pYznU')
      .then((response: any) => {
        console.log('Email sent successfully:', response);
        setFormData({
          fullname: '',
          items: '',
          email: '',
          phone: '',
          message: ''
        });
        toast.success('Email sent successfully!');
        window.location.href = '/';
        
      })
      .catch((error: any) => {
        console.error('Email sending failed:', error);
        toast.error('Error sending message.')
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
  };

  const handleButtonClick = () => {
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    if (form) {
      form.submit();
    }
  };

  return (
    <Article className="contact">
      <Header>
        <Title className="article-title">Contact</Title>
      </Header>
      <Section className="contact-form">
        <FormTitle className="form-title">Contact Form</FormTitle>
        <Form id="contact-form" onSubmit={handleSubmit} className="form">
          <InputGroup>
            <Input name="fullname" placeholder="Full name" required onChange={handleInputChange} />
            <Input name="items" placeholder="Items Ordered (If none, please use N/A)" onChange={handleInputChange} required />
            <Input name="email" placeholder="Email address" required onChange={handleInputChange} />
            <PhoneInput type="tel" name="phone" placeholder="Phone number" required onChange={handleInputChange} />
          </InputGroup>
          <Textarea name="message" placeholder="How can we serve you?" required onChange={handleInputChange} />
          <ContactButton
            type="submit"
            disabled={!formData.fullname || !formData.email || !formData.phone || !formData.message}
            className="form-btn"
            onClick={handleSubmit}
          >

            <IonIcon icon={paperPlaneOutline} />
            <span>Send Message</span>
          </ContactButton>
        </Form>
      </Section>
    </Article>
  );
};

export default ContactForm;
