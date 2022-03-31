module.exports = {
	"transpileDependencies": [
		"vuetify"
	],
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true
		}
	}    
}

/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/