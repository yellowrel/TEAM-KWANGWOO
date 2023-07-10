function joinChkCustomer() {

    if (!document.joinCustomer.usrId.value) {
        document.joinCustomer.usrId.focus();
        alert("아이디를 입력하십시요.");
        return false;
    }

    if (!document.joinCustomer.usrPwd.value) {
        alert("비밀번호를 입력하십시요.");
        document.joinCustomer.usrPwd.focus();
        return false;
    }

    if (!document.joinCustomer.usrPwdCheck.value) {
        alert("비밀번호 확인을 입력하십시요.");
        document.joinCustomer.usrPwdCheck.focus();
        return false;
    }

    if (!document.joinCustomer.usrName.value) {
        alert("이름을 입력하십시요.");
        document.joinCustomer.usrName.focus();
        return false;
    }

    if (!document.joinCustomer.usrAddr.value) {
        alert("주소를 입력하십시요.");
        document.joinCustomer.usrAddr.focus();
        return false;
    }

    if (!document.joinCustomer.usrTel.value) {
        alert("전화번호를 입력하십시요.");
        document.joinCustomer.usrTel.focus();
        return false;
    }

    var usrId = document.joinCustomer.usrId.value;
    var pattern = /^[a-z0-9_-]{5,20}$/;

    if (!pattern.test(usrId)) {
        alert("아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
        document.joinCustomer.usrId.focus();
        return false;
    }

    var usrPwd = document.joinCustomer.usrPwd.value;
    var usrPwdCheck = document.joinCustomer.usrPwdCheck.value;
    var pattern2 = /^[a-zA-Z0-9!@#$%^&*()_+]{8,16}$/;

    if (!pattern2.test(usrPwd)) {
        alert("비밀번호는 비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용가능합니다");
        document.joinCustomer.usrPwd.focus();
        return false;
    }

    if (usrPwd != usrPwdCheck) {
        document.joinCustomer.usrPwdCheck.focus();
        alert("비밀번호확인이 비밀번호와 일치 하지 않습니다.");
        return false;
    }

    return true;

}

function joinChkEmp(){

    if (!document.joinEmp.usrId.value) {
        document.joinEmp.usrId.focus();
        alert("아이디를 입력하십시요.");
        return false;
    }

    if (!document.joinEmp.usrPwd.value) {
        alert("비밀번호를 입력하십시요.");
        document.joinEmp.usrPwd.focus();
        return false;
    }

    if (!document.joinEmp.usrPwdCheck.value) {
        alert("비밀번호 확인을 입력하십시요.");
        document.joinEmp.usrPwdCheck.focus();
        return false;
    }

    if (!document.joinEmp.usrName.value) {
        alert("이름을 입력하십시요.");
        document.joinEmp.usrName.focus();
        return false;
    }

    if (!document.joinEmp.usrAddr.value) {
        alert("주소를 입력하십시요.");
        document.joinEmp.usrAddr.focus();
        return false;
    }

    if (!document.joinEmp.usrTel.value) {
        alert("전화번호를 입력하십시요.");
        document.joinEmp.usrTel.focus();
        return false;
    }

    var usrId = document.joinEmp.usrId.value;
    var pattern = /^[a-z0-9_-]{5,20}$/;

    if (!pattern.test(usrId)) {
        alert("아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
        document.joinEmp.usrId.focus();
        return false;
    }

    var usrPwd = document.joinEmp.usrPwd.value;
    var usrPwdCheck = document.joinEmp.usrPwdCheck.value;
    var pattern2 = /^[a-zA-Z0-9!@#$%^&*()_+]{8,16}$/;

    if (!pattern2.test(usrPwd)) {
        alert("비밀번호는 비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용가능합니다");
        document.joinEmp.usrPwd.focus();
        return false;
    }

    if (usrPwd != usrPwdCheck) {
        document.joinEmp.usrPwdCheck.focus();
        alert("비밀번호확인이 비밀번호와 일치 하지 않습니다.");
        return false;
    }

    if (!document.joinEmp.companyCode.value) {
        alert("회사 식별번호를를 입력하십시요.");
        document.joinEmp.companyCode.focus();
        return false;
    }

    return true;

}