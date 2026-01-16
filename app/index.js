
function handleJoin(){
    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;
    const userPw2 = document.querySelector("input[name=userPw2]").value;
    const userNick = document.querySelector("input[name=userNick]").value;

    //id 검증 (소문자 및 숫자 허용, 4~8글자) 정규식체크
    const idOk = /^[a-z0-9]{4,8}$/.test(userId);
    if(!idOk){
        alert("아이디 확인바람");
        return false;}
    //pw 검증 (숫자허용 4~8글자)
    const pwOk1 = /^[0-9]{4,8}$/.test(userPw);
    const pwOk2 = userPw === userPw2;
    const pwOk = pwOk1 && pwOk2;

    if(!pwOk){
        alert("비밀번호 확인바람");
        return false;}
    //nick 검증 (한글만 2~4글자)
    const nickOk = /^[가-힣]{2,4}$/.test(userNick);
    if(!nickOk){
        alert("닉네임 확인바람");
        return false;}
}