const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('pages_data.txt', 'utf-8');
const blocks = content.split('\n\n/');

blocks.forEach((block, index) => {
  if (!block.trim()) return;
  
  let pageContent = block;
  if (index === 0 && pageContent.startsWith('/')) {
    pageContent = pageContent.substring(1);
  }

  const lines = pageContent.split('\n').map(l => l.trim()).filter(l => l);
  
  const urlPath = lines[0];
  const titleLine = lines.find(l => l.startsWith('Title: '));
  const metaLine = lines.find(l => l.startsWith('Meta description: '));
  
  const title = titleLine ? titleLine.replace('Title: ', '') : '';
  const metaDesc = metaLine ? metaLine.replace('Meta description: ', '') : '';
  
  const h1Index = lines.findIndex(l => l === titleLine) + 2;
  const pageTitle = lines[h1Index];
  
  // Extract body
  let detailedDescription = [];
  let currentSection = 'body';
  
  let benefits = [];
  let process = [];
  let faqs = [];
  let rebatesItems = [];
  
  for (let i = h1Index + 1; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('Why choose VRJ:')) {
      currentSection = 'benefits';
      continue;
    } else if (line.startsWith('Process:')) {
      currentSection = 'process';
      continue;
    } else if (line.startsWith('Rebates & incentives:')) {
      currentSection = 'rebates';
      continue;
    } else if (line.startsWith('Rebates & incentives (current):')) {
      currentSection = 'rebates';
      continue;
    } else if (line.startsWith('Areas served:')) {
      currentSection = 'areas';
      continue;
    } else if (line.startsWith('Solar panel installation across Victoria (links to all 8 city pages):')) {
      currentSection = 'areas';
      continue;
    } else if (line.startsWith('FAQs:')) {
      currentSection = 'faqs';
      continue;
    } else if (line.startsWith('CTA:')) {
      currentSection = 'cta';
      continue;
    }
    
    if (currentSection === 'body') {
      detailedDescription.push(line);
    } else if (currentSection === 'benefits') {
      if (line.startsWith('●')) {
        benefits.push({ title: line.substring(1).trim(), description: line.substring(1).trim() });
      }
    } else if (currentSection === 'process') {
      if (line.match(/^\d+\./)) {
        process.push({ title: line.substring(line.indexOf('.') + 1).trim(), description: line.substring(line.indexOf('.') + 1).trim() });
      }
    } else if (currentSection === 'rebates') {
        rebatesItems.push(line);
    } else if (currentSection === 'areas') {
      detailedDescription.push('**Areas Served:** ' + line);
    } else if (currentSection === 'faqs') {
      if (line.startsWith('●')) {
        const qAndA = line.substring(1).trim();
        const qEnd = qAndA.indexOf('?');
        if (qEnd !== -1) {
          faqs.push({
            question: qAndA.substring(0, qEnd + 1),
            answer: qAndA.substring(qEnd + 1).trim()
          });
        }
      }
    }
  }

  // Generate tsx code
  const tsxCode = `import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${metaDesc.replace(/'/g, "\\'")}',
}

const serviceData = {
  icon: Sun,
  title: '${pageTitle.replace(/'/g, "\\'")}',
  subtitle: 'Solar Solutions',
  description: '${metaDesc.replace(/'/g, "\\'")}',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
${detailedDescription.map(p => `    '${p.replace(/'/g, "\\'")}',`).join('\n')}
  ],
  benefits: [
${benefits.map(b => `    {
      title: '${b.title.replace(/'/g, "\\'")}',
      description: '${b.description.replace(/'/g, "\\'")}',
    },`).join('\n')}
  ],
  process: [
${process.map(p => `    {
      title: '${p.title.replace(/'/g, "\\'")}',
      description: '${p.description.replace(/'/g, "\\'")}',
    },`).join('\n')}
  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
${rebatesItems.map(item => `      '${item.replace(/'/g, "\\'")}',`).join('\n')}
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
${faqs.map(faq => `    {
      question: '${faq.question.replace(/'/g, "\\'")}',
      answer: '${faq.answer.replace(/'/g, "\\'")}',
    },`).join('\n')}
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
`;

  // Write file
  const dirPath = path.join(__dirname, 'app', urlPath);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), tsxCode);
  console.log('Created: /' + urlPath);
});
