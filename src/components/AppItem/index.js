// Write your code here

import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appId, appName, imageUrl, category} = appsList

  return (
    <li className="listOrders">
      <img className="image" src={imageUrl} alt="appName" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
