<template>
	<div id="app" @scroll.native="scroll">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods:{
		scroll(e) {
			// console.log(e)
	}
  }
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
</style>
