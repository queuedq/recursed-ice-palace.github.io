import Button from '../../components/Button'

const alertComingSoon = () => {
  window.alert('Coming soon!')
}

export default () => (
  <>
    Download the DLC v1.0 now:
    <br />
    (Auto installation is Windows only.)
    <div style={{textAlign: 'center', margin: '24px 0 48px 0'}}>
        <Button onClick={alertComingSoon}>Auto Install</Button>
        <Button onClick={alertComingSoon}>Manual Install</Button>
    </div>
  </>
)
