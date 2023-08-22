import Divider from '@/components/Divider'
import MainWrapper from '@/components/MainWrapper'
import About from '@/components/home/About'
import Form from '@/components/home/Form'
import Header from '@/components/home/Header'
import Projects from '@/components/home/Projects'
import Services from '@/components/home/Services'

export default function Home() {
  return (
    <MainWrapper>
      <div className='flex flex-col gap-6 p-6 md:h-screen'>
        <Header />
        <Divider />
        <div className='flex flex-col flex-grow max-h-full gap-6 h-max md:overflow-hidden md:flex-row'>
          <About />
          <Divider
            orientation='vertical'
            icons={false}
          />
          <div className='flex flex-col flex-1 gap-6'>
            <Projects />
            <Divider
              orientation='horizontal'
              icons={false}
            />
            <Services />
          </div>
          <Divider
            orientation='vertical'
            icons={false}
          />
          <Form />
        </div>
      </div>
    </MainWrapper>
  )
}
