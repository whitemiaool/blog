<template>
    <div class="hello">
    </div>
</template>

  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
		  swih:false
      }
	},
	methods:{
		wheel(e) {
			if(e.deltaY>0) {
				this.swih = true
			} else {
				this.swih = false
			}
		}
	},
	mounted() {
		document.addEventListener('wheel',this.wheel)
	}
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .con {

  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>