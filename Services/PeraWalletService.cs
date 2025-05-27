namespace AlgorandBlazorApp.Services;

using Microsoft.JSInterop;
using System.Threading.Tasks;

public class PeraWalletService
{
    private readonly IJSRuntime _js;

    public PeraWalletService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task<string[]?> ConnectAsync()
    {
        return await _js.InvokeAsync<string[]?>("peraWalletInterop.connect");
    }

    public async Task DisconnectAsync()
    {
        await _js.InvokeVoidAsync("peraWalletInterop.disconnect");
    }
}