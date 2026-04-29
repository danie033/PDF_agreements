import { Text, View } from '@react-pdf/renderer'
import { pdfStyles } from '../theme'

export function PdfFooter() {
  return (
    <View style={pdfStyles.footer} fixed>
      <Text>EZCARGO LOGISTICS LLC</Text>
      <Text
        render={({ pageNumber, totalPages }) =>
          `Dispatch Service Agreement  |  ${pageNumber} / ${totalPages}`
        }
      />
    </View>
  )
}
