// Write your code here

import './index.css'

const TabItem = props => {
  const {tabsList, onAppsView, isTrue} = props
  const {tabId, displayText} = tabsList

  const onApp = () => {
    onAppsView(tabId)
  }

  const classes = isTrue ? 'border' : ''

  return (
    <li className={`listOrder ${classes}`}>
      <button type="button" onClick={onApp} className="tab-name">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
