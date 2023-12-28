# Razor Web TWAIN
A Razor class library for [Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/). It allows you to add document scanning functionality to your Blazor applications.

## Dynamic Web TWAIN Version
v18.1

## Prerequisites
- Visual Studio 2022
- [Dynamic Web TWAIN license key](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt)

## Quick Start
1. Import the `RazorWebTWAIN` package in the `_Imports.razor` file:
    ```cs
    @using RazorWebTWAIN
    ```
2. Add the following code to your razor page:

    ```csharp
    @page "/"
    @inject IJSRuntime JSRuntime
    @using System.Text.Json;

    <h1> Dynamic Web TWAIN Sample</h1>
    <select id="sources"></select>
    <br />
    <button @onclick="AcquireImage">Scan Documents</button>
    <button @onclick="LoadDocument">Load Documents</button>
    <button @onclick="RemoveSelected">Remove Selected</button>
    <button @onclick="RemoveAll">Remove All</button>
    <button @onclick="Save">Download Documents</button>

    <div id="document-container"></div>

    @code {
        JsInterop jsInterop;
        protected override void OnInitialized()
        {
            jsInterop = new JsInterop(JSRuntime);
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await jsInterop.LoadDWT("LICENSE-KEY");
                await jsInterop.InitContainer("document-container", 640, 640);
                await jsInterop.GetDevices("sources");
            }
        }

        public async Task AcquireImage()
        {
            // https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#acquireimageasync
            var deviceConfiguration = new {
                IfShowUI = false,
                PixelType = PixelType.TWPT_RGB,
                Resolution = 300,
                IfFeederEnabled = true,
                IfDuplexEnabled = false,
                IfDisableSourceAfterAcquire = true,
                IfGetImageInfo = true,
                IfGetExtImageInfo = true,
                extendedImageInfoQueryLevel = 0
            };
            // serialize the object to a JSON string
            var jsonString = JsonSerializer.Serialize(deviceConfiguration);

            await jsInterop.AcquireImage(jsonString);

        }

        public async Task LoadDocument()
        {
            await jsInterop.LoadDocument();
        }

        public async Task RemoveSelected()
        {
            await jsInterop.RemoveSelected();
        }

        public async Task RemoveAll()
        {
            await jsInterop.RemoveAll();
        }

        public async Task Save()
        {
            await jsInterop.Save(ImageType.PDF, "test");
        }
    }

    ```

3. Run your project.

## Example
- [.NET MAUI Blazor](https://github.com/yushulx/Razor-Web-TWAIN/tree/main/example/MauiDocumentScanner)
    
    ![.NET MAUI Blazor: scan documents with Dynamic Web TWAIN](https://camo.githubusercontent.com/7ef7a507d341011a71fe687ac15bb0212b398c0f187db8df1672c784243b7f9c/68747470733a2f2f7777772e64796e616d736f66742e636f6d2f636f6465706f6f6c2f696d672f323032332f30342f646f746e65742d6d6175692d77696e646f77732d646f63756d656e742d7363616e6e65722e706e67)

- [Blazor WebAssembly](https://github.com/yushulx/Razor-Web-TWAIN/tree/main/example/web)

    ![Blazor WebAssembly: scan documents with Dynamic Web TWAIN](https://camo.githubusercontent.com/9118868842619b7454460ec606a18824b873e264237903b62bf5775095aba377/68747470733a2f2f7777772e64796e616d736f66742e636f6d2f636f6465706f6f6c2f696d672f323032332f30342f646f746e65742d626c617a6f722d7765622d646f63756d656e742d7363616e6e65722e706e67)