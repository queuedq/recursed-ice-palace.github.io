export default ({ name, email, steam, twitter }) => (
  <>
    {name}
    {' '}
    {email && (
      <a className="image-link" href={email} title={`${name}'s Email`}>
        <img width={32} height={32} src="/static/email.png" alt={`${name}'s Email`} />
      </a>
    )}
    {steam && (
      <a className="image-link" href={steam} title={`${name}'s Steam Profile`}>
        <img width={32} height={32} src="/static/steam.png" alt={`${name}'s Steam Profile`} />
      </a>
    )}
    {twitter && (
      <a className="image-link" href={twitter} title={`${name}'s Twitter`}>
        <img width={32} height={32} src="/static/twitter.png" alt={`${name}'s Twitter`} />
      </a>
    )}
    <style jsx>{`
      a {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 24px;
        top: 4px;
      }
      img {
        position: absolute;
        width: 32px;
        height: 32px;
        top: -4px;
      }
    `}</style>
  </>
)
