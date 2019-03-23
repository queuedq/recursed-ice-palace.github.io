import MainLayout from '../layouts/MainLayout'
import Home from '../contents/Home.mdx';
import Markdown from '../components/Markdown';

export default () => (
  <MainLayout currentPage='Home'>
    <Markdown>
      <Home />
    </Markdown>
  </MainLayout>
)
