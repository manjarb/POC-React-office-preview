import Preview from 'preview-office-docs'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <DocViewer documents={[{ uri: "https://qa-2.architrave-assets.com/api/documents/246417/download"} ]} pluginRenderers={DocViewerRenderers} />

      <Preview
        url='https://raw.githubusercontent.com/manjarb/office-files-store/main/test-word.docx'
          height='700px'
          width='800px'
        />

      <Preview
        url='https://qa-2.architrave-assets.com/api/documents/246417/download'
        height='700px'
        width='800px'
      />

      <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/manjarb/office-files-store/main/test-word.docx" width="800px" height="700px" frameborder="0">This is an embedded<a target="_blank" href="http://office.com" rel="noreferrer">Microsoft Office</a>document, powered by<a target="_blank" href="http://office.com/webapps" rel="noreferrer">Office Online</a></iframe>
    </div>
  );
}

export default App;
