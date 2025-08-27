// --- Tiny in-memory "DB"
const emit = require('./events.js')

const db = {}; // { [sku]: { name, qty, threshold } }

// --- Core API (students finish the TODO emits)
function createProduct(sku, name, qty = 0, threshold = 2) {
    db[sku] = { name, qty, threshold };
    emit.emit('product:created', { sku, name, qty, threshold })
    // TODO: emit 'product:created' with { sku, name, qty, threshold }
}

function sell(sku, amount = 1) {
    const item = db[sku];
    if (!item) {
        let message = `No product ${sku}`
        emit.emit('error', { message })
        return
    }
    else if (amount <= 0) {
        let message = `Amount must be > 0`
        emit.emit('error', { message })
        return
    } else if (item.qty < amount) {
        let message = `Insufficient stock`
        emit.emit('error', { message })
        return
    }
    // if no item, emit 'error' with { message: `No product ${sku}` }
    // if amount <= 0, emit 'error' with { message: 'Amount must be > 0' }
    // if item.qty < amount, emit 'error' with { message: 'Insufficient stock' }

    item.qty -= amount;

    // TODO: always emit 'stock:changed' with { sku, qty: item.qty }
    emit.emit('stock:changed', { sku, qty: item.qty })
    // TODO: if qty === 0 -> emit 'inventory:out' with { sku }
    if (item.qty === 0) {
        emit.emit('inventory:out', { sku })
    } else if (item.qty <= item.threshold) {
        emit.emit('inventory:low', { sku, qty: item.qty, threshold: item.threshold })
    }
    // else if qty <= threshold -> emit 'inventory:low' with { sku, qty, threshold: item.threshold }
}

function restock(sku, amount = 1) {
    const item = db[sku];
    if (!item) {
        let message = `No product ${sku}`
        emit.emit('error', { message })
        return
    } else if (amount <= 0) {
        let message = `Amount must be > 0`
        emit.emit('error', { message })
        return
    }
    // if no item, emit 'error' with { message: `No product ${sku}` }
    // if amount <= 0, emit 'error' with { message: 'Amount must be > 0' }

    item.qty += amount;

    // TODO: emit 'restocked' with { sku, qty: item.qty }
    emit.emit('restocked', { sku, qty: item.qty })
    // If qty > threshold -> emit 'inventory:ok' with { sku, qty }
    if (item.qty > item.threshold) {
        emit.emit('inventory:ok', { sku, qty: item.qty })
    }
}

// --- Demo flow (expected output below after you implement emits)
createProduct('USB-C', 'USB-C Cable', 3, 2);
sell('USB-C', 1);  // qty 2 -> LOW
sell('USB-C', 2);  // qty 0 -> OUT
restock('USB-C', 5); // qty 5 -> RESTOCK + OK

/*
Expected (order may vary slightly):
🆕 Added USB-C (USB-C Cable) qty=3, low<=2
🔢 USB-C stock changed → 2
⚠️  USB-C LOW STOCK (2) ≤ threshold (2) — reorder soon
🔢 USB-C stock changed → 0
⛔ USB-C OUT OF STOCK — stop selling
✅ USB-C restocked → 5
🟢 USB-C healthy stock → 5
*/
