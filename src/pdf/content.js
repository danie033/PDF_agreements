export const agreementMeta = {
  title: 'Dispatch Service Agreement',
  subtitle: 'Freight dispatch engagement for independent carriers',
  company: 'EZCARGO LOGISTICS LLC',
  tagline: 'Reliable dispatch. Powerful results.',
}

export const introParties = [
  'This Dispatch Service Agreement ("Agreement") is made and entered into as of __________ ("Effective Date"), by and between:',
  'EZCARGO LOGISTICS LLC, a dispatch service provider ("Dispatcher"),',
  'and',
  '________________________________________ ("Carrier"),',
]

export const carrierFields = [
  'MC Number: _______________________________',
  'USDOT Number: ____________________________',
]

export const closingIntro =
  'Collectively referred to as the "Parties."'

export const agreementSections = [
  {
    number: '01',
    title: 'Services Provided',
    body: [
      'Dispatcher agrees to provide professional freight dispatching services on behalf of Carrier, including but not limited to:',
    ],
    bullets: [
      'Sourcing and booking freight loads',
      'Negotiating rates with brokers and shippers',
      'Assisting with carrier packets and onboarding',
      'Providing route planning and load optimization',
      'Supporting paperwork such as rate confirmations, invoices, and BOL coordination',
      'Offering continuous communication and dispatch support',
    ],
    note: 'Dispatcher will act as an independent contractor and not as an employee, agent, or partner of the Carrier, except as authorized under a separate Power of Attorney (if applicable).',
  },
  {
    number: '02',
    title: 'Payment Terms',
    body: ['Carrier agrees to pay Dispatcher a dispatch service fee equal to:'],
    highlight: '______% of the gross revenue per load',
    secondaryHighlight: 'Flat Fee: $________ per load (if applicable)',
    bullets: [
      'Payment shall be made within ____ days of Carrier receiving payment from broker/shipper.',
      'Payments shall be made via: _______________________________.',
      'Dispatcher reserves the right to suspend services for non-payment.',
    ],
  },
  {
    number: '03',
    title: 'Carrier Responsibilities',
    body: ['Carrier agrees to:'],
    bullets: [
      'Maintain active and valid operating authority (MC & USDOT)',
      'Maintain required insurance coverage at all times',
      'Provide accurate and up-to-date documentation',
      'Communicate availability, location, and load status promptly',
      'Ensure timely pickup and delivery of all assigned loads',
      'Comply with all federal, state, and local regulations',
    ],
    note: 'Carrier retains full responsibility for drivers, equipment, safety compliance, and execution of transportation services.',
  },
  {
    number: '04',
    title: 'Dispatcher Responsibilities',
    body: ['Dispatcher agrees to:'],
    bullets: [
      'Act in the best interest of the Carrier to secure profitable loads',
      'Maintain professional communication with brokers and shippers',
      'Provide accurate load details and rate confirmations',
      'Assist with documentation and coordination',
      'Operate with transparency and integrity',
    ],
    note: 'Dispatcher does not guarantee load availability or specific revenue levels.',
  },
  {
    number: '05',
    title: 'Non-Circumvention / Non-Solicitation',
    body: [
      'Carrier agrees not to bypass, avoid, or circumvent Dispatcher to work directly with any broker, shipper, or client introduced by Dispatcher during the term of this Agreement and for a period of 12 months following termination.',
    ],
    note: 'Any violation of this clause will result in damages equal to the total lost commissions and may be subject to legal action.',
  },
  {
    number: '06',
    title: 'Term and Termination',
    body: [
      'This Agreement shall begin on the Effective Date and continue until terminated by either party.',
    ],
    bullets: [
      'Either party may terminate this Agreement with ___ days written notice.',
      'Immediate termination may occur in cases of breach, non-payment, fraud, or illegal activity.',
    ],
    calloutTitle: 'Upon termination',
    calloutItems: [
      'All outstanding payments must be settled.',
      'Non-circumvention clause remains in effect.',
    ],
  },
  {
    number: '07',
    title: 'Independent Contractor Status',
    body: ['Dispatcher is an independent contractor and is not responsible for:'],
    bullets: [
      'Cargo claims',
      'Insurance liabilities',
      'Accidents or damages',
      'Driver conduct',
    ],
    note: 'Carrier assumes full legal responsibility for all transportation operations.',
  },
  {
    number: '08',
    title: 'Limitation of Liability',
    body: ['Dispatcher shall not be held liable for:'],
    bullets: [
      'Load cancellations',
      'Broker non-payment',
      'Market fluctuations',
      'Delays outside of Dispatcher’s control',
    ],
  },
  {
    number: '09',
    title: 'Confidentiality',
    body: [
      'Both parties agree to keep all business, financial, and operational information confidential and not disclose it to third parties without written consent.',
    ],
  },
  {
    number: '10',
    title: 'Governing Law',
    body: [
      'This Agreement shall be governed by and interpreted in accordance with the laws of the State of __________________.',
    ],
  },
  {
    number: '11',
    title: 'Entire Agreement',
    body: [
      'This document constitutes the entire agreement between the Parties and supersedes any prior agreements or understandings.',
    ],
  },
  {
    number: '12',
    title: 'Signatures',
    body: [
      'IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first written above.',
    ],
  },
]

export const signatureBlocks = [
  {
    label: 'EZCARGO LOGISTICS LLC',
    lines: [
      'Signature: _______________________________',
      'Name: ___________________________________',
      'Title: ____________________________________',
      'Date: ____________________________________',
    ],
  },
  {
    label: 'CARRIER',
    lines: [
      'Company Name: ____________________________',
      'Signature: _______________________________',
      'Name: ___________________________________',
      'Title: ____________________________________',
      'Date: ____________________________________',
    ],
  },
]
