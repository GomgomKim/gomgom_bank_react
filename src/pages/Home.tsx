import '../styles/home.scss';

function Home() {

  const getAuthData = (key: string) => {
    // console.log("location :", window.location);
    // console.log("location.search :", window.location.search);

    return new URLSearchParams(window.location.search).get(key);
  };

  return (
    <>
      <form method="get" action="https://testapi.openbanking.or.kr/oauth/2.0/authorize" target="_blank">
        <input type="hidden" name="response_type" value="code"/>
        <input type="hidden" name="client_id" value="eb821e42-3410-4dec-98f2-f2a8cc40af5d"/>
        <input type="hidden" name="redirect_uri" value="http://localhost:3000/home"/>
        <input type="hidden" name="scope" value="login inquiry transfer"/>
        <input type="hidden" name="state" value="b80BLsfigm9OokPTjy03elbJqRHOfGSY"/>
        <input type="hidden" name="auth_type" value="0"/>
        <input type="submit" value="인증"/>
        {/* 
        return 형식
          이용기관명=김기연&
          이용기관서비스명=서비스명입니다&
          동의종류=조회,%20출금&
          계좌주명=김기연&
          생년월일=19940923&
          이메일=dhflwlsjfzz@naver.com&
          개설은행=신한&
          계좌번호=110412477414&
          계좌별명=곰곰&
          서명시각=2022.11.23%2020:52:30&
          일회용토큰=99663176285bfce056a9d47e19f20ce5

          http://localhost:3000/home?code=ltBeOXuMWeMplzuImurlxc3GWZmdl2&scope=inquiry%20login%20transfer&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY
        */}
        {/* {console.log("code", getAuthData("code"))} */}
        {/* {console.log("scope", getAuthData("scope"))} */}
        {/* {console.log("state", getAuthData("state"))} */}
        {/* 
            code ltBeOXuMWeMplzuImurlxc3GWZmdl2
            scope inquiry login transfer
            state b80BLsfigm9OokPTjy03elbJqRHOfGSY
        */}
      </form>
      <div className="center">
        <img className="main-ico" src={'/images/bear.png'} alt='gom' />
        <h3 className="main-text">Gomgom Bank</h3>
      </div>
    </>
  );
}

export default Home;