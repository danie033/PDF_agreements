import { Image, Text, View } from '@react-pdf/renderer'
import { pdfStyles } from '../theme'

export function PdfHeader({ markSrc, title }) {
  return (
    <View style={pdfStyles.header} fixed>
      <View style={pdfStyles.headerBrand}>
        <View style={pdfStyles.headerMarkWrap}>
          <Image src={markSrc} style={pdfStyles.headerMark} />
        </View>
        <View style={pdfStyles.headerTitleWrap}>
          <Text style={pdfStyles.headerCompany}>EZCARGO LOGISTICS LLC</Text>
          <Text style={pdfStyles.headerTitle}>{title}</Text>
        </View>
      </View>
      <Text style={pdfStyles.headerMeta}>Premium Dispatch Agreement</Text>
    </View>
  )
}
