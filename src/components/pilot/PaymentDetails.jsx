
import Datetime from "react-datetime";



import AnnualPaymentDetails from "./payment-details/AnnualPaymentDetails";
import FacilitationPaymentDetails from "./payment-details/FacilitationPaymentDetails";
import BFMemberPaymentDetails from "./payment-details/BFMemberPaymentDetails";
import CollectivePaymentDetails from "./payment-details/CollectivePaymentDetails";
import GMCPaymentDetails from "./payment-details/GMCPaymentDetails";
import YearPicker from "./YearPicker";



const PaymentDetails = () => {
    return (
            <>

            <section className="mb-5">

                    <header className="mb-5">

                    <div>
                        <YearPicker />
                    </div>

                    <div className="card py-3">
                        <h4 className="text-uppercase text-success text-center"> Payment Status </h4>
                        <p className="text-center fw-semibold m-0"> For more details, kindly contact +91 6362366974 </p>
                    </div>
                    </header>

                    <div className="d-flex flex-column gap-4">
                       <AnnualPaymentDetails />
                        <FacilitationPaymentDetails />
                        <BFMemberPaymentDetails />
                        <CollectivePaymentDetails />
                        <GMCPaymentDetails />
                    </div>




            </section>

            </>
    );
}

export default PaymentDetails;
