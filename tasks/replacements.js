module.exports = {
	intemplate: [
    {
      // replaces: padding: value; with padding-top: value; padding-right: value; padding-bottom: value; padding-left: value
      pattern: /(padding:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'padding-top: $2; padding-right: $2; padding-bottom: $2; padding-left: $2;'
    },
    {
      // replaces: margin: value; with margin-top: value; margin-right: value; margin-bottom: value; margin-left: value
      pattern: /(margin:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'margin-top: $2; margin-right: $2; margin-bottom: $2; margin-left: $2;'
    },
    {
      // replaces: padding: value value; with padding-top: value; padding-right: value; padding-bottom: value; padding-left: value
      pattern: /(padding:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'padding-top: $2; padding-right: $7; padding-bottom: $2; padding-left: $7;'
    },
    {
      // replaces: margin: value value; with margin-top: value; margin-right: value; margin-bottom: value; margin-left: value
      pattern: /(margin:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'margin-top: $2; margin-right: $7; margin-bottom: $2; margin-left: $7;'
    },
    {
      // replaces: padding: v v v; with padding-top: value; padding-right: value; padding-bottom: value; padding-left: value
      pattern: /(padding:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'padding-top: $2; padding-right: $7; padding-bottom: $12; padding-left: $7;'
    },
    {
      // replaces: margin: v v v; with margin-top: value; margin-right: value; margin-bottom: value; margin-left: value
      pattern: /(margin:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'margin-top: $2; margin-right: $7; margin-bottom: $12; margin-left: $7;'
    },
    {
      // replaces: padding: v v v v; with padding-top: value; padding-right: value; padding-bottom: value; padding-left: value
      pattern: /(padding:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'padding-top: $2; padding-right: $7; padding-bottom: $12; padding-left: $17;'
    },
    {
      // replaces: margin: v v v v; with margin-top: value; margin-right: value; margin-bottom: value; margin-left: value
      pattern: /(margin:\s|padding:)(([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto)) (([0-9]+(px|em))|([0-9]+)|(auto));/g,
      replacement: 'margin-top: $2; margin-right: $7; margin-bottom: $12; margin-left: $17;'
    },
    {
      // replaces: border: values; with border-width: value; border-style: value; border-color: value
      pattern: /(border:\s|border:)([0-9]+px) (\X{4,6}) (#[A-Za-z0-9]{3,6})/g,
      replacement: 'border-width: $2; border-style: $3; border-color: $4;'
    },
		{
      pattern: /(images\/)/g,
      replacement: 'http://assets.mshanken.com/promo/images/'
    },
    {
      /* The following code is to remove width and max-with from ink css as Outlook and few other
       * emails app fails to render correctly. This quirk prove to be wrong in for those app
       * therefore it's not need but I placed only max-width in the body but only for desktop (see 
       * next replace lines. Keep the image sizes with-in the img tag (width - height)
       */
      pattern: /(\swidth: auto;)(\smax-width: 100%;)/g,
      replacement: ''
    },
    {
      pattern: /(table\[class="body"\] img {)/g,
      replacement: '$1\r    max-width: 100%;'
    },
    // Handling HTML special characters
    {
      pattern: / & /g,
      replacement:' &amp; '
    },
    {
      pattern: /–/g,
      replacement:'&#8211;'
    },
    {
      pattern: /—/g,
      replacement:'&#8212;'
    },
    {
      pattern: /•/g,
      replacement:'&#149;'
    },
    {
      pattern: /∑/g,
      replacement:'&middot;'
    },
    {
      pattern: /á/g,
      replacement:'&aacute;'
    },
    {
      pattern: /é/g,
      replacement:'&eacute;'
    },
    {
      pattern: /í/g,
      replacement:'&iacute;'
    },
    {
      pattern: /ó/g,
      replacement:'&oacute;'
    },
    {
      pattern: /ú/g,
      replacement:'&uacute'
    },
    {
      pattern: /ä/g,
      replacement:'&auml;'
    },
    {
      pattern: /ë/g,
      replacement:'&euml;'
    },
    {
      pattern: /ï/g,
      replacement:'&iuml;'
    },
    {
      pattern: /ö/g,
      replacement:'&ouml;'
    },
    {
      pattern: /ü/g,
      replacement:'&uuml;'
    },
    {
      pattern: /à/g,
      replacement:'&agrave;'
    },
    {
      pattern: /è/g,
      replacement:'&egrave;'
    },
    {
      pattern: /ì/g,
      replacement:'&igrave;'
    },
    {
      pattern: /ò/g,
      replacement:'&ograve;'
    },
    {
      pattern: /ù/g,
      replacement:'&ugrave;'
    },
    {
      pattern: /â/g,
      replacement:'&acirc;'
    },
    {
      pattern: /ê/g,
      replacement:'&ecirc;'
    },
    {
      pattern: /î/g,
      replacement:'&icirc;'
    },
    {
      pattern: /ô/g,
      replacement:'&ocirc;'
    },
    {
      pattern: /û/g,
      replacement:'&ucirc;'
    },
    {
      pattern: /ã/g,
      replacement:'&atilde;'
    },
    {
      pattern: /õ/g,
      replacement:'&otilde;'
    },
    {
      pattern: /ñ/g,
      replacement:'&ntilde;'
    },
    {
      pattern: /Á/g,
      replacement:'&Aacute;'
    },
    {
      pattern: /É/g,
      replacement:'&Eacute;'
    },
    {
      pattern: /Í/g,
      replacement:'&Iacute;'
    },
    {
      pattern: /Ó/g,
      replacement:'&Oacute;'
    },
    {
      pattern: /Ú/g,
      replacement:'&Uacute'
    },
    {
      pattern: /Ä/g,
      replacement:'&Auml;'
    },
    {
      pattern: /Ë/g,
      replacement:'&Euml;'
    },
    {
      pattern: /Ï/g,
      replacement:'&Iuml;'
    },
    {
      pattern: /Ö/g,
      replacement:'&Ouml;'
    },
    {
      pattern: /Ü/g,
      replacement:'&Uuml;'
    },
    {
      pattern: /À/g,
      replacement:'&Agrave;'
    },
    {
      pattern: /È/g,
      replacement:'&Egrave;'
    },
    {
      pattern: /Ì/g,
      replacement:'&Igrave;'
    },
    {
      pattern: /Ò/g,
      replacement:'&Ograve;'
    },
    {
      pattern: /Ù/g,
      replacement:'&Ugrave;'
    },
    {
      pattern: /Â/g,
      replacement:'&Acirc;'
    },
    {
      pattern: /Ê/g,
      replacement:'&Ecirc;'
    },
    {
      pattern: /Î/g,
      replacement:'&Icirc;'
    },
    {
      pattern: /Ô/g,
      replacement:'&Ocirc;'
    },
    {
      pattern: /Û/g,
      replacement:'&Ucirc;'
    },
    {
      pattern: /Ã/g,
      replacement:'&Atilde;'
    },
    {
      pattern: /Õ/g,
      replacement:'&Otilde;'
    },
    {
      pattern: /Ñ/g,
      replacement:'&Ntilde;'
    },
    {
      pattern: /å/g,
      replacement:'&aring;'
    },
    {
      pattern: /ð/g,
      replacement:'&eth;'
    },
    {
      pattern: /ç/g,
      replacement:'&ccedil;'
    },
    {
      pattern: /‘/g,
      replacement:'&#8216;'
    },
    {
      pattern: /’/g,
      replacement:'&#8217;'
    },
    {
      pattern: /“/g,
      replacement:'&#8220;'
    },
    {
      pattern: /”/g,
      replacement:'&#8221;'
    },
    {
      pattern: /…/g,
      replacement:'&#8230;'
    }
	]
};