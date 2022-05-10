import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const BASE_URL = "http://localhost:6001/plants"

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    fetch(BASE_URL)
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  const filteredPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
