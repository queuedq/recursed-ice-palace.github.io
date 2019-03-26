import MainLayout from '../layouts/MainLayout'
import Markdown from '../components/Markdown';
import Faq from '../contents/Faq'

export default () => (
  <MainLayout currentPage='FAQ'>
    <Markdown>
      <Faq />
    </Markdown>
  </MainLayout>
)
