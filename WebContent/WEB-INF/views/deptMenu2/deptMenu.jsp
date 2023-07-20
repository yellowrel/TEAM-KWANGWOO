<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../../../fixed/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Team KwangWoo</title>
<script type="text/javascript" src="./js/deptScript.js" defer="defer"></script>
</head>
<body>
	<br>
	<div align="center">
		<select id="selectDept" onchange="changeContent()">
			<option value="insertDept">부서 추가</option>
			<option value="deleteDept">부서 삭제</option>
			<option value="updateDept">부서 변경</option>
		</select>
		<button type="button" onclick="javascript:location.href ='totalDept.do'">부서확인</button>
	</div>
	<div id="content"></div>

	<div hidden="" id="insertDept">
		<form action="insertDept.do" method="post">
			<div align="center">
				부서이름<br> <input type="text" id="deptName" name="deptName"><br>
				부서번호<br> <input type="number" id="deptNo" name="deptNo">
				<div align="center">
					<br> <br> <input type="submit" value="추 가">&nbsp;&nbsp;
					<input type="reset" value="취 소">
				</div>
			</div>
		</form>
	</div>

	<div hidden="" id="deleteDept">
		<form action="deleteDept.do" method="post">
			<div align="center">
				부서이름<br> <input type="text" id="deptName" name="deptName"><br>
				부서번호<br> <input type="number" id="deptNo" name="deptNo">
				<div align="center">
					<br> <br> <input type="submit" value="삭 제">&nbsp;&nbsp;
					<input type="reset" value="취 소">
				</div>
			</div>
		</form>
	</div>

	<div hidden="" id="updateDept">
		<form action="updateDept.do" method="post">
			<div align="center">
				새로운 부서이름<br> <input type="text" id="deptName"
					name="deptName"><br>
				<div id="changeDept">
					부서번호<br> <input type="text" id="deptNo"
						name="deptNo">
				</div>
				<div align="center">
					<br> <br> <input type="submit" value="수 정">&nbsp;&nbsp;
					<input type="reset" value="취 소">
				</div>
			</div>
		</form>
	</div>
</body>
</html>
<%@ include file="../../../fixed/footer.jsp"%>