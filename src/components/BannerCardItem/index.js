import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList, key} = props
  console.log(key)
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`box ${className}`}>
      <div>
        <h1 className="cardHeading">{headerText}</h1>
        <p className="cardParagraph">{description}</p>
        <button type="button" className="buttonStyle">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
