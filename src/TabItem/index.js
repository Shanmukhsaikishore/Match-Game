import './index.css'

const TabItem = props => {
  const {tabDetails, currentTab, onClickTab} = props
  const {tabId, displayText} = tabDetails
  const className = currentTab === tabId ? 'highlight' : ''
  const tabChange = () => {
    onClickTab(tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${className}`}
        onClick={tabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
