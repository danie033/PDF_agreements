import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import fullLogo from '../assets/ezcargo-logo.png'
import markLogo from '../assets/ezcargo-mark.png'
import {
  agreementMeta,
  agreementSections,
  carrierFields,
  closingIntro,
  introParties,
} from './content'
import { PdfFooter } from './components/PdfFooter'
import { PdfHeader } from './components/PdfHeader'
import { PdfSection } from './components/PdfSection'
import { SignatureSection } from './components/SignatureSection'
import { pdfStyles } from './theme'

const termsPageOneSections = agreementSections.slice(0, 6)
const termsPageTwoSections = agreementSections.slice(6, 11)

function CoverPage() {
  return (
    <Page size="LETTER" style={pdfStyles.coverPage} wrap={false}>
      <View style={pdfStyles.coverFrame}>
        <View style={pdfStyles.coverLogoWrap}>
          <Image src={fullLogo} style={pdfStyles.coverBrand} />
        </View>

        <View style={pdfStyles.coverTitleWrap}>
          <View style={pdfStyles.coverRule} />
          <Text style={pdfStyles.coverTitle}>{agreementMeta.title}</Text>
          <Text style={pdfStyles.coverSubtitle}>{agreementMeta.subtitle}</Text>
        </View>

        <View style={pdfStyles.coverSummaryBox}>
          {introParties.map((line) => (
            <Text key={line} style={pdfStyles.coverSummaryText}>
              {line}
            </Text>
          ))}

          {carrierFields.map((field) => (
            <Text key={field} style={pdfStyles.coverField}>
              {field}
            </Text>
          ))}

          <Text style={pdfStyles.coverSummaryText}>{closingIntro}</Text>
        </View>
      </View>
    </Page>
  )
}

function TermsPage({ sections }) {
  return (
    <Page size="LETTER" style={pdfStyles.page}>
      <PdfHeader markSrc={markLogo} title={agreementMeta.title} />

      {sections.map((section) => (
        <PdfSection key={section.number} section={section} />
      ))}

      <PdfFooter />
    </Page>
  )
}

function SignaturePage() {
  return (
    <Page size="LETTER" style={pdfStyles.page}>
      <PdfHeader markSrc={markLogo} title={agreementMeta.title} />

      <PdfSection section={agreementSections[11]} />
      <SignatureSection />

      <PdfFooter />
    </Page>
  )
}

export function EZCargoAgreementDocument() {
  return (
    <Document
      author="OpenAI Codex"
      creator="React + @react-pdf/renderer"
      title="EZCARGO Dispatch Service Agreement"
      subject="Dispatch service agreement template"
    >
      <CoverPage />
      <TermsPage sections={termsPageOneSections} />
      <TermsPage sections={termsPageTwoSections} />
      <SignaturePage />
    </Document>
  )
}
