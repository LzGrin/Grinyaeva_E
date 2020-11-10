* {
	margin: 0;
	padding: 0;
}
.body {
	display: flex;
	width: 50%;
	margin: 50px;
	max-width: 720px;
}

.div {
	-webkit-box-pack: center;
	max-width: 720px;
}

.header {
	background-size: 50%;
	position: relative;
	-webkit-box-pack: center;
	max-width: 720px;
	padding-left: 150px;
}
.container {
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	background-color:  grey;
}
.popup {
	position: fixed;
	top: 40px;
	left: 50%;
	width: 400px;
	height: 600px;
	visibility: hidden;
	border: 1px solid;
	background: #fff;
	display: flex;
	/* align-items: center; */
	/* margin: 0 auto; */
	transform: translateX(-50%);
	viewport-fit: width 100px;

}
#loader_inner {
	display: flex;
	background-image: url(images/loader.gif);
	height: 60px;
	width: 60px;
	background-size: contain;
	visibility: hidden;
margin: auto;
	
}
#close {
	display: flex;
	/*position: fixed;*/
	align-items: flex-end;
	justify-content: flex-end;
	width: 20px;
	height: 20px;
}
.logo {

}
.phone {
	justify-content: flex-start;
	width: 100px;
	margin-top: 15px;
}
.profile {
	height: 20px;
	justify-content: flex-end;
}
#profileImg {
	height: 30px;
	width: 30px;
	justify-content: flex-end;
}
.cart {
	width: 100px;
	margin-top: 15px;
	justify-content: flex-end;
}
.mode {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 0px;
	margin-top: 0px;
}
#search {

}
.logo2 {
	align-items: center ;
}
.src {
	size: 30px;
}
.main {
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	background-color: red;

}
.main > div {
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	border: 1px solid #ccc;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.main > div:last-child {
	margin-right: 0;
}
.dropbtn {
	display: flex;

	background-color: red;
	border: none;
	font-size: 16px;
}
.dropdown {
	/*position: absolute;*/
	display: flex;

}
.dropdown-content {
	display: none;
	position: fixed;
	background-color: white;
	min-width: 250px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
}
.dropdown-content a {
	color: black;
	text-decoration: none;
	display: flex;
}
.dropdown-content a:hover {background-color: #ddd;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: red;}
.select {
}
.action {
	display: flex;
}
.pay {
	display: flex;
}
.contact {
	display: flex;
}
.advertising {
	display: flex;
	justify-content: center;
	margin: 0px;
	
}
#advertising {
	width: 600px;
	height: 400px;
	margin: 0px;
	text-align: center;

}
.arrow {
	color: red;
	font-size: 70px;
}
.arrow-left {
	
}
.arrow-right {
	
}
#description {
	text-align: center;


}
#recomendation {
	width: 100%;
	display: flex;
	justify-content: space-between;

}
.img {
	width: 250px; 
	height: 250px;
}
.p {
	
}
.nav {

	margin: 0 auto;
	width: 50%;
}
.owl-stage {
	transform: translate3d(-1240px, 0px, 0px);
	transition: all 0s ease 0s;
	width: 3720px;
}
.name img {
	width: 250px; 
	height: 250px;
}
.box {
	background-color: white;
}
.product {
	display: flex;
	justify-content: center;
	align-items: center;
}
@media (max-width: 1024px) {
	.body {
		flex: 0 0 33.3%;
	
	}
}

@media (max-width: 768px) {
	.body {
		flex: 0 0 100%;
	}
}

@media (max-width: 480px) {
	.product {
		flex: 0 0 150%;
		flex-direction: column;
	}
}
