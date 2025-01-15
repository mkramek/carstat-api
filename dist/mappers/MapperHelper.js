"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapResponseMeta = mapResponseMeta;
function mapResponseMeta(meta) {
    if (!meta) {
        return undefined;
    }
    return Object.assign(Object.assign({}, meta), { currentPage: meta.current_page, lastPage: meta.last_page, perPage: meta.per_page });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwcGVySGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21hcHBlcnMvTWFwcGVySGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMENBWUM7QUFaRCxTQUFnQixlQUFlLENBQzdCLElBQTZCO0lBRTdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDRCx1Q0FDSyxJQUFJLEtBQ1AsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFDdEI7QUFDSixDQUFDIn0=