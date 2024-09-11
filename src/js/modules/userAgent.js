function showLinksForOS(linkIds) {
  linkIds.forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      element.style.display = "block";
    }
  });
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    showLinksForOS(["androidLink", "apkLink", "androidLinkAdv", "apkLinkAdv"]);
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    showLinksForOS(["iosLink", "iosLinkAdv"]);
    return "iOS";
  }

  showLinksForOS(["desktopLink", "desktopLinkAdv"]);
  return "unknown";
}

document.addEventListener("DOMContentLoaded", getMobileOperatingSystem);
