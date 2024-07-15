import React, { useState, useEffect } from 'react';
import DisplayCroppedPageB from '../routes/DisplayCroppedPageB';
import { Document, Page, pdfjs } from 'react-pdf';
import { getDocument } from 'pdfjs-dist';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../App.css';
import '../App.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ThumbnailViewer = ({ pdfList }) => {
  const [numPages, setNumPages] = useState(null);
  const [textContents, setTextContents] = useState([]);
  const [toggledIndex, setToggledIndex] = useState(null);

  useEffect(() => {
    const fetchTextContents = async () => {
      const textContentsArray = [];
      for (const item of pdfList) {
        const pdf = await getDocument(item.pdfUrl).promise;
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        textContentsArray.push(textContent);
      }
      setTextContents(textContentsArray);
    };
    fetchTextContents();
  }, [pdfList]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleCrop = (index) => {
    setToggledIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const renderBlocksOfThree = () => {
    const blocks = [];
    for (let i = 0; i < pdfList.length; i += 3) {
      const block = pdfList.slice(i, i + 3).map((item, index) => {
        const currentIndex = i + index;
        return (
          <div key={index} style={{ margin: '5px' }}>
            <div style={{ display: 'flex', marginBottom: '5px' }}>
              <div style={{ marginRight: '5px' }}>
                <Document file={item.pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    pageNumber={1}
                    width={30}
                    customTextRenderer={({ pageIndex }) => {
                      if (pageIndex === 0) {
                        return null;
                      }
                      return undefined;
                    }}
                    customStyle={{ maxHeight: '100px', maxWidth: '100px', overflow: 'hidden' }}
                  />
                </Document>
              </div>
              <div>
                <p>{item.comment}</p>
              </div>
            </div>
            <button onClick={() => handleCrop(currentIndex)}>View Page</button>
            {toggledIndex === currentIndex && (
              <DisplayCroppedPageB
                pdfList={pdfList}
                onDocumentLoadSuccess={onDocumentLoadSuccess}
                pageIndex={currentIndex}
                textContent={textContents[currentIndex]}
              />
            )}
          </div>
        );
      });
      blocks.push(
        <div key={i} style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '5px' }}>
          {block}
        </div>
      );
    }
    return blocks;
  };

  return <div>{renderBlocksOfThree()}</div>;
};

export default ThumbnailViewer;
