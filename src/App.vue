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
