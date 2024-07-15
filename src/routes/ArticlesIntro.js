
import React, { useEffect, useState } from 'react';
import htmlParser from 'html-react-parser';
import DOMPurify from 'dompurify';

const ArticlesIntro = () => {
  const [articleContents, setArticleContents] = useState([]);

  useEffect(() => {
    const fetchArticleContents = async () => {
      try {
        const articleFiles = ['ccblog-1.html', 'ccblog-2.html', 'ccblog-3.html','ccblog-4.html', 'ccblog-5.html', 'ccblog-6.html', 'ccblog-7.html', 'ccblog-8.html', 'ccblog-9.html','ccblog-10.html', 'ccblog-11.html', 'ccblog-12.html','ccblog-13.html']; // Add more file names as needed
        const contents = [];

        for (const articleFile of articleFiles) {
          const response = await fetch(`/articles/${articleFile}`);
          const html = await response.text();
          
          // Split HTML content by '</p>'
          const paragraphs = html.split('</p>');

          // Extract content from first paragraph
          const firstParagraphContent = extractImageAndCaption(paragraphs[0]);

          // Extract content from second paragraph
          const secondParagraphContent = paragraphs[1].replace('<p>', '');
		  
		          // Sanitize HTML content
        const sanitizedFirstParagraph = DOMPurify.sanitize(`${firstParagraphContent}`);
        const sanitizedSecondParagraph = DOMPurify.sanitize(`${secondParagraphContent}`);

          // Push content into the array
          contents.push({ firstParagraph: sanitizedFirstParagraph, secondParagraph: sanitizedSecondParagraph });
        }

        // Set the content in state
        setArticleContents(contents);
      } catch (error) {
        console.error('Error fetching article content:', error);
      }
    };

    fetchArticleContents();
  }, []);

  // Function to extract image and caption
  const extractImageAndCaption = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    let imageAndCaption = '<div style="display: flex;">'; // Flexbox styling

    // Extract the first image and caption
    const image = doc.querySelector('.headline img');
    const imageUrl = image ? image.getAttribute('src') : '';

    const caption = doc.querySelector('.headline p');
    //const captionText = caption ? caption.textContent.trim() : '';
	const captionText = caption ? '' : '';
	

    if (imageUrl) {
      imageAndCaption += `<img src="${imageUrl}" alt="Article Image" style="max-width: 100%; max-height: 200px;">`; // Limit image width and height
    }
    if (captionText) {
      imageAndCaption += `<p style="margin-right: 100px;">${captionText}</p>`; // Add margin between image and caption
    }

    imageAndCaption += '</div>';

    return imageAndCaption;
  };

  return (
    <div>
      {articleContents.map((article, index) => (
	  <div>
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>{article.firstParagraph && htmlParser(article.firstParagraph)}</div>
          <div>{article.secondParagraph && htmlParser(article.secondParagraph)}<a href={`/articles/${index + 1}`}>Read more</a></div>
		  <br /><br />
	 </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesIntro;

