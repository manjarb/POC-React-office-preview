import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

export function FileViewerPage() {
  const onError = (e) => {
    console.log(e, 'error in file-viewer');
  }

  return (
    <>
      <h2>Docx</h2>
      <FileViewer
        fileType={'docx'}
        filePath={'https://raw.githubusercontent.com/manjarb/office-files-store/main/test-word-03.docx'}
        errorComponent={CustomErrorComponent}
        onError={onError} />
    </>
  )
}
