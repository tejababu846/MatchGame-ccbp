import './index.css'

const ImageItem = props => {
  const {imageDetails, verifyImageMatch} = props
  const {id, thumbnailUrl} = imageDetails
  const onThumbnailClick = () => verifyImageMatch(id)
  return (
    <li onClick={onThumbnailClick} className="thumbnail-image-container">
      <button type="button" className="thumbnail-image-button">
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
