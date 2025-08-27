const events = require('events')
const emit = new events.EventEmitter()

emit.on('product:created', ({ sku, name, qty, threshold }) => {
    console.log(`🆕 Added ${sku} (${name}) qty=${qty}, low<=${threshold}`);
})

emit.on('error', ({ message }) => {
    console.log(`❌ ERROR: ${message}`);
})

emit.on('stock:changed', ({ sku, qty }) => {
    console.log(`🔢 ${sku} stock changed → ${qty}`);
})

emit.on('inventory:out', ({ sku }) => {
    console.log(`⛔ ${sku} OUT OF STOCK — stop selling`);
})

emit.on('inventory:low', ({ sku, qty, threshold }) => {
    console.log(`⚠️  ${sku} LOW STOCK (${qty}) ≤ threshold (${threshold}) — reorder soon`);
})

emit.on('restocked', ({ sku, qty }) => {
    console.log(`✅ ${sku} restocked → ${qty}`);
})

emit.on('inventory:ok', ({ sku, qty }) => {
    console.log(`🟢 ${sku} healthy stock → ${qty}`);
})

module.exports = emit
