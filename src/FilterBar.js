import FilterBar from './components/FilterBar';

function StudyMode({ breeds }) {
  const [filteredBreeds, setFilteredBreeds] = useState(breeds);
  
  const handleFilterChange = ({ coatType, group }) => {
    let filtered = [...breeds];
    
    if (coatType !== 'all') {
      filtered = filtered.filter(breed => breed.coatType === coatType);
    }
    
    if (group !== 'all') {
      filtered = filtered.filter(breed => breed.group === group);
    }
    
    setFilteredBreeds(filtered);
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
      {/* Your existing breed display code here, but using filteredBreeds instead of breeds */}
    </div>
  );
}