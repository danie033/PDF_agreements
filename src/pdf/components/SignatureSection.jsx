import { Text, View } from '@react-pdf/renderer'
import { signatureBlocks } from '../content'
import { pdfStyles } from '../theme'

export function SignatureSection() {
  return (
    <View style={pdfStyles.signatureBlock} wrap={false}>
      <Text style={pdfStyles.signatureIntro}>
        IN WITNESS WHEREOF, the Parties have executed this Agreement as of the
        date first written above.
      </Text>

      <View style={pdfStyles.signatureGrid}>
        {signatureBlocks.map((block) => (
          <View key={block.label} style={pdfStyles.signatureCard}>
            <Text style={pdfStyles.signatureLabel}>{block.label}</Text>
            {block.lines.map((line) => (
              <Text key={line} style={pdfStyles.signatureLine}>
                {line}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}
