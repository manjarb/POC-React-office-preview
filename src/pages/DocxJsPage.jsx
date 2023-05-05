import axios from 'axios';
import { renderAsync } from 'docx-preview'

export function DocxJsPage() {
  const previewFile = async () => {
    const {data} = await axios.get("https://raw.githubusercontent.com/manjarb/office-files-store/main/test-word-02.docx", { responseType: 'blob' });
    console.log(data)
    const blob = new Blob([data], { type: 'application/octet-stream' });
    let container = document.getElementById("preview");
    renderAsync(blob, container)
  }

  return (
    <>
      <h2>DocxJs</h2>
      <button onClick={previewFile}>
        Preview
      </button>
      <div id="preview"></div>
    </>
  )
}
