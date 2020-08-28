/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
	{
		caption: 'User1',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/image.jpg'.
		image: '/img/undraw_open_source.svg',
		infoLink: 'https://www.facebook.com',
		pinned: true
	}
];

const siteConfig = {
	title: 'Octopo Ajuda', // Title for your website.
	tagline: 'Manual de uso do app Android/iOS e Painel Web',
	url: 'https://danielfpedro.github.io', // Your website URL
	baseUrl: '/',
	projectName: 'octopo-documentation',
	organizationName: 'danielfpedro',
	cname: 'ajuda.octopo.com.br',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{ search: true },
		{doc: 'acessando-o-aplicativo', label: 'App Android/iOS'},
		{doc: 'painel-web-em-criacao', label: 'Painel Web'}
		// {page: 'https://google.com', label: 'Ajuda'},
		// {blog: true, label: 'Blog'},
	],

	// If you have users set above, you add it here:
	users,

	/* path to images for header/footer */
	headerIcon: 'img/logos/logo_navbar.png',
	footerIcon: 'img/logos/logo.png',
	favicon: 'img/favicon.ico',

	/* Colors for website */
	colors: {
		primaryColor: '#2319be',
		secondaryColor: '#251ea8'
	},

	/* Custom fonts for website */
	/*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Todos os direitos reservados © ${new Date().getFullYear()} Octopo`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default'
	},

	// Add custom scripts here that would be placed in <script> tags.
	// scripts: ['https://buttons.github.io/buttons.js'],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,
	disableHeaderTitle: true

	// Open Graph and Twitter card images.
	// ogImage: 'img/undraw_online.svg',
	// twitterImage: 'img/undraw_tweetstorm.svg',

	// For sites with a sizable amount of content, set collapsible to true.
	// Expand/collapse the links and subcategories under categories.
	// docsSideNavCollapsible: true,

	// Show documentation's last contributor's name.
	// enableUpdateBy: true,

	// Show documentation's last update time.
	// enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	// repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
