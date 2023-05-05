import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef } from "react";

export function AprysePage() {
  const initWebViewer = async (url, viewer) => {
    await WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: url,
      },
      viewer.current,
    )
  }

  useEffect(() => {
    initWebViewer('https://raw.githubusercontent.com/manjarb/office-files-store/main/test-word-02.docx', wordViewer)
    initWebViewer('https://raw.githubusercontent.com/manjarb/office-files-store/main/test-excel.xlsx', excelViewer)
  }, []);

  const wordViewer = useRef(null);
  const excelViewer = useRef(null);

  return (
    <div>
      <h1>AprysePage</h1>
      <div className="row">
        <div className="col-6">
          <h2>Word</h2>
          <div className="webviewer" ref={wordViewer} style={{ height: "80vh", width: '100%' }}></div>
        </div>
        <div className="col-6">
          <h2>Excel</h2>
          <div className="webviewer" ref={excelViewer} style={{ height: "80vh", width: '100%' }}></div>
        </div>
      </div>
    </div>
  )
}
