export const convertImgToBase64 = (url, callback) => {
  let canvas = document.createElement("CANVAS");
  let ctx = canvas.getContext('2d');
  let img = new Image();
  let outputFormat = url.substring(url.lastIndexOf(".") + 1).toLowerCase();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/" + outputFormat);
    callback(dataURL.substring(dataURL.indexOf(",") + 1));
    canvas = null;
  }
  img.src = url;
}

export const convertLocalimgToBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => {
    callback(reader.result.substring(reader.result.indexOf(",") + 1));
  }
  reader.readAsDataURL(file);
}