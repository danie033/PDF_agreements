import { Text, View } from '@react-pdf/renderer'
import { pdfStyles } from '../theme'

function BulletList({ items }) {
  if (!items?.length) {
    return null
  }

  return (
    <View style={pdfStyles.bullets}>
      {items.map((item) => (
        <View key={item} style={pdfStyles.bulletRow}>
          <Text style={pdfStyles.bulletDot}>-</Text>
          <Text style={pdfStyles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

export function PdfSection({ section }) {
  return (
    <View style={pdfStyles.sectionCard} wrap={false}>
      <View style={pdfStyles.section}>
        <View style={pdfStyles.sectionHeader}>
          <Text style={pdfStyles.sectionNumber}>{section.number}</Text>
          <Text style={pdfStyles.sectionTitle}>{section.title}</Text>
        </View>

        {section.body?.map((paragraph) => (
          <Text key={paragraph} style={pdfStyles.paragraph}>
            {paragraph}
          </Text>
        ))}

        {section.highlight ? (
          <View style={pdfStyles.highlightBox}>
            <Text style={pdfStyles.highlightText}>{section.highlight}</Text>
            {section.secondaryHighlight ? (
              <Text style={pdfStyles.secondaryText}>
                {section.secondaryHighlight}
              </Text>
            ) : null}
          </View>
        ) : null}

        <BulletList items={section.bullets} />

        {section.calloutTitle ? (
          <View style={pdfStyles.calloutCard}>
            <Text style={pdfStyles.calloutTitle}>{section.calloutTitle}</Text>
            <BulletList items={section.calloutItems} />
          </View>
        ) : null}

        {section.note ? <Text style={pdfStyles.note}>{section.note}</Text> : null}
      </View>
    </View>
  )
}
