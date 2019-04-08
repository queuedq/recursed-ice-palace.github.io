import Link from 'next/link'
import Button from '../../components/Button'
import { version } from '../../config'

// const alertComingSoon = () => {
//   window.alert('Coming soon!')
// }

export default () => (
  <>
    Download the DLC {version} now:
    <br />
    (Auto installation is Windows only.)
    <div style={{textAlign: 'center', margin: '24px 0 48px 0'}}>
      <Link href="/static/downloads/TheIcePalace-Windows.zip">
        <Button>Auto Install</Button>
      </Link>
      <Link href="/static/downloads/TheIcePalace-Manual.zip">
        <Button>Manual Install</Button>
      </Link>
    </div>
  </>
)
