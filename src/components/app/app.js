import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: "Nikita Rybakov", salary: 800, increase: false},
        {name: "Danya Garunov", salary: 3000, increase: true},
        {name: "Igor Merkushev", salary: 5000, increase: true},
    ]

    return (
        <div className="app">

            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>
            
            <EmployeesList data={data}/>
            <EmployeesAddForm/>

        </div>
    );
}

export default App;