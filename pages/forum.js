import MainLayout from '../layouts/MainLayout'
import Markdown from '../components/Markdown'
import Forum from '../contents/Forum.mdx'

export default () => (
  <MainLayout currentPage='Forum'>
    <Markdown>
      <Forum />
    </Markdown>
  </MainLayout>
)
