import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClientsSection from './ClientsSection.jsx'
import CommunitiesSection from './CommunitiesSection.jsx'
import SpendingYearsSection from './SpendingYearsSection.jsx'
import BusinessStatsSection from './BusinessStatsSection.jsx'
import FooterDesignSection from './FooterDesignSection.jsx'
import TestimonialSection from './TestimonialSection.jsx'
import BlogSection from './BlogSection.jsx'
import FooterSection from './FooterSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ClientsSection />
    <CommunitiesSection/>
    <SpendingYearsSection/>
    <BusinessStatsSection/>
    <FooterDesignSection/>
    <TestimonialSection/>
    <BlogSection/>
    <FooterSection/>
  </StrictMode>,
)
