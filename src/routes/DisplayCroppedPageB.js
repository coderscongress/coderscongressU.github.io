
import { Document, Page} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../App.css';
import '../App.scss';


const DisplayCroppedPageB = ({pageIndex,onDocumentLoadSuccess,pdfList}) => {
  return (
    <div style={{ display: 'flex', marginBottom: '5px' }}>
      <div style={{ marginRight: '5px' }}>
        <Document file={pdfList[pageIndex].pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={1}
            width={200}
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
      {/*<div>
        <p>{pdfList[pageIndex].comment}</p>
</div>*/}
    </div>
  );
};

export default DisplayCroppedPageB ;