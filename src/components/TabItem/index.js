import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isTabActive} = props
  const {tabId, displayText} = tabDetails

  const onTabClick = () => updateTabId(tabId)

  const activeTabClassName = isTabActive ? 'active-tab' : ''
  const activeBtnClassName = isTabActive ? 'active-button' : ''

  return (
    <li className={`each-button-list-item ${activeTabClassName}`}>
      <button
        onClick={onTabClick}
        type="button"
        className={`tab-button ${activeBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
