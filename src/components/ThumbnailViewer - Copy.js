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
  const [toggledSetIndex, setToggledSetIndex] = useState(null);
  const itemsPerPage = 12; // Number of blocks to display per page
  const totalPages = Math.ceil(pdfList.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleCrop = (startIndex) => {
    setToggledSetIndex(prevIndex => (prevIndex === startIndex ? null : startIndex));
  };

  const renderBlocksOfThree = () => {
    const blocks = [];
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = Math.min(startIdx + itemsPerPage, pdfList.length);
    for (let i = startIdx; i < endIdx; i += 3) {
      const startIndex = i; // Index of the first item in the set of three
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
                <div><h6 style={{background: 'white', color: 'black', fontSize:'15px'}}>Title: {item.bookTitle}</h6></div>
				<div><b>Author:</b> {item.author}</div>
				<div><b>Description:</b> {item.description}</div>
              </div>
            </div>
            <button id="viewcover" style={{borderRadius:'15px', background: 'navy', color: 'white', fontSize:'20px', width: '120px', height: '30px'}} type="button" onClick={() => handleCrop(startIndex)}>View Book</button>
            {toggledSetIndex === startIndex && (
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
        <div key={startIndex} style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '5px' }}>
          {block}
        </div>
      );
    }
    return blocks;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      const isCurrentPage = i === currentPage; // Check if this button represents the current page
      pagination.push(
       <button 
          id="page" 
          style={{
            borderRadius:'13px', 
            background: isCurrentPage ? 'navy' : 'black', // Set background color based on whether it's the current page
            color: isCurrentPage ? 'white' : 'white', // Set text color based on whether it's the current page
            fontSize:'10px', 
            width: '30px', 
            height: '30px'
          }} 
          type="button" 
          key={i} 
          onClick={() => handlePageChange(i)}
        >
          ->{i}
       </button>
      );
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {pagination}
      </div>
    );
};
  

  return (
    <div>
      {renderBlocksOfThree()}
      <div style={{ marginTop: '20px' }}>
        {renderPagination()}
      </div>
    </div>
  );
};

export default ThumbnailViewer;
