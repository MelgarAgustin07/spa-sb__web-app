import './SocialNet.css'
import { Icon } from '..'

interface Props {
  title: string
  url: string
  faIcon: string
}

const SocialNet = ({ title, url, faIcon }: Props) => (
  <a
    className="cmp-social-net"
    title={title}
    href={url}
    target="_blank"
    rel="noopener"
  >
    <Icon faIcon={faIcon} />
  </a>
)

export default SocialNet
