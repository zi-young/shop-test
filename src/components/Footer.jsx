import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='foot-bg'>
            <div className="container">
                <div className="foot-addr">
                    <h3 className='foot-logo'><img src="https://zi-young.github.io/goodsShop/img/logo1.png" alt="logo" /></h3>
                    <address>서울 서초구 서초동 1153 우성빌딩</address>
                    <div className="copy">
                        &copy; 2023 Inc.All rights reserved.
                    </div>
                </div>
                <div className="foot-menu">
                    <ul>
                        <li><Link to="">고객문의</Link>
                            <ul>
                                <li><Link to="">회사소개</Link></li>
                                <li><Link to="">매장안내</Link></li>
                                <li><Link to="">인재채용</Link></li>
                                <li><Link to="">문의하기</Link></li>
                                <li><Link to="">배송조회</Link></li>
                                <li><Link to="">교환환불</Link></li>
                                <li><Link to="">품질보증</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">쇼핑하기</Link>
                            <ul>
                                <li><Link to="">헤이오더</Link></li>
                                <li><Link to="">HARU for Business</Link></li>
                                <li><Link to="">셀프 플래닝</Link></li>
                                <li><Link to="">모바일 앱</Link></li>
                                <li><Link to="">제품 사용 팁 / 가이드</Link></li>
                                <li><Link to="">결제 옵션</Link></li>
                                <li><Link to="">기프트 카드</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">서비스</Link>
                            <ul>
                                <li><Link to="">HARU 서비스</Link></li>
                                <li><Link to="">배송 서비스</Link></li>
                                <li><Link to="">조립 서비스</Link></li>
                                <li><Link to="">설치 서비스</Link></li>
                                <li><Link to="">주방 서비스</Link></li>
                                <li><Link to="">구매 상담 서비스</Link></li>
                                <li><Link to="">인테리어 디자인 서비스</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">HARU 이야기</Link>
                            <ul>
                                <li><Link to="">브랜드 소개</Link></li>
                                <li><Link to="">집에서의 생활</Link></li>
                                <li><Link to="">지속가능한 생활</Link></li>
                                <li><Link to="">뉴스룸</Link></li>
                                <li><Link to="">채용정보</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;