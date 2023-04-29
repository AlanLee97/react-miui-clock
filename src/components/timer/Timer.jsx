import './style.scss'

export default function Timer(props = {}) {
  return (
    <div className="cpn--timer">
      <div className='clock-outline'>
        <div className='clock-inner'>00:00:00</div>
      </div>
    </div>
  )
}
