import React, { useEffect, useState } from 'react';
import htmlParser from 'html-react-parser';
import DOMPurify from 'dompurify';

const HomePage = () => {
  const [firstParagraphContent, setFirstParagraphContent] = useState('');
  const [secondParagraphContent, setSecondParagraphContent] = useState('');

  useEffect(() => {
    const fetchParagraphContent = async () => {
      try {
        const response = await fetch('/articles/ccblog-1.html');
        const html = await response.text();
        
        // Split HTML content by '</p>'
        const paragraphs = html.split('</p>');

        // Extract content from second paragraph
        const secondParagraphContent = paragraphs[1].replace('<p>', '');

        // Sanitize HTML content
        const sanitizedFirstParagraph = DOMPurify.sanitize(html);
        const sanitizedSecondParagraph = DOMPurify.sanitize(`${secondParagraphContent}`);

        // Set the content in state
        setFirstParagraphContent(sanitizedFirstParagraph);
        setSecondParagraphContent(sanitizedSecondParagraph);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchParagraphContent();
  }, []);

  // Function to extract image and caption
  const extractImageAndCaption = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    let imageAndCaption = '<div style="display: flex;">'; // Flexbox styling

    // Extract the first image and caption
    const image = doc.querySelector('.headline img');
    const imageUrl = image ? image.getAttribute('src') : '';

    const caption = doc.querySelector('.headline p');
    const captionText = caption ? caption.textContent.trim() : '';

    if (imageUrl) {
      imageAndCaption += `<img src="${imageUrl}" alt="Article Image" style="max-width: 100%; max-height: 100px;">`; // Limit image width and height
    }
    if (captionText) {
      imageAndCaption += `<p style="margin-left: 10px;"><h3>${captionText}</h3></p>`; // Add margin between image and caption
    }

    imageAndCaption += '</div>';

    return imageAndCaption;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>{firstParagraphContent && htmlParser(extractImageAndCaption(firstParagraphContent))}</div>
      <div>{secondParagraphContent && htmlParser(secondParagraphContent)}</div>
    </div>
  );
};

export default HomePage;
