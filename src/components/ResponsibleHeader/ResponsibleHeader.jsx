import SwipeableTemporaryDrawer from '../Sidebar/Sidebar'
import './ResponsibleHeader.css'
function ResponsibleHeader() {
  return (
    <header>
      <div className="logo">
        <img src="/favicon.png" alt="" className="favicon" />
        <SwipeableTemporaryDrawer />
      </div>
    </header>
  )
}
export default ResponsibleHeader