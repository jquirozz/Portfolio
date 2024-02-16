import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function IconLink ({ url, svg }) {
  return <Link to={url}>{svg}</Link>
}

export default IconLink
