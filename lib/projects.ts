export interface Project {
  id: string
  title: string
  category: 'Solar' | 'Batteries' | 'Heat Pump' | 'Aircon'
  description: string
  location: string
  image: string
  date: string
}

export const projects: Project[] = [
  {
    id: 'sydney-residential-solar',
    title: 'Modern Residential Solar Array',
    category: 'Solar',
    description: 'A 10kW premium solar installation for a luxury home in Sydney, featuring high-efficiency panels and smart monitoring.',
    location: 'Sydney, NSW',
    image: '/hero_solar_residential_1774188229645.png',
    date: 'February 2024'
  },
  {
    id: 'melbourne-solar-farm',
    title: 'Commercial Solar Development',
    category: 'Solar',
    description: 'Large-scale commercial roof installation providing 100kW of clean energy to a major industrial facility.',
    location: 'Melbourne, VIC',
    image: '/project_solar_commercial_1774188332934.png',
    date: 'January 2024'
  },
  {
    id: 'brisbane-battery-backup',
    title: 'Complete Home Battery Storage',
    category: 'Batteries',
    description: 'Multi-unit battery storage installation providing 24/7 backup power and energy independence for a family home.',
    location: 'Brisbane, QLD',
    image: '/project_battery_industrial_1774188352006.png',
    date: 'March 2024'
  },
  {
    id: 'perth-heat-pump-upgrade',
    title: 'Commercial Heat Pump System',
    category: 'Heat Pump',
    description: 'High-efficiency heat pump installation for a commercial office building, reducing heating costs by 60%.',
    location: 'Perth, WA',
    image: '/project_heatpump_commercial_1774188370056.png',
    date: 'February 2024'
  },
  {
    id: 'adelaide-ducted-acf',
    title: 'Premium Multi-Zone Aircon',
    category: 'Aircon',
    description: 'A comprehensive ducted air conditioning solution for a large residential estate with smart climate control.',
    location: 'Adelaide, SA',
    image: '/project_aircon_ducted_1774188387043.png',
    date: 'January 2024'
  }
]

export function getAllProjects() {
  return projects
}

export function getProjectsByCategory(category: string) {
  return projects.filter(p => p.category === category)
}
