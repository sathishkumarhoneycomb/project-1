import RejectedApplicationsBF from "./RejectedApplicationsBF";
import UnapprovedApplicationsBF from "./UnapprovedApplicationsBF";
import UnapprovedApplicationsOrdinary from "./UnapprovedApplicationsOrdinary";

const AdminUnapprovedApplications = () => {
    return (
        <section className="d-flex flex-column gap-5">
            <UnapprovedApplicationsOrdinary/>
            <UnapprovedApplicationsBF />
            <RejectedApplicationsBF />

        </section>
    );
}

export default AdminUnapprovedApplications;
