import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQ.css';  // Make sure you have this CSS file created and styled

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/faqs`);
      setFaqs(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch FAQs');
      setLoading(false);
    }
  };

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="faq-section">
      <h2>FAQ Section</h2>
      <div className="faq-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-card">
            <img src={faq.image} alt={faq.title} />
            <div className="faq-content">
              <h3>{faq.title}</h3>
              <p>{faq.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
