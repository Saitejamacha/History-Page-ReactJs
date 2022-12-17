import './index.css'

// Sai Teja's Code

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <div className="bg-con">
        <div className="inner-div">
          <p className="time-para">{timeAccessed}</p>
          <img alt="domain logo" src={logoUrl} />
          <p className="title-para">{title}</p>
          <p className="domain">{domainUrl}</p>
          <button testid="delete" onClick={onDelete} className="btn">
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
