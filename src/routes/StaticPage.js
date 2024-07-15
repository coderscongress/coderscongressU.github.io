// StaticPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StaticPage = () => {
  const { page } = useParams();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      const path = `${process.env.PUBLIC_URL}/${page}.html`;

      try {
        const response = await fetch(path);
        const content = await response.text();
        setHtmlContent(content);
      } catch (error) {
        console.error('Error loading HTML content', error);
      }
    };

    fetchHtmlContent();
  }, [page]);

  return (
    <div>
      {/* Render the raw HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default StaticPage;
