export function IframePage() {
  return (
    <>
      <div>
        <h2>Docx</h2>
        <iframe
          src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/manjarb/office-files-store/main/test-word-02.docx"
          width="800px"
          height="700px"
          frameBorder="0"
          name={Date.now()}
          title={Date.now()}>
        </iframe>

        <h2>Excel</h2>
        <iframe
          src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/manjarb/office-files-store/main/test-excel.xlsx"
          width="800px"
          height="700px"
          frameBorder="0"
          name={Date.now()}
          title={Date.now()}>
        </iframe>

        <h2>PPT</h2>
        <iframe
          src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/manjarb/office-files-store/main/test-small-ppt.pptx"
          width="800px"
          height="700px"
          frameBorder="0"
          name={Date.now()}
          title={Date.now()}>
        </iframe>
      </div>
    </>
  )
}
