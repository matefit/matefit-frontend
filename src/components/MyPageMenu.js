import React from 'react'
import illustGirlHoldingPhone from 'assets/img2/illust_05.png';
import 'styles/App.scss';

const MyPageMenu = ({ menu }) => (
  <div className="my-page-munu">
    <div className="my-page-menu-wrapper">
        <div className={`menu-element ${menu==="bookmark"?"selected":null}`}>
            <a>저장한 메이트</a>
        </div>
        <div className={`menu-element ${menu==="receive"?"selected":null}`}>
            <a>받은 요청</a>
        </div>
        <div className={`menu-element ${menu==="sent"?"selected":null}`}>
            <a>보낸 요청</a>
        </div>
        <div className={`menu-element ${menu==="matched"?"selected":null}`}>
            <a>매칭된 메이트</a>
        </div>
        <div className={`menu-element ${menu==="info"?"selected":null}`}>
            <a>내 정보 관리</a>
        </div>
    </div>
    <div className="illust">
        <img src={illustGirlHoldingPhone}/>
    </div>
  </div>
)

export default MyPageMenu