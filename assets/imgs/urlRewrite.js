RewriteUrl('/about/faqs.html#does-dwt-support-all-scanners', 'https://www.dynamsoft.com/web-twain/docs/indepth/faqs/general/does-dwt-support-all-scanners.html')

function RewriteUrl(matchUrl, targetUrl) {
  var currentUrl = window.location.pathname
  var currentHash = window.location.hash
  var matchPathName = ''
  if (matchUrl.indexOf('?') > 0) {
    matchPathName = matchUrl.split('?')[0]
  } else if (matchUrl.indexOf('.html') > 0) {
    matchPathName = matchUrl.split('.html')[0] + '.html'
  } else if (matchUrl.indexOf('#') > 0) {
    matchPathName = matchUrl.split('#')[0] + '.html'
  } else {
    matchPathName = matchUrl
  }
  
  var matchHash = matchUrl.split('#').length > 1 ? '#' + matchUrl.split('#')[1] : ''
  if (currentUrl == matchPathName && currentHash == matchHash) {
    window.location.href = targetUrl
  }
}