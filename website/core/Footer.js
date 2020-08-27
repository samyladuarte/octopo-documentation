/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
	docUrl(doc) {
		const baseUrl = this.props.config.baseUrl;
		const docsUrl = this.props.config.docsUrl;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		return `${baseUrl}${docsPart}${doc}`;
	}

	render() {
		return (
			<footer className="nav-footer" id="footer">
				<section className="sitemap">
					<div className="footer-section footer-section-left">
						<h5>Aonde nos encontrar</h5>
						<a href="https://octopo.com.br">Website</a>

						<a href="https://www.linkedin.com/company/octopoapp/">Linkedin</a>
						<a href="https://www.facebook.com/octopo.com.br/">Facebook</a>
						<a href="https://www.instagram.com/octopo.app/">Instagram</a>
					</div>
					<div className="footer-separator footer-section-right" />
					<div className="footer-section">
						<h5>Contato</h5>
						<a href="mailto:contato@octopo.com.br" target="_blank" rel="noreferrer noopener">
							Email (contato@octopo.com.br)
						</a>
						<a href="https://wa.me/24974013997/" target="_blank" rel="noreferrer noopener">
							Whatsapp
						</a>
					</div>
				</section>

				<a href="https://octopo.com.br/" target="_blank" rel="noreferrer noopener" className="fbOpenSource">
					<img src={`${this.props.config.baseUrl}${this.props.config.footerIcon}`} alt="Octopo" width="170" />
				</a>
				{/* <section className="copyright">{this.props.config.copyright}</section> */}
			</footer>
		);
	}
}

module.exports = Footer;
