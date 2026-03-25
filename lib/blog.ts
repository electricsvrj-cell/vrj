export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image?: string
}

export const posts: BlogPost[] = [
  {
    slug: 'solar-rebates-australia-2024',
    title: 'Complete Guide to Solar Rebates in Australia 2024',
    excerpt: 'Everything you need to know about government incentives, STCs, and state-specific rebates to maximize your solar savings.',
    content: `
      <h2>The Landscape of Solar Rebates in 2024</h2>
      <p>As Australia continues its transition toward renewable energy, the government has introduced more robust incentives for homeowners and businesses alike. Navigating these rebates can be complex, but the potential savings are significant.</p>
      
      <h3>1. Small-scale Technology Certificates (STCs)</h3>
      <p>The main federal incentive is the STC scheme. When you install a solar system, you are granted a certain number of certificates based on the expected generation until 2030. These certificates can then be sold to recoup a portion of the installation cost—often several thousand dollars.</p>
      
      <h3>2. State-Specific Incentives</h3>
      <ul>
        <li><strong>Victoria:</strong> The Solar Homes Program offers rebates up to $1,400 and interest-free loans.</li>
        <li><strong>NSW:</strong> The Rebate for Solar program focuses on low-income earners and those currently receiving energy rebates.</li>
        <li><strong>Queensland:</strong> Various battery storage grants and low-interest loans are currently available.</li>
      </ul>

      <blockquote>"Government incentives remain the single most effective way to reduce the payback period of your solar investment."</blockquote>

      <h3>How to Apply</h3>
      <p>Most rebates are applied at the point of sale by your installer. This means the quote you receive from VRJ Electrics will already include these heavy discounts, making the transition to solar seamless and affordable.</p>
    `,
    author: 'VRJ Electrics Team',
    date: '15 Mar 2024',
    readTime: '8 min read',
    category: 'Rebates & Incentives',
    image: '/blog_rebates_guide_1774188404099.png'
  },
  {
    slug: 'best-solar-panels-australia',
    title: 'Best Solar Panels for Australian Conditions',
    excerpt: 'A comprehensive comparison of the top solar panel brands that perform best in Australia\'s unique climate.',
    content: `
      <h2>Ranking the Top Tier-1 Solar Panels</h2>
      <p>Australia's climate is one of the harshest in the world for solar equipment. From coastal salt spray to extreme outback heat, your panels need to be built to last. We've evaluated the top performers for 2024.</p>
      
      <h3>1. SunPower (Maxeon)</h3>
      <p>Widely regarded as the premium choice, SunPower panels offer the highest efficiency and the best temperature coefficient in the industry. Their 40-year warranty is a testament to their durability.</p>
      
      <h3>2. LG Solar</h3>
      <p>LG panels are known for their aesthetic appeal and consistent performance. While they command a premium price, their local support and long-standing reputation make them a safe bet for many Australian homes.</p>

      <img src="/blog_panels_comparison_1774188421210.png" alt="Solar Panel Comparison" style="border-radius: 1rem; margin: 2rem 0;" />

      <h3>3. Jinko & JA Solar</h3>
      <p>For those seeking high performance at a better price point, these Tier-1 manufacturers offer excellent value and are the backbone of many large-scale commercial installations.</p>
    `,
    author: 'James Wilson',
    date: '12 Mar 2024',
    readTime: '10 min read',
    category: 'Buying Guide',
    image: '/blog_panels_comparison_1774188421210.png'
  },
  {
    slug: 'solar-battery-worth-it',
    title: 'Is a Solar Battery Worth It in 2024?',
    excerpt: 'We break down the costs, benefits, and payback periods to help you decide if battery storage is right for you.',
    content: `
      <h2>The Rise of Energy Independence</h2>
      <p>With rising electricity prices and shrinking feed-in tariffs, many Australians are looking at battery storage to maximize their solar self-consumption. But are they worth the investment today?</p>
      
      <h3>Understanding the Economics</h3>
      <p>A typical solar battery costs between $8,000 and $15,000. To determine the ROI, you must weigh this against the amount you'll save by not drawing from the grid during peak evening hours.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Blackout Protection:</strong> Keep your essential loads running when the grid goes down.</li>
        <li><strong>Maximise ROI:</strong> Use the energy you generate instead of selling it back for a pittance.</li>
        <li><strong>Environmental Impact:</strong> Reduce your carbon footprint further by using stored clean energy at night.</li>
      </ul>

      <img src="/blog_battery_worth_it_1774188438896.png" alt="Solar Battery Benefits" style="border-radius: 1rem; margin: 2rem 0;" />

      <h3>The Payback Period</h3>
      <p>Currently, the payback period for a battery in Australia ranges from 7 to 10 years. As technology costs continue to fall and energy prices rise, this period is shrinking rapidly.</p>
    `,
    author: 'Emma Chen',
    date: '8 Mar 2024',
    readTime: '7 min read',
    category: 'Battery Storage',
    image: '/blog_battery_worth_it_1774188438896.png'
  },
]

export function getAllPosts(): BlogPost[] {
  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getRecentPosts(count: number = 3, currentSlug?: string): BlogPost[] {
  return posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, count)
}
