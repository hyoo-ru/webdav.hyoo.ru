namespace $.$$ {

	export class $hyoo_webdav_demo extends $.$hyoo_webdav_demo {

		render() {
			// Ensure for webdav resource are created at server
			$mol_http.resource( this.uri_root() ).text()
			return super.render()
		}	
		
	}

}
