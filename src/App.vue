<template>
	<div id="app" @scroll.native="scroll">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
textarea {
    height: 35px;
    width: calc(100% - 100px);
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    resize: none;
    padding: 5px 2px;
    line-height: 1.5;
    background: #f8f8f8;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

textarea:focus {
	border-color: #57a3f3;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
input{
	display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
}

input:focus {
	border-color: #57a3f3;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
#app {
	font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	padding-top: 52px;
	/* margin-top: 60px; */
}
* {
	margin: 0px;
	padding: 0px;
}
a {
    text-decoration: none;
    color: #1765b7;
}
body {
	background: #f6f6f6;
	font-size: 15px;
}
button {
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>
