// Thanks to Jonathan Watt for this script
// See https://jwatt.org/svg/demos/scripting-across-embed.html


var svgdoc = null;
var svgwin = null;

function init()
{
  // FIRST WE TRY TO OBTAIN A REFERENCE TO THE SVG DOCUMENT.
  //
  // Mozilla with native SVG support and ASV running in IE both support the
  // GetSVGDocument interface for the <embed> object.
  //
  //   http://w3.org/TR/SVG11/struct.html#InterfaceGetSVGDocument
  //
  // Unfortunately ASV in IE doesn't allow us to check if the method
  // getSVGDocument() exists without calling it. Since calling a function that
  // doesn't exist will cause an error we must be prepared to catch an
  // exception.

  var embed = document.getElementById('challengesSVG');
    try {
      svgdoc = embed.getSVGDocument();
    }
    catch(exception) {
      alert('The GetSVGDocument interface is not supported');
    }
  // If the GetSVGDocument interface is supported then the global variable
  // svgdoc will now contain a reference to the SVG document. Otherwise it will
  // be null.
  //
  // NOW WE TRY TO OBTAIN A REFERENCE TO THE SVG DOCUMENT'S "window" OBJECT.
  //
  // The W3C does not provide a direct way to obtain the "window" object for
  // the SVG document from the <embed> element (obviously, since it's not a W3C
  // tag). The W3C way to access the SVG document's "window" object is via the
  // SVG document itself, using the defaultView attribute of the DocumentView
  // interface.
  //
  //   http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-DocumentView
  //
  // ASV in IE doesn't implement the W3C's DocumentView interface (yet), so we
  // also try to access the SVG document's "window" object using the non-W3C
  // standard properties 'window' and non-W3C standard function getWindow() on
  // the <embed> object. Again ASV doesn't allow us to check whether getWindow()
  // is supported, so we need to be ready to catch an exception if calling it
  // causes an error.

  if (svgdoc && svgdoc.defaultView)  // try the W3C standard way first
    svgwin = svgdoc.defaultView;
  else if (embed.window)
    svgwin = embed.window;
  else try {
    svgwin = embed.getWindow();
  }
  catch(exception) {
    alert('The DocumentView interface is not supported\r\n' +
          'Non-W3C methods of obtaining "window" also failed');
  }

  // If we failed to get a reference to the SVG document's "window" then svgwin
  // will still be null.
}
