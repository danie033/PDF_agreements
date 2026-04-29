import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import './App.css'
import { EZCargoAgreementDocument } from './pdf/EZCargoAgreementDocument'

function DownloadButton() {
  return (
    <PDFDownloadLink
      document={<EZCargoAgreementDocument />}
      fileName="ezcargo-dispatch-service-agreement.pdf"
      className="downloadButton"
    >
      {({ loading }) => (loading ? 'Preparing PDF...' : 'Download Agreement PDF')}
    </PDFDownloadLink>
  )
}

function App() {
  return (
    <main className="appShell">
      <section className="introPanel">
        <div className="eyebrow">EZCARGO LOGISTICS LLC</div>
        <h1>Dispatch Service Agreement PDF</h1>
        <p className="lead">
          A premium, multi-page agreement layout built with reusable React PDF
          components for clean export, printing, and future template reuse.
        </p>

        <div className="actionRow">
          <DownloadButton />
          <span className="supportText">
            Uses <code>@react-pdf/renderer</code> with modular sections, fixed
            footers, and controlled page breaks.
          </span>
        </div>

        <div className="featureGrid">
          <article>
            <h2>Layout System</h2>
            <p>
              Cover page, structured legal sections, signature block, and
              reusable page furniture.
            </p>
          </article>
          <article>
            <h2>Visual Direction</h2>
            <p>
              Dark navy, crisp white, restrained accents, and disciplined
              whitespace inspired by high-end SaaS collateral.
            </p>
          </article>
          <article>
            <h2>Asset Usage</h2>
            <p>
              The full EZCARGO logo is reserved for the opening impression while
              the two-letter mark is reused as a subtle brand accent.
            </p>
          </article>
        </div>
      </section>

      <section className="previewPanel">
        <div className="previewFrame">
          <PDFViewer className="pdfViewer" showToolbar>
            <EZCargoAgreementDocument />
          </PDFViewer>
        </div>
      </section>
    </main>
  )
}

export default App
