(function() {

  let removeBranding = (el) => {
    var querySelectorAllFunc;
    if (el != null) querySelectorAllFunc = v => el.querySelectorAll(v);
    else {
      querySelectorAllFunc = v => {
        if (!document.__shady_native_querySelectorAll)
          return document.querySelectorAll(v);
        else
          return document.__shady_native_querySelectorAll(v);
      };
    }
    for (var filter of ['https://goauthentik.io', 'https://unsplash.com']) {
      querySelectorAllFunc('[href^="' + filter + '"]')
        .forEach(v => v.parentElement.remove());
    }
  };

  let run = () => {
    removeBranding();
    window.addShadowRootListener(removeBranding);
  };

  if (document.readyState !== 'complete')
    window.addEventListener('load', run);
  if (document.readyState === 'complete')
    run();
    
})()