import MainLayout from '../layouts/MainLayout'
import Markdown from '../components/Markdown';
import Downloads from '../contents/Downloads.mdx'

export default () => (
  <MainLayout currentPage='Downloads'>
    <Markdown>
      <Downloads />
    </Markdown>
  </MainLayout>
)
