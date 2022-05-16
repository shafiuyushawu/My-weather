import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Form } from 'react-bootstrap';
import { CgSearchLoading } from 'react-icons/cg';
import { searchAndAddCity, applyFilter, removeFilter } from '../Redux/components/navigation/navigation'
import { useNavigate } from 'react-router-dom';
export default function Navigation() {
  const [cityToSearch, updateCityToSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateSearchValue = (event) => {
    updateCityToSearch(() => event.target.value)
  }
  const searchCity = () => {
    console.log(cityToSearch);
    dispatch(searchAndAddCity(cityToSearch, navigate));
  }
  const filter = (event) => {
    dispatch(applyFilter(event.target.value));
  }
  return (
    <div id="navigation">
      <Container>
        <div id="filter">
          <p>filter with category</p>
          <select name="category" id="category" onChange={filter}>
            <option value="All">All</option>
            <option value="My cities">My cities</option>
            <option value="Near by cities">Near by cities</option>
            <option value="Major cities">Major cities</option>
          </select>
        </div>
        <div id="search">
          <input type="text"
            placeholder="Search your city"
            onChange={updateSearchValue}
            value={cityToSearch} />
          <CgSearchLoading
            style={{ "transform": "translateX(-110%)" }}
            onClick={searchCity} />
        </div>
      </Container>
    </div>
  )
}