import './AsideMenu.css'
function AsideMenu() {
  return (
    <div>
      <div className="asidenav">
        <div className="logo">
          <img src="/favicon.png" alt="" className="favicon" />
          <img src="/favicon02.png" alt="" className="favicon02" />
        </div>
        <div className="list">
          <ul>
            <li className='li'>
              <a href="#" className='link-aside'>
                <img src="/icon_li01.svg" alt="" className="li-icon" />
                <span className='li-el'>Dashboard</span>
                <img src="/chevron.svg" alt="" className="li-icon chevron01" />
              </a>
            </li>
            <li className='li'>
              <a href="#" className='link-aside'>
                <img src="/icon_li02.svg" alt="" className="li-icon" />
                <span className='li-el'>Product</span>
                <img src="/chevron.svg" alt="" className="li-icon chevron02" />
              </a>
            </li>
            <li className='li'>
              <a href="#" className='link-aside'>
                <img src="/user-square.svg" alt="" className="li-icon" />
                <span className='li-el'>Customers</span>
                <img src="/chevron.svg" alt="" className="li-icon chevron03" />
              </a>
            </li>
            <li className='li'>
              <a href="#" className='link-aside'>
                <img src="/icon_li04.svg" alt="" className="li-icon" />
                <span className='li-el'>Income</span>
                <img src="/chevron.svg" alt="" className="li-icon chevron04" />
              </a>
            </li>
            <li className='li'>
              <a href="#" className='link-aside'>
                <img src="/icon_li05.svg" alt="" className="li-icon" />
                <span className='li-el'>Promote</span>
                <img src="/chevron.svg" alt="" className="li-icon chevron05" />
              </a>
            </li>
            <li className='li'>
              <a href="#" className='link-aside'>
                <img src="/icon_li06.svg" alt="" className="li-icon" />
                <span className='li-el'>Help</span>
                <img src="/chevron.svg" alt="" className="li-icon chevron06" />
              </a>
            </li>
          </ul>
        </div>
        <div className="user">
          <img src="/userlogo.png" alt="" className="user-logo" />
          <span className="username">Evano</span>
          <p className="dolznost">Project Manager</p>
        </div>
      </div>
    </div>
  );
}
export default AsideMenu;
