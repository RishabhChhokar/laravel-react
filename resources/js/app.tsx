import "./bootstrap";
import ReactDOM from "react-dom/client";
import Table from "./components/ui/table/Table";
import { fakeData } from "./utils/fakeData";
function generateRows(row: any): Array<any> {
    return [
        row.name,
        row.age,
        `${row.address.street}, ${row.address.city}, ${row.address.state}`,
    ];
}

const App = () => {
    return (
        <div className="flex-col">
            <h1 className="text-center">React Table</h1>
            <Table
                head={fakeData.head}
                data={fakeData.data}
                generateRows={generateRows}
            />
        </div>
    );
};

// Get the root element
const rootElement = document.getElementById("app");

// Render the React app
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}
