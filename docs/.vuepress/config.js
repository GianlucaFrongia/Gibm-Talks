module.exports = {
	themeConfig: {
		sidebar: 'auto',
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Informationen',
				link: '/informationen/',
				items: [
					{
						text: 'Anforderungen',
						link: '/informationen/anforderungen'
					},
					{
						text: 'Vortrag',
						link: '/informationen/vortrag'
					}
				]
			},
			{
				text: 'Vorträge',
				link: '/vortraege/'
			},
		]
	}
}
