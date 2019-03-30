import MainLayout from '../layouts/MainLayout'
import Markdown from '../components/Markdown';
import Downloads from '../contents/Downloads'

export default () => (
  <MainLayout currentPage='Downloads'>
    <Markdown>
      <Downloads />
    </Markdown>
  </MainLayout>
)
