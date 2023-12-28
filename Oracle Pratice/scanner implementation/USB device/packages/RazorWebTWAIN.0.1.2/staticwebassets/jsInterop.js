// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

var dwtObject = null;
var sourceList = [];
var selectSources = null;

export function showPrompt(message) {
    return prompt(message, 'Type anything here');
}

export async function loadDWT(licenseKey) {
    await new Promise((resolve, reject) => {
        let pdfAddon = document.createElement('script');
        pdfAddon.type = 'text/javascript';
        pdfAddon.src = '_content/RazorWebTWAIN/dist/addon/dynamsoft.webtwain.addon.pdf.js';
        document.head.appendChild(pdfAddon);
        
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '_content/RazorWebTWAIN/dist/dynamsoft.webtwain.initiate.js';
        script.onload = () => {
            let config = document.createElement('script');
            config.type = 'text/javascript';
            config.src = '_content/RazorWebTWAIN/dist/dynamsoft.webtwain.config.js';
            config.onload = () => {
                Dynamsoft.DWT.ProductKey = licenseKey;
                Dynamsoft.DWT.ResourcesPath = "_content/RazorWebTWAIN/dist/";
                //Dynamsoft.DWT.ResourcesPath = "https://unpkg.com/dwt@18.1.1/dist/";
                resolve();
            }
            script.onerror = () => {
                resolve();
            }
            document.head.appendChild(config);
           
        }
        script.onerror = () => {
        }
        document.head.appendChild(script);
    });
}

export async function initContainer(containerId, width, height) {
    await new Promise((resolve, reject) => {
        Dynamsoft.DWT.CreateDWTObjectEx({ "WebTwainId": "container" }, (obj) => {
            dwtObject = obj;
            dwtObject.Viewer.bind(document.getElementById(containerId));
            dwtObject.Viewer.width = width;
            dwtObject.Viewer.height = height;
            dwtObject.Viewer.show();
            resolve();
        }, (errorString) => {
            console.log(errorString);
            resolve();
        });
    });
    
}

export async function acquireImage(jsonString) {
    await new Promise((resolve, reject) => {
        if (!dwtObject || sourceList.length == 0) {
            resolve();
            return;
        }

        if (selectSources) {
            dwtObject.SelectDeviceAsync(sourceList[selectSources.selectedIndex]).then(() => {

                return dwtObject.OpenSourceAsync()

            }).then(() => {

                return dwtObject.AcquireImageAsync(JSON.parse(jsonString))

            }).then(() => {

                if (dwtObject) {

                    dwtObject.CloseSource();

                }

                resolve();

            }).catch(

                (e) => {

                    console.error(e);
                    resolve();

                }

            )
        }
        else {
            resolve();
        }
    });
}

export async function getDevices(selectId) {
    
    await new Promise((resolve, reject) => {
        if (!dwtObject) {
            resolve();
            return;
        }
        
        dwtObject.GetDevicesAsync(Dynamsoft.DWT.EnumDWT_DeviceType.TWAINSCANNER | Dynamsoft.DWT.EnumDWT_DeviceType.ESCLSCANNER).then((sources) => {
            sourceList = sources;

            selectSources = document.getElementById(selectId);
            for (let i = 0; i < sources.length; i++) {
                let option = document.createElement("option");
                option.text = sources[i].displayName;
                option.value = i.toString();
                selectSources.add(option);
            }

            resolve();
        });
    });

}

export async function loadDocument() {

    await new Promise((resolve, reject) => {
        if (!dwtObject) {
            resolve();
            return;
        }

        dwtObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
        let ret = dwtObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL);
        resolve();
    });

}

export async function removeSelected() {

    await new Promise((resolve, reject) => {
        if (!dwtObject) {
            resolve();
            return;
        }

        dwtObject.RemoveImage(dwtObject.CurrentImageIndexInBuffer);
        resolve();
    });

}

export async function removeAll() {

    await new Promise((resolve, reject) => {
        if (!dwtObject) {
            resolve();
            return;
        }

        dwtObject.RemoveAllImages();
        resolve();
    });

}

export async function save(type, name) {

    await new Promise((resolve, reject) => {
        if (!dwtObject) {
            resolve();
            return;
        }

        if (type == 0) {
            if (dwtObject.GetImageBitDepth(dwtObject.CurrentImageIndexInBuffer) == 1)
                dwtObject.ConvertToGrayScale(dwtObject.CurrentImageIndexInBuffer);
            dwtObject.SaveAsJPEG(name + ".jpg", dwtObject.CurrentImageIndexInBuffer);
        }
        else if (type == 1)
            dwtObject.SaveAllAsMultiPageTIFF(name + ".tiff");
        else if (type == 2)
            dwtObject.SaveAllAsPDF(name + ".pdf");
        
        resolve();
    });

}