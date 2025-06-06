/**
 * Find the lexicographically smallest equivalent string using Graph approach
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */

// Alternative implementation with cleaner separation of concerns
var smallestEquivalentStringGraphClean = function (s1, s2, baseStr) {
  // Build adjacency list graph
  function buildGraph(s1, s2) {
    const graph = new Map();

    for (let i = 0; i < s1.length; i++) {
      const char1 = s1[i];
      const char2 = s2[i];

      if (!graph.has(char1)) graph.set(char1, []);
      if (!graph.has(char2)) graph.set(char2, []);

      graph.get(char1).push(char2);
      graph.get(char2).push(char1);
    }

    return graph;
  }

  // Find all connected components using DFS
  function findConnectedComponents(graph) {
    const visited = new Set();
    const components = [];

    function dfs(node, component) {
      visited.add(node);
      component.push(node);

      for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, component);
        }
      }
    }

    // Process all nodes in the graph
    for (const node of graph.keys()) {
      if (!visited.has(node)) {
        const component = [];
        dfs(node, component);
        components.push(component);
      }
    }

    return components;
  }

  // Create mapping from each character to its group representative
  function createCharacterMapping(components) {
    const mapping = new Map();

    for (const component of components) {
      // Find lexicographically smallest character in component
      const representative = component.reduce((min, char) =>
        char < min ? char : min
      );

      // Map all characters to this representative
      for (const char of component) {
        mapping.set(char, representative);
      }
    }

    return mapping;
  }

  // Transform string using the mapping
  function transformString(str, mapping) {
    return str
      .split("")
      .map((char) => mapping.get(char) || char)
      .join("");
  }

  // Execute the algorithm
  const graph = buildGraph(s1, s2);
  const components = findConnectedComponents(graph);
  const mapping = createCharacterMapping(components);

  return transformString(baseStr, mapping);
};

// Test both implementations
console.log("=== Graph Solution Test ===");

console.log("\n=== Example 1 ===");
console.log('Input: s1="parker", s2="morris", baseStr="parser"');
console.log(
  "Output:",
  smallestEquivalentStringGraphClean("parker", "morris", "parser")
);
console.log('Expected: "makkek"');

console.log("\n=== Example 2 ===");
console.log('Input: s1="hello", s2="world", baseStr="hold"');
console.log(
  "Output:",
  smallestEquivalentStringGraphClean("hello", "world", "hold")
);
console.log('Expected: "hdld"');

console.log("\n=== Example 3 ===");
console.log('Input: s1="leetcode", s2="programs", baseStr="sourcecode"');
console.log(
  "Output:",
  smallestEquivalentStringGraphClean("leetcode", "programs", "sourcecode")
);
console.log('Expected: "aauaaaaada"');

console.log("\n=== Simple Example ===");
console.log('Input: s1="abc", s2="cde", baseStr="eed"');
console.log("Output:", smallestEquivalentStringGraphClean("abc", "cde", "eed"));
console.log('Expected: "aab"');
