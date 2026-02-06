export const metadata = {
  title: 'Doppel',
}
import Landing from '@/components/landingpage'
import About from '@/components/about'
import ContactForm from '@/components/contactform'
import Portfolio from '@/components/portfolio'

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Portfolio />
      <ContactForm />
    </>
  )
}
