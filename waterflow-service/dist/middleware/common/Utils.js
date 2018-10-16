'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class WaterFlowUtils {
    constructor() {
        /**
         * Usando como base o valor de R$4,61 por 1.000 l, para consumo de 10.001 a 20.000 litros ao mês
         * Mais informações: https://lojavirtual.compesa.com.br:8443/gsan/exibirConsultarEstruturzaTarifariaPortalAction.do
         */
        this.valorLitro = 0.00461;
    }
    calculateCost(liters) {
        return liters * this.valorLitro;
    }
    randomInRange(min, max) {
        return Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
    }
    ;
}
exports.WaterFlowUtils = WaterFlowUtils;
//# sourceMappingURL=Utils.js.map