
module.exports = function(RED) {
    "use strict";
    
    function mapeamentoNode(config) {
        RED.nodes.createNode(this,config);
        this.slot = config.slot
        this.labelPort1 = config.labelPort1;
        this.labelPort2 = config.labelPort2;
        this.labelPort3 = config.labelPort3;
        this.labelPort4 = config.labelPort4;
        this.labelPort5 = config.labelPort5;
        this.labelPort6 = config.labelPort6;
        this.labelPort7 = config.labelPort7;
        this.labelPort8 = config.labelPort8;
        this.labelPort9 = config.labelPort9;
        this.labelPort10 = config.labelPort10;
        this.labelPort11 = config.labelPort11;
        this.labelPort12 = config.labelPort12;
        this.labelPort13 = config.labelPort13;
        this.labelPort14 = config.labelPort14;
        this.labelPort15 = config.labelPort15;
        this.labelPort16 = config.labelPort16;
        this.labelPort17 = config.labelPort17;
        this.labelPort18 = config.labelPort18;
        this.labelPort19 = config.labelPort19;
        this.labelPort20 = config.labelPort20;
        this.labelPort21 = config.labelPort21;
        this.labelPort22 = config.labelPort22;
        this.labelPort23 = config.labelPort23;
        this.labelPort24 = config.labelPort24;
        this.labelPort25 = config.labelPort25;
        this.labelPort26 = config.labelPort26;
        this.labelPort27 = config.labelPort27;
        this.labelPort28 = config.labelPort28;
        this.labelPort29 = config.labelPort29;
        this.labelPort30 = config.labelPort30;
        this.labelPort31 = config.labelPort31;
        this.labelPort32 = config.labelPort32;
        this.labelPort33 = config.labelPort33;

        var globalContext = this.context().global;
        var map = globalContext.get("map");
        
        var communication_map = [
            { feat: `COMMUNICATION INSTANCE ${this.slot}`, pin: "", board: ""},
            
            { feat: "UART MAPPING", pin: "", board: ""},
            { feat: "UART1 - RX", pin: "PIN 10", board: `TP ${this.labelPort1}`},
            { feat: "UART1 - TX", pin: "PIN 9", board: `TP ${this.labelPort2}`},
            { feat: "UART2 - RX", pin: "PIN 8", board: `TP ${this.labelPort3}`},
            { feat: "UART2 - TX", pin: "PIN 7", board: `TP ${this.labelPort4}`},
            { feat: "AGND", pin: "PIN 2", board: `TP ${this.labelPort5}`},
            { feat: "UART3 - RX", pin: "PIN 6", board: `TP ${this.labelPort6}`},
            { feat: "UART3 - TX", pin: "PIN 5", board: `TP ${this.labelPort7}`},
            { feat: "UART4 - RX", pin: "PIN 4", board: `TP ${this.labelPort8}`},
            { feat: "UART4 - TX", pin: "PIN 3", board: `TP ${this.labelPort9}`},
            { feat: "AGND", pin: "PIN 1", board: `TP ${this.labelPort10}`},
            
            { feat: "SPI MAPPING", pin: "", board: ""},
            { feat: "3.3V_A", pin: "PIN 1", board: `TP ${this.labelPort11}`},
            { feat: "CS", pin: "PIN 2", board: `TP ${this.labelPort12}`},
            { feat: "SCK", pin: "PIN 3", board: `TP ${this.labelPort13}`},
            { feat: "MOSI", pin: "PIN 4", board: `TP ${this.labelPort14}`},
            { feat: "MISO", pin: "PIN 5", board: `TP ${this.labelPort15}`},
            { feat: "SDA", pin: "PIN 6", board: `TP ${this.labelPort16}`},
            { feat: "SCL", pin: "PIN 7", board: `TP ${this.labelPort17}`},
            { feat: "AGND", pin: "PIN 8", board: `TP ${this.labelPort18}`},

            { feat: "DB9 MAPPING", pin: "", board: ""},
            { feat: "RXD", pin: "PIN 2", board: `TP ${this.labelPort19}`},
            { feat: "CST", pin: "PIN 8", board: `TP ${this.labelPort20}`},
            { feat: "TXD", pin: "PIN 3", board: `TP ${this.labelPort21}`},
            { feat: "RTS", pin: "PIN 7", board: `TP ${this.labelPort22}`},
            { feat: "AGND", pin: "PIN 5", board: `TP ${this.labelPort23}`},

            { feat: "RJ11 MAPPING", pin: "", board: ""},
            { feat: "RS232 - TX", pin: "PIN 3", board: `TP ${this.labelPort24}`},
            { feat: "AGND", pin: "PIN 4", board: `TP ${this.labelPort25}`},
            { feat: "RS232 - RX", pin: "PIN 5", board: `TP ${this.labelPort26}`},

            { feat: "COM MAPPING", pin: "", board: ""},
            { feat: "UART_COM - 3.3V", pin: "PIN 1", board: `TP ${this.labelPort27}`},
            { feat: "UART_COM - RX", pin: "PIN 2", board: `TP ${this.labelPort28}`},
            { feat: "UART_COM - TX", pin: "PIN 3", board: `TP ${this.labelPort29}`},
            { feat: "AGND - TX", pin: "PIN 4", board: `TP ${this.labelPort30}`},

            { feat: "RS485 MAPPING", pin: "", board: ""},
            { feat: "RS485 - A", pin: "PIN 2", board: `TP ${this.labelPort31}`},
            { feat: "RS485 - B", pin: "PIN 1", board: `TP ${this.labelPort32}`},
            { feat: "AGND", pin: "PIN 3", board: `TP ${this.labelPort33}`}
        ];

        if(map){
            map.communication[this.slot - 1] = [];
            for (var row of communication_map){
                map.communication[this.slot - 1].push(row);
            }
        }

    }
    RED.nodes.registerType("communication-mapping",mapeamentoNode);
}
