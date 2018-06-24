if ('serviceWorker' in navigator) {
	//通过register来注册站点的sw，sw只是驻留在app内的一个文件，这个文件的url相对于origin，还有个scope参数，用来指定sw控制内容的子目录
	//sw工作在worker context，没有访问dom的权限
	//一个sw可以控制多个页面，每个页面不会有自己的单独的worker
	navigator.serviceWorker.register('/service_workers/sw.js', {scope: '/service_worker/'}).then(function (reg) {
		console.log('register succeeded.' + reg);
	}).catch(function (error) {
		console.log('register failed with' + error);
	})
}

