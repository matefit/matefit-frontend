import React from 'react'
import { Link } from 'react-router-dom'
import illustGirlHoldingPhone from 'assets/img2/illust_05.png';
import 'styles/App.scss';

const MyPageMenu = ({ menu }) => (
  <div className="my-page-munu">
    <div className="my-page-menu-wrapper">
        <div className={`menu-element ${menu==="bookmark"?"selected":null}`}>
            <Link to="/mypage/bookmark">저장한 메이트</Link>
        </div>
        <div className={`menu-element ${menu==="receive"?"selected":null}`}>
            <Link to="/mypage/receive">받은 요청</Link>
        </div>
        <div className={`menu-element ${menu==="sent"?"selected":null}`}>
            <Link to="/mypage/sent">보낸 요청</Link>
        </div>
        <div className={`menu-element ${menu==="matched"?"selected":null}`}>
            <Link to="/mypage/matched">매칭된 메이트</Link>
        </div>
        <div className={`menu-element ${menu==="info"?"selected":null}`}>
            <Link to="/mypage">내 정보 관리</Link>
        </div>
    </div>
    <div className="illust">
        <img src={illustGirlHoldingPhone} alt="" />
    </div>
  </div>
)

export default MyPageMenu