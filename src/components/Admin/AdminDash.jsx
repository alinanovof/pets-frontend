import { Link } from "react-router-dom";

const AdminDash = () => {
    return ( 
        <div className="page-wrapper text-center">
            <Link className="btn btn-primary m-3" to="/admin/add-pet">Add A Pet</Link>
            <Link className="btn btn-primary m-3" to="/admin/all-pets">See All Pets</Link>
            <Link className="btn btn-primary m-3" to="/admin/my-pets">See All Users</Link>
        </div>
     );
}
 
export default AdminDash;