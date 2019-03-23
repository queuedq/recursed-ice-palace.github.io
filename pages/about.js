import MainLayout from '../layouts/MainLayout'
import Markdown from '../components/Markdown';
import About from '../contents/About.mdx'

export default () => (
  <MainLayout currentPage='About'>
    <Markdown>
      <About />
    </Markdown>
  </MainLayout>
)
