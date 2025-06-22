class HashMap {
  constructor(initialCapacity = 16) {
    this.capacity = initialCapacity;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
    this.loadFactorThreshold = 0.75;
  }

  // Simple hash function using djb2 algorithm
  _hash(key) {
    let hash = 5381;
    const str = String(key);
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
    }
    return Math.abs(hash) % this.capacity;
  }

  // Set a key-value pair
  set(key, value) {
    const index = this._hash(key);

    // If bucket is empty, create new chain
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Check if key already exists in chain
    const chain = this.buckets[index];
    for (let i = 0; i < chain.length; i++) {
      if (chain[i].key === key) {
        chain[i].value = value; // Update existing
        return;
      }
    }

    // Add new key-value pair
    chain.push({ key, value });
    this.size++;

    // Resize if load factor exceeded
    if (this.size / this.capacity > this.loadFactorThreshold) {
      this._resize();
    }
  }

  // Get value by key
  get(key) {
    const index = this._hash(key);
    const chain = this.buckets[index];

    if (!chain) return undefined;

    for (const pair of chain) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    return undefined;
  }

  // Check if key exists
  has(key) {
    return this.get(key) !== undefined;
  }

  // Delete a key-value pair
  delete(key) {
    const index = this._hash(key);
    const chain = this.buckets[index];

    if (!chain) return false;

    for (let i = 0; i < chain.length; i++) {
      if (chain[i].key === key) {
        chain.splice(i, 1);
        this.size--;

        // Remove empty chain
        if (chain.length === 0) {
          this.buckets[index] = null;
        }
        return true;
      }
    }
    return false;
  }

  // Get all keys
  keys() {
    const keys = [];
    for (const chain of this.buckets) {
      if (chain) {
        for (const pair of chain) {
          keys.push(pair.key);
        }
      }
    }
    return keys;
  }

  // Get all values
  values() {
    const values = [];
    for (const chain of this.buckets) {
      if (chain) {
        for (const pair of chain) {
          values.push(pair.value);
        }
      }
    }
    return values;
  }

  // Get all key-value pairs
  entries() {
    const entries = [];
    for (const chain of this.buckets) {
      if (chain) {
        for (const pair of chain) {
          entries.push([pair.key, pair.value]);
        }
      }
    }
    return entries;
  }

  // Clear all entries
  clear() {
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  // Resize hash table when load factor is too high
  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);

    // Rehash all existing entries
    for (const chain of oldBuckets) {
      if (chain) {
        for (const pair of chain) {
          this.set(pair.key, pair.value);
        }
      }
    }
  }

  // Get current load factor
  getLoadFactor() {
    return this.size / this.capacity;
  }

  // Get statistics for debugging
  getStats() {
    let chainLengths = [];
    let emptyBuckets = 0;

    for (const chain of this.buckets) {
      if (!chain) {
        emptyBuckets++;
      } else {
        chainLengths.push(chain.length);
      }
    }

    return {
      size: this.size,
      capacity: this.capacity,
      loadFactor: this.getLoadFactor(),
      emptyBuckets,
      avgChainLength:
        chainLengths.length > 0
          ? chainLengths.reduce((a, b) => a + b, 0) / chainLengths.length
          : 0,
      maxChainLength: chainLengths.length > 0 ? Math.max(...chainLengths) : 0,
    };
  }
}

// Usage examples and tests
const map = new HashMap();
// Basic operations
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

console.log("Get operations:");
console.log(map.get("name")); // 'John'
console.log(map.get("age")); // 30
console.log(map.get("unknown")); // undefined

console.log("\nHas operations:");
console.log(map.has("name")); // true
console.log(map.has("unknown")); // false

console.log("\nAll keys:", map.keys());
console.log("All values:", map.values());
console.log("All entries:", map.entries());

// Test with different data types
map.set(42, "number key");
map.set(true, "boolean key");
map.set(null, "null key");

console.log("\nDifferent key types:");
console.log(map.get(42)); // 'number key'
console.log(map.get(true)); // 'boolean key'
console.log(map.get(null)); // 'null key'

// Test deletion
console.log("\nBefore deletion:", map.size);
map.delete("age");
console.log("After deletion:", map.size);
console.log("Deleted key exists:", map.has("age")); // false

// Test collision handling and resizing
console.log("\nTesting with many entries:");
for (let i = 0; i < 50; i++) {
  map.set(`key${i}`, `value${i}`);
}

console.log("Stats after adding 50+ items:");
console.log(map.getStats());
