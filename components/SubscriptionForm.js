import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import chroma from 'chroma-js'
import { palette } from '../config'

const action = 'https://queuedlab.us20.list-manage.com/subscribe/post?u=1ad46e8d8503e34118a3b3b2d&amp;id=af66b5bc1d'

const Form = ({ onSubmit, status, message }) => {
  const [email, setEmail] = useState('')
  const [steamId, setSteamId] = useState('')

  return (
    <div className="form">
      <label>
        <div>
          Email Address (Required)
        </div>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="your_email@example.com"
        />
      </label>
      <label>
        <div>
          Steam Profile Link or ID (Optional)
        </div>
        <input
          value={steamId}
          onChange={e => setSteamId(e.target.value)}
          type="text"
          placeholder="https://steamcommunity.com/id/your_steam_profile/"
        />
      </label>
      <div className="status">
        {status === "sending" && <div className="sending">Sending...</div>}
        {status === "error" && <div className="error" dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div className="success" dangerouslySetInnerHTML={{__html: message}}></div>}
      </div>
      <button onClick={() => onSubmit({
        EMAIL: email,
        STEAM_ID: steamId
      })}>
        Subscribe!
      </button>
      <style jsx>{`
        .form {
          margin: 16px 0;
          padding: 16px 16px;
          background-color: ${palette.ice.light}
        }
        label {
          display: block;
          margin: 0 0 16px 0;
          font-size: 20px;
          line-height: 24px;
          color: ${palette.ice.darkest};
        }
        input {
          width: 100%;
          margin-top: 4px;
          padding: 2px 4px;
          font-size: 24px;
          color: ${palette.ice.darkest};
          background-color: ${palette.white};
          border: 2px solid ${palette.gray.light};
          border-radius: 0;
          -webkit-appearance: none;
        }
        input::placeholder {
          font-size: 20px;
          color: ${palette.gray.light};
        }
        .status {
          font-size: 20px;
        }
        .sending {
          color: ${palette.gray.dark};
        }
        .error {
          color: ${palette.red};
        }
        .success {
          color: ${palette.green};
        }
        button {
          display: block;
          margin: 24px auto 8px auto;
          padding: 16px 32px;
          font-size: 24px;
          color: ${palette.ice.lighter};
          background-color: ${palette.ice.darkest};
        }
        button:hover {
          background-color: ${chroma(palette.ice.darkest).brighten(0.2)};
        }
        button:active {
          background-color: ${chroma(palette.ice.darkest).darken(0.2)};
        }
      `}</style>
    </div>
  )
}

export default () => (
  <MailchimpSubscribe
    url={action}
    render={({ subscribe, status, message }) => (
      <Form
        onSubmit={formData => subscribe(formData)}
        status={status}
        message={message}
      />
    )}
  />
)
