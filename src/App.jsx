import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const ConsultingPage = lazy(() => import('./pages/ConsultingPage'))
const PodcastPage = lazy(() => import('./pages/PodcastPage'))
const InnovationPage = lazy(() => import('./pages/InnovationPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'))

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-teal/20 border-t-teal rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-body flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="/podcast" element={<PodcastPage />} />
              <Route path="/innovation" element={<InnovationPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
