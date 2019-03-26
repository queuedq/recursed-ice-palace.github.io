import MainLayout from '../layouts/MainLayout'
import Carousel from '../components/Carousel';
import Markdown from '../components/Markdown';
import Home from '../contents/Home.mdx';

export default () => (
  <MainLayout currentPage='Home'>
    <Carousel />
    <Markdown>
      <Home />
    </Markdown>
  </MainLayout>
)
