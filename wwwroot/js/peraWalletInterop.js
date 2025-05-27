window.peraWalletInterop = {
    connect: async function () {
        if (!window.PeraWalletConnect) {
            throw "PeraWalletConnect SDK not loaded";
        }
        if (!window.peraWallet) {
            window.peraWallet = new window.PeraWalletConnect();
        }
        try {
            const accounts = await window.peraWallet.connect();
            return accounts;
        } catch (err) {
            return null;
        }
    },
    disconnect: async function () {
        if (window.peraWallet) {
            await window.peraWallet.disconnect();
        }
    }
};