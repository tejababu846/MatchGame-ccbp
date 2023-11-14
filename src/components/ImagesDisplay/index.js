import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import './index.css'

const ImagesDisplay = props => {
  const {
    tabsList,
    imagesList,
    updateTabId,
    activeTabId,
    verifyImageMatch,
    activeBigImageDetails,
  } = props
  // console.log(imagesList)

  return (
    <div className="big-image-tab-buttons-image-list-container">
      <img
        src={activeBigImageDetails.imageUrl}
        className="big-image"
        alt="match"
      />
      <ul className="buttons-container">
        {tabsList.map(eachTab => (
          <TabItem
            tabDetails={eachTab}
            updateTabId={updateTabId}
            key={eachTab.tabId}
            isTabActive={eachTab.tabId === activeTabId}
          />
        ))}
      </ul>
      <ul className="all-images-container">
        {imagesList.map(eachImage => (
          <ImageItem
            imageDetails={eachImage}
            key={eachImage.id}
            verifyImageMatch={verifyImageMatch}
          />
        ))}
      </ul>
    </div>
  )
}

export default ImagesDisplay
