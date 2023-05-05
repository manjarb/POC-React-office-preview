import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export function SheetJsPage() {
  const [__html, setHTML] = useState("");

  useEffect(() => {
    async function fetchTable() {
      /* Fetch file */
      const f = await fetch("https://raw.githubusercontent.com/manjarb/office-files-store/main/test-excel.xlsx");
      const ab = await f.arrayBuffer();

      /* Parse file */
      const wb = XLSX.read(ab);
      const ws = wb.Sheets[wb.SheetNames[0]];

      /* Generate HTML */
      setHTML(XLSX.utils.sheet_to_html(ws));
    }

    fetchTable();
  }, [])

  return (
    <>
      <h2>SheetJs</h2>
      <div dangerouslySetInnerHTML={{ __html }} />
    </>
  )
}
