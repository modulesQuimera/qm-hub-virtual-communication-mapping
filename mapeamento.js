
module.exports = function(RED) {
    "use strict";
    
    function mapeamentoNode(config) {
        RED.nodes.createNode(this,config);
        this.labelPort1 = config.labelPort1;
        this.valuePort1 = config.valuePort1;
        this.labelPort2 = config.labelPort2;
        this.valuePort2 = config.valuePort2;
        this.labelPort3 = config.labelPort3;
        this.valuePort3 = config.valuePort3;
        this.labelPort4 = config.labelPort4;
        this.valuePort4 = config.valuePort4;
        this.labelPort5 = config.labelPort5;
        this.valuePort5 = config.valuePort5;
        this.labelPort6 = config.labelPort6;
        this.valuePort6 = config.valuePort6;
        this.labelPort7 = config.labelPort7;
        this.valuePort7 = config.valuePort7;
        this.labelPort8 = config.labelPort8;
        this.valuePort8 = config.valuePort8;
        this.labelPort9 = config.labelPort9;
        this.valuePort9 = config.valuePort9;
        this.labelPort10 = config.labelPort10;
        this.valuePort10 = config.valuePort10;
    }
    RED.nodes.registerType("mapeamento",mapeamentoNode);
}
