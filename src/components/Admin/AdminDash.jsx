import { Link } from "react-router-dom";

const AdminDash = () => {
    return ( 
        <div className="page-wrapper text-center">
            <h2>Admin Dashboard</h2>
            <div className="card-back">
            <Link className="btn btn-primary m-3" to="/admin/add-pet">Add A Pet</Link>
            <Link className="btn btn-primary m-3" to="/admin/all-pets">See All Pets</Link>
            <Link className="btn btn-primary m-3" to="/admin/all-users">See All Users</Link>
            </div>
        </div>
     );
}
 
export default AdminDash;