const routerVarseConfig = { serverId: 591, active: true };

const routerVarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_591() {
    return routerVarseConfig.active ? "OK" : "ERR";
}

console.log("Module routerVarse loaded successfully.");