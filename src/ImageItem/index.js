import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageDetails
  const imageClicked = () => {
    onClickImage(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="image-button" onClick={imageClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
