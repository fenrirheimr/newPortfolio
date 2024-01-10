export function getFileTypeFromURL(url) {
  const extension = url && url.split(/[#?]/)[0].split('.').pop().trim()
  if (extension === 'mp4') {
    return `
    <video autobuffer="autobuffer" width="100%" autoplay="autoplay" loop="loop" playsinline="" muted="" preload="auto">
        <source src="${url}" type="video/mp4">
      </video>
    `
  }
  else {
    return `<img alt="" src="${url}" style="max-width: 100%;" />`
  }
}
