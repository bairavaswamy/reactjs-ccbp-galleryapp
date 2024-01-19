// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnail

  const onClickingThumbnailImg = () => {
    updateImage(id)
  }

  const imgElementClassName = isActive
    ? 'thumbnail-img active'
    : 'thumbnail-img'

  return (
    <li>
      <button type="button" onClick={onClickingThumbnailImg}>
        <img
          src={thumbnailUrl}
          className={imgElementClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
