const stvrLocations = [
  {
    title: "Licensed STVR Property - Single Unit",
    address: "8611 Whitefield Ave, Savannah, GA 31406",
    license: "SVR-12345",
    lat: 31.987425494955875,
    lng: -81.10360683723707,
    vrboUrl: "https://www.vrbo.com/3799837",
    airbnbUrl: "https://www.airbnb.com/rooms/12345",
    viewComplaintsUrl: "./8611_whitefield_ave/index.html"
  },
  {
    title: "Multi-Unit Property",
    address: "1234 Bull Street, Savannah, GA 31401",
    lat: 32.0805,
    lng: -81.0912,
    units: [
      {
        unitName: "Unit A - Bull Street",
        license: "SVR-67890",
        vrboUrl: "https://www.vrbo.com/4500001",
        airbnbUrl: "https://www.airbnb.com/rooms/50001",
        viewComplaintsUrl: "./1234_bull_street_Unit_A/index.html"
      },
      {
        unitName: "Unit B - Bull Street",
        license: "SVR-67891",
        vrboUrl: "https://www.vrbo.com/4500002",
        airbnbUrl: "https://www.airbnb.com/rooms/50002",
        viewComplaintsUrl: "./1234_bull_street_Unit_B/index.html"
      },
      {
        unitName: "Unit C - Bull Street",
        license: "SVR-67892",
        vrboUrl: "https://www.vrbo.com/4500003",
        airbnbUrl: "https://www.airbnb.com/rooms/50003",
        viewComplaintsUrl: "./1234_bull_street_Unit_C/index.html"
      }
    ]
  },
  {
    title: "Another Multi-Unit Building",
    address: "5678 River Street, Savannah, GA 31401",
    lat: 32.0761,
    lng: -81.0912,
    units: [
      {
        unitName: "Riverside Loft",
        license: "SVR-11111",
        vrboUrl: "https://www.vrbo.com/4600001",
        airbnbUrl: "https://www.airbnb.com/rooms/60001",
        viewComplaintsUrl: "./5678_river_street_riverside_loft/index.html"
      },
      {
        unitName: "River View Apartment",
        license: "SVR-11112",
        vrboUrl: "https://www.vrbo.com/4600002",
        airbnbUrl: "https://www.airbnb.com/rooms/60002",
        viewComplaintsUrl: "./5678_river_street_river_view/index.html"
      }
    ]
  }
];