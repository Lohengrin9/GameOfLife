// Tiling patterns (GomJau-Hogg notation)
export const tilingRules = [
  // REGULAR
  "3/m30/r(h2)",
  "6/m30/r(h1)",
  "4/m45/r(h1)",

  // UNIFORM
  "12-3/m30/r(h3)",
  "6-4-3/m30/r(c2)",
  "12-6,4/m30/r(c2)",
  "6-3-6/m30/r(v4)",
  "8-4/m90/r(h4)",
  "4-3-3,0,0,0,4/r90/r(h2)",
  "4-3/m90/r(h2)",
  "6-3-3/r60/r(h5)",

  // 2 UNIFORM
  "3-4-3/m30/r(c3)",
  "6-4-3,3/m30/r(h1)",
  "6-4-3-3/m30/r(h5)",
  "6-4-3,4-6/m30/r(c4)",
  "12-4,6-3/m30/r(c3)",
  "12-3,4-3/m30/r(c3)",
  "12-0,3,3-0,0,4/m45/m(h1)",
  "3-6/m30/r(c2)",
  "6-3,3-3/m30/r(h1)",
  "6-3-3,3-3/r60/r(h8)",
  "6-3/m90/r(h1)",
  "6-3,6/m90/r(h3)",
  "6-3,4-6-3,4-6,4/m90/r(c6)",
  "6-3,4/m90/r(h4)",
  "4-3,3-4,3/r90/m(h3)",
  "4-3,3,3-4,3/r(c2)/r(h13)/r(h45)",
  "4-3/m(h4)/m(h3)/r(h2)",
  "4-4-3-3/m90/r(h3)",
  "4-3,4-3,3/m90/r(h3)",
  "4-3-3-3/m90/r(h7)/r(h5)",

  // 3-UNIFORM (2 VERTEX TYPES)
  "6-4-3,4-6,3/m30/r(c2)",
  "6-3-3/m30/r(v3)",
  "6-3-3-3-0,3/m30/r(v2)",
  "6-3-3,3-3-3-0,3/r60/r(h7)",
  "3-3,3-6/m90/r(h6)",
  "3-4-3,3/m30/m(h2)",
  "4-6,4-4,3,3/m90/r(h4)",
  "4-6,4-0,3,3/m/r(v1)/r(h25)",
  "4-6,4-0,3,3/m90/r(v1)",
  "6-3,0,3,3,3,3/r(h4)/r(v15)/r(v30)",
  "6-3,3-0,3/r/r(v1)/r(h12)",
  "4-4-4-3/m90/r(h4)",
  "4-4-3/r(h6)/m(h5)/r(h3)",
  "4-4-3-3-4/m90/r(h10)/r(c3)",
  "4-3,4-3,3-4/m90/r(h3)",
  "4-4,3,4-3,3,3-3,4-3-4/r/r(h17)/r(h18)",
  "4-3,3-0,4,3/r/r(h2)/r(h18)",
  "4-3,0,3-3-3/r(h5)/r(h19)/m(h18)",
  "4-3,0,3-3/r(h3)/r(h15)/m(h14)",
  "4-3-3-3-3-3/m90/r(h3)",
  "4-3-3-3-3/m90/r(h2)/m(h22)",
  
  // 3-UNIFORM (3 VERTEX TYPES)
  "12-6,4-3,3,4/m30/r(c5)",
  "12-3,4,6-3/m60/m(c5)",
  "6-4-3,12,3-3/m30/r(h2)",
  "6-4-3,3-12-0,0,0,3/m30/r(c2)",
  "12-4,3-6,3-0,0,4/m30/r(h11)",
  "12-3,4-3-3-3/m30/m(h9)",
  "12-3,4-3,3/m30/r(v1)",
  "6-3-3-4-3,3/m30/r(h10)",
  "3-4-3,4-6/m30/r(c5)",
  "6-4-3,4-3,3/m30/r(c5)",
  "6-4-3,3-4,3,3-3/r60/r(v5)",
  "3-4-3-3/m30/r(h6)",
  "12-4-3,3/m90/r(h6)",
  "6-4,3-3,0,4-6/m90/r(v5)",
  "6-4,3-3,3,4-0,0,6,3/m90/r(h17)/m(h1)",
  "4-3-3-0,4/r90/r(h3)",
  "4-4-3,4-6/m/r(c3)/r(h29)",
  "4-4,4-3,4-6/m90/r(c5)/r(v1)",
  "6-3,4-0,4,4-0,4/m90/r(h9)",
  "6-4,3,3-4/m(h4)/r/r(v15)",
  "4-6-3,0,3,3-0,0,4/m90/r(h4)",
  "4-6,4,3-0,3,3,0,6/m(h2)/m",
  "4-6,4-0,3,3/r(h2)/m90/r(c9)",
  "4-6,4-0,3,3-0,3,3/r/r(c1)/r(h17)",
  "6-6-3,3,3/r60/r(h2)",
  "6-6,6,3-3,3/m//r(h8)/r(h49)",
  "6-3-3/m/r(h3)/r(h15)",
  "3-6/r60/m(c2)",
  "6-3-3,3-3,3-0,3/r(h7)/r(h29)/r(h29)",
  "3-3,6-3/m/r(h6)/r(c6)",
  "6-3-3/m90/r(h2)",
  "3-3,3-3,6,3/m90/r(v1)/r(v15)",
  "3-3-6-0,3/r60/m(c1)",
  "3-3-6/r60/r(v4)",
  "4-4-3-3/m90/r(h7)/r(v1)",
  "4-4-3-3-3/m90/r(h9)/r(h3)",
  "4-4-3-3-3/m(h9)/r(h1)/r(v1)",
  "4-4-3-3-3/m(h9)/r(h1)/r(h3)"
];