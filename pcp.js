module.exports = function(RED) {
    function PCP(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = 'testing...';
            node.send(msg);
        });
    }
    RED.nodes.registerType("pcp", PCP);
}
